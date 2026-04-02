import svgPaths from "./svg-9l77t3z0fm";
import imgInnerBanner from "figma:asset/b153eee744a9d972428b60521525018a8ca87fd1.png";
import imgAvatar from "figma:asset/a5d64563effd0fb42bf4a155ae255a7c9bc1e56e.png";
import imgSectionPhone from "figma:asset/39f0909f1207f2c2d18ca2953226af8f29fd500b.png";
import imgContainer from "figma:asset/06a47138fac47d9b4164f2c5ec252cf2c7d190a0.png";
import imgContainer1 from "figma:asset/a480a9e1bcb7ff3d2f44ce35fcb3353d9b2d0bb0.png";
import imgContainer2 from "figma:asset/f4fb372f71ac3fd1a7ad13b5c3c6c41adb248546.png";
import imgContainer3 from "figma:asset/eabc2096334c80792c3b6871d0eae51e64d1d715.png";
import imgContainer4 from "figma:asset/42bfbaa570574923799d77c389772ebde431591f.png";
import imgContainer5 from "figma:asset/2c99bd40e85ef386583b7f59ba5b29b2e9b1aa77.png";
import { imgGroup, imgGroup1, imgLogo, imgText, imgBottom, imgGroup2, imgGroup3, imgGroup4, imgGroup5, imgGroup6 } from "./svg-effss";

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
    <div className="absolute bottom-[6465.23px] content-stretch flex items-start justify-end left-0 p-[20px] w-[380px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Our services</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Label">
      <Heading2 />
    </div>
  );
}

function Default() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#f7f7f7] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[145px]" data-name="Container">
      <Default />
    </div>
  );
}

function HeadingHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.685px] relative shrink-0 w-full" data-name="Heading → Heading 1">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[50.6px] relative shrink-0 text-[#f7f7f7] text-[46px] tracking-[-1.84px] w-full whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Unlock potential `}</p>
        <p className="mb-0">{`with our `}</p>
        <p>expertise</p>
      </div>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[15.095px] items-start max-w-[500px] relative shrink-0 w-full" data-name="Title Wrapper">
      <Container4 />
      <HeadingHeading />
    </div>
  );
}

function BaseContainer() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Base Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[20px] relative w-full">
        <TitleWrapper />
      </div>
    </div>
  );
}

function InnerBanner2() {
  return (
    <div className="absolute inset-[0_0.01px_0_0]" data-name="Inner Banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-66.69%] max-w-none top-0 w-[213.03%]" src={imgInnerBanner} />
      </div>
    </div>
  );
}

function InnerBanner1() {
  return (
    <div className="absolute h-[418.49px] left-[-8.78px] top-[-9.24px] w-[397.57px]" data-name="Inner Banner">
      <InnerBanner2 />
    </div>
  );
}

function InnerBanner() {
  return (
    <div className="h-[400px] overflow-clip relative shrink-0 w-full" data-name="Inner Banner">
      <InnerBanner1 />
    </div>
  );
}

function InnerBannerSection() {
  return (
    <div className="absolute bg-[#2c3e50] content-stretch flex flex-col gap-[60px] items-center left-0 pt-[140px] right-0 top-0" data-name="Inner Banner Section">
      <BaseContainer />
      <InnerBanner />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Success Stories</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-name="Label">
      <Heading3 />
    </div>
  );
}

function Default1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170px]" data-name="Container">
      <Default1 />
    </div>
  );
}

function HeadingHeading1() {
  return (
    <div className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[74.81px] leading-[0] relative shrink-0 text-[#2c3e50] text-[34px] text-center tracking-[-1.36px] w-full" data-name="Heading → Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[calc(50%+2.87px)] top-[18px] w-[306.409px]">
        <p className="leading-[37.4px]">{`What our clients say `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[calc(50%+0.7px)] top-[55.41px] w-[132.51px]">
        <p className="leading-[37.4px]">about us</p>
      </div>
    </div>
  );
}

function TopContentWrapperTitleWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[350px] relative shrink-0 w-full" data-name="Top Content Wrapper → Title Wrapper">
      <Container5 />
      <HeadingHeading1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_16.668px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0006 16.6671">
        <g id="Group">
          <path d={svgPaths.p1a5d8340} fill="var(--fill-0, #00838F)" id="Vector" />
        </g>
      </svg>
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

function RrUf42Rc90Ej7JiVxj3OvZs3TxoSvg() {
  return (
    <div className="h-[16.667px] overflow-clip relative shrink-0 w-[20px]" data-name="RRUf42Rc90EJ7jiVXJ3OVZs3Txo.svg">
      <ClipPathGroup2 />
    </div>
  );
}

function RrUf42Rc90Ej7JiVxj3OvZs3TxoSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[1.667px] relative shrink-0 size-[20px]" data-name="RRUf42Rc90EJ7jiVXJ3OVZs3Txo.svg fill">
      <RrUf42Rc90Ej7JiVxj3OvZs3TxoSvg />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <RrUf42Rc90Ej7JiVxj3OvZs3TxoSvgFill />
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

function QuteText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Qute Text">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[21.6px] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Thanks to their strategic advice, our `}</p>
        <p className="mb-0">{`budgeting and financial processes are `}</p>
        <p className="mb-0">{`now seamless. The team at Finovo `}</p>
        <p className="mb-0">{`helped us optimize cash flow and `}</p>
        <p className="mb-0">{`implement smarter strategies, `}</p>
        <p className="mb-0">{`resulting in a 35% increase in `}</p>
        <p className="mb-0">{`efficiency. We feel confident about the `}</p>
        <p>future!</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute inset-0 rounded-[25px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[25px] shrink-0 size-[50px]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function HeadingHeading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Sarah Lewis</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#343434] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Founder, Lewis Consulting</p>
      </div>
    </div>
  );
}

function AuthorInfoWrapp() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-h-px min-w-px relative" data-name="Author Info Wrapp">
      <HeadingHeading5 />
      <Body />
    </div>
  );
}

function AuthorInfoWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Wrapper">
      <Avatar />
      <AuthorInfoWrapp />
    </div>
  );
}

function Phone1() {
  return (
    <div className="bg-[rgba(44,62,80,0.15)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Phone">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[20px] relative w-full">
        <Icon2 />
        <QuteText />
        <AuthorInfoWrapper />
      </div>
    </div>
  );
}

function Icon4() {
  return <div className="shrink-0 size-[20px]" data-name="Icon" />;
}

function QuteText1() {
  return <div className="h-[172.75px] shrink-0 w-full" data-name="Qute Text" />;
}

function Avatar2() {
  return <div className="rounded-[25px] shrink-0 size-[50px]" data-name="Avatar" />;
}

function HeadingHeading6() {
  return <div className="h-[21.59px] shrink-0 w-full" data-name="Heading → Heading 6" />;
}

function Body1() {
  return <div className="h-[20.8px] shrink-0 w-full" data-name="Body" />;
}

function AuthorInfoWrapp1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Author Info Wrapp">
      <HeadingHeading6 />
      <Body1 />
    </div>
  );
}

function AuthorInfoWrapper1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Wrapper">
      <Avatar2 />
      <AuthorInfoWrapp1 />
    </div>
  );
}

function Phone2() {
  return (
    <div className="absolute bg-[#2c3e50] content-stretch flex flex-col gap-[32px] items-start left-[1000px] opacity-0 p-[20px] right-[-1000px] rounded-[8px] top-0" data-name="Phone">
      <Icon4 />
      <QuteText1 />
      <AuthorInfoWrapper1 />
    </div>
  );
}

function Icon5() {
  return <div className="shrink-0 size-[20px]" data-name="Icon" />;
}

function QuteText2() {
  return <div className="h-[172.75px] shrink-0 w-full" data-name="Qute Text" />;
}

function Avatar3() {
  return <div className="rounded-[25px] shrink-0 size-[50px]" data-name="Avatar" />;
}

function HeadingHeading7() {
  return <div className="h-[21.59px] shrink-0 w-full" data-name="Heading → Heading 6" />;
}

function Body2() {
  return <div className="h-[20.8px] shrink-0 w-full" data-name="Body" />;
}

function AuthorInfoWrapp2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Author Info Wrapp">
      <HeadingHeading7 />
      <Body2 />
    </div>
  );
}

function AuthorInfoWrapper2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Wrapper">
      <Avatar3 />
      <AuthorInfoWrapp2 />
    </div>
  );
}

function Phone3() {
  return (
    <div className="absolute bg-[rgba(44,62,80,0.15)] content-stretch flex flex-col gap-[32px] items-start left-[1000px] opacity-0 p-[20px] right-[-1000px] rounded-[8px] top-0" data-name="Phone">
      <Icon5 />
      <QuteText2 />
      <AuthorInfoWrapper2 />
    </div>
  );
}

function Icon6() {
  return <div className="shrink-0 size-[20px]" data-name="Icon" />;
}

function QuteText3() {
  return <div className="h-[172.75px] shrink-0 w-full" data-name="Qute Text" />;
}

function Avatar4() {
  return <div className="rounded-[25px] shrink-0 size-[50px]" data-name="Avatar" />;
}

function HeadingHeading8() {
  return <div className="h-[21.59px] shrink-0 w-full" data-name="Heading → Heading 6" />;
}

function Body3() {
  return <div className="h-[20.8px] shrink-0 w-full" data-name="Body" />;
}

function AuthorInfoWrapp3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Author Info Wrapp">
      <HeadingHeading8 />
      <Body3 />
    </div>
  );
}

function AuthorInfoWrapper3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Wrapper">
      <Avatar4 />
      <AuthorInfoWrapp3 />
    </div>
  );
}

