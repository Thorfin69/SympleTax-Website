import { motion } from "motion/react";

export function ContactPartners() {
  return (
    <section className="py-20 md:py-24 bg-[#2C3E50] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-9 h-px bg-white/20" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-[-0.28px] text-white/50">
              OUR TRUSTED PARTNERS
            </span>
            <div className="w-9 h-px bg-white/20" />
          </div>
        </div>

        {/* Logo Grid - matching Figma layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-16 md:gap-x-24 items-center justify-items-center w-full max-w-5xl">
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="LAW" hasText />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="logoipsum" hasIcon />
          <LogoItem name="IPSUM" hasText />
        </div>
      </div>
    </section>
  );
}

function LogoItem({ name, hasIcon, hasText }: { name: string, hasIcon?: boolean, hasText?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-2 text-white/80 grayscale brightness-200 opacity-60 hover:opacity-100 transition-opacity"
    >
      {hasIcon && (
        <div className="w-6 h-6 border-[2px] border-white/80 rounded-sm flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-white/80 rounded-full" />
        </div>
      )}
      <span className="font-['Inter'] font-bold text-xl tracking-tighter uppercase">
        {name}
      </span>
    </motion.div>
  );
}
