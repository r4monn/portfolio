"use client"

import { ArrowLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { education } from '@/data/data';
import Link from 'next/link';
import { AnimatedItem } from '@/components/AnimatedList';
import { Badge } from '@/components/ui/badge';

export default function About() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id='about' className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    <Link href="/" className="inline-flex items-center hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar ao Início
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-6"
                    >
                        <div className="relative text-center inline px-1 mt-2 sm:mt-6 mb-2">
                            <div className="relative z-10 inline">Sobre mim.</div>
                            <div className="absolute bottom-0 left-0 w-full bg-[#88CE02] mb-1.5 h-2"></div>
                        </div>
                    </motion.div>

                    <div className="prose prose-lg max-w-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-16"
                        >
                            <div className="bg-card rounded-xl border p-8 shadow-sm">
                                <p className="mb-4">
                                    Natural do Rio de Janeiro, apaixonado por jogos, programação e música. Esdudante de programação à 4 anos. Comecei estudando desenvolvimento web em 2021 com cursos gratuitos na internet, logo depois expandi para o front-end e ux/ui design, posteriormente expandindo pro back-end, sempre evoluindo minhas habilidades para entregar o melhor trabalho possível.
                                </p>
                                <p>
                                    Em 2023, fui aprovado no processo de admissão para a Jala University. Iniciei os estudos na universidade em 2024 e atualmente curso Engenharia de Software em tempo integral.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-6"
                        >
                            <div className="relative text-center inline px-1 mt-2 sm:mt-6 mb-2">
                                <div className="relative z-10 inline">Educação.</div>
                                <div className="absolute bottom-0 left-0 w-full bg-[#88CE02] mb-1.5 h-2"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-16"
                        >
                            <div className="bg-background rounded-xl border pt-8 px-8 pb-2 shadow-sm">
                                <div className="space-y-8">
                                    {education.map(
                                        ({ title, details, period, company, logo, description }, idx) => (
                                            <AnimatedItem key={idx} index={idx}>
                                                <div className="border-b pt-2 pb-6 not-last:border-b">
                                                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                                                        <div className="md:w-2/3">
                                                            <div className="mb-1 flex items-center gap-3">
                                                                <img
                                                                    src={logo}
                                                                    alt={`${company} logo`}
                                                                    className="h-5 object-contain"
                                                                />
                                                                <h3 className="text-xl font-medium">{title}</h3>
                                                            </div>
                                                            <p className="text-muted-foreground mb-3 text-sm">
                                                                {details}
                                                            </p>
                                                            <p className="font-extrabold text-sm leading-relaxed">
                                                                {description}
                                                            </p>
                                                        </div>
                                                        <div className="text-right md:w-1/3 md:text-right">
                                                            <p className="mb-1 text-sm font-medium">{period}</p>
                                                            <Badge variant={'outline'} className='text-sm font-extralight'>{company}</Badge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AnimatedItem>
                                        ),
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
};