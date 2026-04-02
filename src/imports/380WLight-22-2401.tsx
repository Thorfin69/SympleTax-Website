import svgPaths from "./svg-6xbzdeybj9";
import imgCubicPattern from "figma:asset/db2849537db1e5da6285894d368fb0a2b611340f.png";
import { imgGroup, imgGroup1, imgLogo, imgText, imgBottom, imgGroup2, imgGroup3, imgGroup4, imgGroup5, imgGroup6, imgGroup7, imgGroup8, imgGroup9, imgGroup10, imgGroup11, imgGroup12, imgGroup13, imgGroup14, imgGroup15, imgGroup16, imgGroup17, imgGroup18, imgGroup19 } from "./svg-1swox";

function Group() {
  return (
    <div className="absolute inset-[0_0.31%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[101.677px_30.051px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.676 30.05">
        <g id="Group">
          <path d={svgPaths.p289e4d00} fill="var(--fill-0, #00838F)" id="Vector" />
          <path d={svgPaths.p10babb50} fill="var(--fill-0, #2C3E50)" id="Vector_2" />
          <path d={svgPaths.pf15b400} fill="var(--fill-0, #F7F7F7)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.31%_0_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function KxYgOMwsW3RDjln2UiIpHtcgUocSvg() {
  return (
    <div className="h-[30.05px] overflow-clip relative shrink-0 w-[101.988px]" data-name="KXYgOMwsW3rDjln2UiIPHtcgUoc.svg">
      <ClipPathGroup />
    </div>
  );
}

function KxYgOMwsW3RDjln2UiIpHtcgUocSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[30.05px] items-center justify-center overflow-clip px-[0.006px] relative shrink-0 w-[102px]" data-name="KXYgOMwsW3rDjln2UiIPHtcgUoc.svg fill">
      <KxYgOMwsW3RDjln2UiIpHtcgUocSvg />
    </div>
  );
}

function LinkLogoDarkLogoCompany() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Link - Logo Dark → Logo Company">
      <KxYgOMwsW3RDjln2UiIpHtcgUocSvgFill />
    </div>
  );
}

function Container1() {
  return (
    <div className="aspect-[102/30.049999237060547] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <LinkLogoDarkLogoCompany />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[5.85%_1.23%_0.32%_0.34%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.075px_-0.91px] mask-size-[22px_15.583px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6535 14.6208">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3f70cb10} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Component8NkZaPyRlRhRbHmXsFjLvKfNqSvg() {
  return (
    <div className="h-[15.583px] overflow-clip relative shrink-0 w-[22px]" data-name="8nkZAPyRLRhRBHmXSFjLvKfNQ.svg">
      <ClipPathGroup1 />
    </div>
  );
}

function Component8NkZaPyRlRhRbHmXsFjLvKfNqSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[3.208px] relative shrink-0 size-[22px]" data-name="8nkZAPyRLRhRBHmXSFjLvKfNQ.svg fill">
      <Component8NkZaPyRlRhRbHmXsFjLvKfNqSvg />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Component8NkZaPyRlRhRbHmXsFjLvKfNqSvgFill />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function MobileMenuWrapp() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Mobile Menu Wrapp">
      <Container1 />
      <Icon />
    </div>
  );
}

function BgContainer() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="BG Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative w-full">
          <MobileMenuWrapp />
        </div>
      </div>
    </div>
  );
}

function NavPhoneBaseContainer() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Nav - Phone → Base Container">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[20px] relative w-full">
          <BgContainer />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 py-[15px] right-0 top-0" data-name="Container">
      <NavPhoneBaseContainer />
    </div>
  );
}

function Backdrop() {
  return <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />;
}

function LogoMaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-1/2 top-[-2px] w-[12px]" data-name="Logo:mask-group">
      <div className="-translate-x-1/2 absolute bg-black h-[20px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[12px_20px] top-0 w-[12px]" data-name="Logo" style={{ maskImage: `url('${imgLogo}')` }} />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Container">
      <LogoMaskGroup />
    </div>
  );
}

function TextMaskGroup() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Text:mask-group">
      <div className="-translate-y-1/2 absolute bg-black h-[10px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[97px_10px] top-1/2 w-[97px]" data-name="Text" style={{ maskImage: `url('${imgText}')` }} />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex gap-[10px] inset-[28.95%_7.5%] items-center" data-name="Content">
      <Container3 />
      <TextMaskGroup />
    </div>
  );
}

function LinkLight() {
  return (
    <div className="h-[38px] relative shrink-0 w-[140px]" data-name="Link - Light">
      <Backdrop />
      <Content />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] opacity-6 rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-4 rounded-[11px]" data-name="Border">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-[4408.72px] content-stretch flex items-start justify-end left-0 p-[20px] w-[380px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

function CubicPattern() {
  return (
    <div className="absolute h-[491.7px] left-0 right-0 top-0" data-name="Cubic Pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-91.76%] max-w-none top-0 w-[271.52%]" src={imgCubicPattern} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Contact us</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[86px]" data-name="Label">
      <Heading2 />
    </div>
  );
}

function Default() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131px]" data-name="Container">
      <Default />
    </div>
  );
}

function HeadingHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 1">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[50.6px] relative shrink-0 text-[#2c3e50] text-[46px] tracking-[-1.84px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Let’s сonnect `}</p>
        <p>and сollaborate</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[23.4px] relative shrink-0 text-[#636363] text-[18px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Have questions or need expert guidance? `}</p>
        <p className="mb-0">{`Reach out to us, and our team will be `}</p>
        <p className="mb-0">{`happy to assist you. Whether you're looking `}</p>
        <p className="mb-0">{`for advice, support, or collaboration, we’re `}</p>
        <p>just a message away</p>
      </div>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading />
      <Body />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[14.8px] items-start relative shrink-0 w-full" data-name="Label Wrapper">
      <Container4 />
      <TitleWrapper />
    </div>
  );
}

