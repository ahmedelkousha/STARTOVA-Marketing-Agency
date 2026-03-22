import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Lock scroll + compensate scrollbar width when mobile menu is open

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.classList.remove("scroll-locked");
      return;
    }

    // Measure BEFORE locking to avoid already-hidden scrollbar
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`,
    );
    document.body.classList.add("scroll-locked");

    // Block touch scroll on iOS (overlay doesn't stop touchmove)
    const preventTouch = (e: TouchEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return; // allow scroll inside menu
      e.preventDefault();
    };
    document.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      document.body.classList.remove("scroll-locked");
      document.removeEventListener("touchmove", preventTouch);
    };
  }, [mobileMenuOpen]);

  // Close menu when focus moves outside the menu panel
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleFocusOut = (e: FocusEvent) => {
      if (
        menuRef.current &&
        e.relatedTarget instanceof Node &&
        !menuRef.current.contains(e.relatedTarget)
      ) {
        setMobileMenuOpen(false);
      }
    };
    const menuEl = menuRef.current;
    menuEl?.addEventListener("focusout", handleFocusOut);
    return () => menuEl?.removeEventListener("focusout", handleFocusOut);
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Backdrop overlay — blocks pointer events on page content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-100 bg-black/40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-105 transition-all duration-300 border-b",
          isScrolled ? "bg-white py-2" : "bg-white border-transparent py-5",
        )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (location === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false)
                }
              }}
              className="font-display font-bold text-2xl tracking-tighter text-primary">
              STARTOVA<span className="text-gray-400">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  location === "/" ? "text-black" : "text-gray-500",
                )}>
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  location === "/about" ? "text-black" : "text-gray-500",
                )}>
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}>
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-black py-2",
                    location.startsWith("/services")
                      ? "text-black"
                      : "text-gray-500",
                  )}>
                  Our Services{" "}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-all duration-300",
                      servicesDropdownOpen ? "rotate-180" : "rotate-0",
                    )}
                  />
                </Link>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                      <div className="py-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center gap-3">
                              <div className="bg-gray-50 p-2 rounded-md group-hover:bg-black group-hover:text-white transition-colors text-black">
                                <service.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-black">
                                  {service.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {service.shortDesc}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-3 border-t border-gray-100">
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-center block w-full hover:underline">
                          View All Services &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  location === "/contact" ? "text-black" : "text-gray-500",
                )}>
                Contact Us
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="default" className="gap-2 rounded-full">
                  <CalendarDays className="w-4 h-4" />
                  Book Strategy Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute h-screen w-[80vw] top-full md:hidden bg-white border-r border-gray-100 shadow-xl overflow-y-auto z-110"
              style={{ pointerEvents: "auto" }}>
              <div className="px-4 py-6 flex flex-col space-y-1">
                <Link
                  href="/"
                  onClick={(e) => {
                    if (location === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setMobileMenuOpen(false)
                    }
                  }}
                  className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">
                  About Us
                </Link>

                {/* Mobile Services Row */}
                <div>
                  <div className="flex items-center justify-between rounded-lg hover:bg-gray-50">
                    <Link
                      href="/services"
                      className="text-lg font-medium p-2 flex-1">
                      Our Services
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="p-2 text-gray-500 hover:text-black"
                      aria-label="Toggle services submenu"
                      aria-expanded={mobileServicesOpen}>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          mobileServicesOpen ? "rotate-180" : "rotate-0",
                        )}
                      />
                    </button>
                  </div>

                  {/* Mobile Services Submenu */}
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden">
                        <div className="pl-4 ml-2 mt-1 flex flex-col border-l-2 border-gray-100">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/${s.slug}`}
                              className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
                              <div className="bg-gray-100 p-1.5 rounded-md group-hover:bg-black group-hover:text-white transition-colors text-black shrink-0">
                                <s.icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-black leading-tight">
                                  {s.title}
                                </div>
                                <div className="text-xs text-gray-500 leading-tight">
                                  {s.shortDesc}
                                </div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-gray-500 hover:text-black py-2 px-2 hover:underline">
                            View All Services &rarr;
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">
                  Contact Us
                </Link>

                <div className="pt-4 mt-2 border-t border-gray-100">
                  <Link href="/contact">
                    <Button className="w-full gap-2 rounded-full">
                      <CalendarDays className="w-4 h-4" />
                      Book Strategy Call
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
