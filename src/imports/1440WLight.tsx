import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-2c1ccc9lm2";
import imgWhyChooseUsImage from "figma:asset/5e89fb1ecc857a1a023794d0fb47bb10e25ee840.png";
import imgSolutionImage from "figma:asset/956d7ad6ec9f30e740a28cfd6703faa5f118e14a.png";
import imgSectionDesktop from "figma:asset/6616d88b8243b6fd2e767d5f4b4a9db340855359.png";
import imgHeroBannerSection from "figma:asset/a67fec76a027547c1ab33a336a132c0dd13f9e8c.png";
import imgAvatar from "figma:asset/a5d64563effd0fb42bf4a155ae255a7c9bc1e56e.png";
import imgAvatar1 from "figma:asset/808dc2fe36a84ab9c76c06083a4fe166e4eb09fa.png";
import imgAvatar2 from "figma:asset/c0c7cf00ad331797645e2fe1c04578ff2b680c3c.png";
import imgMapWrapper from "figma:asset/56c60ca897aa8801c1edabfbd71fa05e3627f6f0.png";
import imgAvatar3 from "figma:asset/d96267f251faded52c16f94f0ea0ddcc7da63439.png";
import imgAvatar4 from "figma:asset/5bdfcb562ac3038bab314483f1c90bf623a2a275.png";
import imgContainer from "figma:asset/6ee4d06b3c1e7b9b298fe6d85749b9b5aae87d8e.png";
import imgContainer1 from "figma:asset/ac853fb28ef8d58f4192c536df3542488555d727.png";
import imgContainer2 from "figma:asset/32f1d72aff80cbd91d91bf33bae9f45f48533118.png";
import imgThumbnail from "figma:asset/5867d7587fa89b62d894499e0566e74977d7ff85.png";
import imgThumbnail1 from "figma:asset/d1d664fef1efd866edcac4ac645131972e1209c5.png";
import imgDecorativeElement from "figma:asset/78d47d321507856345b496aaf47daf6472b089c9.png";
import { imgGroup, imgLogo, imgText, imgBottom, imgGroup1, imgGroup2, imgGroup3, imgGroup4 } from "./svg-gxc0h";

function Group() {
  return (
    <div className="absolute inset-[0_0.31%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[118.425px_35px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.425 35">
        <g id="Group">
          <path d={svgPaths.p2a02e180} fill="var(--fill-0, #00838F)" id="Vector" />
          <path d={svgPaths.p31700b00} fill="var(--fill-0, #2C3E50)" id="Vector_2" />
          <path d={svgPaths.p16e02e00} fill="var(--fill-0, #F7F7F7)" id="Vector_3" />
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
    <div className="h-[35px] overflow-clip relative shrink-0 w-[118.788px]" data-name="KXYgOMwsW3rDjln2UiIPHtcgUoc.svg">
      <ClipPathGroup />
    </div>
  );
}

function KxYgOMwsW3RDjln2UiIpHtcgUocSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-center justify-center overflow-clip px-[0.606px] relative shrink-0 w-[120px]" data-name="KXYgOMwsW3rDjln2UiIPHtcgUoc.svg fill">
      <KxYgOMwsW3RDjln2UiIpHtcgUocSvg />
    </div>
  );
}

function LinkLogoDarkLogoCompany() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Link - Logo Dark → Logo Company">
      <KxYgOMwsW3RDjln2UiIpHtcgUocSvgFill />
    </div>
  );
}

function MobileMenuWrapp() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-start justify-center relative shrink-0 w-[120px]" data-name="Mobile Menu Wrapp">
      <LinkLogoDarkLogoCompany />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">About us</p>
      </div>
    </div>
  );
}

function NavLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67px]" data-name="Nav Link">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Pricing</p>
      </div>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[52px]" data-name="Nav Link">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Portfolio</p>
      </div>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]" data-name="Nav Link">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Services</p>
      </div>
    </div>
  );
}

function NavLink3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]" data-name="Nav Link">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">All pages</p>
      </div>
    </div>
  );
}

function AllPages() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67px]" data-name="All Pages">
      <Container6 />
    </div>
  );
}

function Hp5YgS1UiLd6Mo0Urj64Pw9Bv6YSvg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="HP5ygS1UiLD6Mo0Urj64Pw9Bv6Y.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="HP5ygS1UiLD6Mo0Urj64Pw9Bv6Y.svg">
          <path d={svgPaths.p482a580} id="Vector" stroke="var(--stroke-0, #00838F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
          <path d={svgPaths.pfd56780} id="Vector_2" opacity="0.5" stroke="var(--stroke-0, #00838F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
        </g>
      </svg>
    </div>
  );
}

function Hp5YgS1UiLd6Mo0Urj64Pw9Bv6YSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="HP5ygS1UiLD6Mo0Urj64Pw9Bv6Y.svg fill">
      <Hp5YgS1UiLd6Mo0Urj64Pw9Bv6YSvg />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Hp5YgS1UiLd6Mo0Urj64Pw9Bv6YSvgFill />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Default() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Default">
      <AllPages />
      <Icon />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default />
    </div>
  );
}

function NavLinksWrapper() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-end relative shrink-0" data-name="Nav Links Wrapper">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
      <NavLink3 />
      <Container5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Let’s talk</p>
      </div>
    </div>
  );
}

function ButtonCta() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]" data-name="Button CTA">
      <Container8 />
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

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon3 />
    </div>
  );
}

function IconWrapp() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon2 />
    </div>
  );
}

function LinkDefault() {
  return (
    <div className="bg-[#2c3e50] content-stretch flex gap-[9.99px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta />
      <IconWrapp />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#2c3e50] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkDefault />
    </div>
  );
}

function BgContainer() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="BG Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[15px] pr-[15.01px] py-[15px] relative w-full">
          <MobileMenuWrapp />
          <NavLinksWrapper />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function NavDefaultBaseContainer() {
  return (
    <div className="max-w-[1330px] relative shrink-0 w-full" data-name="Nav - Default → Base Container">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[15px] relative w-full">
          <BgContainer />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="fixed content-stretch flex flex-col items-start left-0 px-[55px] py-[15px] right-0 top-0 z-50" data-name="Container">
      <NavDefaultBaseContainer />
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

function Container10() {
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
      <Container10 />
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

function Container9() {
  return (
    <div className="absolute bottom-[6931.72px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">About us</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69px]" data-name="Label">
      <Heading6 />
    </div>
  );
}

function Default1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[44px] relative shrink-0 text-[#2c3e50] text-[40px] tracking-[-1.2px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`At Finovo, we help businesses navigate `}</p>
        <p className="mb-0">{`complex finances with confidence. Our `}</p>
        <p className="mb-0">{`experts offer insights, solutions, and `}</p>
        <p>guidance for long-term success</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[790px] relative shrink-0 w-[790px]" data-name="Heading">
      <Heading3 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.595px] right-0 top-[-1.21px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">With years of experience and a truly client-</p>
        <p className="mb-0">{`focused approach, we empower businesses `}</p>
        <p>to unlock new opportunities.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">About company</p>
      </div>
    </div>
  );
}

function ButtonCta1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]" data-name="Button CTA">
      <Container11 />
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

function Icon5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function IconWrapp1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon4 />
    </div>
  );
}

function LinkDefault1() {
  return (
    <div className="absolute bg-[#017984] content-stretch flex gap-[10px] items-center justify-center left-0 pb-[17px] pt-[16px] px-[28px] rounded-[48px] top-[86.39px]" data-name="Link - Default">
      <ButtonCta1 />
      <IconWrapp1 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function ButtonWrapper() {
  return (
    <div className="h-[137.98px] max-w-[320px] overflow-clip relative shrink-0 w-[320px]" data-name="Button Wrapper">
      <Body />
      <LinkDefault1 />
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Title Wrapper">
      <Heading />
      <ButtonWrapper />
    </div>
  );
}

function TextContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[1300px] relative shrink-0 w-[1300px]" data-name="Text Content Wrapper">
      <Default1 />
      <TitleWrapper />
    </div>
  );
}

function BaseContainer() {
  return (
    <div className="content-stretch flex items-start max-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TextContentWrapper />
    </div>
  );
}

function AboutUsSection() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[900px]" data-name="About Us Section">
      <BaseContainer />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Why Choose Us</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115px]" data-name="Label">
      <Heading7 />
    </div>
  );
}