function Phone4() {
  return (
    <div className="absolute bg-[#2c3e50] content-stretch flex flex-col gap-[32px] items-start left-[1000px] opacity-0 p-[20px] right-[-1000px] rounded-[8px] top-0" data-name="Phone">
      <Icon6 />
      <QuteText3 />
      <AuthorInfoWrapper3 />
    </div>
  );
}

function Icon7() {
  return <div className="shrink-0 size-[20px]" data-name="Icon" />;
}

function QuteText4() {
  return <div className="h-[172.75px] shrink-0 w-full" data-name="Qute Text" />;
}

function Avatar5() {
  return <div className="rounded-[25px] shrink-0 size-[50px]" data-name="Avatar" />;
}

function HeadingHeading9() {
  return <div className="h-[21.59px] shrink-0 w-full" data-name="Heading → Heading 6" />;
}

function Body4() {
  return <div className="h-[20.8px] shrink-0 w-full" data-name="Body" />;
}

function AuthorInfoWrapp4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Author Info Wrapp">
      <HeadingHeading9 />
      <Body4 />
    </div>
  );
}

function AuthorInfoWrapper4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Wrapper">
      <Avatar5 />
      <AuthorInfoWrapp4 />
    </div>
  );
}

function Phone5() {
  return (
    <div className="absolute bg-[rgba(44,62,80,0.15)] content-stretch flex flex-col gap-[32px] items-start left-[1000px] opacity-0 p-[20px] right-[-1000px] rounded-[8px] top-0" data-name="Phone">
      <Icon7 />
      <QuteText4 />
      <AuthorInfoWrapper4 />
    </div>
  );
}

function Icon8() {
  return <div className="shrink-0 size-[20px]" data-name="Icon" />;
}

function QuteText5() {
  return <div className="h-[172.75px] shrink-0 w-full" data-name="Qute Text" />;
}

function Avatar6() {
  return <div className="rounded-[25px] shrink-0 size-[50px]" data-name="Avatar" />;
}

function HeadingHeading10() {
  return <div className="h-[21.59px] shrink-0 w-full" data-name="Heading → Heading 6" />;
}

function Body5() {
  return <div className="h-[20.8px] shrink-0 w-full" data-name="Body" />;
}

function AuthorInfoWrapp5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Author Info Wrapp">
      <HeadingHeading10 />
      <Body5 />
    </div>
  );
}

function AuthorInfoWrapper5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Wrapper">
      <Avatar6 />
      <AuthorInfoWrapp5 />
    </div>
  );
}

function Phone6() {
  return (
    <div className="absolute bg-[#2c3e50] content-stretch flex flex-col gap-[32px] items-start left-[1000px] opacity-0 p-[20px] right-[-1000px] rounded-[8px] top-0" data-name="Phone">
      <Icon8 />
      <QuteText5 />
      <AuthorInfoWrapper5 />
    </div>
  );
}

function SuccessStoriesCardsWrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Success Stories Cards Wrapper">
      <Phone1 />
      <Phone2 />
      <Phone3 />
      <Phone4 />
      <Phone5 />
      <Phone6 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p34bb0a00} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5.625 2.25H15.75V12.375" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-[0.003px] pr-[0.003px] relative shrink-0 size-[18.003px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[18.003px]" data-name="Icon">
      <Icon10 />
    </div>
  );
}

function ButtonDisabled() {
  return (
    <div className="bg-[#017984] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px opacity-50 relative rounded-[50px] w-full" data-name="Button - Disabled">
      <div className="flex items-center justify-center relative shrink-0 size-[25.46px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <Icon9 />
        </div>
      </div>
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-[40px]" data-name="Container">
      <ButtonDisabled />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg">
          <path d={svgPaths.p34bb0a00} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
          <path d="M5.625 2.25H15.75V12.375" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pl-[0.004px] relative shrink-0 size-[17.996px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg1 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[18px]" data-name="Icon">
      <Icon12 />
    </div>
  );
}

function ButtonPhone() {
  return (
    <div className="bg-[#017984] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[50px] w-full" data-name="Button - Phone">
      <div className="flex items-center justify-center relative shrink-0 size-[25.456px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <Icon11 />
        </div>
      </div>
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[40px]" data-name="Container">
      <ButtonPhone />
    </div>
  );
}

function PhoneButtonWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Phone Button Wrapper">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Container6 />
        </div>
      </div>
      <Container7 />
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Phone">
      <TopContentWrapperTitleWrapper />
      <SuccessStoriesCardsWrapper />
      <PhoneButtonWrapper />
    </div>
  );
}

function BaseContainer1() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Base Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[20px] relative w-full">
        <Phone />
      </div>
    </div>
  );
}

