import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          style={{ textWrap: "balance" }}
        >
          Hi, I'm Ajith K
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground mt-4 font-medium"
        >
          Senior Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed"
          style={{ textWrap: "pretty" }}
        >
          I build scalable web applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button variant="hero" asChild>
            <a href="#projects">
              View Projects <ArrowDown className="ml-1 !size-4" />
            </a>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="#contact">
              Contact Me <Mail className="ml-1 !size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