function Default2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label1 />
    </div>
  );
}

function HeadingHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Heading → Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[52.8px] relative shrink-0 text-[#2c3e50] text-[48px] tracking-[-1.92px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expert guidance, `}</p>
        <p>proven results</p>
      </div>
    </div>
  );
}

function TitleWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[22.9px] items-start max-w-[400px] relative shrink-0 w-[400px]" data-name="Title Wrapper">
      <Default2 />
      <HeadingHeading1 />
    </div>
  );
}

function WhyChooseUsImage() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Why Choose Us Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[123.81%] left-0 max-w-none top-[-12.9%] w-full" src={imgWhyChooseUsImage} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[420px] max-h-[420px] min-h-[420px] min-w-px relative rounded-[8px]" data-name="Container">
      <WhyChooseUsImage />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">01</p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[20px]" data-name="Number">
      <Heading8 />
    </div>
  );
}

function CircleWrapp() {
  return (
    <div className="aspect-[40/40] bg-[#2c3e50] content-stretch flex items-center justify-center pb-[9.21px] pt-[9.2px] relative rounded-[50px] shrink-0" data-name="Circle Wrapp">
      <Number />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Personalized `}</p>
        <p>Strategies</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[130px] relative shrink-0 w-[130px]" data-name="Heading">
      <Heading9 />
    </div>
  );
}

function TitleWrapper2() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center max-w-[230px] relative shrink-0" data-name="Title Wrapper">
      <CircleWrapp />
      <Heading1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`We craft financial solutions based on your `}</p>
        <p>unique goals and industry needs</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[330px] min-w-[330px] relative shrink-0 w-[330px]" data-name="Body">
      <Container13 />
    </div>
  );
}

function Default3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[24px] pt-[23.295px] relative shrink-0 w-full" data-name="Default">
      <TitleWrapper2 />
      <Body1 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">02</p>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[23px]" data-name="Number">
      <Heading10 />
    </div>
  );
}

function CircleWrapp1() {
  return (
    <div className="aspect-[40/40] bg-[#2c3e50] content-stretch flex items-center justify-center pb-[9.21px] pt-[9.2px] relative rounded-[50px] shrink-0" data-name="Circle Wrapp">
      <Number1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Transparent `}</p>
        <p>Processes</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[130px] relative shrink-0 w-[130px]" data-name="Heading">
      <Heading11 />
    </div>
  );
}

function TitleWrapper3() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center max-w-[230px] relative shrink-0" data-name="Title Wrapper">
      <CircleWrapp1 />
      <Heading2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Clear, honest, and genuinely data-driven `}</p>
        <p>insights for better decision-making</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[330px] min-w-[330px] relative shrink-0 w-[330px]" data-name="Body">
      <Container14 />
    </div>
  );
}

function Default4() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[24px] pt-[23.3px] relative shrink-0 w-full" data-name="Default">
      <TitleWrapper3 />
      <Body2 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">03</p>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[23px]" data-name="Number">
      <Heading12 />
    </div>
  );
}

function CircleWrapp2() {
  return (
    <div className="aspect-[40/40] bg-[#2c3e50] content-stretch flex items-center justify-center pb-[9.2px] pt-[9.21px] relative rounded-[50px] shrink-0" data-name="Circle Wrapp">
      <Number2 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Proven Track `}</p>
        <p>Record</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[130px] relative shrink-0 w-[130px]" data-name="Heading">
      <Heading13 />
    </div>
  );
}

function TitleWrapper4() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center max-w-[230px] relative shrink-0" data-name="Title Wrapper">
      <CircleWrapp2 />
      <Heading4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Extensive experience in helping businesses `}</p>
        <p>achieve sustainable growth</p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[330px] min-w-[330px] relative shrink-0 w-[330px]" data-name="Body">
      <Container15 />
    </div>
  );
}

function Default5() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[24px] pt-[23.295px] relative shrink-0 w-full" data-name="Default">
      <TitleWrapper4 />
      <Body3 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AdvantagesItemsWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Advantages Items Wrapper">
      <Default3 />
      <Default4 />
      <Default5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[20.8px] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We provide tailored financial `}</p>
        <p className="mb-0">{`solutions to help your business `}</p>
        <p>grow with confidence</p>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[250px] min-h-px min-w-px relative" data-name="Body">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Learn more about us</p>
      </div>
    </div>
  );
}

function ButtonCta2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="Button CTA">
      <Container18 />
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

function Icon7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon7 />
    </div>
  );
}

function IconWrapp2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon6 />
    </div>
  );
}

function LinkDefault2() {
  return (
    <div className="bg-[#017984] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta2 />
      <IconWrapp2 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkDefault2 />
    </div>
  );
}

function ButtonWrapper1() {
  return (
    <div className="h-[62.39px] relative shrink-0 w-full" data-name="Button Wrapper">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Body4 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function AdvantagesItemsWrapper() {
  return (
    <div className="h-full relative shrink-0 w-[780px]" data-name="Advantages Items Wrapper">
      <div className="content-stretch flex flex-col items-start justify-between pb-[0.01px] pl-[120px] relative size-full">
        <AdvantagesItemsWrapper1 />
        <ButtonWrapper1 />
      </div>
    </div>
  );
}

function AdvantagesItemsWrapperAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Advantages Items Wrapper:align-stretch">
      <AdvantagesItemsWrapper />
    </div>
  );
}

function AdvantagesWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Advantages Wrapper">
      <Container12 />
      <div className="flex flex-row items-center self-stretch">
        <AdvantagesItemsWrapperAlignStretch />
      </div>
    </div>
  );
}

function BaseContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start max-w-[1330px] min-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TitleWrapper1 />
      <AdvantagesWrapper />
    </div>
  );
}

function WhyChooseUsSection() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[2039.58px]" data-name="Why Choose Us Section">
      <BaseContainer1 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Tailored Solutions</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="Label">
      <Heading14 />
    </div>
  );
}

function Default6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#f7f7f7] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label2 />
    </div>
  );
}

function HeadingHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-[380px]" data-name="Heading → Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[52.8px] relative shrink-0 text-[#f7f7f7] text-[48px] tracking-[-1.92px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Our expertise, `}</p>
        <p>your success</p>
      </div>
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[22.905px] items-start relative shrink-0 w-full" data-name="Label Wrapper">
      <Default6 />
      <HeadingHeading2 />
    </div>
  );
}

function SolutionImage() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Solution Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[128.27%] left-0 max-w-none top-[-10.77%] w-full" src={imgSolutionImage} />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[270px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <SolutionImage />
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-[390px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`We offer a comprehensive range of financial services `}</p>
        <p className="mb-0">{`designed to help your business grow, stay compliant, `}</p>
        <p>{`and thrive in a market `}</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Explore all services</p>
      </div>
    </div>
  );
}

function ButtonCta3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Button CTA">
      <Container20 />
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

function Icon9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon9 />
    </div>
  );
}

function IconWrapp3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon8 />
    </div>
  );
}

function LinkDefault3() {
  return (
    <div className="bg-[#017984] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta3 />
      <IconWrapp3 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function ButtonWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[13.2px] relative shrink-0 w-full" data-name="Button Wrapper">
      <LinkDefault3 />
    </div>
  );
}

function BottomContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[18.8px] items-start relative shrink-0 w-full" data-name="Bottom Content Wrapper">
      <Container19 />
      <Body5 />
      <ButtonWrapper2 />
    </div>
  );
}

function TitleWrapper5() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[520px]" data-name="Title Wrapper">
      <LabelWrapper />
      <BottomContentWrapper />
    </div>
  );
}

function TitleHeading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Title → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Financial Planning and Strategy</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Financial Planning and Strategy</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.8px] w-[331px]" data-name="Title">
      <Heading5 />
    </div>
  );
}

function TitleWrapper6() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[590px]" data-name="Title Wrapper">
      <TitleHeading />
      <Title />
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

function Icon11() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon11 />
    </div>
  );
}

function IconWrapp4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon10 />
    </div>
  );
}

function Circle() {
  return (
    <div className="aspect-[50/50] bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0" data-name="Circle">
      <IconWrapp4 />
    </div>
  );
}