function SuccessStoriesSection() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col items-start justify-center left-0 py-[80px] right-0 top-[4155.19px]" data-name="Success Stories Section">
      <BaseContainer1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Get started today</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Label">
      <Heading4 />
    </div>
  );
}

function Default2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default2 />
    </div>
  );
}

function HeadingHeading2() {
  return (
    <div className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[74.81px] leading-[0] relative shrink-0 text-[#2c3e50] text-[34px] tracking-[-1.36px] w-full" data-name="Heading → Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[calc(50%+2.87px)] top-[18px] w-[297.626px]">
        <p className="leading-[37.4px]">{`Take control of your `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[calc(50%+1.45px)] top-[55.41px] w-[319.613px]">
        <p className="leading-[37.4px]">financial future today</p>
      </div>
    </div>
  );
}

function Body6() {
  return (
    <div className="font-['Work_Sans:Regular',sans-serif] font-normal h-[62.39px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full" data-name="Body">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[42px] justify-center leading-[20.8px] left-[calc(50%+2.34px)] top-[19.9px] w-[339.18px] whitespace-pre-wrap">
        <p className="mb-0">{`Partner with experts who understand your goals `}</p>
        <p>{`and help you achieve lasting success. Let’s build `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center leading-[0] left-[calc(50%+0.53px)] top-[51.1px] w-[223.876px]">
        <p className="leading-[20.8px]">a strategy tailored to your needs</p>
      </div>
    </div>
  );
}

function TitleWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 text-center w-full" data-name="Title Wrapper">
      <HeadingHeading2 />
      <Body6 />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[480px] relative shrink-0 w-full" data-name="Label Wrapper">
      <Container8 />
      <TitleWrapper1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Contact us</p>
      </div>
    </div>
  );
}

function ButtonCta() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[82px]" data-name="Button CTA">
      <Container10 />
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

function Icon14() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon14 />
    </div>
  );
}

function IconWrapp() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon13 />
    </div>
  );
}

function LinkPhone() {
  return (
    <div className="bg-[#2c3e50] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Phone">
      <ButtonCta />
      <IconWrapp />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#2c3e50] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkPhone />
    </div>
  );
}

function BaseContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1330px] min-w-[380px] px-[20px] relative shrink-0" data-name="Base Container">
      <LabelWrapper />
      <Container9 />
    </div>
  );
}

function SectionPhone() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-start justify-center left-0 py-[80px] right-0 top-[5864.97px]" data-name="Section - Phone">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[140.11%]" src={imgSectionPhone} />
      </div>
      <BaseContainer2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Tailored Solutions</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="Label">
      <Heading5 />
    </div>
  );
}

function Default3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default3 />
    </div>
  );
}

function HeadingHeading3() {
  return (
    <div className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[112.22px] relative shrink-0 text-[#2c3e50] text-[34px] text-center tracking-[-1.36px] w-full" data-name="Heading → Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[75px] justify-center leading-[37.4px] left-[calc(50%+2.82px)] top-[36.7px] w-[247.36px] whitespace-pre-wrap">
        <p className="mb-0">{`Comprehensive `}</p>
        <p>{`services to drive `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[38px] justify-center leading-[0] left-[calc(50%+0.76px)] top-[92.81px] w-[109.051px]">
        <p className="leading-[37.4px]">growth</p>
      </div>
    </div>
  );
}

function TitleWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[16.01px] items-center max-w-[450px] relative shrink-0 w-full" data-name="Title Wrapper">
      <Container11 />
      <HeadingHeading3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">01</p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[21px]" data-name="Number">
      <Heading1 />
    </div>
  );
}

function NumberWrapper() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex items-center justify-center left-[10px] overflow-clip py-[18px] rounded-[6px] top-[10px] w-[60px]" data-name="Number Wrapper">
      <Number />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-22.61%] max-w-none top-0 w-[132.48%]" src={imgContainer} />
      </div>
    </div>
  );
}

function ThumbnailWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Container14 />
      <div className="absolute bg-[rgba(30,30,30,0.1)] inset-0" data-name="BG Color" />
    </div>
  );
}

function HeadingHeading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Financial Planning and Strategy</p>
      </div>
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-[323px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`We design personalized financial roadmaps `}</p>
        <p className="mb-0">{`that align with your business goals, ensuring `}</p>
        <p>long-term success</p>
      </div>
    </div>
  );
}

function TitleWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[8.795px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading4 />
      <Body7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">View details</p>
      </div>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="CTA Button">
      <Container15 />
    </div>
  );
}

function ButtonDefault() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-name="Button - Default">
      <CtaButton />
      <div className="absolute bg-[#2c3e50] bottom-[0.01px] h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkPhone1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Link - Phone">
      <NumberWrapper />
      <ThumbnailWrapper />
      <TitleWrapper3 />
      <ButtonDefault />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative shrink-0 w-[340px]" data-name="Container">
      <LinkPhone1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">02</p>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]" data-name="Number">
      <Heading6 />
    </div>
  );
}

