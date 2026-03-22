import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import {
  Eye,
  Target,
  ArrowRight,
  Layers,
  Briefcase,
  Users,
  CheckCircle,
  Building2,
  Store,
  Shield,
  ShoppingBag,
  Heart,
  ChevronRight,
} from "lucide-react";

import { AnimatedSection} from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Our Integrated Growth Services.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              We design comprehensive ecosystems—not isolated services. Choose a
              pillar to learn how we structure your expansion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl hover:border-black transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
                    {/* Background hover effect */}
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center w-full">
                      <div className="shrink-0 w-20 h-20 bg-gray-100 group-hover:bg-white/10 rounded-2xl flex items-center justify-center text-black group-hover:text-white transition-colors duration-500">
                        <service.icon className="w-10 h-10" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm font-bold text-gray-400 group-hover:text-white/50 transition-colors">
                            0{index + 1}
                          </span>
                          <h2 className="font-display text-3xl font-bold group-hover:text-white transition-colors">
                            {service.title}
                          </h2>
                        </div>
                        <h3 className="text-lg font-medium text-black mb-4 group-hover:text-gray-300 transition-colors">
                          {service.shortDesc}
                        </h3>
                        <p className="text-gray-600 max-w-2xl group-hover:text-gray-400 transition-colors">
                          {service.description}
                        </p>
                      </div>

                      <div className="shrink-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 group-hover:border-white/30 text-black group-hover:text-white transition-colors">
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      </div>

                      <div className="md:hidden flex items-center text-sm font-bold mt-4 group-hover:text-white">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW EVERYTHING CONNECTS REPRISE */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              The Growth Ecosystem
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how investing in one area compounds the success of the others.
            </p>
          </AnimatedSection>

          <div className="ls-connects-flow flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
            {[
              {
                label: "Technology",
                icon: Layers,
                desc: "Digital foundation",
                color: "bg-black text-white",
                border: "border-black",
              },
              {
                label: "Marketing",
                icon: Target,
                desc: "Reach your market",
                color: "bg-black text-white",
                border: "border-black",
              },
              {
                label: "Visibility",
                icon: Eye,
                desc: "Build awareness",
                color: "bg-black text-white",
                border: "border-black",
              },
              {
                label: "Authority",
                icon: Shield,
                desc: "Earn trust & credibility",
                color: "bg-black text-white",
                border: "border-black",
              },
              {
                label: "Revenue",
                icon: Briefcase,
                desc: "Sustainable growth",
                color: "bg-black text-white",
                border: "border-black",
              },
            ].map((step, i, arr) => (
              <AnimatedSection
                key={step.label}
                delay={i * 0.15}
                className="flex flex-col md:flex-row items-center w-full md:w-auto">
                {/* Step Card */}
                <div
                  className={`ls-connects-pill group relative flex flex-row md:flex-col items-center md:items-center gap-3 md:gap-2 bg-white border-2 ${step.border} rounded-2xl px-4 sm:px-5 md:px-4 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6 hover:${step.color} transition-all duration-300 cursor-default w-full md:w-auto md:min-w-27.5 lg:min-w-32.5 shadow-sm hover:shadow-lg`}>
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
        </div>
      </section>

      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold mb-8">
              Not sure where to begin?
            </h2>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full font-bold">
                Book a Strategy Call
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