function LinkDefault4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[30px] relative shrink-0 w-full" data-name="Link - Default">
      <TitleWrapper6 />
      <Circle />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TitleHeading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Title → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Tax Optimization and Compliance</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Tax Optimization and Compliance</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.8px] w-[353px]" data-name="Title">
      <Heading15 />
    </div>
  );
}

function TitleWrapper7() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[590px]" data-name="Title Wrapper">
      <TitleHeading1 />
      <Title1 />
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

function Icon13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill5 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon13 />
    </div>
  );
}

function IconWrapp5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon12 />
    </div>
  );
}

function Circle1() {
  return (
    <div className="aspect-[50/50] bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0" data-name="Circle">
      <IconWrapp5 />
    </div>
  );
}

function LinkDefault5() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[30px] relative shrink-0 w-full" data-name="Link - Default">
      <TitleWrapper7 />
      <Circle1 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TitleHeading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Title → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Risk Management and Investment</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Risk Management and Investment</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.8px] w-[359px]" data-name="Title">
      <Heading16 />
    </div>
  );
}

function TitleWrapper8() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[590px]" data-name="Title Wrapper">
      <TitleHeading2 />
      <Title2 />
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

function Icon15() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill6 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon15 />
    </div>
  );
}

function IconWrapp6() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon14 />
    </div>
  );
}

function Circle2() {
  return (
    <div className="aspect-[50/50] bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0" data-name="Circle">
      <IconWrapp6 />
    </div>
  );
}

function LinkDefault6() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[30px] relative shrink-0 w-full" data-name="Link - Default">
      <TitleWrapper8 />
      <Circle2 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TitleHeading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Title → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Strategic Mergers Advisory Services</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Strategic Mergers Advisory Services</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.8px] w-[381px]" data-name="Title">
      <Heading17 />
    </div>
  );
}

function TitleWrapper9() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[590px]" data-name="Title Wrapper">
      <TitleHeading3 />
      <Title3 />
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

function Icon17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill7 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon17 />
    </div>
  );
}

function IconWrapp7() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon16 />
    </div>
  );
}

function Circle3() {
  return (
    <div className="aspect-[50/50] bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0" data-name="Circle">
      <IconWrapp7 />
    </div>
  );
}

function LinkDefault7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[30px] relative shrink-0 w-full" data-name="Link - Default">
      <TitleWrapper9 />
      <Circle3 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TitleHeading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Title → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Smart Business Cash Flow Solutions</p>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Smart Business Cash Flow Solutions</p>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.8px] w-[382px]" data-name="Title">
      <Heading18 />
    </div>
  );
}

function TitleWrapper10() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[590px]" data-name="Title Wrapper">
      <TitleHeading4 />
      <Title4 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg8() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg8 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill8 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon19 />
    </div>
  );
}

function IconWrapp8() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon18 />
    </div>
  );
}

function Circle4() {
  return (
    <div className="aspect-[50/50] bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0" data-name="Circle">
      <IconWrapp8 />
    </div>
  );
}

function LinkDefault8() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[30px] relative shrink-0 w-full" data-name="Link - Default">
      <TitleWrapper10 />
      <Circle4 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TitleHeading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Title → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Valuation and Financial Analysis</p>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[28.8px]">Valuation and Financial Analysis</p>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.8px] w-[334px]" data-name="Title">
      <Heading19 />
    </div>
  );
}

function TitleWrapper11() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[590px]" data-name="Title Wrapper">
      <TitleHeading5 />
      <Title5 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg9() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg9 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill9 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon21 />
    </div>
  );
}

function IconWrapp9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon20 />
    </div>
  );
}

function Circle5() {
  return (
    <div className="aspect-[50/50] bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0" data-name="Circle">
      <IconWrapp9 />
    </div>
  );
}

function LinkDefault9() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[30px] relative shrink-0 w-full" data-name="Link - Default">
      <TitleWrapper11 />
      <Circle5 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const tabs = [
    { component: LinkDefault4, title: "Financial Planning and Strategy", info: "Comprehensive strategy sessions to align your business goals with financial reality." },
    { component: LinkDefault5, title: "Tax Optimization and Compliance", info: "Navigating complex tax laws to minimize liabilities and ensure full compliance." },
    { component: LinkDefault6, title: "Investment and Portfolio Advisory", info: "Tailored investment advice to grow your assets and manage risks effectively." },
    { component: LinkDefault7, title: "Risk Management and Insurance", info: "Identifying potential risks and providing robust insurance solutions for protection." },
    { component: LinkDefault8, title: "Mergers and Acquisitions Support", info: "Expert guidance through the entire M&A process for seamless transitions." },
    { component: LinkDefault9, title: "Retirement and Legacy Planning", info: "Securing your future and ensuring your legacy is preserved for generations." },
  ];

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[660px]" data-name="Container">
      {tabs.map((tab, index) => (
        <div 
          key={index} 
          className="w-full cursor-pointer"
          onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
        >
          <motion.div
            initial={false}
            animate={{ 
              backgroundColor: expandedIndex === index ? "rgba(255,255,255,0.05)" : "transparent",
              paddingBottom: expandedIndex === index ? "20px" : "0px"
            }}
            className="w-full rounded-lg overflow-hidden transition-all duration-300"
          >
            <tab.component />
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-[20px] pb-[20px]"
                >
                  <p className="text-[#b0b0b0] text-[16px] leading-[1.6] font-['Work_Sans:Regular',sans-serif]">
                    {tab.info}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function BaseContainer2() {
  return (
    <div className="content-stretch flex gap-[120px] items-start max-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TitleWrapper5 />
      <Container21 />
    </div>
  );
}

function SolutionsSection() {
  return (
    <div className="absolute bg-[#2c3e50] content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[3934.56px]" data-name="Solutions Section">
      <div className="absolute inset-0" data-name="BG Gradient" style={{ backgroundImage: "linear-gradient(235deg, rgba(44, 62, 80, 0) 0%, rgb(44, 62, 80) 50%)" }} />
      <BaseContainer2 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Meet Our Team</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113px]" data-name="Label">
      <Heading20 />
    </div>
  );
}

function Default7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default7 />
    </div>
  );
}

function HeadingHeading3() {
  return (
    <div className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[105.59px] leading-[0] relative shrink-0 text-[#2c3e50] text-[48px] text-center tracking-[-1.92px] w-full" data-name="Heading → Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[53px] justify-center left-[calc(50%+4.02px)] top-[25.5px] w-[403.937px]">
        <p className="leading-[52.8px]">{`Flexible options for `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[53px] justify-center left-[calc(50%+1.07px)] top-[78.29px] w-[295.914px]">
        <p className="leading-[52.8px]">your business</p>
      </div>
    </div>
  );
}

function TitleWrapper12() {
  return (
    <div className="content-stretch flex flex-col gap-[24.01px] items-center max-w-[400px] overflow-clip relative shrink-0 w-[400px]" data-name="Title Wrapper">
      <Container22 />
      <HeadingHeading3 />
    </div>
  );
}

function HeadingHeading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading → Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[28px] tracking-[-1.12px] w-full">
        <p className="leading-[33.6px]">Basic</p>
      </div>
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#343434] text-[16px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`For startups and small businesses looking for `}</p>
        <p>essential financial support</p>
      </div>
    </div>
  );
}

function TitleWrapper13() {
  return (
    <div className="content-stretch flex flex-col gap-[8.9px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading4 />
      <Body6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[45px] tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[45px]">$99</p>
      </div>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[81px]" data-name="Price">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">/month</p>
      </div>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Price">
      <Container25 />
    </div>
  );
}

function PaddingBottom() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[3px] relative shrink-0" data-name="Padding Bottom">
      <Price1 />
    </div>
  );
}

function PriceWrapper() {
  return (
    <div className="content-stretch flex gap-[2px] items-end pb-[24px] relative shrink-0 w-full" data-name="Price Wrapper">
      <Price />
      <PaddingBottom />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon23 />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon22 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">{`Financial Reports & Insights`}</p>
      </div>
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container26 />
    </div>
  );
}

function Default8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper />
      <Body7 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg1 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill1 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon25 />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon24 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Expense Tracking</p>
      </div>
    </div>
  );
}

function Body8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container27 />
    </div>
  );
}

function Default9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper1 />
      <Body8 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg2 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill2 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon27 />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Email Support</p>
      </div>
    </div>
  );
}

