import clsx from "clsx";
import svgPaths from "./svg-w70cgs8gmo";
import imgImageWithFallback from "figma:asset/bc08a56aa0f572ba05263a1df89f43b297ebcc67.png";
type ListItemProps = {
  additionalClassNames?: string;
};

function ListItem({ children, additionalClassNames = "" }: React.PropsWithChildren<ListItemProps>) {
  return (
    <div className={clsx("relative w-[523px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[90px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter_Tight:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#03030f] text-[16px] top-[-1px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_37_2639)" id="Icon">
          <path d={svgPaths.padbbe00} id="Vector" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p1c663480} id="Vector_2" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
        <defs>
          <clipPath id="clip0_37_2639">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("h-[42px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter_Tight:Medium',sans-serif] font-medium leading-[42px] left-0 text-[#03030f] text-[28px] top-0 whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="absolute h-[621px] left-[603px] rounded-[12px] top-0 w-[573px]" data-name="Container">
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
          <div className="bg-white content-stretch flex flex-col h-[346px] items-start relative shrink-0 w-full" data-name="Container">
            <Button>
              <TextText text="01" additionalClassNames="shrink-0 w-[27.273px]" />
              <TextText text="Complimentary Consultation" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
              <Icon1>
                <path d={svgPaths.pc663880} id="Vector" stroke="var(--stroke-0, #1D1EE3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </Icon1>
            </Button>
            <div className="h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[48px] left-[24px] top-0 w-[500px]" data-name="Paragraph">
                <p className="absolute font-['Inter_Tight:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(3,3,15,0.7)] top-[-1px] w-[462px]">We listen first. A 30-minute call with a licensed Enrolled Agent — no charge, no obligation.</p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[24px] top-[64px] w-[523px]" data-name="List">
                <ListItem additionalClassNames="h-[24px] shrink-0">
                  <Icon />
                  <TextText1 text="No fees, no pressure" additionalClassNames="w-[141.813px]" />
                </ListItem>
                <ListItem additionalClassNames="h-[24px] shrink-0">
                  <Icon />
                  <TextText1 text="Licensed EA on every call" additionalClassNames="w-[173.938px]" />
                </ListItem>
                <ListItem additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <Icon />
                  <TextText1 text="Nationwide representation" additionalClassNames="w-[181.25px]" />
                </ListItem>
              </div>
              <div className="absolute bg-[#1d1ee3] content-stretch flex gap-[12px] h-[56px] items-center left-[24px] pl-[24px] rounded-[50px] top-[176px] w-[192.867px]" data-name="Button">
                <div className="h-[24px] relative shrink-0 w-[108.867px]" data-name="AttaxProcess">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter_Tight:Medium',sans-serif] font-medium leading-[24px] left-[54.5px] text-[16px] text-center text-white top-[-1px] whitespace-nowrap">Explore Service</p>
                  </div>
                </div>
                <div className="bg-white relative rounded-[16777200px] shrink-0 size-[40px]" data-name="AttaxProcess">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] relative size-full">
                    <div className="relative shrink-0 size-[18px]" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="Icon">
                          <path d="M5.25 5.25H12.75V12.75" id="Vector" stroke="var(--stroke-0, #1D1EE3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M5.25 12.75L12.75 5.25" id="Vector_2" stroke="var(--stroke-0, #1D1EE3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col h-[91px] items-start pt-px relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.07)] border-solid border-t inset-0 pointer-events-none" />
            <Button>
              <TextText text="02" additionalClassNames="shrink-0 w-[32.914px]" />
              <TextText text="Detailed Analysis" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
              <Icon1>
                <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
                <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
              </Icon1>
            </Button>
          </div>
          <div className="bg-white content-stretch flex flex-col h-[91px] items-start pt-px relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.07)] border-solid border-t inset-0 pointer-events-none" />
            <Button>
              <TextText text="03" additionalClassNames="shrink-0 w-[33.773px]" />
              <TextText text="Strategic Defense" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
              <Icon1>
                <path d={svgPaths.p25fc4100} id="Vector" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
              </Icon1>
            </Button>
          </div>
          <div className="bg-white content-stretch flex flex-col h-[91px] items-start pt-px relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.07)] border-solid border-t inset-0 pointer-events-none" />
            <Button>
              <TextText text="04" additionalClassNames="shrink-0 w-[34.039px]" />
              <TextText text="Resolution" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
              <Wrapper>
                <g clipPath="url(#clip0_37_2650)" id="Icon">
                  <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
                  <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #03030F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
                </g>
                <defs>
                  <clipPath id="clip0_37_2650">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper>
            </Button>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
      <div className="absolute h-[621px] left-0 overflow-clip rounded-[20px] top-0 w-[571px]" data-name="Container">
        <div className="absolute h-[621px] left-0 top-0 w-[571px]" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(10,22,40,0.02)] h-[621px] left-0 to-[rgba(10,22,40,0.65)] top-0 w-[571px]" data-name="AttaxProcess" />
      </div>
    </div>
  );
}