function JIvfg1Ofz4Ed2UeqGxn69W608EoSvg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="jIvfg1OFZ4ed2ueqGXN69w608eo.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="jIvfg1OFZ4ed2ueqGXN69w608eo.svg">
          <path d={svgPaths.p23575e00} id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
          <path d={svgPaths.p5724600} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function JIvfg1Ofz4Ed2UeqGxn69W608EoSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="jIvfg1OFZ4ed2ueqGXN69w608eo.svg fill">
      <JIvfg1Ofz4Ed2UeqGxn69W608EoSvg />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <JIvfg1Ofz4Ed2UeqGxn69W608EoSvgFill />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <Icon3 />
    </div>
  );
}

function CircleWrapper() {
  return (
    <div className="aspect-[32/32] bg-[#017984] content-stretch flex flex-col items-center justify-center py-[6px] relative rounded-[50px] shrink-0" data-name="Circle Wrapper">
      <Icon2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#636363] text-[18px] tracking-[-0.36px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`123 Finance Street, New York, NY `}</p>
        <p>10001</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[298px] relative shrink-0 w-[298px]" data-name="Body">
      <Heading3 />
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Phone">
      <CircleWrapper />
      <Body1 />
    </div>
  );
}

function Xn0NCjksrCttl6WquqxRuXPaTsSvg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="XN0NCjksrCTTL6WQUQXRuXPaTs.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="XN0NCjksrCTTL6WQUQXRuXPaTs.svg">
          <path d={svgPaths.p3699ef70} id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
          <path d={svgPaths.p14cea380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Xn0NCjksrCttl6WquqxRuXPaTsSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="XN0NCjksrCTTL6WQUQXRuXPaTs.svg fill">
      <Xn0NCjksrCttl6WquqxRuXPaTsSvg />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Xn0NCjksrCttl6WquqxRuXPaTsSvgFill />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function CircleWrapper1() {
  return (
    <div className="aspect-[32/32] bg-[#017984] content-stretch flex flex-col items-center justify-center py-[6px] relative rounded-[50px] shrink-0" data-name="Circle Wrapper">
      <Icon4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#636363] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">contact@example.com</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[298px] relative shrink-0 w-[298px]" data-name="Body">
      <Heading4 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Phone">
      <CircleWrapper1 />
      <Body2 />
    </div>
  );
}

function XjmWub1Zvzn1Lrw7GA8BiOcMeSvg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="xjmWUB1ZVZN1lrw7gA8BiOcME.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="xjmWUB1ZVZN1lrw7gA8BiOcME.svg">
          <path d={svgPaths.p2f72a000} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
          <path d={svgPaths.p357ba680} id="Vector_2" opacity="0.5" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
          <path d={svgPaths.p18e36300} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function XjmWub1Zvzn1Lrw7GA8BiOcMeSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="xjmWUB1ZVZN1lrw7gA8BiOcME.svg fill">
      <XjmWub1Zvzn1Lrw7GA8BiOcMeSvg />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <XjmWub1Zvzn1Lrw7GA8BiOcMeSvgFill />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <Icon7 />
    </div>
  );
}

function CircleWrapper2() {
  return (
    <div className="aspect-[32/32] bg-[#017984] content-stretch flex flex-col items-center justify-center py-[6px] relative rounded-[50px] shrink-0" data-name="Circle Wrapper">
      <Icon6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#636363] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">+1 (555) 123-4567</p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[298px] relative shrink-0 w-[298px]" data-name="Body">
      <Heading5 />
    </div>
  );
}

function Phone2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Phone">
      <CircleWrapper2 />
      <Body3 />
    </div>
  );
}

function ListItemsWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[380px] relative shrink-0 w-full" data-name="List Items Wrapper">
      <Phone />
      <Phone1 />
      <Phone2 />
    </div>
  );
}

function TextContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[39.3px] items-start relative shrink-0 w-full" data-name="Text Content Wrapper">
      <LabelWrapper />
      <ListItemsWrapper />
    </div>
  );
}

function HeadingHeading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading → Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[28px] text-center tracking-[-0.84px] whitespace-nowrap">
        <p className="leading-[30.8px]">Send us a message</p>
      </div>
    </div>
  );
}

function HeadingHeading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] tracking-[-0.28px] uppercase w-full">
        <p className="leading-[18.2px]">First name*</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] w-full">
        <p className="leading-[normal]">Jane</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[17.8px] pt-[16px] px-[18px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Input />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(176,176,176,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[148.8000030517578px] relative shrink-0 w-full" data-name="Label">
      <HeadingHeading3 />
      <Background />
    </div>
  );
}

function HeadingHeading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] tracking-[-0.28px] uppercase w-full">
        <p className="leading-[18.2px]">Last name</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] w-full">
        <p className="leading-[normal]">Smith</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[17.8px] pt-[16px] px-[18px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Input1 />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(176,176,176,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[148.8000030517578px] relative shrink-0 w-full" data-name="Label">
      <HeadingHeading4 />
      <Background1 />
    </div>
  );
}

function HeadingHeading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] tracking-[-0.28px] uppercase w-full">
        <p className="leading-[18.2px]">Phone*</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] w-full">
        <p className="leading-[normal]">+1 (555) 143-4552</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[17.8px] pt-[16px] px-[18px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Input2 />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(176,176,176,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[148.8000030517578px] relative shrink-0 w-full" data-name="Label">
      <HeadingHeading5 />
      <Background2 />
    </div>
  );
}