function Body9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container28 />
    </div>
  );
}

function Default10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper2 />
      <Body9 />
    </div>
  );
}

function ListItemsWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="List Items Wrapper">
      <Default8 />
      <Default9 />
      <Default10 />
    </div>
  );
}

function CardContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card Content Wrapper">
      <TitleWrapper13 />
      <PriceWrapper />
      <ListItemsWrapper />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Get started</p>
      </div>
    </div>
  );
}

function ButtonCta4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]" data-name="Button CTA">
      <Container29 />
    </div>
  );
}

function LiUVtGryv7NmYoAbZwI8G2HFz4Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="liUVtGRYV7NMYoABZwI8g2hFz4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="liUVtGRYV7NMYoABZwI8g2hFz4.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, #2C3E50)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, #2C3E50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LiUVtGryv7NmYoAbZwI8G2HFz4SvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="liUVtGRYV7NMYoABZwI8g2hFz4.svg fill">
      <LiUVtGryv7NmYoAbZwI8G2HFz4Svg />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <LiUVtGryv7NmYoAbZwI8G2HFz4SvgFill />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon29 />
    </div>
  );
}

function IconWrapp10() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon28 />
    </div>
  );
}

function LinkDefault10() {
  return (
    <div className="relative rounded-[48px] shrink-0 w-full" data-name="Link - Default">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative w-full">
          <ButtonCta4 />
          <IconWrapp10 />
          <div className="absolute inset-0 rounded-[48px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#2c3e50] border-solid inset-0 pointer-events-none rounded-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopOpacityCard() {
  return (
    <div className="bg-[rgba(44,62,80,0.15)] min-h-[550px] relative rounded-[8px] shrink-0 w-full" data-name="Desktop Opacity Card">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] pb-[30px] pt-[29px] px-[30px] relative w-full">
          <CardContentWrapper />
          <LinkDefault10 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-name="Container">
      <DesktopOpacityCard />
    </div>
  );
}

function HeadingHeading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading → Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[28px] tracking-[-1.12px] w-full">
        <p className="leading-[33.6px]">Business</p>
      </div>
    </div>
  );
}

function Body10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`For growing businesses needing deeper financial `}</p>
        <p>insights and support</p>
      </div>
    </div>
  );
}

function TitleWrapper14() {
  return (
    <div className="content-stretch flex flex-col gap-[8.9px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading5 />
      <Body10 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[45px] tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[45px]">$249</p>
      </div>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[104px]" data-name="Price">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">/month</p>
      </div>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Price">
      <Container32 />
    </div>
  );
}

function PaddingBottom1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[3px] relative shrink-0" data-name="Padding Bottom">
      <Price3 />
    </div>
  );
}

function PriceWrapper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-end pb-[24px] relative shrink-0 w-full" data-name="Price Wrapper">
      <Price2 />
      <PaddingBottom1 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg3 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill3 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon31 />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon30 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Advanced Financial Analytics</p>
      </div>
    </div>
  );
}

function Body11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container33 />
    </div>
  );
}

function Default11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper3 />
      <Body11 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg4 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill4 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon33 />
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Bi-Weekly Consultations</p>
      </div>
    </div>
  );
}

function Body12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container34 />
    </div>
  );
}

function Default12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper4 />
      <Body12 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg5 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill5 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon35 />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Tax Planning Assistance</p>
      </div>
    </div>
  );
}

function Body13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container35 />
    </div>
  );
}

function Default13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper5 />
      <Body13 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg6 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill6 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon37 />
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon36 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">{`Priority Email & Chat Support`}</p>
      </div>
    </div>
  );
}

function Body14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container36 />
    </div>
  );
}

function Default14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper6 />
      <Body14 />
    </div>
  );
}

function ListItemsWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="List Items Wrapper">
      <Default11 />
      <Default12 />
      <Default13 />
      <Default14 />
    </div>
  );
}

function CardContentWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card Content Wrapper">
      <TitleWrapper14 />
      <PriceWrapper1 />
      <ListItemsWrapper1 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Get started</p>
      </div>
    </div>
  );
}

function ButtonCta5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]" data-name="Button CTA">
      <Container37 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg10() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg10 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill10 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon39 />
    </div>
  );
}

function IconWrapp11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon38 />
    </div>
  );
}

function LinkDefault11() {
  return (
    <div className="relative rounded-[48px] shrink-0 w-full" data-name="Link - Default">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative w-full">
          <ButtonCta5 />
          <IconWrapp11 />
          <div className="absolute inset-0 rounded-[48px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopGreenCard() {
  return (
    <div className="bg-[#2c3e50] min-h-[550px] relative rounded-[8px] shrink-0 w-full" data-name="Desktop Green Card">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] pb-[30px] pt-[29px] px-[30px] relative w-full">
          <CardContentWrapper1 />
          <LinkDefault11 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-name="Container">
      <DesktopGreenCard />
    </div>
  );
}

function HeadingHeading6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading → Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[28px] tracking-[-1.12px] w-full">
        <p className="leading-[33.6px]">Premium</p>
      </div>
    </div>
  );
}

function Body15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#343434] text-[16px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`For scaling businesses that need a full-service `}</p>
        <p>financial management</p>
      </div>
    </div>
  );
}

function TitleWrapper15() {
  return (
    <div className="content-stretch flex flex-col gap-[8.9px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading6 />
      <Body15 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[45px] tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[45px]">$499</p>
      </div>
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[107px]" data-name="Price">
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">/month</p>
      </div>
    </div>
  );
}

function Price5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Price">
      <Container40 />
    </div>
  );
}

function PaddingBottom2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[3px] relative shrink-0" data-name="Padding Bottom">
      <Price5 />
    </div>
  );
}

function PriceWrapper2() {
  return (
    <div className="content-stretch flex gap-[2px] items-end pb-[24px] relative shrink-0 w-full" data-name="Price Wrapper">
      <Price4 />
      <PaddingBottom2 />
      <div aria-hidden="true" className="absolute border-[rgba(176,176,176,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg7 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill7 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon41 />
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Full-Service Financial Consulting</p>
      </div>
    </div>
  );
}

function Body16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container41 />
    </div>
  );
}

function Default15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper7 />
      <Body16 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg8 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill8 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon43 />
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon42 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Weekly Strategy Sessions</p>
      </div>
    </div>
  );
}

function Body17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container42 />
    </div>
  );
}

function Default16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper8 />
      <Body17 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg9 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill9 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon45 />
    </div>
  );
}

function IconWrapper9() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Dedicated Account Manager</p>
      </div>
    </div>
  );
}

function Body18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container43 />
    </div>
  );
}

function Default17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper9 />
      <Body18 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg10 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill10 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon47 />
    </div>
  );
}

function IconWrapper10() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">{`Tax & Compliance Support`}</p>
      </div>
    </div>
  );
}

function Body19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container44 />
    </div>
  );
}

function Default18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper10 />
      <Body19 />
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvg11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DUIhDOEgvTllIQbGBgi2uMqNIM.svg">
          <path d="M4 12.9L7.143 16.5L15 7.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bb80340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DuIhDoEgvTllIQbGBgi2UMqNimSvgFill11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="DUIhDOEgvTllIQbGBgi2uMqNIM.svg fill">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvg11 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <DuIhDoEgvTllIQbGBgi2UMqNimSvgFill11 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Icon49 />
    </div>
  );
}

function IconWrapper11() {
  return (
    <div className="aspect-[24/24] bg-[#017984] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Wrapper">
      <Icon48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Priority Support</p>
      </div>
    </div>
  );
}

function Body20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <Container45 />
    </div>
  );
}

function Default19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <IconWrapper11 />
      <Body20 />
    </div>
  );
}

function ListItemsWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="List Items Wrapper">
      <Default15 />
      <Default16 />
      <Default17 />
      <Default18 />
      <Default19 />
    </div>
  );
}

function CardContentWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card Content Wrapper">
      <TitleWrapper15 />
      <PriceWrapper2 />
      <ListItemsWrapper2 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Get started</p>
      </div>
    </div>
  );
}

function ButtonCta6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]" data-name="Button CTA">
      <Container46 />
    </div>
  );
}