function NumberWrapper1() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex items-center justify-center left-[10px] overflow-clip py-[18px] rounded-[6px] top-[10px] w-[60px]" data-name="Number Wrapper">
      <Number1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-28.65%] max-w-none top-0 w-[157.41%]" src={imgContainer1} />
      </div>
    </div>
  );
}

function ThumbnailWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Container17 />
      <div className="absolute bg-[rgba(30,30,30,0.1)] inset-0" data-name="BG Color" />
    </div>
  );
}

function HeadingHeading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Tax Optimization and Compliance</p>
      </div>
    </div>
  );
}

function Body8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-[323px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Maximize your savings with tax strategies that `}</p>
        <p className="mb-0">{`minimize liabilities while ensuring compliance `}</p>
        <p>with all regulations</p>
      </div>
    </div>
  );
}

function TitleWrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[8.8px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading11 />
      <Body8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">View details</p>
      </div>
    </div>
  );
}

function CtaButton1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="CTA Button">
      <Container18 />
    </div>
  );
}

function ButtonDefault1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-name="Button - Default">
      <CtaButton1 />
      <div className="absolute bg-[#2c3e50] bottom-0 h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkPhone2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Link - Phone">
      <NumberWrapper1 />
      <ThumbnailWrapper1 />
      <TitleWrapper4 />
      <ButtonDefault1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative shrink-0 w-[340px]" data-name="Container">
      <LinkPhone2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">03</p>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]" data-name="Number">
      <Heading7 />
    </div>
  );
}

function NumberWrapper2() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex items-center justify-center left-[10px] overflow-clip py-[18px] rounded-[6px] top-[10px] w-[60px]" data-name="Number Wrapper">
      <Number2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-9.47%] max-w-none top-0 w-[126.9%]" src={imgContainer2} />
      </div>
    </div>
  );
}

function ThumbnailWrapper2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Container20 />
      <div className="absolute bg-[rgba(30,30,30,0.1)] inset-0" data-name="BG Color" />
    </div>
  );
}

function HeadingHeading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Risk Management and Investment</p>
      </div>
    </div>
  );
}

function Body9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-[323px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Safeguard your business with comprehensive `}</p>
        <p className="mb-0">{`risk management and strategic investment `}</p>
        <p>planning guidance</p>
      </div>
    </div>
  );
}

function TitleWrapper5() {
  return (
    <div className="content-stretch flex flex-col gap-[8.795px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading12 />
      <Body9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">View details</p>
      </div>
    </div>
  );
}

function CtaButton2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="CTA Button">
      <Container21 />
    </div>
  );
}

function ButtonDefault2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-name="Button - Default">
      <CtaButton2 />
      <div className="absolute bg-[#2c3e50] bottom-0 h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkPhone3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Link - Phone">
      <NumberWrapper2 />
      <ThumbnailWrapper2 />
      <TitleWrapper5 />
      <ButtonDefault2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative shrink-0 w-[340px]" data-name="Container">
      <LinkPhone3 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">04</p>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[25px]" data-name="Number">
      <Heading8 />
    </div>
  );
}

function NumberWrapper3() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex items-center justify-center left-[10px] overflow-clip py-[18px] rounded-[6px] top-[10px] w-[60px]" data-name="Number Wrapper">
      <Number3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.48%] max-w-none top-0 w-[132.48%]" src={imgContainer3} />
      </div>
    </div>
  );
}

function ThumbnailWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Container23 />
      <div className="absolute bg-[rgba(30,30,30,0.1)] inset-0" data-name="BG Color" />
    </div>
  );
}

function HeadingHeading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Strategic Mergers Advisory Services</p>
      </div>
    </div>
  );
}

function Body10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-[323px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`The process of designing, developing, and `}</p>
        <p className="mb-0">{`efficiently maintaining robust high-quality `}</p>
        <p>software solutions</p>
      </div>
    </div>
  );
}

function TitleWrapper6() {
  return (
    <div className="content-stretch flex flex-col gap-[8.795px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading13 />
      <Body10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">View details</p>
      </div>
    </div>
  );
}

function CtaButton3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="CTA Button">
      <Container24 />
    </div>
  );
}

function ButtonDefault3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-name="Button - Default">
      <CtaButton3 />
      <div className="absolute bg-[#2c3e50] bottom-[0.01px] h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkPhone4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Link - Phone">
      <NumberWrapper3 />
      <ThumbnailWrapper3 />
      <TitleWrapper6 />
      <ButtonDefault3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative shrink-0 w-[340px]" data-name="Container">
      <LinkPhone4 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">05</p>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]" data-name="Number">
      <Heading9 />
    </div>
  );
}

