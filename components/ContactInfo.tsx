"use client"
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";
import { Reveal } from "./Reveal";

export default function ContactInfo() {
  return (
    <section
      id="contact"
      className="bg-background relative py-[15px] md:py-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <div className="inline-block mb-3 px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-light">
              Entre em contato
            </div>
          </Reveal>

          <TextReveal>
            <div className="text-3xl md:text-4xl font-bold my-4 text-foreground">
              <div className="relative text-center inline px-1 mt-2 sm:mt-6 mb-2">
                <div className="relative z-10 inline">Contate-me Hoje.</div>
                <div className="absolute bottom-0 left-0 w-full bg-[#88CE02] mb-1 h-2.5"></div>
              </div>
            </div>
          </TextReveal>

          <TextReveal>
            <p className="max-w-2xl mx-auto">
              Tem dúvidas sobre alguma das minhas soluções? Entre em contacto agora
              e vamos discutir como podemos ajudar a concretizar as
              suas ideias.
            </p>
          </TextReveal>
        </div>

        <div className="max-w-md mx-auto gap-8">
          <SpotlightCard className="custom-spotlight-card bg-card" spotlightColor="rgba(136, 206, 2, 0.35)">
            <div className="flex flex-col items-center text-center">
              <ElectricBorder
                color="#88ce02"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 999 }}

              >
                <img
                  src="/assets/avatar2.jpeg"
                  alt="Felix von Heland"
                  className="w-32 h-32 rounded-full m-2 object-cover filter grayscale"
                />
              </ElectricBorder>
              <h3 className="text-xl font-bold text-foreground mt-4">Ramon Dias</h3>
              <p className="opacity-50 mb-4">Software Engineer</p>
              <div className="flex flex-col space-y-3 text-foreground/65">
                <a
                  href="mailto:ramondiiaas@hotmail.com"
                  className="flex items-center hover:text-[#88CE02]"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  ramondiiaas@hotmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ramon-diiaas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[#88CE02]"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Perfil LinkedIn
                </a>
                <a
                  href="https://github.com/r4monn"
                  className="flex items-center hover:text-[#88CE02]"
                >
                  <Github className="w-5 h-5 mr-2" />
                  /r4monn
                </a>
                <a
                  href="https://www.instagram.com/ramondiiaas/"
                  className="flex items-center hover:text-[#88CE02]"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  /ramondiiaas
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};