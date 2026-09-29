"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";
import { HeroBackground } from "./HeroBackground";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { resumeHref, socialLinks } from "@/data/site";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
} as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[min(860px,calc(100svh-3.25rem))] items-center overflow-hidden border-b border-border px-6 py-20 md:px-10 md:py-24"
    >
      <HeroBackground />
      <motion.div
        className="relative mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-base font-medium tracking-wide text-muted md:text-lg">
          Hi, I&apos;m Ak
        </motion.p>
        <motion.h1
          id="hero-heading"
          variants={item}
          className="mt-1 text-7xl font-semibold leading-[0.95] tracking-[-0.065em] text-foreground sm:text-8xl md:text-9xl"
        >
          Ak
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 text-xl font-medium tracking-tight text-foreground md:text-2xl"
        >
          Python Developer &amp; Data Scientist
        </motion.p>
        <motion.p variants={item} className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
          I build practical software, APIs, data-driven applications and AI/ML solutions.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3.5">
          <ButtonLink href="#projects">View Projects</ButtonLink>
          <ButtonLink href={resumeHref} variant="secondary" download>
            Download Resume
          </ButtonLink>
        </motion.div>
        <motion.ul variants={item} className="mt-9 flex items-center gap-5">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            const external = link.href.startsWith("http");

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className="inline-flex rounded-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <Icon size={18} />
                </a>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
