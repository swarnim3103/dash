import image from "app/assets/Document.png";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Welcome() {
  return (
    <>
      <div>
        <img src={image} className="w-full h-screen absolute z-0"></img>
        <div className="z-10 relative flex items-center justify-center h-screen">
          <h1
            className="text-9xl text-transparent font-cormorant tracking-widest"
            style={{
              background:
                `linear-gradient(90deg, oklch(38.6% 0.063 188.416),oklch(60% 0.118 184.704),oklch(91% 0.096 180.426))`,
              backgroundSize: "400% 400%",
              animation: "gradientShift 3s ease-in-out infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            w e l c o m e
          </h1>
        </div>
      </div>
      <style>{`
            @keyframes gradientShift {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
        `}</style>
    </>
  );
}
