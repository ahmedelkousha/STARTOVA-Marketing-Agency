// src/pages/TermsOfService.tsx
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function TermsOfService() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms of Service
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
          <div className="space-y-12">
            <AnimatedSection>
              <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  These Terms of Service govern your use of Startova's website
                  and services. By accessing our site or engaging our services,
                  you agree to be bound by these terms. If you do not agree,
                  please do not use our services.
                </p>
              </div>
            </AnimatedSection>

            {[
              {
                num: "01",
                title: "Acceptance of Terms",
                content: [
                  {
                    sub: "Agreement",
                    text: "By accessing or using Startova's website and services, you confirm that you are at least 18 years old, have the legal authority to enter into these Terms, and agree to be bound by them along with our Privacy Policy.",
                  },
                  {
                    sub: "Modifications",
                    text: "We reserve the right to update these Terms at any time. We will provide notice of significant changes by updating the date above. Your continued use of our services after changes take effect constitutes your acceptance.",
                  },
                ],
              },
              {
                num: "02",
                title: "Services",
                content: [
                  {
                    sub: "Scope",
                    text: "Startova provides business development, technology, marketing, media production, training, and event management services as described on our website and in individual service agreements.",
                  },
                  {
                    sub: "Service Agreements",
                    text: "Specific services are governed by individual statements of work or service agreements signed between Startova and the client. In case of conflict, the individual service agreement takes precedence over these general Terms.",
                  },
                  {
                    sub: "Availability",
                    text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice. We are not liable for any interruption of service.",
                  },
                ],
              },
              {
                num: "03",
                title: "Client Responsibilities",
                content: [
                  {
                    sub: "Accurate Information",
                    text: "You agree to provide accurate, complete, and current information when engaging our services. Inaccurate information may result in delays or termination of services.",
                  },
                  {
                    sub: "Cooperation",
                    text: "You agree to cooperate with Startova in the delivery of services, including providing timely feedback, approvals, and access to necessary materials or systems.",
                  },
                  {
                    sub: "Lawful Use",
                    text: "You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of our services.",
                  },
                ],
              },
              {
                num: "04",
                title: "Payment Terms",
                content: [
                  {
                    sub: "Fees",
                    text: "Fees for services are outlined in individual service agreements. All fees are in USD unless otherwise specified and are due as stated in the applicable agreement.",
                  },
                  {
                    sub: "Late Payments",
                    text: "Late payments may incur interest at 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend services for accounts with overdue balances.",
                  },
                  {
                    sub: "Refunds",
                    text: "Refund eligibility is determined on a case-by-case basis per the terms of individual service agreements. Strategy sessions and consulting services are generally non-refundable once delivered.",
                  },
                ],
              },
              {
                num: "05",
                title: "Intellectual Property",
                content: [
                  {
                    sub: "Our IP",
                    text: "All content on our website — including text, graphics, logos, and software — is the property of Startova and protected by applicable intellectual property laws. You may not reproduce or distribute our content without written permission.",
                  },
                  {
                    sub: "Client IP",
                    text: "You retain ownership of all materials you provide to us. By providing materials, you grant Startova a limited license to use them solely for delivering the contracted services.",
                  },
                  {
                    sub: "Deliverables",
                    text: "Upon full payment, you will own the deliverables created specifically for you under a service agreement, except for any pre-existing or third-party components, which remain subject to their original licenses.",
                  },
                ],
              },
              {
                num: "06",
                title: "Confidentiality",
                content: [
                  {
                    sub: "Mutual Confidentiality",
                    text: "Both parties agree to keep confidential any non-public information disclosed in connection with the services. This obligation survives termination of the service relationship for a period of two (2) years.",
                  },
                  {
                    sub: "Exclusions",
                    text: "Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
                  },
                ],
              },
              {
                num: "07",
                title: "Limitation of Liability",
                content: [
                  {
                    sub: "Disclaimer",
                    text: "To the fullest extent permitted by law, Startova shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if we have been advised of the possibility of such damages.",
                  },
                  {
                    sub: "Cap on Liability",
                    text: "Our total liability to you for any claims arising under these Terms shall not exceed the total fees paid by you to Startova in the three (3) months preceding the claim.",
                  },
                ],
              },
              {
                num: "08",
                title: "Termination",
                content: [
                  {
                    sub: "By Either Party",
                    text: "Either party may terminate a service agreement with written notice as specified in that agreement. Upon termination, you must pay for all services rendered up to the termination date.",
                  },
                  {
                    sub: "For Cause",
                    text: "We may immediately terminate or suspend access to our services if you breach these Terms, fail to make timely payments, or engage in conduct we determine to be harmful.",
                  },
                ],
              },
              {
                num: "09",
                title: "Governing Law",
                content: [
                  {
                    sub: "Jurisdiction",
                    text: "These Terms are governed by the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved exclusively in the state or federal courts located in New York County, New York.",
                  },
                ],
              },
              {
                num: "10",
                title: "Contact Us",
                content: [
                  {
                    sub: "Questions",
                    text: "If you have any questions about these Terms of Service, please contact us at hello@startova.agency or write to us at 100 Innovation Drive, Suite 400, New York, NY 10001.",
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
