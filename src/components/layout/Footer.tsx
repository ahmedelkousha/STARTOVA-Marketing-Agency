import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  ChevronDown,
} from "lucide-react";
function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default md:pointer-events-none">
        <h4 className="font-display font-semibold text-base sm:text-lg">
          {title}
        </h4>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 md:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 md:overflow-visible md:max-h-none md:opacity-100 ${
          open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        } md:block`}>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-12 lg:gap-8 mb-8 md:mb-16">
          {/* Brand Column — never collapses */}
          <div className="lg:col-span-1 pb-6 mb-2 border-b border-white/10 md:border-none md:mb-0 md:pb-0">
            <Link
              href="/"
              className="font-display font-bold text-2xl sm:text-3xl tracking-tighter text-white inline-block mb-4 sm:mb-6">
              STARTOVA<span className="text-gray-500">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6 pr-4">
              We empower founders and businesses with the tools, technology, and
              strategic clarity needed to launch, grow, and dominate their
              market.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <FooterAccordion title="Company">
            <ul className="space-y-3 sm:space-y-4 md:mt-6">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact", href: "/contact" },
                // { label: "Careers", href: "#" },
              ].map((p) => (
                <li key={p.label}>
                  <Link
                    onClick={() => {
                      if (p.href === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    href={p.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Services */}
          <FooterAccordion title="Services">
            <ul className="space-y-3 sm:space-y-4 md:mt-6">
              {[
                { label: "Technology Solutions", href: "/services/technology" },
                {
                  label: "Social Media Strategy",
                  href: "/services/social-media",
                },
                { label: "Training & Mentorship", href: "/services/training" },
                { label: "Event Management", href: "/services/events" },
                { label: "Media Production", href: "/services/media" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Headquarters */}
          <FooterAccordion title="Headquarters">
            <div className="md:mt-6 space-y-4">
              <address className="text-gray-400 text-sm not-italic space-y-1.5">
                <p>100 Innovation Drive</p>
                <p>Suite 400</p>
                <p>New York, NY 10001</p>
              </address>
              <div className="space-y-1.5">
                <p className="text-gray-400 text-sm">hello@startova.agency</p>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
          </FooterAccordion>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Startova Marketing Agency. All rights
            reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-xs text-gray-500">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
