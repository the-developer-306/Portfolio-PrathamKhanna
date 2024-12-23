import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { div } from "framer-motion/client";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "12px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center w-full h-full items-center">
          <img
            src={education.icon}
            alt={education.institute_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex justify-center">
          <h3 className="text-white text-[24px] font-bold">
            {education.title}
          </h3>
        </div>

        <p className="text-secondary text-[16px] font-semibold">
          <span>Institute Name:</span>{" "}
          <span className="blue-text-gradient">{education.institute_name}</span>
        </p>

        <p className="text-secondary text-[16px] font-semibold">
          <span>Affiliation:</span>{" "}
          <span className="blue-text-gradient">{education.affiliation}</span>
        </p>

        <p className="text-secondary text-[16px] font-semibold">
          <span>City:</span>{" "}
          <span className="blue-text-gradient">{education.city}</span>
        </p>

        <p className="text-secondary text-[16px] font-semibold">
          <span>Field of Study:</span>{" "}
          <span className="blue-text-gradient">{education.fos}</span>
        </p>

        <p className="text-secondary text-[10px]">
          <span>C.G.P.A. / Percentage:</span>
          <span className="blue-text-gradient"> &nbsp; {education.cgpa} </span>
        </p>

        {/* <p className="text-secondary text-[10px]">
          <span>Special Mentions:</span>
          <span className="blue-text-gradient"> &nbsp; {education.special_mentions} </span>
        </p> */}

        {education.website && (
          <div className="mt-4">
            <button
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
              onClick={() => window.open(education.website, "_blank")}
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>Vist Institute Website</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have studied so far</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
