import type { Metadata } from "next";
import { Geist, Geist_Mono, Krub } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";

const KrubSans = Krub({
  variable: "--font-krub-sans",
  subsets: ["latin"],
  weight: "200"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | r4monn',
    default: 'r4monn | Portfolio'
  },
  description: "Provedor de soluções tecnológicas mais adequadas para você e sua empresa.",
  authors: {name: 'Ramon Dias'},
  creator: 'Ramon Dias',
  keywords: ['Portfolio', 'Software', 'Development', 'Engineering', 'Developer', 'Next.js', 'TypeScript', 'React', 'Engenheiro de Software', 'Desenvolvedor Full-Stack'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            {children}
            <ContactInfo />
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