function HeadingHeading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] tracking-[-0.28px] uppercase w-full">
        <p className="leading-[18.2px]">Email</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] w-full">
        <p className="leading-[normal]">jane@framer.com</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[17.8px] pt-[16px] px-[18px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Input3 />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(176,176,176,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[148.8000030517578px] relative shrink-0 w-full" data-name="Label">
      <HeadingHeading6 />
      <Background3 />
    </div>
  );
}

function HeadingHeading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] tracking-[-0.28px] uppercase w-full">
        <p className="leading-[18.2px]">Message*</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[63.2px] content-stretch flex flex-col items-start left-[18px] pr-[122.03px] top-[15px]" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] whitespace-nowrap">
        <p className="leading-[20.8px]">Send your message</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[100px] min-h-[100px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Textarea">
      <Container9 />
      <div className="absolute bottom-[63.2px] left-[18px] top-[16px] w-[274px]" data-name="Rectangle" />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start min-h-[100px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Textarea />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(176,176,176,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[310px] relative shrink-0 w-full" data-name="Label">
      <HeadingHeading7 />
      <Background4 />
    </div>
  );
}

function LabelsWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Labels Wrapper">
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Submit</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function ButtonPhone() {
  return (
    <div className="bg-[#2c3e50] content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[103.47px] relative rounded-[50px] shrink-0" data-name="Button - Phone">
      <Container10 />
    </div>
  );
}

function FormContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="Form Content Wrapper">
      <LabelsWrapper />
      <ButtonPhone />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[15px] py-[30px] relative w-full">
          <HeadingHeading2 />
          <FormContentWrapper />
        </div>
      </div>
    </div>
  );
}

function BaseContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1330px] px-[20px] relative shrink-0 w-[380px]" data-name="Base Container">
      <TextContentWrapper />
      <Form />
    </div>
  );
}

function InnerBannerSection() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-start justify-center left-0 pb-[80px] pt-[140px] right-0 top-0" data-name="Inner Banner Section">
      <CubicPattern />
      <div className="absolute bg-gradient-to-b from-[rgba(247,247,247,0)] inset-0 to-[#f7f7f7] to-[42%]" data-name="BG Gradient" />
      <BaseContainer />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Our Trusted Partners</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]" data-name="Label">
      <Heading6 />
    </div>
  );
}

function Default1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Default">
      <div className="bg-[#f7f7f7] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_-0.01%_0_0.38%] mask-position-[-0.491px_0px,_-0.491px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}'), url('${imgGroup3}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.525 23.8532">
        <g id="Group">
          <path d={svgPaths.p28e6aad0} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p20e43580} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Component26MYyb03IIYajJ2Gr7Ox8VqSvg() {
  return (
    <div className="h-[23.853px] overflow-clip relative shrink-0 w-[130px]" data-name="26MYyb03iIYajJ2GR7Ox8VQ.svg">
      <ClipPathGroup2 />
    </div>
  );
}

function Component26MYyb03IIYajJ2Gr7Ox8VqSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[5.573px] relative shrink-0 w-[130px]" data-name="26MYyb03iIYajJ2GR7Ox8VQ.svg fill">
      <Component26MYyb03IIYajJ2Gr7Ox8VqSvg />
    </div>
  );
}

function LogoPartner1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <Component26MYyb03IIYajJ2Gr7Ox8VqSvgFill />
    </div>
  );
}

function LogoPartner() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[5px] overflow-clip right-[205px] top-[calc(50%-150px)]" data-name="Logo Partner">
      <LogoPartner1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[87.5px_35px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.5001 35">
        <g id="Group">
          <path d={svgPaths.p7fd8100} fill="var(--fill-0, #D7D9DC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Component9D15RJ5QQxiLm8SmXvAd1Oe8SE8Svg() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-[87.5px]" data-name="9D15rJ5qQxiLM8SMXvAD1oe8sE8.svg">
      <ClipPathGroup3 />
    </div>
  );
}

function Component9D15RJ5QQxiLm8SmXvAd1Oe8SE8SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip px-[21.25px] relative shrink-0 w-[130px]" data-name="9D15rJ5qQxiLM8SMXvAD1oe8sE8.svg fill">
      <Component9D15RJ5QQxiLm8SmXvAd1Oe8SE8Svg />
    </div>
  );
}

function LogoPartner3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <Component9D15RJ5QQxiLm8SmXvAd1Oe8SE8SvgFill />
    </div>
  );
}

function LogoPartner2() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[205px] overflow-clip right-[5px] top-[calc(50%-150px)]" data-name="Logo Partner">
      <LogoPartner3 />
    </div>
  );
}

function Hov6Q9Cuskj7JQhJqlIFuhroCqMSvg() {
  return (
    <div className="h-[35px] relative shrink-0 w-[122.5px]" data-name="HOV6Q9cuskj7jQhJqlIFuhroCqM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.5 35">
        <g id="HOV6Q9cuskj7jQhJqlIFuhroCqM.svg">
          <path d={svgPaths.p2b8ae10} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2140080} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Hov6Q9Cuskj7JQhJqlIFuhroCqMSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip px-[3.75px] relative shrink-0 w-[130px]" data-name="HOV6Q9cuskj7jQhJqlIFuhroCqM.svg fill">
      <Hov6Q9Cuskj7JQhJqlIFuhroCqMSvg />
    </div>
  );
}

function LogoPartner5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <Hov6Q9Cuskj7JQhJqlIFuhroCqMSvgFill />
    </div>
  );
}

