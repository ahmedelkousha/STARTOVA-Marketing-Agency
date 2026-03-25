import { Target, Layers, Briefcase, Eye, Shield, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function GrowthEcosystem() {
  const steps = [
    { label: "Technology", icon: Layers, desc: "Digital foundation", color: "bg-black text-white", border: "border-black" },
    { label: "Marketing", icon: Target, desc: "Reach your market", color: "bg-black text-white", border: "border-black" },
    { label: "Visibility", icon: Eye, desc: "Build awareness", color: "bg-black text-white", border: "border-black" },
    { label: "Authority", icon: Shield, desc: "Earn trust & credibility", color: "bg-black text-white", border: "border-black" },
    { label: "Revenue", icon: Briefcase, desc: "Sustainable growth", color: "bg-black text-white", border: "border-black" },
  ];

  return (
    <div className="ls-connects-flow flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
      {steps.map((step, i, arr) => (
        <AnimatedSection key={step.label} delay={i * 0.15} className="flex flex-col md:flex-row items-center w-full md:w-auto">
          {/* Step Card */}
          <div className={`ls-connects-pill group relative flex flex-row md:flex-col items-center md:items-center gap-3 md:gap-2 bg-white border-2 ${step.border} rounded-2xl px-4 sm:px-5 md:px-4 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6 hover:${step.color} transition-all duration-300 cursor-default w-full md:w-auto md:min-w-27.5 lg:min-w-32.5 shadow-sm hover:shadow-lg`}>
            {/* Step number badge */}
            <span className="absolute -top-2.5 -left-2.5 w-5 h-5 sm:w-6 sm:h-6 bg-black text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              {i + 1}
            </span>

            {/* Icon */}
            <div className="ls-connects-icon-wrap w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl bg-gray-100 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
              <step.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black group-hover:text-white transition-colors" />
            </div>

            {/* Text */}
            <div className="flex flex-col md:items-center">
              <span className="ls-connects-label font-display font-bold text-sm sm:text-base md:text-sm lg:text-base text-black group-hover:text-white transition-colors leading-tight">
                {step.label}
              </span>
              <span className="ls-connects-desc text-[10px] sm:text-xs text-gray-400 group-hover:text-white/70 transition-colors mt-0.5 md:text-center">
                {step.desc}
              </span>
            </div>
          </div>

          {/* Connector Arrow */}
          {i < arr.length - 1 && (
            <div className="flex items-center justify-center my-1 md:my-0 md:mx-1 lg:mx-2 shrink-0">
              <ChevronRight className="ls-connects-chevron w-5 h-5 sm:w-6 sm:h-6 text-black/70 rotate-90 md:rotate-0" />
            </div>
          )}
        </AnimatedSection>
      ))}
    </div>
  );
}
