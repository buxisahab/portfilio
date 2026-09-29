"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { Menu, X, ArrowUpRight, Sparkles, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Tech Stack", href: "/#skills", id: "skills" },
  { name: "Credentials", href: "/#credentials", id: "credentials" },
  { name: "Achievements", href: "/#achievements", id: "achievements" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto",
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/60 py-2"
          : "bg-[#050505]/60 backdrop-blur-sm py-2.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo - strictly 1 line */}
        <Link
          href="/#hero"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-[1.5px] border-gold/80 shadow-sm shadow-gold/20 group-hover:scale-105 group-hover:border-gold transition-all shrink-0 bg-zinc-900">
            <Image
              src="/logo.webp"
              alt="Sahadat Buxi"
              width={32}
              height={32}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <span className="font-extrabold tracking-wider text-sm sm:text-base text-white group-hover:text-gold transition-colors whitespace-nowrap inline-flex items-center gap-1.5">
            SAHADAT <span className="gold-gradient-text">BUXI</span>
          </span>
        </Link>

        {/* Desktop Navigation Links - slim pill */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-zinc-950/80 p-1 rounded-xl border border-zinc-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap",
                  isActive
                    ? "gold-gradient-bg text-black font-bold shadow-sm shadow-gold/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons - slim buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-gold/40 text-xs font-mono transition-colors whitespace-nowrap h-8"
          >
            <SiGithub className="w-3.5 h-3.5 text-gold" />
            <span>GitHub</span>
          </a>

          <Link href="/#contact" className="hidden sm:inline-block">
            <Button className="h-8 px-3.5 rounded-lg gold-gradient-bg text-black font-semibold text-xs hover:scale-105 transition-all shadow-sm shadow-gold/20 cursor-pointer whitespace-nowrap">
              Contact
            </Button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-gold hover:border-gold/40 lg:hidden transition-colors cursor-pointer h-8 w-8 flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gold" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-zinc-800 px-4 py-6 shadow-2xl"
          >
            <div className="max-w-md mx-auto space-y-2">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "p-3 rounded-xl text-xs font-mono transition-all text-center flex items-center justify-center gap-1.5",
                        isActive
                          ? "gold-gradient-bg text-black font-bold shadow-md shadow-gold/20"
                          : "bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-gold/40 hover:text-white"
                      )}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Social Channels in Mobile Menu */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white"
                >
                  <SiGithub className="w-4 h-4 text-gold" />
                  <span>GitHub</span>
                </a>

                <a
                  href={config.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-gold"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-500" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1"
                >
                  <Button className="w-full h-10 rounded-xl gold-gradient-bg text-black font-bold text-xs">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
