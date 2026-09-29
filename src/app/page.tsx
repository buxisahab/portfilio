"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WhatIBuildSection from "@/components/sections/what-i-build";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import DroneSystemsSection from "@/components/sections/drone-systems";
import MobileDevSection from "@/components/sections/mobile-dev";
import AiMlSection from "@/components/sections/ai-ml";
import GameDevSection from "@/components/sections/game-dev";
import AchievementsSection from "@/components/sections/achievements";
import CertificationsSection from "@/components/sections/certifications";
import ExperienceSection from "@/components/sections/experience";
import ProcessSection from "@/components/sections/process";
import ContactSection from "@/components/sections/contact";
import Script from "next/script";
import { config } from "@/data/config";

function MainPage() {
  return (
    <SmoothScroll>
      <Script
        id="ld-json-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: config.author,
            jobTitle: "Independent Software Developer & Technology Entrepreneur",
            url: config.site,
            description: config.description.long,
            knowsAbout: [
              "Software Engineering",
              "AI & Machine Learning",
              "Computer Vision",
              "Android & Kotlin",
              "Flutter",
              "Autonomous Drones & Pixhawk",
              "IoT Systems",
              "Web Development",
              "Game Development"
            ],
            sameAs: [
              config.social.github,
              config.social.linkedin
            ]
          }),
        }}
      />
      <AnimatedBackground />
      <main className={cn("bg-transparent text-white canvas-overlay-mode min-h-screen relative z-10")}>
        <HeroSection />
        <AboutSection />
        <WhatIBuildSection />
        <SkillsSection />
        <ProjectsSection />
        <DroneSystemsSection />
        <MobileDevSection />
        <AiMlSection />
        <GameDevSection />
        <AchievementsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
