"use client";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";  // Path correction
import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="container py-16 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-card rounded-xl shadow-lg p-8 md:p-12">
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
        <Image
          src="/avatar.svg"
          alt="Sai Sanjay Avatar"
          width={180}
          height={180}
          className="rounded-full border-4 border-primary shadow-xl object-cover"
          priority
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight leading-tight">Sai Sanjay Bandarupalli</h1>
        <p className="text-muted-foreground text-lg mb-3 font-medium">Full Stack Developer @ Netcracker Technology</p>
        <p className="text-muted-foreground text-base mb-6 max-w-lg">
          Hi! I'm Sai Sanjay, a Full stack developer at Netcracker Technology. I love building clean, performant apps and exploring new tech. Competitive programming, backend engineering, and web development are my main interests.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <span className="sr-only">GitHub</span>
            <svg width="28" height="28" fill="currentColor" className="text-primary"><use href="#icon-github" /></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <span className="sr-only">LinkedIn</span>
            <svg width="28" height="28" fill="currentColor" className="text-primary"><use href="#icon-linkedin" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
