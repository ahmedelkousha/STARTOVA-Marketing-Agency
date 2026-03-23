import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white pb-26 pt-30 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
                      <Link
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                      </Link>
                    </div>
          <AnimatedSection>
            <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-12">
            <AnimatedSection>
              <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  At Startova, your privacy is a priority. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or engage with our
                  services. Please read it carefully.
                </p>
              </div>
            </AnimatedSection>

            {[
              {
                num: "01",
                title: "Information We Collect",
                content: [
                  {
                    sub: "Personal Information",
                    text: "We may collect personally identifiable information such as your name, email address, phone number, and company name when you fill out a contact form, book a strategy session, or otherwise communicate with us.",
                  },
                  {
                    sub: "Usage Data",
                    text: "We automatically collect certain information when you visit our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This data helps us understand how visitors interact with our site.",
                  },
                  {
                    sub: "Cookies & Tracking",
                    text: "We use cookies and similar tracking technologies to enhance your experience. You may instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.",
                  },
                ],
              },
              {
                num: "02",
                title: "How We Use Your Information",
                content: [
                  {
                    sub: "Service Delivery",
                    text: "To respond to your inquiries, schedule consultations, provide the services you requested, and manage our business relationship with you.",
                  },
                  {
                    sub: "Communication",
                    text: "To send you updates, marketing materials, and information about our services. You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails.",
                  },
                  {
                    sub: "Analytics & Improvement",
                    text: "To analyze usage patterns, improve our website, develop new features, and better understand what our audience needs.",
                  },
                  {
                    sub: "Legal Compliance",
                    text: "To comply with applicable laws and regulations, resolve disputes, and enforce our agreements.",
                  },
                ],
              },
              {
                num: "03",
                title: "How We Share Your Information",
                content: [
                  {
                    sub: "Service Providers",
                    text: "We may share your information with third-party vendors who assist us in operating our website and delivering services (e.g., email platforms, analytics providers, CRM tools). These parties are contractually bound to protect your data.",
                  },
                  {
                    sub: "Business Transfers",
                    text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.",
                  },
                  {
                    sub: "Legal Requirements",
                    text: "We may disclose your information if required by law or in good-faith belief that such action is necessary to comply with legal obligations, protect our rights, or ensure the safety of others.",
                  },
                ],
              },
              {
                num: "04",
                title: "Data Retention",
                content: [
                  {
                    sub: "Retention Period",
                    text: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
                  },
                  {
                    sub: "Deletion Requests",
                    text: "You may request deletion of your personal data at any time by contacting us at hello@startova.agency. We will respond to your request within 30 days.",
                  },
                ],
              },
              {
                num: "05",
                title: "Your Rights",
                content: [
                  {
                    sub: "Access & Portability",
                    text: "You have the right to request a copy of the personal data we hold about you in a structured, machine-readable format.",
                  },
                  {
                    sub: "Correction",
                    text: "You may request that we correct any inaccurate or incomplete personal information we hold about you.",
                  },
                  {
                    sub: "Objection & Restriction",
                    text: "You have the right to object to or restrict certain types of processing of your personal data, including direct marketing.",
                  },
                ],
              },
              {
                num: "06",
                title: "Security",
                content: [
                  {
                    sub: "Our Measures",
                    text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
                  },
                ],
              },
              {
                num: "07",
                title: "Changes to This Policy",
                content: [
                  {
                    sub: "Updates",
                    text: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.",
                  },
                ],
              },
              {
                num: "08",
                title: "Contact Us",
                content: [
                  {
                    sub: "Get in Touch",
                    text: "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at hello@startova.agency or write to us at 100 Innovation Drive, Suite 400, New York, NY 10001.",
                  },
                ],
              },
            ].map((section) => (
              <AnimatedSection key={section.num}>
                <div className="flex gap-4 sm:gap-6 items-start mb-4">
                  <span className="font-display text-xs font-bold text-gray-300 mt-1 shrink-0">
                    {section.num}
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-black">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-8 sm:ml-10 space-y-5 border-l-2 border-gray-100 pl-5 sm:pl-6">
                  {section.content.map((item) => (
                    <div key={item.sub}>
                      <h3 className="font-semibold text-sm sm:text-base text-black mb-1.5">
                        {item.sub}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
