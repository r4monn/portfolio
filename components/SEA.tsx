"use client"
import { applications } from "@/data/data";
import { useIsMobile } from "@/hooks/useMobile";
import { useScrollHijack } from "@/hooks/useScrollHijack";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { Reveal } from "./Reveal";

export default function SEA() {
    const [isInView, setIsInView] = useState(false);
    const applicationsRef = useRef<HTMLDivElement>(null);
    const hijackSectionRef = useRef<HTMLDivElement>(null!);
    const [hoveredapplication, setHoveredapplication] = useState<number | null>(null);
    const isMobile = useIsMobile();

    const { isHijacked, currentIndex } = useScrollHijack(
        hijackSectionRef,
        applications.length
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);  // Ativa/desativa o scroll hijack com base na visibilidade
            },
            { threshold: 0.2 }
        );

        if (hijackSectionRef.current) {
            observer.observe(hijackSectionRef.current);
        }

        return () => {
            if (hijackSectionRef.current) {
                observer.unobserve(hijackSectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="applications"
            className="relative bg-background overflow-hidden w-full"
        >
            <div className="w-full px-8 sm:px-10 lg:px-16" ref={applicationsRef}>
                <div
                    className={`text-center mb-10 max-w-3xl mx-auto application-item transition-all duration-1000 opacity-100 translate-y-0`}
                >
                    <Reveal>
                        <div className="inline-block mb-2 px-3 py-1 bg-secondary rounded-full text-sm font-light">
                            Aplicações de Engenharia de Software
                        </div>
                    </Reveal>

                    <TextReveal>
                        <p className="mt-4">
                            A minha especialidade é transformar ideias complexas em soluções
                            de software eficientes, escaláveis e inteligentes que processam
                            dados, automatizam fluxos de trabalho e proporcionam experiências
                            de utilizador excecionais em diversos domínios.
                        </p>
                    </TextReveal>
                </div>

                <Reveal>
                    {/* Scroll-hijacked applications section */}
                    <div
                        ref={hijackSectionRef}
                        className={cn(
                            "relative transition-all duration-500",
                            isHijacked && isInView
                                ? "fixed inset-0 z-50 bg-black"
                                : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4 mb-8"
                        )}
                        style={{ height: isHijacked && isInView ? "100vh" : "auto" }}
                    >
                        {isHijacked && (
                            <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                                {currentIndex + 1} / {applications.length}
                            </div>
                        )}

                        {applications.map((application, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "application-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-xl cursor-pointer",
                                    isHijacked
                                        ? cn(
                                            "absolute inset-0 w-full h-full",
                                            index === currentIndex
                                                ? "opacity-100 translate-x-0"
                                                : index < currentIndex
                                                    ? "opacity-0 -translate-x-full"
                                                    : "opacity-0 translate-x-full"
                                        )
                                        : "hover:-translate-y-3 h-[290px] md:h-[260px] lg:h-60 xl:h-60"
                                )}
                                style={{
                                    transitionDelay: isHijacked ? "0ms" : `${index * 100}ms`,
                                }}
                                onMouseEnter={() => !isHijacked && setHoveredapplication(index)}
                                onMouseLeave={() => !isHijacked && setHoveredapplication(null)}
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={application.image}
                                        alt={application.title}
                                        className={cn(
                                            "w-full h-full object-cover transition-all duration-300",
                                            isHijacked
                                                ? "grayscale-0 brightness-50"
                                                : hoveredapplication === index
                                                    ? "grayscale-0" // Mostra com cores quando hover
                                                    : "grayscale"   // Mostra em escala de cinza normalmente
                                        )}
                                        height={0}
                                        width={0}
                                        sizes="100vh"
                                    />

                                    {/* Overlay escuro fixo */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 transition-opacity duration-300",
                                            isHijacked
                                                ? "bg-black/0"
                                                : "bg-black/70"
                                        )}
                                    ></div>

                                    {/* Gradiente adicional na parte inferior durante hover */}
                                    <div
                                        className={cn(
                                            "absolute inset-0  transition-all duration-300",
                                            isHijacked
                                                ? "opacity-60"
                                                : hoveredapplication === index
                                                    ? "opacity-100" // Mostra o gradiente durante hover
                                                    : "opacity-0"   // Esconde o gradiente quando não há hover
                                        )}
                                    ></div>
                                </div>

                                <div
                                    className={cn(
                                        "relative z-10 flex flex-col justify-center",
                                        isHijacked
                                            ? "p-16 h-full text-center items-center"
                                            : "p-4 h-full justify-between"
                                    )}
                                >
                                    <div className={isHijacked ? "space-y-8" : ""}>
                                        <div
                                            className={cn(
                                                "inline-block p-3 bg-background/10 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                                                isHijacked
                                                    ? "mb-6 scale-150"
                                                    : hoveredapplication === index
                                                        ? "mb-2 hover:scale-110"
                                                        : "mb-2"
                                            )}
                                        >
                                            <div
                                                className={`transform transition-transform duration-300 ${!isHijacked && hoveredapplication === index
                                                    ? "rotate-12"
                                                    : ""
                                                    }`}
                                            >
                                                {application.icon}
                                            </div>
                                        </div>
                                        <h3
                                            className={cn(
                                                "font-semibold text-white",
                                                isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                                            )}
                                        >
                                            {application.title}
                                        </h3>
                                        <p
                                            className={cn(
                                                "text-white/90",
                                                isHijacked ? "text-lg max-w-2xl text-white text-shadow-lg" : "text-sm"
                                            )}
                                        >
                                            {application.description}
                                        </p>
                                    </div>
                                    {!isHijacked && (
                                        <div
                                            className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredapplication === index ? "w-full" : "w-0"
                                                }`}
                                        ></div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isHijacked && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                                <div className="flex space-x-2 mb-4">
                                    {applications.map((_, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                "w-2 h-2 rounded-full transition-all duration-300",
                                                index === currentIndex ? "bg-white w-8" : "bg-white/50"
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="text-sm opacity-70">
                                    {isMobile ? "Deslize" : "Scroll"} para continuar
                                </p>
                            </div>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}