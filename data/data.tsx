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

export const projects = [
  {
    id: 1,
    title: "Coffee Delivery",
    brand: "Coffee E-commerce",
    description: "Loja virtual de cafés de variados tipos, para os apaixonados de café consumirem sem sair do conforto da sua casa.",
    tags: ["Typescript", "React", "axios", "Stripe", "zod", "Stitches"],
    imageUrl: "/assets/thumb1.jpg",
    isFeatured: true,
    link: "coffee-delivery-r4monn.vercel.app",
  },
  {
    id: 2,
    title: "Sicoob Up",
    brand: "Sicoob",
    description: "A Comunidade Sicoob Up é um ecossistema de atividades entre cooperados, comunidade e negócios locais criada para conectar pessoas, promover o crescimento e gerar oportunidades através dos valores do cooperativismo.",
    tags: ["Typescript", "React", "Tailwind CSS"],
    imageUrl: "/assets/thumb6.png",
    isFeatured: true,
    link: "sicoob-up.vercel.app",
  },
  {
    id: 3,
    title: "Personal Portfolio (old version)",
    brand: "r4monn",
    description: "Porfolio pessoal.",
    tags: ["Javascript", "Next.js", "Tailwind CSS", "Framer motion", "emailjs"],
    imageUrl: "/assets/thumb7.png",
    isFeatured: true,
    link: "portfolio-r4monn.vercel.app",
  },
  {
    id: 4,
    title: "ToDo List",
    brand: "Personal Project",
    description: "Web App de ToDoList totalmente feito em ReactJS.",
    tags: ["Typescript", "React", "uuid", "styled-components"],
    imageUrl: "/assets/thumb2.jpg",
    link: "todo-list-r4monn.vercel.app"
  },
  {
    id: 5,
    title: "Voe Fácil",
    brand: "Voe Fácil - Companhia Aérea",
    description: "Uma plataforma onde os usuários podem reservar vôos e agendar viagens nacionais.",
    tags: ["Java", "Spring Boot", "React", "Javascript", "Stitches", "axios", "zod", "PostgreSQL"],
    imageUrl: "/assets/thumb5.png",
    link: ""
  },
  {
    id: 6,
    title: "Ignite Timer",
    brand: "Personal Project",
    description: "Temporizador minimalista inspirado na técnica de Pomodoro que permite que você tenha controle sobre a sua produtividade armazenando seus ciclos em mémoria.",
    tags: ["Typescript", "React", "zod", "styled-components"],
    imageUrl: "/assets/thumb3.jpg",
    link: "ignite-timer-wheat.vercel.app"
  },
  {
    id: 7,
    title: "Biko - Clone",
    brand: "Biko Corp.",
    description: "Uma landing page clone do Biko Corp.",
    tags: ["Typescript", "React", "Stitches", "styled-components"],
    imageUrl: "/assets/thumb4.jpg",
    link: ""
  }
];

export const education = [
  {
    title: "Bacharelado em Engenharia de Software",
    details: "Integral • EaD • USA",
    period: "Jan 2024 - Cursando",
    company: "Jala University",
    logo: "https://jala.university/wp-content/uploads/2023/07/cropped-Favicon-jala-u-32x32.png",
    description:
      "Coursework: Software Engineering, Algorithms and Data Structures, Database Systems, Web and Mobile Development",
  },
  {
    title: "Web3 / Solidity",
    details: "Flexível • Online",
    period: "Set 2025 - Atualmente",
    company: "Cyfrin Updraft",
    logo: "https://updraft.cyfrin.io/favicon.svg",
    description:
      "Coursework: Blockchain developer fundamentals, Smart Contracts, Ethereum, Solidity, Transactions, ZK Proof.",
  },
  {
    title: "Amazon Junior Software Developer",
    details: "Flexível • Online",
    period: "Fev 2025 - Atualmente",
    company: "Coursera",
    logo: "https://www.amazon.com.br/favicon.ico",
    description:
      "Coursework: Software Development, Algorithms and Data Structures, Java.",
  },
  {
    title: "Ignite ReactJS",
    details: "Flexível • Online",
    period: "Set 2022 - Set 2023",
    company: "Rocketseat",
    logo: "https://app.rocketseat.com.br/assets/logos/rocketseat-icon.svg",
    description:
      "Coursework: Web Development, Design Patterns, React, Typescript, Next.js, Stitches, Styled Components, Tailwindcss, axios, zod.",
  },
  {
    title: "Desenvolvimento FrontEnd",
    details: "Noturno • Online",
    period: "Mar 2022 - Set 2022",
    company: "Tech4Me",
    logo: "https://www.tech4me.com.br/img/favicon_tech4me.png",
    description:
      "Coursework: Web Development, HTML, CSS, Javascript, React.",
  },
  {
    title: "Assistente Administrativo",
    details: "Meio período • Presencial • Rio de Janeiro",
    period: "Jan 2022 - Dez 2022",
    company: "SENAI Maracanã",
    logo: "https://firjan.com.br/data/files/63/87/D9/E1/AD4B59109D34F849D8284EA8/favicon.ico",
    description:
      "Implementação de controles de qualidade; Gestão e organização de documentos corporativos; Compra de material de escritório e gestão de estoque; Desenvolvimento de planilhas e relatórios empresariais.",
  },
]