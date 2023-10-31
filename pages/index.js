import Image from "next/image";

import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn('down', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="h1"
          >
            Transforming Ideas <br /> Into <span className="text-violet-500">Digital Reality</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna risus, fringilla iaculis mauris at, pharetra convallis ex. Phasellus bibendum.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img*/}
        <div className="bg-none xl:bg-explosion2 xl:bg-cover xl:bg-right xl:bg-no-repeat w-9/12 h-full absolute -right-8 -bottom-1/3 bg-right-bottom mix-blend-exclusion opacity-30"></div>
        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-44 lg:right-[4%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