function LogoPartner4() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[5px] overflow-clip right-[205px] top-[calc(50%-75px)]" data-name="Logo Partner">
      <LogoPartner5 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_0.44%_1.12%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[130px_29.138px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.434 28.8136">
        <g id="Group">
          <path d={svgPaths.p17ad0580} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3330bec0} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p3c9cbd00} fill="var(--fill-0, #D7D9DC)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1a263f00} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_4" />
          <path d={svgPaths.pd30b100} fill="var(--fill-0, #D7D9DC)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p3947a180} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_6" />
          <path d={svgPaths.p17c455a0} fill="var(--fill-0, #D7D9DC)" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p6cf4f80} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_8" />
          <path d={svgPaths.p1ef13470} fill="var(--fill-0, #D7D9DC)" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p28254b00} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_10" />
          <path d={svgPaths.pb028880} fill="var(--fill-0, #D7D9DC)" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p25d2ef00} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_12" />
          <path d={svgPaths.p2bd1c980} fill="var(--fill-0, #D7D9DC)" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p98e4130} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_14" />
          <path d={svgPaths.p2047c70} fill="var(--fill-0, #D7D9DC)" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p2db8ac80} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Appu6V7R0F9VQd1Je8Fn3Vzz7OQSvg() {
  return (
    <div className="h-[29.138px] overflow-clip relative shrink-0 w-[130px]" data-name="appu6v7r0F9vQD1Je8fn3Vzz7oQ.svg">
      <ClipPathGroup4 />
    </div>
  );
}

function Appu6V7R0F9VQd1Je8Fn3Vzz7OQSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[2.931px] relative shrink-0 w-[130px]" data-name="appu6v7r0F9vQD1Je8fn3Vzz7oQ.svg fill">
      <Appu6V7R0F9VQd1Je8Fn3Vzz7OQSvg />
    </div>
  );
}

function LogoPartner7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <Appu6V7R0F9VQd1Je8Fn3Vzz7OQSvgFill />
    </div>
  );
}

function LogoPartner6() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[205px] overflow-clip right-[5px] top-[calc(50%-75px)]" data-name="Logo Partner">
      <LogoPartner7 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[2.25%_0.45%_0.19%_0.19%] mask-position-[-0.245px_-0.715px,_-0.245px_-0.715px]" data-name="Group" style={{ maskImage: `url('${imgGroup6}'), url('${imgGroup7}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.173 30.9532">
        <g id="Group">
          <path d={svgPaths.p3bc21e80} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path d={svgPaths.pd463a80} fill="var(--fill-0, #D7D9DC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup1 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function BcgGvOaozC0B3TXPq5GbDpp9X9SSvg() {
  return (
    <div className="h-[31.726px] overflow-clip relative shrink-0 w-[130px]" data-name="bcgGvOaozC0b3tXPq5gbDpp9X9s.svg">
      <ClipPathGroup5 />
    </div>
  );
}

function BcgGvOaozC0B3TXPq5GbDpp9X9SSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[1.637px] relative shrink-0 w-[130px]" data-name="bcgGvOaozC0b3tXPq5gbDpp9X9s.svg fill">
      <BcgGvOaozC0B3TXPq5GbDpp9X9SSvg />
    </div>
  );
}

function LogoPartner9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <BcgGvOaozC0B3TXPq5GbDpp9X9SSvgFill />
    </div>
  );
}

function LogoPartner8() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[5px] overflow-clip right-[205px] top-1/2" data-name="Logo Partner">
      <LogoPartner9 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup8}'), url('${imgGroup9}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 23.6364">
        <g id="Group">
          <path d={svgPaths.p3517a540} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path d={svgPaths.p16781900} fill="var(--fill-0, #D7D9DC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup2 />
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function H5HhrWig3RkjwyFna9VzFcDuXe8Svg() {
  return (
    <div className="h-[23.636px] overflow-clip relative shrink-0 w-[130px]" data-name="h5HHRWig3rkjwyFna9vzFcDuXe8.svg">
      <ClipPathGroup6 />
    </div>
  );
}

function H5HhrWig3RkjwyFna9VzFcDuXe8SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[5.682px] relative shrink-0 w-[130px]" data-name="h5HHRWig3rkjwyFna9vzFcDuXe8.svg fill">
      <H5HhrWig3RkjwyFna9VzFcDuXe8Svg />
    </div>
  );
}

function LogoPartner11() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <H5HhrWig3RkjwyFna9VzFcDuXe8SvgFill />
    </div>
  );
}

function LogoPartner10() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[205px] overflow-clip right-[5px] top-1/2" data-name="Logo Partner">
      <LogoPartner11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[0_0.56%_1.13%_0.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.746px_0px] mask-size-[130px_32.289px]" data-name="Group" style={{ maskImage: `url('${imgGroup10}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.531 31.9256">
        <g id="Group">
          <path d={svgPaths.p561d800} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2387b500} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p3d694e00} fill="var(--fill-0, #D7D9DC)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function OJ4Sc4LnK8Tl8GC5G3I6NDgT2KSvg() {
  return (
    <div className="h-[32.288px] overflow-clip relative shrink-0 w-[130px]" data-name="oJ4sc4lnK8Tl8gC5G3i6nDgT2k.svg">
      <ClipPathGroup7 />
    </div>
  );
}

function OJ4Sc4LnK8Tl8GC5G3I6NDgT2KSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[1.356px] relative shrink-0 w-[130px]" data-name="oJ4sc4lnK8Tl8gC5G3i6nDgT2k.svg fill">
      <OJ4Sc4LnK8Tl8GC5G3I6NDgT2KSvg />
    </div>
  );
}

