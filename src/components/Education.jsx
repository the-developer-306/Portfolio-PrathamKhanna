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
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>

        <p className="text-secondary text-[10px]">
          <span>C.G.P.A. / Percentage:</span>
          <span className="blue-text-gradient"> &nbsp; {education.cgpa} </span>
        </p>

        <p className="text-secondary text-[16px] font-semibold">
          {education.institute_name}
        </p>

        <p className="text-secondary text-[10px]">{education.fos}</p>

        <p className="text-secondary text-[10px]">
          {education.special_mentions}
        </p>
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
