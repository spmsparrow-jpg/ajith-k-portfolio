import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Something went wrong. Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-primary text-lg">✦</span>
                <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">Contact</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
                Get In Touch
                <br />
                <span className="font-display italic text-gradient">Today</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground font-medium">ajith@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground font-medium">India</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">Leave a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary border-border rounded-lg"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary border-border rounded-lg"
                  />
                </div>
                <Textarea
                  placeholder="Your message..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary border-border rounded-lg resize-none"
                />
                <Button type="submit" className="self-end rounded-full px-8" disabled={sending}>
                  {sending ? <><Loader2 className="mr-1 !size-4 animate-spin" /> Sending...</> : <>Send Message <Send className="ml-1 !size-4" /></>}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