function LogoPartner13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <OJ4Sc4LnK8Tl8GC5G3I6NDgT2KSvgFill />
    </div>
  );
}

function LogoPartner12() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[5px] overflow-clip right-[205px] top-[calc(50%+75px)]" data-name="Logo Partner">
      <LogoPartner13 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[2.29%_0.1%_0.61%_0.17%] mask-position-[-0.225px_-0.738px,_-0.225px_-0.738px]" data-name="Group" style={{ maskImage: `url('${imgGroup11}'), url('${imgGroup12}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.644 31.3715">
        <g id="Group">
          <path d={svgPaths.p22144e00} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p29d61900} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group12 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup3 />
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Duk84SnAUqki8IHddYAxbUGudYSvg() {
  return (
    <div className="h-[32.308px] overflow-clip relative shrink-0 w-[130px]" data-name="Duk84SnAUqki8IHddYAxbUGudY.svg">
      <ClipPathGroup8 />
    </div>
  );
}

function Duk84SnAUqki8IHddYAxbUGudYSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[1.346px] relative shrink-0 w-[130px]" data-name="Duk84SnAUqki8IHddYAxbUGudY.svg fill">
      <Duk84SnAUqki8IHddYAxbUGudYSvg />
    </div>
  );
}

function LogoPartner15() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <Duk84SnAUqki8IHddYAxbUGudYSvgFill />
    </div>
  );
}

function LogoPartner14() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[205px] overflow-clip right-[5px] top-[calc(50%+75px)]" data-name="Logo Partner">
      <LogoPartner15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[0.72%_0.24%_1.72%_0.06%] mask-position-[-0.08px_-0.23px,_-0.08px_-0.23px]" data-name="Group" style={{ maskImage: `url('${imgGroup13}'), url('${imgGroup14}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.609 31.137">
        <g id="Group">
          <path d={svgPaths.p3ad9d400} fill="var(--fill-0, #D7D9DC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2b930900} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group14 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup4 />
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function CWhiHWwNmKiNmLsXYq74YZEj3VkSvg() {
  return (
    <div className="h-[31.916px] overflow-clip relative shrink-0 w-[130px]" data-name="cWhiHWwNMKiNMLsXYq74yZEj3vk.svg">
      <ClipPathGroup9 />
    </div>
  );
}

function CWhiHWwNmKiNmLsXYq74YZEj3VkSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[1.542px] relative shrink-0 w-[130px]" data-name="cWhiHWwNMKiNMLsXYq74yZEj3vk.svg fill">
      <CWhiHWwNmKiNmLsXYq74YZEj3VkSvg />
    </div>
  );
}

function LogoPartner17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <CWhiHWwNmKiNmLsXYq74YZEj3VkSvgFill />
    </div>
  );
}

function LogoPartner16() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[5px] overflow-clip right-[205px] top-[calc(50%+150px)]" data-name="Logo Partner">
      <LogoPartner17 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[1.63%_0.56%_0.8%_0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[129.235px_30.59px]" data-name="Group" style={{ maskImage: `url('${imgGroup15}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.235 30.589">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p14ecb880} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p30949900} fill="var(--fill-0, #D7D9DC)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p21bb6f80} fill="var(--fill-0, #D7D9DC)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-[1.63%_0.56%_0.8%_0.03%]" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function K6XwzcCl66APkYxYktCe3Q3QnESvg() {
  return (
    <div className="h-[31.353px] overflow-clip relative shrink-0 w-[130px]" data-name="k6xwzcCL66aPKYxYktCe3q3QnE.svg">
      <ClipPathGroup10 />
    </div>
  );
}

function K6XwzcCl66APkYxYktCe3Q3QnESvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip py-[1.824px] relative shrink-0 w-[130px]" data-name="k6xwzcCL66aPKYxYktCe3q3QnE.svg fill">
      <K6XwzcCl66APkYxYktCe3Q3QnESvg />
    </div>
  );
}

function LogoPartner19() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Logo Partner">
      <K6XwzcCl66APkYxYktCe3Q3QnESvgFill />
    </div>
  );
}

function LogoPartner18() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[205px] overflow-clip right-[5px] top-[calc(50%+150px)]" data-name="Logo Partner">
      <LogoPartner19 />
    </div>
  );
}

function PartnersLogoWrapper() {
  return (
    <div className="h-[335px] relative shrink-0 w-full" data-name="Partners Logo Wrapper">
      <LogoPartner />
      <LogoPartner2 />
      <LogoPartner4 />
      <LogoPartner6 />
      <LogoPartner8 />
      <LogoPartner10 />
      <LogoPartner12 />
      <LogoPartner14 />
      <LogoPartner16 />
      <LogoPartner18 />
    </div>
  );
}

function BaseContainer1() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Base Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40.01px] items-center max-w-[inherit] px-[20px] relative w-full">
          <Container12 />
          <PartnersLogoWrapper />
        </div>
      </div>
    </div>
  );
}

function PartnersSection() {
  return (
    <div className="absolute bg-[#2c3e50] content-stretch flex flex-col items-start justify-center left-0 min-w-[380px] py-[80px] right-0 top-[1446.2px]" data-name="Partners Section">
      <BaseContainer1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Frequently Asked Questions</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[219px]" data-name="Label">
      <Heading7 />
    </div>
  );
}

function Default2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default2 />
    </div>
  );
}

