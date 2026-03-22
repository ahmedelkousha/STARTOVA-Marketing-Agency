import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-black selection:text-white">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
