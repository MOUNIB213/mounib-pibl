import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, User, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { fadeInUp, containerVariants } from "../animations/variants";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Basic validation rules
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full Name is required.";
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) tempErrors.message = "Please include a brief message.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form submit handler with custom visual feedback states
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate standard server API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background radial soft cyan glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              GET IN TOUCH
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-5xl font-black font-syne uppercase leading-tight tracking-tight text-neutral-100"
          >
            LET'S BUILD <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">SOMETHING NEW</span>
          </motion.h2>
        </div>

        {/* Contact Form Card */}
        <motion.div
          variants={fadeInUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative glass-container p-8 md:p-10 rounded-3xl border border-neutral-900 glow-cyan overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-input" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-neutral-950/80 border text-sm text-neutral-200 placeholder:text-neutral-600 rounded-xl pl-12 pr-4 py-3.5 transition-all focus:outline-none focus:bg-black ${
                          errors.name
                            ? "border-red-500/50 focus:ring-2 focus:ring-red-500/50"
                            : "border-neutral-900 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                        }`}
                        required
                      />
                    </div>
                    {errors.name && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-neutral-950/80 border text-sm text-neutral-200 placeholder:text-neutral-600 rounded-xl pl-12 pr-4 py-3.5 transition-all focus:outline-none focus:bg-black ${
                          errors.email
                            ? "border-red-500/50 focus:ring-2 focus:ring-red-500/50"
                            : "border-neutral-900 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                        }`}
                        required
                      />
                    </div>
                    {errors.email && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message-input" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-neutral-500">
                      <MessageSquare className="w-4.5 h-4.5" />
                    </div>
                    <textarea
                      id="message-input"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Mounib, I would love to collaborate on a new project..."
                      rows={5}
                      className={`w-full bg-neutral-950/80 border text-sm text-neutral-200 placeholder:text-neutral-600 rounded-xl pl-12 pr-4 py-4.5 transition-all resize-none focus:outline-none focus:bg-black ${
                        errors.message
                          ? "border-red-500/50 focus:ring-2 focus:ring-red-500/50"
                          : "border-neutral-900 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      }`}
                      required
                    ></textarea>
                  </div>
                  {errors.message && (
                    <div className="flex items-center gap-1.5 text-red-500 text-xs font-medium mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 px-8 py-4 bg-gradient-to-r from-cyan-600 via-cyan-500 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 flex flex-col items-center justify-center text-center select-none"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/30">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-black font-syne text-neutral-100 uppercase tracking-wide mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-light mb-8">
                  Thank you for reaching out. Mounib has received your message and will respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-xs font-bold text-neutral-300 border border-neutral-800 rounded-xl hover:text-white transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
