import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              inital="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-16"
            >
              Meus trabalhos <span className="text-violet-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.6)}
              inital="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            inital="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

