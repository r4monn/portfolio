"use client"
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomMobileMenu from "./CustomMobileMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const menuItems = [
        { label: "Início", ariaLabel: "Ir para a seção inicial", link: "#hero" },
        {
            label: "Sobre",
            ariaLabel: "Ir para a seção sobre",
            link: "/about"
        },
        {
            label: "Projetos",
            ariaLabel: "Ir para a seção de projetos",
            link: "#projects"
        },
        {
            label: "Processo",
            ariaLabel: "Conhecer o processo de desenvolvimento",
            link: "/development-process"
        },
        {
            label: "Contate-me",
            ariaLabel: "Entrar em contato",
            link: "#contact"
        }
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/ramondiiaas/' },
        { label: 'GitHub', link: 'https://github.com/r4monn' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ramon-diiaas/' }
    ];
    
    return (
        <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-background")} initial={{
            opacity: 1,
            y: 0
        }} animate={{
            opacity: 1,
            y: 0
        }}>
            <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.svg" alt="Logo" className={cn("h-8 w-auto dark:brightness-0 dark:invert brightness-100 invert")} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavigationMenu className="text-foreground">
                            <NavigationMenuList className="mr-6">
                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={async () => { router.push("/"); await new Promise((resolve) => setTimeout(resolve, 200)); scrollToSection('hero') }} className={cn(navigationMenuTriggerStyle())}>
                                        Início
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={async () => { router.push("/about"); await new Promise((resolve) => setTimeout(resolve, 200)); scrollToSection('about') }} className={cn(navigationMenuTriggerStyle())}>
                                        Sobre
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={async () => { router.push("/"); await new Promise((resolve) => setTimeout(resolve, 200)); scrollToSection('projects') }} className={cn(navigationMenuTriggerStyle())}>
                                        Projetos
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn("")}>
                                        Saiba Mais
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 w-[400px]">
                                            <li>
                                                <Link href="/tech-details" className="hidden rounded-md">
                                                    <div className="font-medium">Principais Tecnologias</div>
                                                    <p className="text-sm text-gray-500">How our smart textile platform works</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/development-process" className="block rounded-md">
                                                    <div className="font-medium">Processo de Desenvolvimento</div>
                                                    <p className="text-sm text-gray-500">Abordagem para criar soluções personalizadas</p>
                                                </Link>
                                            </li>
                                            <li>

                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 transition-color bg-[#88CE02]  text-black rounded-md hover:bg-[#bdff43]")}>
                                        Contate-me
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenuList>

                            <ModeToggle />
                        </NavigationMenu>
                    </div>

                    <CustomMobileMenu
                        position="right"
                        items={menuItems}
                        socialItems={socialItems}
                        displaySocials={true}
                        displayItemNumbering={true}
                        changeMenuColorOnOpen={true}
                        logoUrl="/logo.svg"
                        isFixed={true}
                    />
                </div>
            </div>
        </motion.nav>
    )
}