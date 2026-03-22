import { Link } from "wouter";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const PARTNERS = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  },
  {
    name: "HubSpot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    name: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo_2022.svg",
  },
];



export default function Home() {

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── z-10 ── */}
      <section className="sticky top-0 z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="Business District"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="ls-hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto">
            <div className="ls-hero-badge inline-block mb-4 sm:mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs sm:text-sm font-medium tracking-wide">
              Business Development Driven
            </div>
            <h1 className="ls-hero-h1 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6 md:mb-8 text-balance">
              We Build Systems That{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-500">
                Grow Businesses.
              </span>
            </h1>
            <p className="ls-hero-p text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              From technology to media, from strategy to execution — we design
              integrated growth solutions for brands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="ls-hero-btn w-full sm:w-auto rounded-full font-bold text-sm sm:text-base">
                  Book a Strategy Session
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="ls-hero-btn w-full sm:w-auto rounded-full font-bold text-sm sm:text-base">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─────────────────────────────────── z-20 ── */}
      <section className="sticky top-0 z-20 h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="ls-services-h2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-11 sm:mb-11 md:mb-12 text-center text-black uppercase">
            What we do
          </h2>
          <StaggerContainer className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <StaggerItem>
              <div className="ls-vm-card bg-black text-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/10 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                <div className="ls-vm-icon w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="ls-vm-h2 font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  Vision
                </h2>
                <p className="ls-vm-p text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  To become a leading Business Growth Firm that transforms
                  ambitious ideas into scalable, structured, and sustainable
                  businesses.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="ls-vm-card bg-gray-100 text-black p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-3xl border border-gray-200 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                <div className="ls-vm-icon w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="ls-vm-h2 font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  Mission
                </h2>
                <p className="ls-vm-p text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  We empower founders and businesses with the tools, technology,
                  and strategic clarity needed to launch, grow, and dominate
                  their market.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── PARTNERS MARQUEE ─────────────────────────────────── z-30 ── */}
      <section className="sticky top-0 z-30 h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <AnimatedSection className="text-center mb-8 sm:mb-10 md:mb-14 ls-connects-header">
            <h2 className="ls-services-h2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-11 sm:mb-11 md:mb-12 text-center text-white uppercase">
              Our network
            </h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
              <p className="ls-marquee-label text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Trusted By Forward-Thinking Founders
              </p>
            </div>
          </AnimatedSection>

          <div className="mb-4 sm:mb-6 relative">
            {/* Left shadow */}
            <div
              className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #000000 0%, transparent 100%)",
              }}
            />

            {/* Right shadow */}
            <div
              className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, #000000 0%, transparent 100%)",
              }}
            />
            <Swiper
              dir="ltr"
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={24}
              loop={true}
              speed={2400}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                480: { slidesPerView: 3, spaceBetween: 28 },
                768: { slidesPerView: 4, spaceBetween: 32 },
                1024: { slidesPerView: 5, spaceBetween: 40 },
              }}>
              {PARTNERS.map((partner, i) => (
                <SwiperSlide key={`row1-${i}`}>
                  <div className="bg-white flex items-center justify-center h-14 sm:h-16 md:h-20 px-4 sm:px-6 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-6 sm:max-h-7 md:max-h-8 max-w-20 sm:max-w-25 md:max-w-30 object-contain filter opacity-100 group-hover:opacity-80 transition-opacity duration-300"
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────── z-40 ── */}
      <section className="sticky top-0 z-40 h-screen flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <h2 className="ls-about-h2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight uppercase">
                We are{" "}
                <span className="underline decoration-4 decoration-gray-200 underline-offset-8">
                  not
                </span>{" "}
                a traditional marketing agency.
              </h2>
              <p className="ls-about-p text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                We are a Business Development-driven firm. Every service we
                provide is designed to strengthen your business foundation and
                accelerate growth. Because growth without structure is
                temporary.
              </p>
              <ul className="ls-about-list space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
                {[
                  "Technology",
                  "Strategy",
                  "Media",
                  "Training",
                  "Brand Activation",
                ].map((item) => (
                  <li
                    key={item}
                    className="ls-about-list-item flex items-center text-black font-medium text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="ls-about-btn group text-sm sm:text-base">
                  Learn More About Us{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gray-200 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our Team"
                className="rounded-3xl shadow-xl w-full h-80 md:h-96 lg:h-105 object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ────────────────────────────────── z-50 ── */}
      <section className="sticky top-0 z-50 h-screen bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <AnimatedSection className="ls-services-header text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <h2 className="ls-services-h2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 uppercase">
              Our Services
            </h2>
            <p className="ls-services-p text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto leading-snug">
              We don't sell isolated services. We design comprehensive
              ecosystems tailored for exponential business growth.
            </p>
          </AnimatedSection>

          <div className="ls-services-grid grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="ls-service-card bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 hover:bg-white/10 hover:border-white/30 group flex flex-col">
                <div className="ls-service-icon-wrap w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white text-black rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shrink-0">
                  <service.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="ls-service-title font-display text-xs sm:text-sm md:text-base lg:text-xl font-bold mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="ls-service-desc text-gray-400 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 lg:mb-8 grow leading-snug line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                  {service.shortDesc}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="ls-service-link text-[10px] sm:text-xs md:text-sm font-semibold flex items-center text-white/70 group-hover:text-white mt-auto">
                  Explore{" "}
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW EVERYTHING CONNECTS ──────────────────────────── z-60 ── */}
      <section className="sticky top-0 z-60 h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="ls-connects-header text-center mb-8 sm:mb-10 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">
              The Growth Framework
            </p>
            <h2 className="ls-connects-h2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
              How Everything Connects
            </h2>
            <p className="ls-connects-sub text-gray-500 text-sm sm:text-base md:text-lg">
              No service stands alone. We design ecosystems.
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

      {/* ─── WHY CHOOSE US ────────────────────────────────────── z-70 ── */}
      <section className="sticky top-0 z-70 h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="ls-why-h2 font-display  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-0 uppercase">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: Layers,
                title: "Integrated Approach",
                desc: "We don't sell isolated services. Every solution is connected to your growth ecosystem, ensuring compounding results.",
              },
              {
                icon: Briefcase,
                title: "Business-First Mindset",
                desc: "Every strategic decision is made with your top-line revenue and operational efficiency in mind, not just our portfolio.",
              },
              {
                icon: Users,
                title: "Founder-Focused",
                desc: "Built exclusively for founders and leaders who want real market traction, sustainable models, and not vanity metrics.",
              },
              {
                icon: CheckCircle,
                title: "Proven Systems",
                desc: "We bring structured, repeatable frameworks that turn chaotic ideas into scalable, predictable businesses.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="ls-why-card bg-white/5 border border-white/10 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl h-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                  <div className="ls-service-icon-wrap w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white text-black rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black bg-white rounded-lg md:rounded-xl flex items-center justify-center" />
                  </div>
                  <h3 className="ls-why-title font-display text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="ls-why-desc text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                    {desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─────────────────────────────────── z-80 ── */}
      <section className="sticky top-0 z-80 h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="ls-who-h2 font-display  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 uppercase">
              Who We Work With
            </h2>
            <p className="ls-who-sub text-gray-600 text-sm sm:text-base md:text-lg">
              We partner with ambitious teams across diverse sectors.
            </p>
          </AnimatedSection>

          <div className="ls-who-grid grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Building2, label: "Founders launching in the U.S." },
              { icon: Store, label: "Small & mid-size businesses" },
              { icon: Users, label: "Service-based businesses" },
              { icon: Shield, label: "Insurance agencies" },
              { icon: ShoppingBag, label: "Retail & hospitality brands" },
              { icon: Heart, label: "Community entrepreneurs" },
            ].map((client, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="ls-who-card bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center h-full hover:border-white hover:bg-black hover:text-white transition-colors min-h-20 sm:min-h-25 md:min-h-30">
                  <client.icon className="ls-who-icon w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2 sm:mb-3 md:mb-4 text-gray-400" />
                  <span className="ls-who-label font-medium text-xs sm:text-sm">
                    {client.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── z-90 ── */}
      <section className="sticky top-0 z-90 h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="ls-cta-h2 font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight uppercase">
              Ready to stop buying random services — and start building{" "}
              <span className="underline decoration-3 decoration-gray-200/50 underline-offset-8">
                structured growth
              </span>
              ?
            </h2>
            <p className="ls-cta-p text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-12 font-light leading-relaxed">
              Whether you need a website, an app, social media management, media
              production, a launch event, or strategic guidance. We build every
              service with one goal:{" "}
              <span className="text-white font-semibold">
                Your Business Growth.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="ls-cta-btn w-full sm:w-auto rounded-full font-bold text-sm sm:text-base">
                  Book Your Strategy Call
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="ls-cta-btn w-full sm:w-auto rounded-full font-bold text-sm sm:text-base">
                  Start Building Today
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
