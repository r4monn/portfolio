import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              inital="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Meus serviços <span className="text-violet-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              inital="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Transforme sua ideia em realidade com alguns dos meus serviços:
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            inital="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
