"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { c1, c2, c3, c123, d1, d2, iitm } from "../assets";

const ThreeDCardDemo = ({ cert_name, cert_description, image, image_link }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {cert_name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-secondary text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {cert_description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          ></CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            onClick={() => window.open(image_link, "_blank")}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            View Credential
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Certificate Briefcase</p>
        <h2 className={styles.sectionHeadText}>Licences and Certifications</h2>
      </motion.div>

      <motion.div>
        <div className="mt-20 flex flex-wrap gap-20 mx-10">
          <div>
            <ThreeDCardDemo
              cert_name="Practical Multi AI Agents and Advanced Use Cases with crewAI"
              cert_description="Certificate of Completion @DeepLearning.AI"
              image_link="https://learn.deeplearning.ai/accomplishments/ef8d4333-98c2-40de-b783-64ac85346d78?usp=sharing"
              image={d2}
            />
          </div>
          <div>
            <ThreeDCardDemo
              cert_name="Multi AI Agent Systems with crewAI"
              cert_description="Certificate of Completion @DeepLearning.AI"
              image_link="https://learn.deeplearning.ai/accomplishments/20133983-1b14-4e5a-a666-7c26068b560d?usp=sharing"
              image={d1}
            />
          </div>
          <div>
            <ThreeDCardDemo
              cert_name="Machine Learning Specialization"
              cert_description="Certificate of Specialization Completion @Coursera"
              image_link="https://www.coursera.org/account/accomplishments/verify/X512I33AF5I1"
              image={c123}
            />
          </div>
          <div>
            <ThreeDCardDemo
              cert_name="Unsupervised  Learning, Recommenders, Reinforcement Learning"
              cert_description="Certificate of Completion @Coursera"
              image_link="https://www.coursera.org/account/accomplishments/verify/X512I33AF5I1"
              image={c3}
            />
          </div>
          <div>
            <ThreeDCardDemo
              cert_name="Advanced Learning Algorithms"
              cert_description="Certificate of Completion @Coursera"
              image_link="https://www.coursera.org/account/accomplishments/verify/P5O8R6BDL53M"
              image={c2}
            />
          </div>
          <div>
            <ThreeDCardDemo
              cert_name="Supervised Machine Learning: Regression and Classification"
              cert_description="Certificate of Completion @Coursera"
              image_link="https://www.coursera.org/account/accomplishments/records/SQO39H0QBGD9"
              image={c1}
            />
          </div>
          <div>
            <ThreeDCardDemo
              cert_name="Foundation Level (I.I.T. Madras)"
              cert_description="Certificate of Foundational Level in Programming and Data Science"
              image_link="https://drive.google.com/file/d/1M_LiN_1EDcDSha_IMuRy0d2bwel5byq5/view"
              image={iitm}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
