"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Cpu, Navigation, Eye, Radio, ShieldAlert, Zap, Layers } from "lucide-react";

const droneTechs = [
  { name: "Pixhawk Flight Controller", desc: "Hardware flight control, attitude stabilization & programmatic waypoint execution.", icon: Navigation },
  { name: "Raspberry Pi 4 8GB", desc: "Onboard companion computer running Edge AI inference, MAVLink & telemetry parsing.", icon: Cpu },
  { name: "Arduino Microcontrollers", desc: "Custom hardware interfaces for servo payload delivery release mechanisms & sensor polling.", icon: Zap },
  { name: "DroneKit & MAVProxy", desc: "Python autonomous flight scripting, vehicle arming, takeoff, and fail-safe automation.", icon: Navigation },
  { name: "QGroundControl", desc: "Ground station setup, telemetry links, parameters tuning, and mission planning.", icon: Radio },
  { name: "Sensors & FLIR Vision", desc: "GPS, IMU, LiDAR altitude hold, Thermal FLIR Camera & RGB obstacle detection.", icon: Eye },
];

const DroneSystemsSection = () => {
  return (
    <SectionWrapper id="drone-systems" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="drone-systems"
        title="Drone & Autonomous Systems"
        desc="Engineering experience with hardware controllers, companion computers, telemetry & autonomous flight."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Banner card */}
        <motion.div
          className="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold/40 relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-3.5 w-fit rounded-xl bg-gold/10 text-gold border border-gold/30 mb-6">
            <Navigation className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-gold px-2.5 py-1 rounded bg-gold/10 border border-gold/20 mb-3 inline-block">
            Hardware & Software Engineering
          </span>

          <h3 className="text-2xl font-extrabold text-white mb-4">
            AVIRON & Autonomous Robotics Architecture
          </h3>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Hands-on development uniting Pixhawk flight management with onboard companion hardware. Programmatically controlling UAV telemetry, optical flow, medical payload drops, and failsafe returns.
          </p>

          <div className="space-y-2 text-xs font-mono text-zinc-400 border-t border-zinc-800 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Real-Time MAVLink Telemetry Backhaul</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Edge AI Computer Vision Obstacle Avoidance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>5G Emergency Response & Medical Payload</span>
            </div>
          </div>
        </motion.div>

        {/* Tech Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {droneTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="glass-card p-5 rounded-xl border border-zinc-800 hover:border-gold/40 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-900 text-gold border border-zinc-800">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{tech.name}</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DroneSystemsSection;