function LiUVtGryv7NmYoAbZwI8G2HFz4Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="liUVtGRYV7NMYoABZwI8g2hFz4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="liUVtGRYV7NMYoABZwI8g2hFz4.svg">
          <path d={svgPaths.p17d9eef0} fill="var(--fill-0, #2C3E50)" id="Vector" opacity="0.5" />
          <path d="M5 2H14V11" id="Vector_2" stroke="var(--stroke-0, #2C3E50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LiUVtGryv7NmYoAbZwI8G2HFz4SvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="liUVtGRYV7NMYoABZwI8g2hFz4.svg fill">
      <LiUVtGryv7NmYoAbZwI8G2HFz4Svg1 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <LiUVtGryv7NmYoAbZwI8G2HFz4SvgFill1 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon51 />
    </div>
  );
}

function IconWrapp12() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon50 />
    </div>
  );
}

function LinkDefault12() {
  return (
    <div className="relative rounded-[48px] shrink-0 w-full" data-name="Link - Default">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative w-full">
          <ButtonCta6 />
          <IconWrapp12 />
          <div className="absolute inset-0 rounded-[48px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#2c3e50] border-solid inset-0 pointer-events-none rounded-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopOpacityCard1() {
  return (
    <div className="bg-[rgba(44,62,80,0.15)] min-h-[550px] relative rounded-[8px] shrink-0 w-full" data-name="Desktop Opacity Card">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] pb-[30px] pt-[29px] px-[30px] relative w-full">
          <CardContentWrapper2 />
          <LinkDefault12 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-name="Container">
      <DesktopOpacityCard1 />
    </div>
  );
}

function PricingCardsWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Pricing Cards Wrapper">
      <Container23 />
      <Container30 />
      <Container38 />
    </div>
  );
}

function BaseContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center max-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TitleWrapper12 />
      <PricingCardsWrapper />
    </div>
  );
}

function PricingSection() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[4834.56px]" data-name="Pricing Section">
      <BaseContainer3 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Get started today</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Label">
      <Heading21 />
    </div>
  );
}

function Default20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label4 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default20 />
    </div>
  );
}

function HeadingHeading7() {
  return (
    <div className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[105.59px] relative shrink-0 text-[#2c3e50] text-[48px] tracking-[-1.92px] w-full" data-name="Heading → Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[53px] justify-center left-[calc(50%+4px)] top-[25.5px] w-[607.008px]">
        <p className="leading-[52.8px]">{`Take control of your financial `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[53px] justify-center left-[calc(50%+1px)] top-[78.3px] w-[262.162px]">
        <p className="leading-[52.8px]">future today</p>
      </div>
    </div>
  );
}

function Body21() {
  return (
    <div className="font-['Work_Sans:Regular',sans-serif] font-normal h-[41.59px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-[500px]" data-name="Body">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+2.44px)] top-[9.5px] w-[488.78px]">
        <p className="leading-[20.8px]">{`Partner with experts who understand your goals and help you achieve `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+0.5px)] top-[30.29px] w-[412.001px]">
        <p className="leading-[20.8px]">lasting success. Let’s build a strategy tailored to your needs</p>
      </div>
    </div>
  );
}

function TitleWrapper16() {
  return (
    <div className="content-stretch flex flex-col gap-[20.01px] items-center leading-[0] relative shrink-0 text-center w-full" data-name="Title Wrapper">
      <HeadingHeading7 />
      <Body21 />
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[600px] relative shrink-0 w-full" data-name="Label Wrapper">
      <Container47 />
      <TitleWrapper16 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Contact us</p>
      </div>
    </div>
  );
}

function ButtonCta7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[82px]" data-name="Button CTA">
      <Container49 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg11() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg11 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill11 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon53 />
    </div>
  );
}

function IconWrapp13() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon52 />
    </div>
  );
}

function LinkDefault13() {
  return (
    <div className="bg-[#2c3e50] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta7 />
      <IconWrapp13 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#2c3e50] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkDefault13 />
    </div>
  );
}

function BaseContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1330px] min-w-[1330px] px-[365px] relative shrink-0" data-name="Base Container">
      <LabelWrapper1 />
      <Container48 />
    </div>
  );
}

function SectionDesktop() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[6746.75px]" data-name="Section - Desktop">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.85%] left-0 max-w-none top-[-18.02%] w-full" src={imgSectionDesktop} />
      </div>
      <BaseContainer4 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute inset-0 rounded-[40px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="Avatar">
      <Avatar1 />
      <div className="absolute border-2 border-solid border-white inset-0 rounded-[40px]" data-name="Border" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute inset-0 rounded-[40px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar1} />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute aspect-[40/40] bottom-0 left-[30px] overflow-clip rounded-[40px] top-0" data-name="Avatar">
      <Avatar3 />
      <div className="absolute border-2 border-solid border-white left-0 rounded-[40px] size-[40px] top-0" data-name="Border" />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="absolute inset-0 rounded-[40px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar2} />
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="absolute aspect-[40/40] bottom-0 left-[60px] overflow-clip rounded-[40px] top-0" data-name="Avatar">
      <Avatar5 />
      <div className="absolute border-2 border-solid border-white left-0 rounded-[40px] size-[40px] top-0" data-name="Border" />
    </div>
  );
}

function AvatarsWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]" data-name="Avatars Wrapper">
      <Avatar />
      <Avatar2 />
      <Avatar4 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[24px]">100+</p>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-206px)] top-1/2 w-[53px]" data-name="Number">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Satisfied clients</p>
      </div>
    </div>
  );
}

function Body22() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[57.38px] right-[-0.01px] top-[calc(50%-0.51px)]" data-name="Body">
      <Container51 />
    </div>
  );
}

function TextContentWrapper2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text Content Wrapper">
      <Number3 />
      <Body22 />
    </div>
  );
}

function TopContentWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Top Content Wrapper">
      <AvatarsWrapper />
      <TextContentWrapper2 />
    </div>
  );
}

function HeadingHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 1">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[79.2px] relative shrink-0 text-[#f7f7f7] text-[72px] tracking-[-2.88px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Smart solution for `}</p>
        <p>a stronger future</p>
      </div>
    </div>
  );
}

function Body23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-[380px]" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#f7f7f7] text-[16px] tracking-[-0.96px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`We provide expert accounting and financial consulting `}</p>
        <p>to help your business grow with confidence</p>
      </div>
    </div>
  );
}

function TitleWrapper17() {
  return (
    <div className="content-stretch flex flex-col gap-[22.89px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading />
      <Body23 />
    </div>
  );
}

function TextContentWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[585px] relative shrink-0 w-[585px]" data-name="Text Content Wrapper">
      <TopContentWrapper />
      <TitleWrapper17 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Get started</p>
      </div>
    </div>
  );
}

function ButtonCta8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]" data-name="Button CTA">
      <Container52 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg12() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg12 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill12 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon55 />
    </div>
  );
}

function IconWrapp14() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon54 />
    </div>
  );
}

function LinkDefault14() {
  return (
    <div className="bg-[#017984] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta8 />
      <IconWrapp14 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Explore our services</p>
      </div>
    </div>
  );
}

function ButtonCta9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="Button CTA">
      <Container54 />
    </div>
  );
}

function LinkDefault15() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[17px] pt-[16px] px-[24px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta9 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkDefault15 />
    </div>
  );
}

function ButtonsWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Buttons Wrapper">
      <LinkDefault14 />
      <Container53 />
    </div>
  );
}

function BaseContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1330px] min-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TextContentWrapper1 />
      <ButtonsWrapper />
    </div>
  );
}

