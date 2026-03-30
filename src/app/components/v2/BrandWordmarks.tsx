import type { CSSProperties } from "react";

/** WebP-first wordmarks from `/public` — same on-screen size as legacy PNG imports, smaller transfer. */

export function NavbarSympleTaxLogo({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <picture>
      <source type="image/webp" srcSet="/navbar-logo.webp" />
      <img
        src="/navbar-logo.png"
        alt="SympleTax"
        width={320}
        height={71}
        className={className}
        style={style}
        decoding="async"
      />
    </picture>
  );
}

export function FooterSympleTaxLogo({ className }: { className?: string }) {
  return (
    <picture>
      <source type="image/webp" srcSet="/footer-logo.webp" />
      <img
        src="/footer-logo.png"
        alt="SympleTax"
        width={360}
        height={80}
        className={className}
        decoding="async"
      />
    </picture>
  );
}
