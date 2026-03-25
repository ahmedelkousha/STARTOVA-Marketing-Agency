import { useRoute } from "wouter";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import NotFound from "@/pages/not-found";
import Seo from "@/components/SEO";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");

  if (!match || !params?.slug) return <NotFound />;

  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) return <NotFound />;
  const seoDescription = `${service.description} ${service.bullets.map((b) => b.title).join(", ")}. STARTOVA — Business Development Driven.`;
  return (
    <>
      <Seo
        title={`${service.title} — ${service.shortDesc}`}
        description={seoDescription}
        canonical={`/services/${service.slug}`}
      />
      <section className="bg-black text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-2xl font-light text-gray-300 mb-6">
                "{service.shortDesc}"
              </p>
              <p className="text-lg text-gray-400">{service.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold mb-10">
                  What We Deliver
                </h2>
                <div className="space-y-8">
                  {service.bullets.map((bullet, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-black transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-black shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">
                          {bullet.title}
                        </h3>
                        <p className="text-gray-600">{bullet.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-4">
              <AnimatedSection delay={0.2} className="sticky top-32">
                <div className="bg-black text-white p-8 rounded-3xl shadow-xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Business Development Angle
                  </div>
                  <p className="text-lg font-medium leading-relaxed mb-8">
                    {service.callout}
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full rounded-full">
                      Discuss Your Project
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