function HeroBannerSection() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-0 min-h-[900px] pb-[120px] pt-[392.41px] px-[55px] right-0 top-0" data-name="Hero Banner Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.83%] left-0 max-w-none top-[-0.35%] w-full" src={imgHeroBannerSection} />
      </div>
      <div className="absolute inset-0" data-name="BG Gradient" style={{ backgroundImage: "linear-gradient(99.9937deg, rgba(0, 0, 0, 0.7) 33%, rgba(30, 30, 30, 0.1) 53%)" }} />
      <BaseContainer5 />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="absolute inset-0 rounded-[60px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar3} />
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="absolute left-[75px] overflow-clip rounded-[60px] size-[60px] top-[140px]" data-name="Avatar">
      <Avatar7 />
      <div className="absolute border-2 border-solid border-white left-0 rounded-[60px] size-[60px] top-0" data-name="Border" />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="absolute inset-0 rounded-[60px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar4} />
      </div>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="absolute bottom-[80px] overflow-clip right-[100px] rounded-[60px] size-[60px]" data-name="Avatar">
      <Avatar9 />
      <div className="absolute border-2 border-solid border-white left-0 rounded-[60px] size-[60px] top-0" data-name="Border" />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="absolute inset-0 rounded-[60px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar1} />
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="absolute overflow-clip right-[250px] rounded-[60px] size-[60px] top-[60px]" data-name="Avatar">
      <Avatar11 />
      <div className="absolute border-2 border-solid border-white left-0 rounded-[60px] size-[60px] top-0" data-name="Border" />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="absolute inset-0 rounded-[60px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar} />
      </div>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="absolute left-[25px] overflow-clip rounded-[60px] size-[60px] top-[80px]" data-name="Avatar">
      <Avatar13 />
      <div className="absolute border-2 border-solid border-white left-0 rounded-[60px] size-[60px] top-0" data-name="Border" />
    </div>
  );
}

function MapWrapper() {
  return (
    <div className="h-[441.38px] relative shrink-0 w-[715px]" data-name="Map Wrapper">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[81.63%] left-0 max-w-none top-[9.19%] w-full" src={imgMapWrapper} />
      </div>
      <Avatar6 />
      <Avatar8 />
      <Avatar10 />
      <Avatar12 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Global Trust, Proven Results</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[227px]" data-name="Label">
      <Heading22 />
    </div>
  );
}

function Default21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label5 />
    </div>
  );
}

function HeadingHeading8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-full" data-name="Heading → Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[52.8px] relative shrink-0 text-[#2c3e50] text-[48px] tracking-[-1.92px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our valued clients `}</p>
        <p>around the world</p>
      </div>
    </div>
  );
}

function Body24() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Discover the global reach of our financial expertise. We proudly `}</p>
        <p className="mb-0">{`serve businesses across multiple regions, helping them achieve `}</p>
        <p>financial success with tailored solutions</p>
      </div>
    </div>
  );
}

function TitleWrapper18() {
  return (
    <div className="content-stretch flex flex-col gap-[18.795px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading8 />
      <Body24 />
    </div>
  );
}

function LabelWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[22.905px] items-start relative shrink-0 w-full" data-name="Label Wrapper">
      <Default21 />
      <TitleWrapper18 />
    </div>
  );
}

function HeadingHeading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Satisfied Clients</p>
      </div>
    </div>
  );
}

function Default22() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Default">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[50px] tracking-[-1.5px] whitespace-nowrap">
        <p className="leading-[50px]">50%</p>
      </div>
      <HeadingHeading9 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224.5px]" data-name="Container">
      <Default22 />
    </div>
  );
}

function HeadingHeading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Countries Served</p>
      </div>
    </div>
  );
}

function Default23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Default">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[50px] tracking-[-1.5px] whitespace-nowrap">
        <p className="leading-[50px]">10+</p>
      </div>
      <HeadingHeading10 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224.5px]" data-name="Container">
      <Default23 />
    </div>
  );
}

function StatisticsWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[10px] relative shrink-0 w-full" data-name="Statistics Wrapper">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">{` Explore our clients`}</p>
      </div>
    </div>
  );
}

function ButtonCta10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Button CTA">
      <Container57 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg13() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg13 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill13 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon57 />
    </div>
  );
}

function IconWrapp15() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon56 />
    </div>
  );
}

function LinkDefault16() {
  return (
    <div className="bg-[#017984] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta10 />
      <IconWrapp15 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function TextContentWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start pl-[120px] relative shrink-0" data-name="Text Content Wrapper">
      <LabelWrapper2 />
      <StatisticsWrapper />
      <LinkDefault16 />
    </div>
  );
}

function BaseContainer6() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <MapWrapper />
      <TextContentWrapper3 />
    </div>
  );
}

function OurClientsSection() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[1358.2px]" data-name="Our Clients Section">
      <BaseContainer6 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Meet Our Team</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113px]" data-name="Label">
      <Heading23 />
    </div>
  );
}

function Default24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label6 />
    </div>
  );
}

function HeadingHeading11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] relative shrink-0 w-full" data-name="Heading → Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[52.8px] relative shrink-0 text-[#2c3e50] text-[48px] tracking-[-1.92px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Trusted experts `}</p>
        <p className="mb-0">{`dedicated to your `}</p>
        <p>financial growth</p>
      </div>
    </div>
  );
}

function LabelWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[22.795px] items-start relative shrink-0 w-full" data-name="Label Wrapper">
      <Default24 />
      <HeadingHeading11 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">View all team</p>
      </div>
    </div>
  );
}

function ButtonCta11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="Button CTA">
      <Container58 />
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg14() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg14 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill14 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon59 />
    </div>
  );
}

function IconWrapp16() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon58 />
    </div>
  );
}

function LinkDefault17() {
  return (
    <div className="bg-[#017984] content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[16px] px-[28px] relative rounded-[48px] shrink-0" data-name="Link - Default">
      <ButtonCta11 />
      <IconWrapp16 />
      <div className="absolute inset-0 rounded-[48px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

function TitleWrapper19() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[420px] min-w-[420px] shrink-0 sticky top-0" data-name="Title Wrapper">
      <LabelWrapper3 />
      <LinkDefault17 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-0 w-full" src={imgAvatar2} />
      </div>
    </div>
  );
}

function LinkAvatarWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Link - Avatar Wrapper">
      <Container61 />
    </div>
  );
}

function HeadingHeading12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[28.8px]">Sarah Mitchell</p>
      </div>
    </div>
  );
}

function Body25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Senior Tax Consultant</p>
      </div>
    </div>
  );
}

function TitleWrapper20() {
  return (
    <div className="content-stretch flex flex-col gap-[6.99px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading12 />
      <Body25 />
    </div>
  );
}

function Default25() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Default">
      <LinkAvatarWrapper />
      <TitleWrapper20 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-w-[320px] top-0 w-[320px]" data-name="Container">
      <Default25 />
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-0 w-full" src={imgContainer} />
      </div>
    </div>
  );
}

function LinkAvatarWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Link - Avatar Wrapper">
      <Container63 />
    </div>
  );
}

function HeadingHeading13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[28.8px]">Daniel Wright</p>
      </div>
    </div>
  );
}

function Body26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Head of Investment Strategy</p>
      </div>
    </div>
  );
}

function TitleWrapper21() {
  return (
    <div className="content-stretch flex flex-col gap-[6.99px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading13 />
      <Body26 />
    </div>
  );
}

function Default26() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Default">
      <LinkAvatarWrapper1 />
      <TitleWrapper21 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[340px] min-w-[320px] top-0 w-[320px]" data-name="Container">
      <Default26 />
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.76%] max-w-none top-0 w-[115.52%]" src={imgContainer1} />
      </div>
    </div>
  );
}

function LinkAvatarWrapper2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Link - Avatar Wrapper">
      <Container65 />
    </div>
  );
}

function HeadingHeading14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[28.8px]">Emily Thompson</p>
      </div>
    </div>
  );
}

function Body27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Chief Financial Officer</p>
      </div>
    </div>
  );
}

function TitleWrapper22() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading14 />
      <Body27 />
    </div>
  );
}

function Default27() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Default">
      <LinkAvatarWrapper2 />
      <TitleWrapper22 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-w-[320px] top-[409.59px] w-[320px]" data-name="Container">
      <Default27 />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[125.69%] left-0 max-w-none top-0 w-full" src={imgContainer2} />
      </div>
    </div>
  );
}

function LinkAvatarWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Link - Avatar Wrapper">
      <Container67 />
    </div>
  );
}

function HeadingHeading15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[28.8px]">Michael Carter</p>
      </div>
    </div>
  );
}

function Body28() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">{`Founder & CEO`}</p>
      </div>
    </div>
  );
}

function TitleWrapper23() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <HeadingHeading15 />
      <Body28 />
    </div>
  );
}

