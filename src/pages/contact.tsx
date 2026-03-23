import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { Link } from "wouter";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call for static template
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
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
              Let's Build Your Growth System.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Stop guessing. Start structuring. Drop us a line and let's discuss
              your objectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="font-display text-3xl font-bold mb-8">
                    Send Us a Message
                  </h2>

                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. A growth specialist will
                        contact you within 24 hours.
                      </p>
                      <Button
                        className="mt-8"
                        onClick={() => setIsSuccess(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-semibold">
                            Full Name *
                          </label>
                          <input
                            {...register("name")}
                            id="name"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-semibold">
                            Email Address *
                          </label>
                          <input
                            {...register("email")}
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder="john@company.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="company"
                            className="text-sm font-semibold">
                            Company Name
                          </label>
                          <input
                            {...register("company")}
                            id="company"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder="Your Company LLC"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="service"
                            className="text-sm font-semibold">
                            Primary Interest *
                          </label>
                          <select
                            {...register("service")}
                            id="service"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none">
                            <option value="">Select a service...</option>
                            <option value="general">
                              General Inquiry / Strategy Call
                            </option>
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-xs">
                              {errors.service.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-semibold">
                          Message *
                        </label>
                        <textarea
                          {...register("message")}
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your current challenges and goals..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 text-lg"
                        disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <AnimatedSection delay={0.2}>
                <div className="space-y-10">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Prefer to reach out directly? Use the information below to
                      get in touch with our team.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Headquarters</h4>
                        <p className="text-gray-600">
                          100 Innovation Drive, Suite 400
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Phone</h4>
                        <p className="text-gray-600">
                          +1 (555) 123-4567
                          <br />
                          Mon-Fri, 9am - 6pm EST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-gray-600">
                          hello@startova.agency
                          <br />
                          strategy@startova.agency
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Response Time</h4>
                        <p className="text-gray-600">
                          We aim to respond to all inquiries within 24 business
                          hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
