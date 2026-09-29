"use client";
import React from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-800/80 py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-bold text-white tracking-wide">
            SAHADAT <span className="gold-gradient-text">BUXI</span>
          </h3>
          <p className="text-xs text-gold font-mono">
            Independent Software Developer & Technology Entrepreneur
          </p>
          <p className="text-[11px] text-zinc-500 font-mono pt-1">
            © 2026 Sahadat Buxi (Shahadat Husain). All rights reserved.
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono text-zinc-400">
          <Link href="#about" className="hover:text-gold transition-colors">About</Link>
          <Link href="#skills" className="hover:text-gold transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-gold transition-colors">Projects</Link>
          <Link href="#drone-systems" className="hover:text-gold transition-colors">Autonomous Systems</Link>
          <Link href="#mobile-dev" className="hover:text-gold transition-colors">Mobile</Link>
          <Link href="#achievements" className="hover:text-gold transition-colors">Achievements</Link>
          <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-gold hover:border-gold/40 transition-colors"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-gold hover:border-gold/40 transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-gold hover:border-gold/40 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href={config.social.email}
            aria-label="Email Contact"
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-gold hover:border-gold/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-lg gold-gradient-bg text-black hover:scale-105 transition-transform ml-2 cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
