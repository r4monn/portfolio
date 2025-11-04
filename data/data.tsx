import { Icon } from "@iconify/react";
import { CloudUpload, Database, Gauge, MonitorCog, Scaling, ShoppingCart } from "lucide-react";
import { JSX, ReactElement } from 'react';

export const techsData: JSX.Element[] = [
    <Icon key="1" icon = "devicon:html5" color = "#f00" />,
    <Icon key="2" icon = "devicon:css3" color = "#f00" />,
    <Icon key="3" icon = "logos:javascript" color = "#f00" />,
    <Icon key="4" icon = "devicon:typescript" color = "#f00" />,
    <Icon key="5" icon = "logos:react" />,
    //<Icon key="6" icon="devicon:nextjs-wordmark" color="white" />,
    <Icon key="6" icon = "devicon:nextjs" />,
    <Icon key="7" icon = "devicon:vitejs" />,
    <Icon key="8" icon = "devicon:tailwindcss" />,
    <Icon key="9" icon = "devicon:bootstrap" />,
    //<Icon key="10" icon="devicon:framermotion" color="white"/>,
    <Icon key="10" icon = "lineicons:framer" />,
    <Icon key="11" icon = "devicon:java" />,
    <Icon key="12" icon = "devicon:spring" />,
    <Icon key="13" icon = "devicon:python" />,
    <Icon key="14" icon = "devicon:kotlin" />,
    <Icon key="15" icon = "devicon:sqldeveloper" />,
    <Icon key="16" icon = "devicon:postgresql" />,
    <Icon icon="devicon:mongodb" />,
    <Icon key="17" icon = "devicon:prisma" />,
    <Icon key="18" icon = "devicon:git" />,
    <Icon key="19" icon = "devicon:figma" />,
];

export const applications = [
    {
      icon: (
        <Gauge className="w-8 h-8 text-white transition-transform duration-300 transform" />
      ),
      title: "Otimização de Desempenho",
      description:
        "Software especializado que analisa o desempenho do sistema, fornece diagnósticos em tempo real e melhora a eficiência das aplicações para evitar tempo de inatividade e garantir a confiabilidade.",
      image: "/assets/pakata-goh-RDolnHtjVCY-unsplash.jpg",
    },
    {
      icon: (
        <Database className="w-8 h-8 text-white transition-transform duration-300 transform" />
      ),
      title: "Engenharia e Análise de Dados",
      description:
        "Pipelines e plataformas de dados escaláveis que processam grandes volumes de informações, geram insights acionáveis e apoiam a tomada de decisões baseadas em dados.",
      image: "/assets/thisisengineering-uOhBxB23Wao-unsplash.jpg",
    },
    {
      icon: (
        <Scaling className="w-8 h-8 text-white transition-transform duration-300 transform" />
      ),
      title: "Arquitetura Escalável",
      description:
        "Sistemas adaptáveis e resilientes projetados para responder à carga do utilizador e às condições dos dados, garantindo desempenho consistente e utilização ideal dos recursos.",
      image: "/assets/2150038841.jpg",
    },
    {
      icon: (
        <MonitorCog className="w-8 h-8 text-white transition-transform duration-300 transform" />
      ),
      title: "Modernização de Sistemas Legados",
      description:
        "Estratégias e soluções para refatoração, reestruturação e migração de sistemas desatualizados para plataformas modernas, seguras e fáceis de manter.",
      image: "/assets/lorenzo-herrera-yP89apz2TAA-unsplash.jpg",
    },
    {
      icon: (
        <CloudUpload className="w-8 h-8 text-white transition-transform duration-300 transform" />
      ),
      title: "Infraestrutura e Soluções em Nuvem",
      description:
        "Estratégias e soluções para projetar e implementar sistemas na nuvem (AWS, Azure, GCP)",
      image: "/assets/4327451_18854.jpg",
    },
    {
      icon: (
        <ShoppingCart className="w-8 h-8 text-white transition-transform duration-300 transform" />
      ),
      title: "E-commerce e Plataformas Digitais",
      description:
        "Construo soluções centradas no utilizador que impulsionam a conversão, simplificam o processo de checkout e garantem uma experiência perfeita em todos os dispositivos, impactando diretamente a receita e a retenção de clientes",
      image: "/assets/sumup-nedMerQvxWQ-unsplash.jpg",
    },
  ];