function HeadingHeading1() {
  return (
    <div className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[112.22px] relative shrink-0 text-[#2c3e50] text-[34px] text-center tracking-[-1.36px] w-full" data-name="Heading → Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[75px] justify-center leading-[37.4px] left-[calc(50%+2.83px)] top-[36.7px] w-[311.12px] whitespace-pre-wrap">
        <p className="mb-0">{`Everything you need `}</p>
        <p>{`to know about our `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[38px] justify-center leading-[0] left-[calc(50%+0.15px)] top-[92.82px] w-[131.131px]">
        <p className="leading-[37.4px]">{`services `}</p>
      </div>
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[500px] relative shrink-0 w-full" data-name="Label Wrapper">
      <Container13 />
      <HeadingHeading1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`What industries do you `}</p>
        <p>specialize in?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading1 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon9 />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle />
      <IconWrapper />
    </div>
  );
}

function Default4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default4 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How can your services help `}</p>
        <p>my business grow?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading8 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon11 />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle1 />
      <IconWrapper1 />
    </div>
  );
}

function Default5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper1 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default5 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Do you offer customized `}</p>
        <p>financial solutions?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading9 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill2 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon13 />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle2 />
      <IconWrapper2 />
    </div>
  );
}

function Default6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper2 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default6 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How do I get started with `}</p>
        <p>your services?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading10 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg3 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill3 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon15 />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle3 />
      <IconWrapper3 />
    </div>
  );
}

function Default7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper3 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default7 />
    </div>
  );
}

function FaqColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center min-w-[280px] relative shrink-0 w-full" data-name="FAQ Column">
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`What industries do you `}</p>
        <p>specialize in for clients?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading11 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg4 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill4 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon17 />
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle4 />
      <IconWrapper4 />
    </div>
  );
}

function Default8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper4 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default8 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How do I get started with `}</p>
        <p>your services?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading12 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg5 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill5 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon19 />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper5() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle5 />
      <IconWrapper5 />
    </div>
  );
}

function Default9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper5 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default9 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Do you offer support if I `}</p>
        <p>need assistance?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading13 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg6 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill6 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon21 />
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon20 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper6() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle6 />
      <IconWrapper6 />
    </div>
  );
}

function Default10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper6 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default10 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`What makes your services `}</p>
        <p>different from others?</p>
      </div>
    </div>
  );
}

function TitleWrapperTitle7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title Wrapper → Title">
      <Heading14 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg7 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill7 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon23 />
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon22 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapperTitle7 />
      <IconWrapper7 />
    </div>
  );
}

function Default11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper7 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default11 />
    </div>
  );
}

function FaqColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center min-w-[280px] relative shrink-0 w-full" data-name="FAQ Column">
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Default3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Default">
      <FaqColumn />
      <FaqColumn1 />
    </div>
  );
}

function BaseContainer2() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Base Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[inherit] px-[20px] relative w-full">
          <LabelWrapper1 />
          <Default3 />
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col items-start justify-center left-0 py-[80px] right-0 top-[2929.03px]" data-name="FAQ Section">
      <BaseContainer2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#017984] text-[50px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[50px]">10+</p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]" data-name="Number">
      <Container23 />
    </div>
  );
}

function HeadingHeading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Years of Experience</p>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[23.4px] relative shrink-0 text-[#636363] text-[18px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`A decade of expertise in finance `}</p>
        <p>and consulting</p>
      </div>
    </div>
  );
}

function TitleWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[280px] relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading8 />
      <Body4 />
    </div>
  );
}

function CardWithBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-name="Card With Border">
      <Number />
      <TitleWrapper1 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[250px] relative shrink-0 w-[280px]" data-name="Container">
      <CardWithBorder />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#017984] text-[50px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[50px]">9M+</p>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Number">
      <Container25 />
    </div>
  );
}

function HeadingHeading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Assets Managed</p>
      </div>
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[23.4px] relative shrink-0 text-[#636363] text-[18px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Helping all businesses optimize `}</p>
        <p>resources</p>
      </div>
    </div>
  );
}

function TitleWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[8.01px] items-start max-w-[280px] relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading9 />
      <Body5 />
    </div>
  );
}

function CardWithBorder1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-name="Card With Border">
      <Number1 />
      <TitleWrapper2 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[250px] relative shrink-0 w-[280px]" data-name="Container">
      <CardWithBorder1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#017984] text-[50px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[50px]">98%</p>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103px]" data-name="Number">
      <Container27 />
    </div>
  );
}

function HeadingHeading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Client Satisfaction Rate</p>
      </div>
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[23.4px] relative shrink-0 text-[#636363] text-[18px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Proven results and long-term `}</p>
        <p>partnerships</p>
      </div>
    </div>
  );
}

function TitleWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[280px] relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading10 />
      <Body6 />
    </div>
  );
}

function CardWithBorder2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-name="Card With Border">
      <Number2 />
      <TitleWrapper3 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[250px] relative shrink-0 w-[280px]" data-name="Container">
      <CardWithBorder2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#017984] text-[50px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[50px]">100+</p>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Number">
      <Container29 />
    </div>
  );
}

function HeadingHeading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Satisfied Clients</p>
      </div>
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[23.4px] relative shrink-0 text-[#636363] text-[18px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Companies that trust us to drive `}</p>
        <p>financial success</p>
      </div>
    </div>
  );
}

function TitleWrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[280px] relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading11 />
      <Body7 />
    </div>
  );
}

function CardWithBorder3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-name="Card With Border">
      <Number3 />
      <TitleWrapper4 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[250px] relative shrink-0 w-[280px]" data-name="Container">
      <CardWithBorder3 />
    </div>
  );
}

