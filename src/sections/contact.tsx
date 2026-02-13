import { AlertCircle, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "../components/button";
import type React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "seanpheavyraksonya@gmail.com",
    href: "mailto:seanpheavyraksonya@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0967431360",
    href: "tel:+885 967431360",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "phum blackpink srok jonh cina",
    href: "https://www.google.com/maps",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        console.error("Missing EmailJS configuration:", {
          hasServiceId: !!serviceId,
          hasTemplateId: !!templateId,
          hasPublicKey: !!publicKey,
        });
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      console.log("Attempting to send email with EmailJS...");

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Yaya", // Your name
        },
        publicKey,
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("EmailJS error details:", {
        error: err,
        message: err?.message,
        text: err?.text,
        status: err?.status,
        code: err?.code,
      });

      let errorMessage = "Failed to send message. Please try again later.";

      // Handle specific error codes
      if (err?.status === 403 || err?.code === 403) {
        errorMessage =
          "Email service authentication failed. Please contact me directly at seanpheavyraksonya@gmail.com";
      } else if (err?.status === 400 || err?.code === 400) {
        errorMessage =
          "Invalid email format. Please check your details and try again.";
      } else if (err?.text) {
        errorMessage = err.text;
      } else if (err?.message) {
        errorMessage = err.message;
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* header */}
        <div className="mx-auto text-center max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium font-mono tracking-wider uppercase">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delat-200 text-primary font-mono">
            Let's build{" "}
            <span className="text-white font-serif italic">
              something greats.
            </span>
          </h2>
          <p className="text-muted-foreground font-mono animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-mono font-medium mb-2 "
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="ur name here..."
                  required
                  id="name"
                  type="text"
                  className="w-full px-4 font-mono py-3 bg-surface rounded-xl border border-border focus:border-primary
                   focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-mono font-medium mb-2 "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ur email here..."
                  required
                  id="email"
                  type="text"
                  className="w-full font-mono px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary
                   focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  className="block font-mono text-sm font-medium mb-2 "
                  htmlFor="message"
                >
                  Message{" "}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="ur message here..."
                  rows={5}
                  id="message"
                  required
                  className="w-full font-mono px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary
                   focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? (
                  <>Sending...</>
                ) : (
                  <div className="font-mono flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </div>
                )}
              </Button>
              {status.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${status.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                >
                  {status.type === "success" ? (
                    <Check className="w-5 shrink-0 h-5" />
                  ) : (
                    <AlertCircle className="w-5 shrink-0 h-5" />
                  )}
                  <p className="text.sm">{status.message}</p>
                </div>
              )}
            </form>
          </div>
          {/* contact */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass p-8 border border-primary/30 rounded-3xl">
              <h3 className="mb-6 font-mono text-xl font-semibold">
                Contact Information
              </h3>
              <div className="space-y-4">
                {info.map((i, idx) => (
                  <a
                    key={idx}
                    href={i.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <i.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">
                      <div>{i.label}</div>
                      <div className="font-mono font-medium">{i.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* available */}
            <div className="glass p-8 rounded-3xl border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full animate-pulse  bg-green-500 " />
                <span className="font-medium font-mono">
                  Currently Available
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-mono">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
