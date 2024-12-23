import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { VertexList } from "three/examples/jsm/Addons.js";

import {
  SiPython,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiJavascript,
  SiFlask,
} from "react-icons/si";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";

import { FaNodeJs, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills Proficient in</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      {/* this code is for rendering ball canvas */}

      {/* <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {/* Skills Icons */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {/* Python */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiPython className="text-7xl text-yellow-400" />
          </motion.div>

          {/* Scikit-learn */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiScikitlearn className="text-7xl text-orange-400" />
          </motion.div>

          {/* NumPy */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiNumpy className="text-7xl text-blue-400" />
          </motion.div>

          {/* Matplotlib
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiMatplotlib className="text-7xl text-blue-500" />
          </motion.div> */}

          {/* Pandas */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiPandas className="text-7xl text-blue-500" />
          </motion.div>

          {/* TensorFlow */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <SiTensorflow className="text-7xl text-orange-400" />
          </motion.div>

          {/* Keras */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <SiKeras className="text-7xl text-red-600" />
          </motion.div>

          {/* Jupyter */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiJupyter className="text-7xl text-orange-600" />
          </motion.div>

          {/* Flask */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiFlask className="text-7xl text-white" />
          </motion.div>

          {/* HTML5 */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <FaJava className="text-7xl text-red-500" />
          </motion.div>

          {/* HTML5 */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <FaHtml5 className="text-7xl text-red-500" />
          </motion.div>

          {/* CSS3 */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <FaCss3Alt className="text-7xl text-blue-500" />
          </motion.div>

          {/* CSS3 */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiJavascript className="text-7xl text-yellow-500" />
          </motion.div>

          {/* ReactJS */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          {/* Node.js */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4"
          >
            <FaNodeJs className="text-7xl text-green-600" />
          </motion.div>

          {/* Express */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiExpress className="text-7xl text-red-700" />
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <RiTailwindCssFill className="text-7xl text-teal-400" />
          </motion.div>

          {/* PHP */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiPhp className="text-7xl text-blue-400" />
          </motion.div>

          {/* MongoDB */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiMongodb className="text-7xl text-green-600" />
          </motion.div>

          {/* MySQL */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiMysql className="text-7xl text-orange-600" />
          </motion.div>

          {/* Git */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <SiGit className="text-7xl text-orange-700" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

