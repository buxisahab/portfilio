"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Sparkles, Send, Github, Linkedin, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="contact"
        title="Have an Idea? Let's Build It."
        desc="Whether you need a mobile application, web platform, AI solution, automation system, or an experimental technology product, let's turn the idea into something real."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Action & Links */}
        <motion.div
          className="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold/40 relative overflow-hidden flex flex-col justify-between"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-gold/10 text-gold border border-gold/30 mb-6">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              Start a Conversation
            </h3>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              I am open to discuss new software product ideas, technical architecture consultations, autonomous drone collaborations, or full-stack digital product execution.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={config.social.email}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-gold/50 transition-colors text-sm text-zinc-200"
              >
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">Direct Email</div>
                  <div className="font-mono text-xs sm:text-sm text-gold">sahadatbuxi@gmail.com</div>
                </div>
              </a>

              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-gold/50 transition-colors text-sm text-zinc-200"
              >
                <Github className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">GitHub Profile</div>
                  <div className="font-mono text-xs sm:text-sm text-white">github.com/buxisahab</div>
                </div>
              </a>

              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-gold/50 transition-colors text-sm text-zinc-200"
              >
                <Linkedin className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">LinkedIn Network</div>
                  <div className="font-mono text-xs sm:text-sm text-white">linkedin.com/in/sahadatbuxi/</div>
                </div>
              </a>

              <a
                href={config.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-gold/50 transition-colors text-sm text-zinc-200"
              >
                <PhoneCall className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">WhatsApp Contact</div>
                  <div className="font-mono text-xs sm:text-sm text-white">+91 9771204171</div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800">
            <a href="mailto:sahadatbuxi@gmail.com?subject=New%20Project%20Inquiry">
              <Button className="gold-gradient-bg text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl cursor-pointer">
                Start a Project
              </Button>
            </a>
            <a href="#contact-form">
              <Button variant="outline" className="border-gold/40 text-white hover:bg-gold/10 text-xs sm:text-sm px-5 py-2.5 rounded-xl cursor-pointer">
                Send Message
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          id="contact-form"
          className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-zinc-400">
              Fill out your details and project outline below. Direct notifications dispatched to inbox.
            </p>
          </div>

          <ContactForm />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
