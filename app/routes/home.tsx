import type { Route } from "./+types/home";
import { useState } from "react";
import Dashboard from "../pages/dashboard";
import Contact from "~/pages/contact";
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

  return (
    <>
      <button
        onClick={() => setShowMusic(!showMusic)}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-chart-2 hover:bg-chart-3 text-white shadow-lg transition-all"
        aria-label="Toggle music player"
      >
        <AudioLinesIcon size={24} />
      </button>
      {showMusic && <Music onClose={() => setShowMusic(false)} />}
      
      <Dashboard />
      <Contact />
    </>
  );
}