"use client";

import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { PROJECTS, Project, ProjectCategory } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  X,
  CheckCircle2,
  AlertCircle,
  Award,
  ChevronRight,
  Navigation,
  Smartphone,
  Globe,
  Bot,
  Gamepad2,
  Radio
} from "lucide-react";
import { Button } from "../ui/button";

const categories: ProjectCategory[] = [
  "All",
  "Mobile",
  "Web",
  "AI/ML",
  "Drone & Robotics",
  "IoT",
  "Game Development",
  "Experimental",
];

const categoryIcons: Record<string, React.ElementType> = {
  All: Layers,
  Mobile: Smartphone,
  Web: Globe,
  "AI/ML": Bot,
  "Drone & Robotics": Navigation,
  IoT: Radio,
  "Game Development": Gamepad2,
  Experimental: Sparkles,
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === "All") return true;
    return (
      proj.category === activeCategory ||
      proj.additionalCategories?.includes(activeCategory)
    );
  });

  return (
    <SectionWrapper id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="projects"
        title="Featured Projects & Engineering Showcase"
        desc="Autonomous systems, AI models, mobile applications, and web platforms."
      />

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-2">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat] || Layers;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "gold-gradient-bg text-black font-semibold shadow-md shadow-gold/20"
                  : "glass-card text-zinc-400 hover:text-white hover:border-gold/40 border border-zinc-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className={`glass-card rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 ${
                project.featured
                  ? "border-gold/40 shadow-lg shadow-gold/5"
                  : "border-zinc-800/80 hover:border-gold/40"
              }`}
            >
              <div className="p-6">
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-gold/10 text-gold border border-gold/20">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-1">
                  {project.name}
                </h3>
                {project.tagline && (
                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    {project.tagline}
                  </p>
                )}

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-gold border border-gold/20">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer action buttons */}
              <div className="p-4 bg-zinc-900/40 border-t border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-gold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-gold/40 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold/40 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-gold transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-gold/10 text-gold border border-gold/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {selectedProject.status}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {selectedProject.name}
              </h2>
              {selectedProject.tagline && (
                <p className="text-sm font-mono text-gold mb-4">
                  {selectedProject.tagline}
                </p>
              )}

              {selectedProject.historyNote && (
                <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/30 text-xs text-gold font-mono mb-6 flex items-start gap-2">
                  <Award className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{selectedProject.historyNote}</span>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Overview
                </h4>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Key Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Technologies & Hardware Specs
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-700 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gold-gradient-bg text-black font-semibold flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>View Code Repository</span>
                    </Button>
                  </a>
                )}
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                  className="border-zinc-800 text-zinc-400 hover:text-white"
                >
                  Close Window
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;
