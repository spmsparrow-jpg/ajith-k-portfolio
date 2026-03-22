import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Get in touch
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Have a project in mind or want to chat? Drop me a message.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <Input
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-card"
            />
            <Textarea
              placeholder="Your message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-card resize-none"
            />
            <Button type="submit" className="self-start">
              Send Message <Send className="ml-1 !size-4" />
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
