import { Github, Linkedin, Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-lg font-black text-foreground">
        Ajith<span className="text-primary">.</span>
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Globe className="w-5 h-5" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ajith K. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
