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
      className="relative flex min-h-[calc(100svh-3.25rem)] items-center overflow-hidden border-b border-border px-6 py-20 md:px-10 md:py-24"
    >
      <HeroBackground />
      <motion.div
        className="relative mx-auto w-full max-w-5xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-sm text-muted">
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          id="hero-heading"
          variants={item}
          className="mt-2 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Ak
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 text-lg font-medium text-foreground md:text-xl"
        >
          Python Developer &amp; Data Scientist
        </motion.p>
        <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          I build practical software, APIs, data-driven applications and AI/ML solutions.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="#projects">View Projects</ButtonLink>
          <ButtonLink href={resumeHref} variant="secondary" download>
            Download Resume
          </ButtonLink>
        </motion.div>
        <motion.ul variants={item} className="mt-10 flex items-center gap-5">
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
                  className="inline-flex text-muted transition-colors hover:text-accent"
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
