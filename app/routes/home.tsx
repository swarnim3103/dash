"use client";
import { motion } from "framer-motion";
import type { Route } from "./+types/home";
import { useState, useEffect, useState as useReactState } from "react";
import Dashboard from "../pages/dashboard";
import Nav from "~/components/nav";
import Music from "~/components/music";
import AudioLinesIcon from "~/assets/icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "dash" },
    { name: "dash", content: "portfolio" },
  ];
}

export default function Home() {
  const [showMusic, setShowMusic] = useState(false);
  const [lift, setLift] = useReactState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setLift(true);
      } else {
        setLift(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[200vh] bg-background overflow-hidden">
      <button
        onClick={() => setShowMusic(!showMusic)}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-chart-2 hover:bg-chart-3 text-white shadow-lg transition-all"
        aria-label="Toggle music player"
      >
        <AudioLinesIcon size={24} />
      </button>
      {showMusic && <Music onClose={() => setShowMusic(false)} />}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <Nav />
      </div>
      <motion.div
        animate={lift ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 1, ease: [0, 0, 0, 0] }}
        className="fixed top-0 left-0 w-full h-screen z-10 bg-background"
      >
        <Dashboard />
      </motion.div>
    </div>
  );
}
