"use client"
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./interactive-grid-pattern";
import { ArrowRight, MessageSquare } from "lucide-react";
import TextType from "./TextType";
import { techsData } from "@/data/data";

export default function Hero() {
    return (
        <section className="flex flex-col justify-around relative h-screen w-full py-40 px-8">
            <InteractiveGridPattern
                width={60}
                height={60}
                squares={[40, 20]}
                className={cn(
                    "mask-[radial-gradient(1000px,white,transparent)]",
                    "inset-x-0 inset-y-[-12%]  h-[150%] -skew-y-12"
                )}
            />

            <div className="flex flex-col relative justify-self-center self-center text-center max-w-4xl">
                <div className="text-5xl sm:text-5xl lg:text-6xl font-bold">
                    <span className="text-foreground/80">Olá, eu sou </span>
                    <div className="relative text-center inline px-1 mt-2 sm:mt-6">
                        <div className="relative z-10 inline text-shadow-md">Ramon</div>
                        <div className="absolute bottom-3 left-0 w-full bg-[#88CE02] h-3"></div>
                    </div>
                    <span>!</span>
                </div>

                <TextType
                    text={["Sofware Developer", "Web Developer", "UX/UI Designer"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-4xl sm:text-5xl lg:text-6xl mt-4 text-primary font-medium text-shadow-xs"
                />

                <p
                    className="krub font-bold text-foreground/65 mt-4 sm:mt-6 text-lg md:text-xl"
                >
                    Provedor de soluções tecnológicas mais adequadas para você e sua
                    empresa. Vamos trabalhar juntos e transformar suas ideias em
                    realidade?
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center"
                >
                    {/* Styled as a button but using an anchor tag for project navigation */}
                    <button
                        className="relative w-full sm:w-auto min-h-11 px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium rounded-lg"
                    /* onClick={(e) => {
                      e.preventDefault();
                      const projectsSection = document.getElementById("projects");
                      if (projectsSection) {
                        projectsSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }} */
                    >
                        Explorar Projetos
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Using the Button component from shadcn but with custom styling to match the explore button */}
                    <button
                        className="relative w-full sm:w-auto min-h-11 px-6 sm:px-8 py-3 text-gray-700 bg-[#88CE02] rounded-lg hover:bg-[#bdff43] transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                    >
                        Entrar em Contato
                        <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            <div className="mt-20 xl:-mb-10 relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center mt-5">
                    <div className="inline-block mt-4 mb-6 px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-light">
                        Experiente com as Tecnologias
                    </div>
                </div>

                <div
                    className="mt-16 md:mt-8 gap-4 md:gap-4"
                >
                    <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-6xl">
                            {techsData.map((logo, index) => (
                                <li
                                    key={index}
                                    className="p-4 md:p-5 transform transition-all duration-300 hover:-translate-y-5"
                                >
                                    {logo}
                                </li>
                            ))}
                        </ul>
                        <ul
                            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-6xl"
                            aria-hidden="true"
                        >
                            {techsData.map((logo, index) => (
                                <li
                                    key={index}
                                    className="p-4 md:p-5 transform transition-all duration-300 hover:-translate-y-5"
                                >
                                    {logo}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}