function NumberWrapper4() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex items-center justify-center left-[10px] overflow-clip py-[18px] rounded-[6px] top-[10px] w-[60px]" data-name="Number Wrapper">
      <Number4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-25.09%] max-w-none top-0 w-[151.09%]" src={imgContainer4} />
      </div>
    </div>
  );
}

function ThumbnailWrapper4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Container26 />
      <div className="absolute bg-[rgba(30,30,30,0.1)] inset-0" data-name="BG Color" />
    </div>
  );
}

function HeadingHeading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Smart Business Cash Flow Solutions</p>
      </div>
    </div>
  );
}

function Body11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-[323px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Safeguard your networks, devices, and `}</p>
        <p className="mb-0">{`sensitive data from cyber threats, breaches, `}</p>
        <p>and unauthorized access</p>
      </div>
    </div>
  );
}

function TitleWrapper7() {
  return (
    <div className="content-stretch flex flex-col gap-[8.8px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading14 />
      <Body11 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">View details</p>
      </div>
    </div>
  );
}

function CtaButton4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="CTA Button">
      <Container27 />
    </div>
  );
}

function ButtonDefault4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-name="Button - Default">
      <CtaButton4 />
      <div className="absolute bg-[#2c3e50] bottom-0 h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkPhone5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Link - Phone">
      <NumberWrapper4 />
      <ThumbnailWrapper4 />
      <TitleWrapper7 />
      <ButtonDefault4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative shrink-0 w-[340px]" data-name="Container">
      <LinkPhone5 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">06</p>
      </div>
    </div>
  );
}

function Number5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[25px]" data-name="Number">
      <Heading10 />
    </div>
  );
}

function NumberWrapper5() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex items-center justify-center left-[10px] overflow-clip py-[18px] rounded-[6px] top-[10px] w-[60px]" data-name="Number Wrapper">
      <Number5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-30.14%] max-w-none top-0 w-[156.86%]" src={imgContainer5} />
      </div>
    </div>
  );
}

function ThumbnailWrapper5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Container29 />
      <div className="absolute bg-[rgba(30,30,30,0.1)] inset-0" data-name="BG Color" />
    </div>
  );
}

function HeadingHeading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full">
        <p className="leading-[24px]">Valuation and Financial Analysis</p>
      </div>
    </div>
  );
}

function Body12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-[323px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Maintain accurate, secure, and fully compliant `}</p>
        <p className="mb-0">{`financial records through careful and highly `}</p>
        <p>meticulous oversight</p>
      </div>
    </div>
  );
}

function TitleWrapper8() {
  return (
    <div className="content-stretch flex flex-col gap-[8.795px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading15 />
      <Body12 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">View details</p>
      </div>
    </div>
  );
}

function CtaButton5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="CTA Button">
      <Container30 />
    </div>
  );
}

function ButtonDefault5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-name="Button - Default">
      <CtaButton5 />
      <div className="absolute bg-[#2c3e50] bottom-0 h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkPhone6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Link - Phone">
      <NumberWrapper5 />
      <ThumbnailWrapper5 />
      <TitleWrapper8 />
      <ButtonDefault5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative shrink-0 w-[340px]" data-name="Container">
      <LinkPhone6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center pb-[40px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
      <Container25 />
      <Container28 />
    </div>
  );
}

function BaseContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[40.01px] items-center max-w-[1330px] px-[20px] relative shrink-0 w-[380px]" data-name="Base Container">
      <TitleWrapper2 />
      <Container12 />
    </div>
  );
}

function SolutionsSection() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 py-[80px] right-0 top-[785.98px]" data-name="Solutions Section">
      <BaseContainer3 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Frequently Asked Questions</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[219px]" data-name="Label">
      <Heading11 />
    </div>
  );
}

function Default4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[264px]" data-name="Container">
      <Default4 />
    </div>
  );
}

function HeadingHeading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[37.4px] relative shrink-0 text-[#2c3e50] text-[34px] tracking-[-1.36px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Everything you need `}</p>
        <p className="mb-0">{`to know about our `}</p>
        <p>{`services `}</p>
      </div>
    </div>
  );
}

function TitleWrapperLabelWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[14.915px] items-start relative shrink-0 w-full" data-name="Title Wrapper → Label Wrapper">
      <Container31 />
      <HeadingHeading16 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[36px] tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[36px]">01</p>
      </div>
    </div>
  );
}

function Number6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[37px]" data-name="Number">
      <Container33 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`What industries do `}</p>
        <p>you specialize in?</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title">
      <Heading12 />
    </div>
  );
}

function TitleWrapper9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative" data-name="Title Wrapper">
      <Number6 />
      <Title />
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

function Icon16() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill3 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon16 />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapper9 />
      <IconWrapper />
    </div>
  );
}

function Default6() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[36px] tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[36px]">02</p>
      </div>
    </div>
  );
}

