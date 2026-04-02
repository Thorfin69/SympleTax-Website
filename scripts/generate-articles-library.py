#!/usr/bin/env python3
"""Parse SympleTax Vol1/Vol2 Word exports and emit articlesLibrary.json."""
from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "app" / "data" / "articlesLibrary.json"

UNSPLASH_ROTATION = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=82",
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=82",
]


def slugify(s: str, max_len: int = 56) -> str:
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s[:max_len].rstrip("-")


def split_entries(text: str, vol: int) -> list[str]:
    if vol == 1:
        pat = re.compile(r"^(Blog \d+: .+|Case Study \d+)\s*$", re.M)
    else:
        pat = re.compile(r"^(Blog \d+: .+)\s*$", re.M)
    matches = list(pat.finditer(text))
    out = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        out.append(text[start:end].strip())
    return out


def is_bullet_line(line: str) -> bool:
    t = line.replace("\t", "").strip()
    return t.startswith("•") or t.startswith("-")


def parse_bullet(line: str) -> str | None:
    t = line.replace("\t", "").strip()
    if t.startswith("•"):
        return t[1:].strip()
    if t.startswith("-") and len(t) > 1 and t[1] in " \t":
        return t[1:].strip()
    return None


def looks_like_heading(line: str, next_line: str | None) -> bool:
    if not line or len(line) > 88:
        return False
    if line.endswith(".") and "?" not in line:
        return False
    if not next_line or len(next_line) < 40:
        return False
    # Avoid classifying Client: lines
    if line.lower().startswith("client:"):
        return False
    return True


def parse_body(body_lines: list[str]) -> list[dict]:
    blocks: list[dict] = []
    i = 0
    h2_counts: dict[str, int] = {}

    def h2_id(text: str) -> str:
        base = slugify(text) or "section"
        h2_counts[base] = h2_counts.get(base, 0) + 1
        if h2_counts[base] > 1:
            return f"{base}-{h2_counts[base]}"
        return base

    while i < len(body_lines):
        line = body_lines[i]
        if is_bullet_line(line):
            items: list[str] = []
            while i < len(body_lines) and is_bullet_line(body_lines[i]):
                item = parse_bullet(body_lines[i])
                if item:
                    items.append(item)
                i += 1
            if items:
                blocks.append({"type": "ul", "items": items})
            continue

        nxt = body_lines[i + 1] if i + 1 < len(body_lines) else None
        if looks_like_heading(line, nxt):
            blocks.append({"type": "h2", "id": h2_id(line), "text": line})
            i += 1
            continue

        paras = [line]
        i += 1
        while i < len(body_lines):
            l2 = body_lines[i]
            if is_bullet_line(l2):
                break
            nn = body_lines[i + 1] if i + 1 < len(body_lines) else None
            if looks_like_heading(l2, nn):
                break
            paras.append(l2)
            i += 1
        text = " ".join(paras).strip()
        if text:
            blocks.append({"type": "p", "text": text})

    blocks.append({"type": "cta"})
    return blocks


def infer_category(seo_line: str, title: str) -> str:
    low = (seo_line + " " + title).lower()
    if "offer in compromise" in low or "oic" in low:
        return "Offer in Compromise"
    if "installment" in low or "payment plan" in low:
        return "Offer in Compromise"
    if "lien" in low or "levy" in low or "garnish" in low:
        return "IRS Help"
    if "penalty" in low or "abatement" in low:
        return "Tax Tips"
    if "audit" in low or "appeal" in low or "cdp" in low or "hearing" in low:
        return "Legal Basics"
    if "business" in low or "payroll" in low or "corporate" in low:
        return "Tax Debt"
    if "case study" in low:
        return "IRS Help"
    return "Tax Tips"


def entry_to_article(block: str, vol: int, global_idx: int) -> dict:
    lines = [ln.strip() for ln in block.splitlines() if ln.strip()]
    if not lines:
        raise ValueError("empty block")

    first = lines[0]
    blog_m = re.match(r"^Blog (\d+): (.+)$", first)
    case_m = re.match(r"^Case Study (\d+)$", first)

    if blog_m:
        num, title = blog_m.group(1), blog_m.group(2)
        seo = lines[1] if len(lines) > 1 else ""
        body_lines = lines[2:]
        slug = f"lib-v{vol}-b{int(num):02d}-{slugify(title, 40)}"
        kind = "blog"
    elif case_m:
        num = case_m.group(1)
        title = lines[1] if len(lines) > 1 else f"Case Study {num}"
        seo = lines[3] if len(lines) > 3 else ""
        body_lines = lines[4:] if len(lines) > 4 else lines[2:]
        slug = f"lib-v1-cs{int(num):02d}-{slugify(title, 36)}"
        kind = "case-study"
    else:
        raise ValueError(f"unknown header: {first!r}")

    content = parse_body(body_lines)
    plain = " ".join(
        b.get("text", " ".join(b.get("items", [])))
        for b in content
        if b["type"] in ("p", "ul")
    )
    words = len(plain.split())
    read_m = max(3, round(words / 200))
    excerpt = plain[:280].rsplit(" ", 1)[0] + "…" if len(plain) > 280 else plain

    category = infer_category(seo, title)
    cover = UNSPLASH_ROTATION[global_idx % len(UNSPLASH_ROTATION)]

    return {
        "slug": slug,
        "title": title,
        "excerpt": excerpt,
        "category": category,
        "readTime": f"{read_m} min read",
        "date": "March 2026",
        "dateISO": "2026-03-01",
        "author": "SympleTax Team",
        "metaTitle": f"{title} | SympleTax",
        "metaDescription": excerpt[:158] + ("…" if len(excerpt) > 158 else ""),
        "relatedSlugs": ["offer-in-compromise", "installment-agreement", "irs-cp90-notice"],
        "content": content,
        "hiddenFromPublic": True,
        "noIndex": True,
        "libraryVolume": vol,
        "libraryKind": kind,
        "coverImage": cover,
    }


def main() -> None:
    v1_path = Path("/tmp/sympletax_vol1.txt")
    v2_path = Path("/tmp/sympletax_vol2.txt")
    if not v1_path.exists():
        raise SystemExit("Missing /tmp/sympletax_vol1.txt — export docx with textutil first.")
    v1 = v1_path.read_text(encoding="utf-8", errors="replace")
    v2 = v2_path.read_text(encoding="utf-8", errors="replace")

    articles: list[dict] = []
    g = 0
    for b in split_entries(v1, 1):
        articles.append(entry_to_article(b, 1, g))
        g += 1
    for b in split_entries(v2, 2):
        articles.append(entry_to_article(b, 2, g))
        g += 1

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(articles)} articles to {OUT}")


if __name__ == "__main__":
    main()
