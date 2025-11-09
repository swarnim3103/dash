import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useMotionValue } from "framer-motion";
import { Link } from "react-router";
import Water from "~/assets/water.mp4";
export default function Nav() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const navItems = [
    { label: "AboutMe", id: 0, path: "/collection" },
    { label: "Work", id: 1, path: "/work" },
    { label: "Collection", id: 2, path: "/about" },
    { label: "Life", id: 3, path: "/life" },
    { label: "ContactMe", id: 4, path: "/contact" },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <video
        src={Water}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover fixed z-0"
      ></video>
      <div
        ref={containerRef}
        className="h-[300vh] relative text-white z-10"
      >
        <div className="fixed left-0 top-0 w-full h-screen pointer-events-none">
          {navItems.map((item, index) => {
            const itemProgress = useTransform(
              scrollYProgress,
              [0, 1],
              [index / navItems.length, index / navItems.length + 3]
            );

            const normalizedProgress = useTransform(itemProgress, (p) => p % 1);

            const radius = 400;
            const angle = useTransform(normalizedProgress, [0, 1], [0, 180]);

            const x = useTransform(angle, (a) => {
              const rad = (a * Math.PI) / 180;
              return Math.sin(rad) * radius;
            });

            const y = useTransform(angle, (a) => {
              const rad = (a * Math.PI) / 180;
              return `calc(50vh + ${(1 - Math.cos(rad)) * radius - radius}px)`;
            });

            const opacity = useTransform(
              normalizedProgress,
              [0, 0.1, 0.9, 1],
              [0, 1, 1, 0]
            );
            const rotate = useTransform(angle, (a) => a - 90);
            const scale = useTransform(
              normalizedProgress,
              [0, 0.4, 0.45, 0.55, 0.6, 1],
              [1, 1, 1.5, 1.5, 1, 1]
            );

            const blur = useTransform(
              normalizedProgress,
              [0, 0.4, 0.45, 0.55, 0.6, 1],
              [5, 3, 0, 0, 3, 5]
            );

            const zIndex = useTransform(
              normalizedProgress,
              [0, 0.4, 0.45, 0.55, 0.6, 1],
              [10, 50, 100, 100, 50, 10]
            );

            const nudge = useTransform(
              normalizedProgress,
              [0, 0.4, 0.45, 0.55, 0.6, 1],
              [0, 0, 40, 40, 0, 0]
            );

            return (
              <motion.div
                key={item.id}
                className="absolute pointer-events-auto"
                style={{
                  x: useTransform(
                    [x, nudge],
                    ([xVal, nudgeVal]) =>
                      (xVal as number) + (nudgeVal as number)
                  ),
                  y,
                  opacity,
                  rotate,
                  scale,
                  filter: useTransform(blur, (b) => `blur(${b}px)`),
                  zIndex,
                  transformOrigin: "center center",
                }}
              >
                <Link to={item.path} className="no-underline">
                  <motion.div
                    className="text-white px-6 py-3 font-cedarville text-7xl font-bold cursor-pointer whitespace-nowrap"
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
