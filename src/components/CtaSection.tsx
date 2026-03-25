import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

interface CtaProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryLink: string;
  primaryText: string;
  secondaryLink?: string;
  secondaryText?: string;
  theme?: "light" | "dark";
  className?: string;
  isSticky?: boolean;
}

export function CtaSection({
  title,
  description,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
  theme = "light",
  className = "",
  isSticky = false,
}: CtaProps) {
  const bgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const descClass = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const stickyClass = isSticky ? "sticky top-0 z-90 h-screen flex flex-col justify-center items-center overflow-hidden" : "py-24";

  return (
    <section className={`${stickyClass} ${bgClass} text-center ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <AnimatedSection className="flex flex-col gap-8 md:gap-10">
          <h2 className="ls-cta-h2 font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight uppercase">
            {title}
          </h2>
          {description && (
            <p className={`ls-cta-p text-sm sm:text-base md:text-lg lg:text-xl ${descClass} mb-6 font-light leading-relaxed`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryLink}>
              <Button size="lg" variant={theme === "dark" ? "secondary" : "default"} className="w-full sm:w-auto rounded-full font-bold text-base">
                {primaryText} {theme === "light" && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </Link>
            {secondaryLink && secondaryText && (
              <Link href={secondaryLink}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full font-bold text-base">
                  {secondaryText}
                </Button>
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