function Default28() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start overflow-clip relative shrink-0 w-full" data-name="Default">
      <LinkAvatarWrapper3 />
      <TitleWrapper23 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[340px] min-w-[320px] top-[409.59px] w-[320px]" data-name="Container">
      <Default28 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[787.19px] max-w-[660px] relative shrink-0 w-[660px]" data-name="Container">
      <Container60 />
      <Container62 />
      <Container64 />
      <Container66 />
    </div>
  );
}

function BaseContainer7() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TitleWrapper19 />
      <Container59 />
    </div>
  );
}

function OurTeamSection() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-[220px] top-[2907.38px]" data-name="Our Team Section">
      <BaseContainer7 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[14px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[18.2px]">Financial Insights</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Label">
      <Heading24 />
    </div>
  );
}

function Default29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Default">
      <div className="bg-[#2c3e50] h-px shrink-0 w-[35px]" data-name="Line" />
      <Label7 />
    </div>
  );
}

function HeadingHeading16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Heading → Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[52.8px] relative shrink-0 text-[#2c3e50] text-[48px] tracking-[-1.92px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expert tips and emerging `}</p>
        <p>industry trends</p>
      </div>
    </div>
  );
}

function TitleWrapper24() {
  return (
    <div className="content-stretch flex flex-col gap-[22.9px] items-start max-w-[550px] overflow-clip relative shrink-0 w-[550px]" data-name="Title Wrapper">
      <Default29 />
      <HeadingHeading16 />
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="flex-[1_0_0] h-[250px] min-h-px min-w-px relative" data-name="Thumbnail">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.91%] left-0 max-w-none top-[-1.47%] w-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function ThumbnailWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Thumbnail />
    </div>
  );
}

function TitleWrappHeadingHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-full" data-name="Title Wrapp → Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[28.8px] relative shrink-0 text-[#2c3e50] text-[24px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The future of modern financial `}</p>
        <p>consulting</p>
      </div>
    </div>
  );
}

function Body29() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Explore emerging trends shaping the world of finance `}</p>
        <p>and consulting</p>
      </div>
    </div>
  );
}

function TitleWrapper25() {
  return (
    <div className="content-stretch flex flex-col gap-[8.9px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <TitleWrappHeadingHeading />
      <Body29 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">Read more</p>
      </div>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="CTA Button">
      <Container70 />
    </div>
  );
}

function ButtonDefault() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] pt-[1.09px] relative shrink-0" data-name="Button - Default">
      <CtaButton />
      <div className="absolute bg-[#2c3e50] bottom-0 h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkDefault18() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="Link - Default">
      <div className="content-stretch flex flex-col gap-[18.9px] items-start p-[20px] relative w-full">
        <ThumbnailWrapper />
        <TitleWrapper25 />
        <ButtonDefault />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-name="Container">
      <LinkDefault18 />
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="flex-[1_0_0] h-[250px] min-h-px min-w-px relative" data-name="Thumbnail">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[118.16%] left-0 max-w-none top-[-2.8%] w-full" src={imgThumbnail1} />
      </div>
    </div>
  );
}

function ThumbnailWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Thumbnail Wrapper">
      <Thumbnail1 />
    </div>
  );
}

function TitleWrappHeadingHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-full" data-name="Title Wrapp → Heading → Heading 5">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[28.8px] relative shrink-0 text-[#2c3e50] text-[24px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How to optimize budget for your `}</p>
        <p>business</p>
      </div>
    </div>
  );
}

function Body30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[20.8px] relative shrink-0 text-[#636363] text-[16px] tracking-[-0.96px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Practical tips to cut costs, increase efficiency, and `}</p>
        <p>maximize profits</p>
      </div>
    </div>
  );
}

function TitleWrapper26() {
  return (
    <div className="content-stretch flex flex-col gap-[8.9px] items-start relative shrink-0 w-full" data-name="Title Wrapper">
      <TitleWrappHeadingHeading1 />
      <Body30 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c3e50] text-[18px] tracking-[-1.08px] whitespace-nowrap">
        <p className="leading-[23.4px]">Read more</p>
      </div>
    </div>
  );
}

function CtaButton1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="CTA Button">
      <Container72 />
    </div>
  );
}

function ButtonDefault1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] pt-[1.09px] relative shrink-0" data-name="Button - Default">
      <CtaButton1 />
      <div className="absolute bg-[#2c3e50] bottom-0 h-[2px] left-0 right-0" data-name="Line" />
    </div>
  );
}

function LinkDefault19() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="Link - Default">
      <div className="content-stretch flex flex-col gap-[18.9px] items-start p-[20px] relative w-full">
        <ThumbnailWrapper1 />
        <TitleWrapper26 />
        <ButtonDefault1 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-name="Container">
      <LinkDefault19 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container69 />
      <Container71 />
    </div>
  );
}

function HeadingHeading17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Heading → Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[33.6px] relative shrink-0 text-[#f7f7f7] text-[28px] tracking-[-1.12px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expert advice, industry `}</p>
        <p className="mb-0">{`trends, and practical tips to `}</p>
        <p>help you stay ahead</p>
      </div>
    </div>
  );
}

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg15() {
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

function Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Z1nbVMeFU9vOb0AH9SMaboo0T8A.svg fill">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvg15 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Z1NbVMeFu9VOb0Ah9SMaboo0T8ASvgFill15 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Icon61 />
    </div>
  );
}

function IconWrapp17() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start overflow-clip relative shrink-0" data-name="Icon Wrapp">
      <Icon60 />
    </div>
  );
}

function LinkDefault20() {
  return (
    <div className="bg-[#017984] content-stretch flex items-center justify-center py-[17px] relative rounded-[50px] shrink-0 w-full" data-name="Link - Default">
      <IconWrapp17 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[50px]" data-name="Container">
      <LinkDefault20 />
    </div>
  );
}

function DecorativeElement() {
  return (
    <div className="absolute bottom-[20.58px] h-[75px] right-[20px] w-[106px]" data-name="Decorative Element">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.12%] max-w-none top-0 w-[100.24%]" src={imgDecorativeElement} />
      </div>
    </div>
  );
}

function BlogTextWrapper() {
  return (
    <div className="bg-[#2c3e50] h-full max-w-[420px] relative rounded-[8px] shrink-0 w-[420px]" data-name="Blog Text Wrapper">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between max-w-[inherit] pb-[30px] pt-[29.09px] px-[30px] relative size-full">
          <HeadingHeading17 />
          <Container73 />
          <DecorativeElement />
        </div>
      </div>
    </div>
  );
}

function BlogTextWrapperAlignStretch() {
  return (
    <div className="content-stretch flex items-start justify-center relative self-stretch shrink-0" data-name="Blog Text Wrapper:align-stretch">
      <BlogTextWrapper />
    </div>
  );
}

function BlogWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Blog Wrapper">
      <Container68 />
      <BlogTextWrapperAlignStretch />
    </div>
  );
}

function BaseContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start max-w-[1330px] min-w-[1330px] px-[15px] relative shrink-0" data-name="Base Container">
      <TitleWrapper24 />
      <BlogWrapper />
    </div>
  );
}

function InsightsSection() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 px-[55px] py-[120px] right-0 top-[5832.36px]" data-name="Insights Section">
      <BaseContainer8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0.31%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[151.956px_44.91px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.956 44.91">
        <g id="Group">
          <path d={svgPaths.p266f5180} fill="var(--fill-0, #F7F7F7)" id="Vector" />
          <path d={svgPaths.p22652570} fill="var(--fill-0, #00838F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_0.31%_0_0]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function XfzxyDscvBfl5OdkOzLyHWwSvg() {
  return (
    <div className="h-[44.91px] overflow-clip relative shrink-0 w-[152.422px]" data-name="XfzxyDSCVBfl5OdkOzLyHWw.svg">
      <ClipPathGroup1 />
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

function Container74() {
  return (
    <div className="aspect-[154/44.90999984741211] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <LinkLogoWhiteLogoCompany />
    </div>
  );
}

function Body31() {
  return (
    <div className="font-['Work_Sans:Regular',sans-serif] font-normal h-[41.59px] leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] text-center tracking-[-0.96px] w-full" data-name="Body">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+2.41px)] top-[9.5px] w-[362.641px]">
        <p className="leading-[20.8px]">{`Subscribe to our newsletter for expert financial tips, `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[calc(50%+0.17px)] top-[30.3px] w-[347.335px]">
        <p className="leading-[20.8px]">{`industry news, and updates straight to your inbox `}</p>
      </div>
    </div>
  );
}

function Container75() {
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
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-[#343434] content-stretch flex flex-col items-start overflow-clip relative rounded-[50px] shrink-0 w-full" data-name="Label">
      <Input />
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#636363] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[17.6px]">Submit</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function ButtonDefault2() {
  return (
    <div className="bg-[#017984] content-stretch flex items-center justify-center min-w-[131px] pb-[14px] pt-[13px] px-[38.97px] relative rounded-[50px] shrink-0" data-name="Button - Default">
      <Container77 />
      <div className="absolute inset-0 rounded-[50px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#017984] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bottom-[5px] content-stretch flex flex-col items-start right-[4.06px]" data-name="Container">
      <ButtonDefault2 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20.01px] items-center max-w-[370px] min-h-px min-w-px overflow-clip relative" data-name="Form">
      <Body31 />
      <Label8 />
      <Container76 />
    </div>
  );
}

function TopContentWrapper1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Top Content Wrapper">
      <Container74 />
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

function HeadingHeading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Company</p>
      </div>
    </div>
  );
}