function BaseContainer3() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Base Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[inherit] px-[20px] relative w-full">
          <Container22 />
          <Container24 />
          <Container26 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function StatisticsSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 min-w-[380px] py-[80px] right-0 top-[1999.41px]" data-name="Statistics Section">
      <BaseContainer3 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[0_0.31%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[151.956px_44.91px]" data-name="Group" style={{ maskImage: `url('${imgGroup16}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.956 44.91">
        <g id="Group">
          <path d={svgPaths.p266f5180} fill="var(--fill-0, #F7F7F7)" id="Vector" />
          <path d={svgPaths.p22652570} fill="var(--fill-0, #00838F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-[0_0.31%_0_0]" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function XfzxyDscvBfl5OdkOzLyHWwSvg() {
  return (
    <div className="h-[44.91px] overflow-clip relative shrink-0 w-[152.422px]" data-name="XfzxyDSCVBfl5OdkOzLyHWw.svg">
      <ClipPathGroup11 />
    </div>
  );
}

function XfzxyDscvBfl5OdkOzLyHWwSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[44.91px] items-center justify-center overflow-clip px-[0.789px] relative shrink-0 w-[154px]" data-name="XfzxyDSCVBfl5OdkOzLyHWw.svg fill">
      <XfzxyDscvBfl5OdkOzLyHWwSvg />
    </div>
  );
}

function LinkLogoWhiteLogoCompany() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Link - Logo White → Logo Company">
      <XfzxyDscvBfl5OdkOzLyHWwSvgFill />
    </div>
  );
}

function Container30() {
  return (
    <div className="aspect-[154/44.90999984741211] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <LinkLogoWhiteLogoCompany />
    </div>
  );
}

function Body8() {
  return (
    <div className="font-['Work_Sans:Regular',sans-serif] font-normal h-[62.39px] leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] text-center tracking-[-0.96px] w-full" data-name="Body">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+2.25px)] top-[9.5px] w-[329.828px]">
        <p className="leading-[20.8px]">{`Subscribe to our newsletter for expert financial `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+2.41px)] top-[30.3px] w-[339.722px]">
        <p className="leading-[20.8px]">{`tips, industry news, and updates straight to your `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+0.16px)] top-[51.09px] w-[41.706px]">
        <p className="leading-[20.8px]">{`inbox `}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[normal]">jane@framer.com</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[19px] pl-[20px] pr-[150px] pt-[18px] relative w-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-[#343434] content-stretch flex flex-col items-start overflow-clip relative rounded-[50px] shrink-0 w-full" data-name="Label">
      <Input4 />
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#636363] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Submit</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function ButtonPhone1() {
  return (
    <div className="bg-[#017984] content-stretch flex items-center justify-center min-w-[131px] pb-[14px] pt-[13px] px-[38.97px] relative rounded-[50px] shrink-0" data-name="Button - Phone">
      <Container33 />
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bottom-[5px] content-stretch flex flex-col items-start right-[4.06px]" data-name="Container">
      <ButtonPhone1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[390px] min-w-[250px] overflow-clip relative shrink-0 w-full" data-name="Form">
      <Body8 />
      <Label8 />
      <Container32 />
    </div>
  );
}

function TopContentWrapper8() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <Container30 />
      <Form1 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[rgba(176,176,176,0.5)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />;
}

function DividerWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center py-[40px] relative shrink-0 w-full" data-name="Divider Wrapper">
      <Divider />
    </div>
  );
}

function HeadingHeading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">Company</p>
      </div>
    </div>
  );
}

function NavLink() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">About us</p>
      </div>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Our team</p>
      </div>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">How we work</p>
      </div>
    </div>
  );
}

function NavLinksWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
    </div>
  );
}

function LinksColumn() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-center left-0 min-w-[130px] right-[190px] top-0" data-name="Links Column">
      <HeadingHeading12 />
      <NavLinksWrapper />
    </div>
  );
}

function HeadingHeading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">More info</p>
      </div>
    </div>
  );
}

function NavLink3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Our clients</p>
      </div>
    </div>
  );
}

function NavLink4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Pricing</p>
      </div>
    </div>
  );
}

function NavLink5() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Contact us</p>
      </div>
    </div>
  );
}

function NavLinksWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink3 />
      <NavLink4 />
      <NavLink5 />
    </div>
  );
}

function LinksColumn1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[170px] min-w-[170px] right-0 top-0" data-name="Links Column">
      <HeadingHeading13 />
      <NavLinksWrapper1 />
    </div>
  );
}

function HeadingHeading14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">Resources</p>
      </div>
    </div>
  );
}

function NavLink6() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Services</p>
      </div>
    </div>
  );
}

function NavLink7() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Portfolio</p>
      </div>
    </div>
  );
}

function NavLink8() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">Blog</p>
      </div>
    </div>
  );
}

function NavLinksWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink6 />
      <NavLink7 />
      <NavLink8 />
    </div>
  );
}

function LinksColumn2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.01px] items-start left-0 min-w-[140px] right-[190px] top-[168.98px]" data-name="Links Column">
      <HeadingHeading14 />
      <NavLinksWrapper2 />
    </div>
  );
}

function HeadingHeading15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">Contacts</p>
      </div>
    </div>
  );
}

function NavLink9() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">123 Finance St, NYC</p>
      </div>
    </div>
  );
}

function NavLink10() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">+1 (555) 123-4567</p>
      </div>
    </div>
  );
}

function NavLink11() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[20.8px]">contact@example.com</p>
      </div>
    </div>
  );
}

function NavLinksWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink9 />
      <NavLink10 />
      <NavLink11 />
    </div>
  );
}

