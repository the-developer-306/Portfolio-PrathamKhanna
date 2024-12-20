import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { Html, OrbitControls } from "@react-three/drei";
import { cn } from "../utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
("use client");

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../canvas-reveal-effect";
// import "../cards.css"

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl"
    >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2
          className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Approach = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How i work</p>
        <h2 className={styles.sectionHeadText}>My Approach</h2>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-10">
        <div>
          <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black-100 w-full gap-4 mx-auto px-8 rounded-2xl">
            <Card
              title="Planning & Strategy"
              icon={<AceternityIcon order="Phase 1" />}
              description="We'll collaborate to map out your project's goals, target audience, and key functionalities. We'll discuss elements like data integration, machine learning model requirements, site structure, navigation, and content needs."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl border-2 border-white overflow-hidden"
              />
            </Card>

            <Card
              title="Development & Progress Update"
              icon={<AceternityIcon order="Phase 2" />}
              description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial data analysis and model development to integrating automation features and user-friendly interfaces, I keep you updated every step of the way."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black rounded-3xl border-2 border-white overflow-hidden"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
              {/* Radial gradient for the cute fade */}
              {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
            </Card>

            <Card
              title="Development & Launch"
              icon={<AceternityIcon order="Phase 3" />}
              description="This is where the magic happens! Based on the approved design and strategy, I’ll translate everything into functional code. By leveraging machine learning, automation, and robust data management, I'll build dynamic and intelligent systems from the ground up to meet your visionary needs."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600 rounded-3xl border-2 border-white overflow-hidden"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Approach, "approach");
