
"use client"
import { cn } from "@/lib/utils";
import { ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {

    };

    return (
        <footer id="contact" className="bg-background text-foreground pt-16 pb-8 w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-border">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.svg" alt="Logo" className={cn("h-8 w-auto dark:brightness-0 dark:invert brightness-100 invert")} />
                        </Link>

                        <p className="my-4">
                            Provedor de soluções tecnológicas mais adequadas para você e sua empresa.
                        </p>
                        <p className="mb-6">
                            Brasil<br />
                            Rio de Janeiro, RJ
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/ramon-diiaas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-primary hover:text-background"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-normal mb-4 text-foreground">Saiba Mais</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-foreground font-light hover:text-primary transition-colors">Sobre</Link></li>
                            <li><Link href="/" className="text-foreground font-light hover:text-primary transition-colors">Tecnologias</Link></li>
                            <li><Link href="/development-process" className="text-foreground font-light hover:text-primary transition-colors">Processo</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0 mx-auto">
                        © {new Date().getFullYear()} r4mondias | Personal Porfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};