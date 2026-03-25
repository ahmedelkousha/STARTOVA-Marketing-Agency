import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import Seo from "@/components/SEO";
import { GrowthEcosystem } from "@/components/GrowthEcosystem";
import { CtaSection } from "@/components/CtaSection";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Integrated Growth Services"
        description="Explore STARTOVA's five-pillar ecosystem: Technology Solutions, Social Media Strategy, Training & Mentorship, Event Management, and Media Production. Not isolated services — a connected growth system."
        canonical="/services"
      />
      <section className="bg-black text-white pb-26 pt-30 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-left">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
          </div>
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

          <GrowthEcosystem />
        </div>
      </section>

      <CtaSection
        theme="dark"
        title="Not sure where to begin?"
        primaryLink="/contact"
        primaryText="Book a Strategy Call"
      />
    </>
  );
}
