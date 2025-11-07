import { useIsMobile } from "@/hooks/useMobile";
import Prism from "./Prism";
import { TouchEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, Ban, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/data";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import TextReveal from "./TextReveal";
import { Reveal } from "./Reveal";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const projectsRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const isMobile = useIsMobile();

    const minSwipeDistance = 50

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsInView(true);
            } else {
                setIsInView(false);
            }
        }, {
            threshold: 0.2
        });

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setActiveProject(prev => (prev + 1) % projects.length);
        } else if (isRightSwipe) {
            setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
        }
    };

    const getCardAnimationClass = (index: number) => {
        if (index === activeProject) return "scale-100 opacity-100 z-20";
        if (index === (activeProject + 1) % projects.length) return "translate-x-[40%] scale-95 opacity-60 z-10";
        if (index === (activeProject - 1 + projects.length) % projects.length) return "translate-x-[-40%] scale-95 opacity-60 z-10";
        return "scale-90 opacity-0";
    };

    return (
        <section id="projects" className="">
            <div style={{ width: '100%', height: '980px', position: 'relative', background: 'transparent' }}>
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={6.4}
                    baseWidth={5.5}
                    scale={2}
                    hueShift={1.56}
                    colorFrequency={1}
                    noise={0}
                    glow={1}
                >
                    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 opacity-100 translate-y-0`}>
                            <Reveal>
                                <div className="inline-block mt-12 md:mt-36 mb-2 px-3 py-1 bg-secondary rounded-full text-sm font-light">
                                    Projetos Recentes
                                </div>
                            </Reveal>

                            <TextReveal>
                                <div className="text-3xl font-bold mt-4 mb-3">
                                    <span>Da Ideia à </span>
                                    <div className="relative text-center inline px-1 mt-2 sm:mt-6 mb-3">
                                        <div className="relative z-10 inline">Implementação.</div>
                                        <div className="absolute bottom-0 left-0 w-full bg-[#88CE02] mb-1 h-1/5"></div>
                                    </div>
                                </div>
                            </TextReveal>

                            <TextReveal>
                                <p className="">
                                    Explore abaixo uma seleção de soluções de software que desenvolvi, entregando resultados tangíveis em diversos setores. Cada projeto demonstra a aplicação de princípios de engenharia para criar sistemas eficientes e escaláveis.
                                </p>
                            </TextReveal>
                            {isMobile && (
                                <div className="flex items-center justify-center mt-4 animate-pulse-slow">
                                    <div className="flex items-center text-blue-500">
                                        <ChevronLeft size={16} />
                                        <p className="text-sm mx-1">Swipe to navigate</p>
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative h-[550px] overflow-hidden"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            ref={carouselRef}
                        >
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        <Card className="overflow-hidden h-[500px] border-b-2 border-b-[#88CE02] shadow-lg hover:shadow-xl flex flex-col">
                                            <div
                                                className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                                                style={{
                                                    backgroundImage: `url(${project.imageUrl})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-black/50"></div>
                                                <div className="relative z-10 flex flex-col items-center justify-center">
                                                    <h3 className="text-2xl font-bold text-white mb-2">{project.brand.toUpperCase()}</h3>
                                                    <div className="w-12 h-1 bg-white mb-2"></div>
                                                    <p className="text-white/90 text-sm">{project.title}</p>
                                                </div>
                                            </div>

                                            <CardContent className="sm:px-6 md:p-6 flex flex-col grow">
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold mb-1 group-hover:text-gray-500 transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm font-bold">{project.brand}</p>
                                                </div>
                                                <hr className="w-48 mb-4" />

                                                <p className="text-sm mb-4 grow">{project.description}</p>

                                                <div className="mt-auto">
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.tags.map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-1 bg-secondary text-foreground font-light rounded-full text-xs animate-pulse-slow"
                                                                style={{ animationDelay: `${idx * 300}ms` }}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <br />

                                                    {project.link !== "" && (
                                                        <a
                                                            href={`https://` + project.link}
                                                            className=""
                                                            target="_blank"
                                                        >
                                                            <Button variant="default" className="flex items-center group btn-11 btn-effect-11">
                                                                <span className="relative z-10">VISUALIZAR DEMO</span>
                                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                                                            </Button>

                                                        </a>
                                                    )}

                                                    {project.link === "" && (
                                                        <Button variant="destructive" disabled className="flex items-center">
                                                            <span className="relative z-10">INDISPONÍVEL</span>
                                                            <Ban className="ml-0.5 w-4 h-4 group-hover:translate-x-1" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>

                            {!isMobile && (
                                <>
                                    <button
                                        className="absolute left-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-secondary/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110"
                                        onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
                                        aria-label="Previous project"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    <button
                                        className="absolute right-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-secondary/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110"
                                        onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
                                        aria-label="Next project"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}

                            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
                                {projects.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${activeProject === idx ? 'bg-primary w-5' : 'bg-gray-200 hover:bg-gray-300'}`}
                                        onClick={() => setActiveProject(idx)}
                                        aria-label={`Go to project ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Prism>
            </div >
        </section >
    )
}