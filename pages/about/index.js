import { useState } from "react";

import { Icon } from "@iconify/react";

//  data
const aboutData = [
  {
    title: "techs",
    info: [
      {
        title: "Web Development",
        icons: [
          <Icon key="1"icon="devicon:html5" />,
          <Icon key="2"icon="devicon:css3" />,
          <Icon key="3"icon="logos:javascript" />,
          <Icon key="4"icon="devicon:typescript" />,
          <Icon key="5"icon="logos:react" />,
          <Icon key="6"icon="devicon:nextjs-wordmark" />,
          <Icon key="7"icon="devicon:vitejs" />,
          <Icon key="8"icon="devicon:tailwindcss" />,
          <Icon key="9"icon="devicon:bootstrap" />,
          <Icon key="10"icon="devicon:framermotion" />,
        ],
      },
      {
        title: "Back-End",
        icons: [
          <Icon key="1" icon="devicon:java" />,
          <Icon key="2" icon="devicon:spring" />,
          <Icon key="3" icon="devicon:python" />,
          <Icon key="4" icon="devicon:kotlin" />,
          <Icon key="5" icon="devicon:sqldeveloper" />,
          <Icon key="6" icon="devicon:prisma" />,
        ],
      },
      {
        title: "Others",
        icons: [<Icon key="1" icon="devicon:git" />, <Icon key="2" icon="devicon:figma" />],
      },
    ],
  },
  {
    title: "educação",
    info: [
      {
        title: "Análise e Desenvolvimento de Sistemas",
        stage: "Fev/2023 - Atualmente",
      },
      {
        title: "Rocketseat Ignite",
        stage: "Set/2022 - Jun/2023",
      },
      {
        title: "UX Design - Google",
        stage: "Set/2022 - Atualmente",
      },
      {
        title: "Desenvolvimento Front-End - Tech4Me",
        stage: "Mar/2022 - Set/2022",
      },
    ],
  },
  {
    title: "experiência",
    info: [
      {
        title: "Buscando minha primeira vaga como desenvolvedor",
        stage: "",
      },
    ],
  },
  {
    title: "certificados",
    info: [
      {
        title: "ReactJS / TypeScript / Next.js - Rocketseat",
        stage: "2023",
      },
      {
        title: "Desenvolvedor Front-End - Tech4Me",
        stage: "2022",
      },
      {
        title: "Assistente Administrativo - SENAI, Maracanã, RJ",
        stage: "2023",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/60 xl:bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
        <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl lg:h2"
            >
              Sobre mim <span className="text-violet-500">.</span>
            </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm lg:text-lg max-w-[500px] mx:auto xl:mx-0 mt-4 xl:mt-8 mb-6 xl:mb-12 px-4 xl:px-0"
          >
            Natural do Rio de Janeiro, apaixonado por jogos, programação e
            música. Esdudante de programação à 2 anos. Comecei estudando
            desenvolvimento web em 2021 com cursos gratuitos na internet, logo
            depois expandi para o front-end e ux/ui design, posteriormente
            expandindo pro back-end, sempre evoluindo minhas habilidades para
            entregar o melhor trabalho possível.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex justify-evenly gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-violet-500 after:w-[100%] after:bg-violet-500 after:transition-all after:duration-300"
                  } 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/100"
                >
                  <div className="font-medium mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="font-light text-white/50">{item.stage}</div>
                  <div className="flex gap-x-4 gap-y-4 flex-wrap">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-4xl lg:text-6xl hover:opacity-70 hover:rotate-6 hover:scale-110 transition-all duration-200">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
