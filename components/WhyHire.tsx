"use client"
import { ArrowRight, BarChart, Percent, Rocket } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import CountUp from './CountUp';
import MagicBento from './MagicBento';
import Link from 'next/link';
import TextReveal from './TextReveal';
import { Reveal } from './Reveal';

export default function WhyHire() {
  return (
    <section id="why-hire" className="relative mx-auto py-16 md:py-24 bg-background overflow-hidden px-4 sm:px-6 lg:px-24 xl:px-64">
      <div className="text-center mt-10 mb-12 md:mb-16">
        <TextReveal>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span>Por que me </span>
            <div className="relative text-center inline px-1 mt-2 sm:mt-6 mb-2">
              <div className="relative z-10 inline">Contratar</div>
              <div className="absolute bottom-0 left-0 w-full bg-[#88CE02] mb-1 h-2 md:mb-2 md:h-3"></div>
            </div>
            <span>?</span>
          </div>
        </TextReveal>

        <TextReveal>
          <p className="text-lg max-w-3xl mx-auto">
            Em um mercado onde a tecnologia define o sucesso, trago experiência e inovação para transformar suas ideias em realidade digital
          </p>
        </TextReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.5} glarePosition="all" glareBorderRadius="12px">
          <div className="bg-card p-6 rounded-xl border text-center group not-dark:hover:bg-foreground hover:text-background transition-all">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 not-dark:group-hover:bg-background not-dark:group-hover:text-foreground">
              <BarChart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3 dark:group-hover:text-foreground">
              +
              <CountUp
                from={0}
                to={4}
                direction="up"
                duration={1}
                className="count-up-text"
              />
              &nbsp;Anos
            </h3>
            <p className="dark:group-hover:text-foreground group-hover:text-background">
              De experiência criando soluções digitais que transformam negócios e geram resultados reais
            </p>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.5} glarePosition="all" glareBorderRadius="12px">
          <div className="bg-secondary/40 dark:bg-card p-6 rounded-xl border text-center group hover:bg-foreground hover:text-background transition-all">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 not-dark:group-hover:bg-background not-dark:group-hover:text-foreground">
              <Percent className="w-8 h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3 dark:group-hover:text-foreground">
              <CountUp
                from={0}
                to={98}
                direction="up"
                duration={1}
                className="count-up-text"
              />
              % Satisfação
            </h3>
            <p className="dark:group-hover:text-foreground group-hover:text-background">
              Taxa de satisfação dos clientes com projetos entregues no prazo e com qualidade excepcional
            </p>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.5} glarePosition="all" glareBorderRadius="12px">
          <div className="bg-card p-6 rounded-xl border text-center group not-dark:hover:bg-foreground hover:text-background transition-all">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 not-dark:group-hover:bg-background not-dark:group-hover:text-foreground">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3 dark:group-hover:text-foreground">
              +
              <CountUp
                from={0}
                to={12}
                direction="up"
                duration={1}
                className="count-up-text"
              />
              &nbsp;Projetos
            </h3>
            <p className="dark:group-hover:text-foreground group-hover:text-background">
              Desenvolvidos com sucesso, desde websites e apps até sistemas complexos e e-commerce
            </p>
          </div>
        </Tilt>
      </div>

      <div>
        <div className="text-center mb-8">
          <TextReveal>
            <div className="text-2xl md:text-3xl font-bold text-foreground/90 mb-3">
              <div className="relative text-center inline px-1 mt-2 sm:mt-6 mb-2">
                <div className="relative z-10 inline">Benefícios</div>
                <div className="absolute bottom-0 left-0 w-full bg-[#88CE02] mb-1 h-1/5"></div>
              </div>
              <span> oferecidos.</span>
            </div>
          </TextReveal>

          <TextReveal>
            <p className="text-lg max-w-2xl mx-auto">
              Confira alguns dos diversos benefícios oferecidos para você e sua empresa
            </p>
          </TextReveal>
        </div>

        <Reveal>
          <div className='flex min-w-full justify-center mx-auto'>
            <MagicBento
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={1200}
            />
          </div>
        </Reveal>

        <TextReveal>
          <div className="text-center mt-8">
            <Link
              href="/development-process"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-6 py-3 bg-secondary font-normal text-foreground/90 rounded-lg hover:bg-primary hover:text-background transition-all group"
            >
              Conheça meu processo de desenvolvimento
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </TextReveal>
      </div>
    </section>
  )
}