import img9Vr9UaNNgG118NLXzoGzkN3BuJpg from "figma:asset/90e3ed70d39398911573f698fd529c5036421152.png";

function Plus() {
  return (
    <div className="bg-[#1d1ee3] overflow-clip relative rounded-[28px] shrink-0 size-[28px]">
      <div className="absolute bg-white h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
      <div className="absolute bg-white h-[12px] left-[13px] opacity-62 rounded-[10px] top-[8px] w-[2px]" />
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">{text}</p>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Content">
      <div className="flex-[1_0_0] h-[452px] min-h-px min-w-px relative rounded-[8px]" data-name="Image">
        <div className="absolute inset-0 rounded-[8px]" data-name="9VR9uaNNgG118nLXzoGzkN3BU.jpg">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[106.32%] left-0 max-w-none top-[-3.16%] w-full" src={img9Vr9UaNNgG118NLXzoGzkN3BuJpg} />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Deep Collaboration:align-stretch">
          <div className="bg-[#eaeaff] h-full relative rounded-[12px] shrink-0 w-[380px]" data-name="Deep Collaboration">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center px-[30px] py-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start py-[20px] relative shrink-0 w-full" data-name="Open">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Header">
                      <div className="bg-[#1d1ee3] rounded-[100px] shrink-0 size-[10px]" data-name="Circle" />
                      <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[152px]" data-name="Deep Collaboration">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] whitespace-nowrap">
                            <p className="leading-[25.2px]">Deep Collaboration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#eaeaff] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
                      <div className="absolute bg-[#1d1ee3] h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
                      <div className="absolute flex h-[2px] items-center justify-center left-[8px] top-[13px] w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                        <div className="flex-none rotate-90">
                          <div className="bg-[#1d1ee3] h-[12px] opacity-62 rounded-[10px] w-[2px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-end max-w-[500px] relative shrink-0 w-full" data-name="We work as an extension of your team—immersing ourselves in your goals, challenges, and vision to ensure aligned outcomes. We believe great results come from working closely together.">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
                        <p className="mb-0">We work as an extension of your team—</p>
                        <p className="mb-0">{`immersing ourselves in your goals, challenges, `}</p>
                        <p className="mb-0">{`and vision to ensure aligned outcomes. We `}</p>
                        <p className="mb-0">{`believe great results come from working `}</p>
                        <p>closely together.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
                <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Close">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[73px]" data-name="Header → Deep Collaboration">
                      <ContainerText text="Expertise" />
                    </div>
                    <Plus />
                  </div>
                </div>
                <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
                <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Close">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[136px]" data-name="Header → Deep Collaboration">
                      <ContainerText text="Tailored Solutions" />
                    </div>
                    <Plus />
                  </div>
                </div>
                <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
                <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Close">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[54px]" data-name="Header → Deep Collaboration">
                      <ContainerText text="Impact" />
                    </div>
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}