function Number7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[43px]" data-name="Number">
      <Container35 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How can your `}</p>
        <p className="mb-0">{`services help my `}</p>
        <p>business grow?</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title">
      <Heading13 />
    </div>
  );
}

function TitleWrapper10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative" data-name="Title Wrapper">
      <Number7 />
      <Title1 />
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

function Icon18() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill4 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon18 />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapper10 />
      <IconWrapper1 />
    </div>
  );
}

function Default7() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper1 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[36px] tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[36px]">03</p>
      </div>
    </div>
  );
}

function Number8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[43px]" data-name="Number">
      <Container37 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Do you offer `}</p>
        <p className="mb-0">{`customized financial `}</p>
        <p>solutions?</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title">
      <Heading14 />
    </div>
  );
}

function TitleWrapper11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative" data-name="Title Wrapper">
      <Number8 />
      <Title2 />
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

function Icon20() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill5 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon20 />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon19 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapper11 />
      <IconWrapper2 />
    </div>
  );
}

function Default8() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper2 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default8 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[36px] tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[36px]">04</p>
      </div>
    </div>
  );
}

function Number9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[44px]" data-name="Number">
      <Container39 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[24px] relative shrink-0 text-[#2c3e50] text-[20px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How do I get started `}</p>
        <p>with your services?</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title">
      <Heading15 />
    </div>
  );
}

function TitleWrapper12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative" data-name="Title Wrapper">
      <Number9 />
      <Title3 />
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

function Icon22() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill6 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <Icon22 />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="aspect-[36/36] bg-[#017984] content-stretch flex items-center justify-center py-[10px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon21 />
        </div>
      </div>
    </div>
  );
}

function TopContentWrapper3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <TitleWrapper12 />
      <IconWrapper3 />
    </div>
  );
}

function Default9() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
          <TopContentWrapper3 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Default9 />
    </div>
  );
}

function FaqColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center min-w-[280px] relative shrink-0 w-[340px]" data-name="FAQ Column">
      <Container32 />
      <Container34 />
      <Container36 />
      <Container38 />
    </div>
  );
}

function Default5() {
  return (
    <div className="content-start flex flex-wrap items-start relative shrink-0 w-full" data-name="Default">
      <FaqColumn />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">See our process</p>
      </div>
    </div>
  );
}

function ButtonCta1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[119px]" data-name="Button CTA">
      <Container40 />
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

function Icon24() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill7 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon24 />
    </div>
  );
}

function IconWrapp1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon23 />
    </div>
  );
}

function LinkPhone7() {
  return (
    <div className="bg-[#017984] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Phone">
      <ButtonCta1 />
      <IconWrapp1 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function BaseContainer4() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Base Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] px-[20px] relative w-full">
        <TitleWrapperLabelWrapper />
        <Default5 />
        <LinkPhone7 />
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 min-w-[380px] py-[80px] right-0 top-[4898.95px]" data-name="FAQ Section">
      <BaseContainer4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_0.31%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[151.956px_44.91px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.956 44.91">
        <g id="Group">
          <path d={svgPaths.p266f5180} fill="var(--fill-0, #F7F7F7)" id="Vector" />
          <path d={svgPaths.p22652570} fill="var(--fill-0, #00838F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[0_0.31%_0_0]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function XfzxyDscvBfl5OdkOzLyHWwSvg() {
  return (
    <div className="h-[44.91px] overflow-clip relative shrink-0 w-[152.422px]" data-name="XfzxyDSCVBfl5OdkOzLyHWw.svg">
      <ClipPathGroup3 />
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

function Container41() {
  return (
    <div className="aspect-[154/44.90999984741211] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <LinkLogoWhiteLogoCompany />
    </div>
  );
}

function Body13() {
  return (
    <div className="font-['Work_Sans:Regular',sans-serif] font-normal h-[62.39px] leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] text-center tracking-[-0.96px] w-full" data-name="Body">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+2.25px)] top-[9.5px] w-[329.828px]">
        <p className="leading-[20.8px]">{`Subscribe to our newsletter for expert financial `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+2.41px)] top-[30.29px] w-[339.722px]">
        <p className="leading-[20.8px]">{`tips, industry news, and updates straight to your `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+0.16px)] top-[51.09px] w-[41.706px]">
        <p className="leading-[20.8px]">{`inbox `}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[normal]">jane@framer.com</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[19px] pl-[20px] pr-[150px] pt-[18px] relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[#343434] content-stretch flex flex-col items-start overflow-clip relative rounded-[50px] shrink-0 w-full" data-name="Label">
      <Input />
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#636363] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Submit</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function ButtonPhone1() {
  return (
    <div className="bg-[#017984] content-stretch flex items-center justify-center min-w-[131px] pb-[14px] pt-[13px] px-[38.97px] relative rounded-[50px] shrink-0" data-name="Button - Phone">
      <Container44 />
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bottom-[5.01px] content-stretch flex flex-col items-start right-[4.06px]" data-name="Container">
      <ButtonPhone1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[390px] min-w-[250px] overflow-clip relative shrink-0 w-full" data-name="Form">
      <Body13 />
      <Label5 />
      <Container43 />
    </div>
  );
}

function TopContentWrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <Container41 />
      <Form />
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

function HeadingHeading17() {
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
      <HeadingHeading17 />
      <NavLinksWrapper />
    </div>
  );
}

function HeadingHeading18() {
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
      <HeadingHeading18 />
      <NavLinksWrapper1 />
    </div>
  );
}

function HeadingHeading19() {
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
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-0 min-w-[140px] right-[190px] top-[168.98px]" data-name="Links Column">
      <HeadingHeading19 />
      <NavLinksWrapper2 />
    </div>
  );
}

function HeadingHeading20() {
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
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[170px] min-w-[170px] right-0 top-[168.98px]" data-name="Links Column">
      <HeadingHeading20 />
      <NavLinksWrapper3 />
    </div>
  );
}

function Heading16() {
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
      <Heading16 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_0_0.33%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[8px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 17.941">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1cd0b600} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvg() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[8px]" data-name="O9leNQGlO6l0VBTQ0OWVGKdhs8Q.svg">
      <ClipPathGroup4 />
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

function Icon26() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvgFill />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon26 />
    </div>
  );
}

function LinkPhoneWithBg() {
  return (
    <div className="aspect-[32/32] bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip py-[7px] relative rounded-[4px] shrink-0" data-name="Link - Phone With BG">
      <Icon25 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[18px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p17756af0} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Ctk8UsmDp0Sng6EJaaVetuOkagcSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ctk8UsmDp0SNG6eJaaVETUOkagc.svg">
      <ClipPathGroup5 />
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

function Icon28() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Ctk8UsmDp0Sng6EJaaVetuOkagcSvgFill />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon28 />
    </div>
  );
}

function LinkPhoneWithBg1() {
  return (
    <div className="aspect-[32/32] bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip py-[7px] relative rounded-[4px] shrink-0" data-name="Link - Phone With BG">
      <Icon27 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0.01%_0_0_-0.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.057px_-0.004px] mask-size-[18px_17px]" data-name="Group" style={{ maskImage: `url('${imgGroup6}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.057 16.9979">
        <g id="Group">
          <path d={svgPaths.p308e9b40} fill="var(--fill-0, #1E1E1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function JlYtXibCQp2LL0MKjriUEseLPloSvg() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-[18px]" data-name="JlYTXibCQp2lL0MKjriUEseLPlo.svg">
      <ClipPathGroup6 />
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

function Icon30() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <JlYtXibCQp2LL0MKjriUEseLPloSvgFill />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon30 />
    </div>
  );
}

function LinkPhoneWithBg2() {
  return (
    <div className="aspect-[32/32] bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip py-[7px] relative rounded-[4px] shrink-0" data-name="Link - Phone With BG">
      <Icon29 />
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[15.01px] items-center left-1/2 min-w-[160px] px-[17px] top-[337.96px]" data-name="Links Column">
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
  return <div className="bg-[rgba(176,176,176,0.5)] flex-[1_0_0] h-px min-h-px min-w-px opacity-60" data-name="Divider" />;
}

function DividerWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[40px] relative shrink-0 w-full" data-name="Divider Wrapper">
      <Divider1 />
    </div>
  );
}

function Container46() {
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
      <Container46 />
    </div>
  );
}

function Container47() {
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
      <Container47 />
    </div>
  );
}

function CopyrightWrapper() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_5px] items-start justify-center opacity-60 relative shrink-0 w-full" data-name="Copyright Wrapper">
      <Copyright />
      <Copyright1 />
    </div>
  );
}

function CopyrightWrapperCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7.02px] relative shrink-0 w-[340px]" data-name="Copyright Wrapper:css-transform">
      <CopyrightWrapper />
    </div>
  );
}

function BaseContainer5() {
  return (
    <div className="flex-[1_0_0] max-w-[1330px] min-h-px min-w-px relative" data-name="Base Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] px-[20px] relative w-full">
          <TopContentWrapper4 />
          <DividerWrapper />
          <NavLinksColumns />
          <DividerWrapper1 />
          <CopyrightWrapperCssTransform />
        </div>
      </div>
    </div>
  );
}

function FooterPhone() {
  return (
    <div className="absolute bg-[#1e1e1e] content-stretch flex items-start justify-center left-0 pb-[31.98px] pt-[80px] right-0 top-[6307.97px]" data-name="Footer - Phone">
      <BaseContainer5 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[7225.23px] min-h-[760px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <InnerBannerSection />
      <SuccessStoriesSection />
      <SectionPhone />
      <SolutionsSection />
      <FaqSection />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[6307.97px]" data-name="Rectangle" />
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