import { Link } from "wouter";
import {
  ArrowRight,
  Zap,
  Target,
  PenTool,
  LayoutGrid,
  Rocket,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import Seo from "@/components/SEO";
export default function About() {
  return (
    <>
      <Seo
        title="About Us — Not a Traditional Marketing Agency"
        description="STARTOVA is a Business Development-driven firm that combines technology, strategy, and media to build scalable systems. Growth without structure is temporary."
        canonical="/about"
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
              We Are Not a Traditional Marketing Agency.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              We are a Business Development–driven firm that combines
              technology, strategy, and media to build scalable systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display text-4xl font-bold mb-6">
                Our Story & Philosophy
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Most agencies sell you isolated services: a logo, a website, a
                  few social media posts. But what happens when those pieces
                  don't talk to each other? You waste time and money.
                </p>
                <p>
                  At STARTOVA, we recognized that{" "}
                  <strong className="text-black">
                    growth without structure is temporary
                  </strong>
                  . That's why we shifted from being just a service provider to
                  becoming a Business Development partner.
                </p>
                <p>
                  Every service we deliver is a cog in a larger machine designed
                  to strengthen your foundation, streamline your operations, and
                  multiply your revenue.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* team collaboration image */}
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                alt="Our Team at Work"
                className="rounded-3xl shadow-2xl w-full h-150 object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              What We Combine
            </h2>
            <p className="text-gray-600 text-lg">
              The 5 pillars of the STARTOVA ecosystem.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Zap,
                title: "Technology",
                desc: "Digital infrastructure that scales.",
              },
              {
                icon: Target,
                title: "Strategy",
                desc: "Clear roadmaps to market domination.",
              },
              {
                icon: PenTool,
                title: "Media",
                desc: "Visual storytelling that builds trust.",
              },
              {
                icon: LayoutGrid,
                title: "Training",
                desc: "Team alignment and internal clarity.",
              },
              {
                icon: Rocket,
                title: "Brand Activation",
                desc: "Events and launches that make noise.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              "Growth without structure is temporary."
            </h2>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold mb-8">
              Let's Build Your System
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Stop piecing together a strategy from different vendors. Partner
              with a firm that sees the whole picture.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full font-bold">
                Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