function NavLink4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">About us</p>
      </div>
    </div>
  );
}

function NavLink5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Our team</p>
      </div>
    </div>
  );
}

function NavLink6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">How we work</p>
      </div>
    </div>
  );
}

function NavLinksWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink4 />
      <NavLink5 />
      <NavLink6 />
    </div>
  );
}

function LinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start max-w-[207px] relative shrink-0 w-[207px]" data-name="Links Column">
      <HeadingHeading18 />
      <NavLinksWrapper1 />
    </div>
  );
}

function HeadingHeading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">More info</p>
      </div>
    </div>
  );
}

function NavLink7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Our clients</p>
      </div>
    </div>
  );
}

function NavLink8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Pricing</p>
      </div>
    </div>
  );
}

function NavLink9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Contact us</p>
      </div>
    </div>
  );
}

function NavLinksWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink7 />
      <NavLink8 />
      <NavLink9 />
    </div>
  );
}

function LinksColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start max-w-[207px] relative shrink-0 w-[207px]" data-name="Links Column">
      <HeadingHeading19 />
      <NavLinksWrapper2 />
    </div>
  );
}

function HeadingHeading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Resources</p>
      </div>
    </div>
  );
}

function NavLink10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Services</p>
      </div>
    </div>
  );
}

function NavLink11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Portfolio</p>
      </div>
    </div>
  );
}

function NavLink12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">Blog</p>
      </div>
    </div>
  );
}

function NavLinksWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink10 />
      <NavLink11 />
      <NavLink12 />
    </div>
  );
}

function LinksColumn2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start max-w-[207px] relative shrink-0 w-[207px]" data-name="Links Column">
      <HeadingHeading20 />
      <NavLinksWrapper3 />
    </div>
  );
}

function HeadingHeading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[21.6px]">Contacts</p>
      </div>
    </div>
  );
}

function NavLink13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">123 Finance Street, New York, NY 10001</p>
      </div>
    </div>
  );
}

function NavLink14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">+1 (555) 123-4567</p>
      </div>
    </div>
  );
}

function NavLink15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Nav Link">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[-0.96px] w-full">
        <p className="leading-[20.8px]">contact@example.com</p>
      </div>
    </div>
  );
}

function NavLinksWrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Nav Links Wrapper">
      <NavLink13 />
      <NavLink14 />
      <NavLink15 />
    </div>
  );
}

function LinksColumn3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[393px]" data-name="Links Column">
      <HeadingHeading21 />
      <NavLinksWrapper4 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[21.6px]">Social Media</p>
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]" data-name="Heading">
      <Heading26 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_0.33%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[8px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 17.941">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1cd0b600} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
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

function O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvg() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[8px]" data-name="O9leNQGlO6l0VBTQ0OWVGKdhs8Q.svg">
      <ClipPathGroup2 />
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

function Icon63() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <O9LeNqGlO6L0Vbtq0OwvgKdhs8QSvgFill />
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon63 />
    </div>
  );
}

function LinkDefaultWithBg() {
  return (
    <div className="bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Link - Default With BG">
      <Icon62 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[18px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p17756af0} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Ctk8UsmDp0Sng6EJaaVetuOkagcSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ctk8UsmDp0SNG6eJaaVETUOkagc.svg">
      <ClipPathGroup3 />
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

function Icon65() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <Ctk8UsmDp0Sng6EJaaVetuOkagcSvgFill />
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon65 />
    </div>
  );
}

function LinkDefaultWithBg1() {
  return (
    <div className="bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Link - Default With BG">
      <Icon64 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0.01%_0_0_-0.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.057px_-0.002px] mask-size-[18px_17px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.057 16.9979">
        <g id="Group">
          <path d={svgPaths.p308e9b40} fill="var(--fill-0, #1E1E1E)" id="Vector" />
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

function JlYtXibCQp2LL0MKjriUEseLPloSvg() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-[18px]" data-name="JlYTXibCQp2lL0MKjriUEseLPlo.svg">
      <ClipPathGroup4 />
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

function Icon67() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Icon">
      <JlYtXibCQp2LL0MKjriUEseLPloSvgFill />
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Icon67 />
    </div>
  );
}

function LinkDefaultWithBg2() {
  return (
    <div className="bg-[#b0b0b0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Link - Default With BG">
      <Icon66 />
    </div>
  );
}

function NavSocialLinksWrapper() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0" data-name="Nav - Social Links Wrapper">
      <LinkDefaultWithBg />
      <LinkDefaultWithBg1 />
      <LinkDefaultWithBg2 />
    </div>
  );
}

function LinksColumn4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Links Column">
      <Heading25 />
      <NavSocialLinksWrapper />
    </div>
  );
}

function NavLinksColumns() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Nav Links Columns">
      <LinksColumn />
      <LinksColumn1 />
      <LinksColumn2 />
      <LinksColumn3 />
      <LinksColumn4 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[rgba(176,176,176,0.5)] flex-[1_0_0] h-px min-h-px min-w-px opacity-64" data-name="Divider" />;
}

function DividerWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[40px] relative shrink-0 w-full" data-name="Divider Wrapper">
      <Divider1 />
    </div>
  );
}

function Container79() {
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
      <Container79 />
    </div>
  );
}

function Container80() {
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
      <Container80 />
    </div>
  );
}

function CopyrightWrapper() {
  return (
    <div className="content-stretch flex items-start justify-between opacity-64 relative shrink-0 w-full" data-name="Copyright Wrapper">
      <Copyright />
      <Copyright1 />
    </div>
  );
}

function CopyrightWrapperCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6.16px] relative shrink-0 w-[1300px]" data-name="Copyright Wrapper:css-transform">
      <CopyrightWrapper />
    </div>
  );
}

function BaseContainer9() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1330px] px-[15px] relative shrink-0 w-[1330px]" data-name="Base Container">
      <TopContentWrapper1 />
      <DividerWrapper />
      <NavLinksColumns />
      <DividerWrapper1 />
      <CopyrightWrapperCssTransform />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute bg-[#1e1e1e] content-stretch flex items-start justify-center left-0 pb-[32.83px] pt-[80px] right-0 top-[7287.73px]" data-name="Footer - Desktop">
      <BaseContainer9 />
    </div>
  );
}

function EndOfBodyStart() {
  const sectionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white h-[7831.72px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <motion.div {...sectionProps}><AboutUsSection /></motion.div>
      <motion.div {...sectionProps}><WhyChooseUsSection /></motion.div>
      <motion.div {...sectionProps}><SolutionsSection /></motion.div>
      <motion.div {...sectionProps}><PricingSection /></motion.div>
      <motion.div {...sectionProps}><SectionDesktop /></motion.div>
      <motion.div {...sectionProps}><HeroBannerSection /></motion.div>
      <motion.div {...sectionProps}><OurClientsSection /></motion.div>
      <motion.div {...sectionProps}><OurTeamSection /></motion.div>
      <motion.div {...sectionProps}><InsightsSection /></motion.div>
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[7287.73px]" data-name="Rectangle" />
      <FooterDesktop />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1440w light">
      <Container />
      <Container9 />
      <EndOfBodyStart />
    </div>
  );
}