function LinksColumn3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.01px] items-start left-[170px] min-w-[170px] right-0 top-[168.98px]" data-name="Links Column">
      <HeadingHeading15 />
      <NavLinksWrapper3 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] text-center tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">Social Media</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]" data-name="Heading">
      <Heading15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[0_0_0.33%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[8px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup17}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 17.941">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1cd0b600} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group17 />
    </div>
  );
}

function O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvg() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[8px]" data-name="O9leNQGlO6l0VBTQ0OWVGKdhs8Q.svg">
      <ClipPathGroup12 />
    </div>
  );
}

function O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] relative shrink-0 size-[18px]" data-name="O9leNQGlO6l0VBTQ0OWVGKdhs8Q.svg fill">
      <O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvg />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvgFill />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon25 />
    </div>
  );
}

function LinkPhoneWithBg() {
  return (
    <div className="aspect-[32/32] bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip py-[7px] relative rounded-[4px] shrink-0" data-name="Link - Phone With BG">
      <Icon24 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[18px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup18}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p17756af0} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group18 />
    </div>
  );
}

function Ctk8UsmDp0Sng6EJaaVetuOkagcSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ctk8UsmDp0SNG6eJaaVETUOkagc.svg">
      <ClipPathGroup13 />
    </div>
  );
}

function Ctk8UsmDp0Sng6EJaaVetuOkagcSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="ctk8UsmDp0SNG6eJaaVETUOkagc.svg fill">
      <Ctk8UsmDp0Sng6EJaaVetuOkagcSvg />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Ctk8UsmDp0Sng6EJaaVetuOkagcSvgFill />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon27 />
    </div>
  );
}

function LinkPhoneWithBg1() {
  return (
    <div className="aspect-[32/32] bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip py-[7px] relative rounded-[4px] shrink-0" data-name="Link - Phone With BG">
      <Icon26 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[0.01%_0_0_-0.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.057px_-0.004px] mask-size-[18px_17px]" data-name="Group" style={{ maskImage: `url('${imgGroup19}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.057 16.9979">
        <g id="Group">
          <path d={svgPaths.p308e9b40} fill="var(--fill-0, #1E1E1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group19 />
    </div>
  );
}

function JlYtXibCQp2LL0MKjriUEseLPloSvg() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-[18px]" data-name="JlYTXibCQp2lL0MKjriUEseLPlo.svg">
      <ClipPathGroup14 />
    </div>
  );
}

function JlYtXibCQp2LL0MKjriUEseLPloSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[0.5px] relative shrink-0 size-[18px]" data-name="JlYTXibCQp2lL0MKjriUEseLPlo.svg fill">
      <JlYtXibCQp2LL0MKjriUEseLPloSvg />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <JlYtXibCQp2LL0MKjriUEseLPloSvgFill />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon29 />
    </div>
  );
}

function LinkPhoneWithBg2() {
  return (
    <div className="aspect-[32/32] bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip py-[7px] relative rounded-[4px] shrink-0" data-name="Link - Phone With BG">
      <Icon28 />
    </div>
  );
}

function NavSocialLinksWrapper() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0" data-name="Nav - Social Links Wrapper">
      <LinkPhoneWithBg />
      <LinkPhoneWithBg1 />
      <LinkPhoneWithBg2 />
    </div>
  );
}

function LinksColumn4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[15px] items-center left-1/2 min-w-[160px] px-[17px] top-[337.97px]" data-name="Links Column">
      <Heading />
      <NavSocialLinksWrapper />
    </div>
  );
}

function NavLinksColumns() {
  return (
    <div className="h-[406.56px] relative shrink-0 w-full" data-name="Nav Links Columns">
      <LinksColumn />
      <LinksColumn1 />
      <LinksColumn2 />
      <LinksColumn3 />
      <LinksColumn4 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[rgba(176,176,176,0.5)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />;
}

function DividerWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[39px] pt-[40px] relative shrink-0 w-full" data-name="Divider Wrapper">
      <Divider1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[14px] tracking-[-0.84px] whitespace-nowrap">
        <p className="leading-[15.4px]">© Finovo. All rights reserved.</p>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="Copyright">
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[14px] tracking-[-0.84px] whitespace-nowrap">
        <p className="leading-[15.4px]">Designed by fourtwelve.</p>
      </div>
    </div>
  );
}

function Copyright1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[145px]" data-name="Copyright">
      <Container36 />
    </div>
  );
}

function CopyrightWrapper() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_5px] items-start justify-center relative shrink-0 w-full" data-name="Copyright Wrapper">
      <Copyright />
      <Copyright1 />
    </div>
  );
}

function BaseContainer4() {
  return (
    <div className="flex-[1_0_0] max-w-[1330px] min-h-px min-w-px relative" data-name="Base Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] px-[20px] relative w-full">
          <TopContentWrapper8 />
          <DividerWrapper />
          <NavLinksColumns />
          <DividerWrapper1 />
          <CopyrightWrapper />
        </div>
      </div>
    </div>
  );
}

function FooterPhone() {
  return (
    <div className="absolute bg-[#1e1e1e] content-stretch flex items-start justify-center left-0 pb-[40px] pt-[80px] right-0 top-[4251.45px]" data-name="Footer - Phone">
      <BaseContainer4 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[5168.72px] min-h-[760px] relative shrink-0 w-full" data-name="End of bodyStart">
      <InnerBannerSection />
      <PartnersSection />
      <FaqSection />
      <StatisticsSection />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[4251.45px]" data-name="Rectangle" />
      <FooterPhone />
    </div>
  );
}

export default function Component380WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="380w light">
      <Container />
      <Container2 />
      <EndOfBodyStart />
    </div>
  );
}