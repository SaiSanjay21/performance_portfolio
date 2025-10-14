"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, MessagesSquare, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SeamlessScroller, Section } from "@/components/seamless-scroller";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <SeamlessScroller>
        {/* Hero */}
        <Section id="home" className="container">
          <div className="flex flex-col items-center text-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary"
            >
              Crafting Fluid, Immersive Interfaces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl"
            >
              A visually striking portfolio experience built with modern motion, scroll snapping, and performant UI patterns.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button asChild size="lg">
                <Link href="#projects">
                  Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">About Me</Link>
              </Button>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center p-6 bg-card/60 backdrop-blur rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-center text-muted-foreground">Maintainable, efficient, and scalable.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card/60 backdrop-blur rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-center text-muted-foreground">Optimized for speed and responsiveness.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card/60 backdrop-blur rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <MessagesSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">UX Craft</h3>
                <p className="text-center text-muted-foreground">Thoughtful interactions and clarity.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* About */}
        <Section id="about" className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/avatar.svg"
                alt="Avatar"
                width={160}
                height={160}
                className="rounded-full border-4 border-primary shadow-xl"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-3">Senior Software Engineer @ BNY — Texas</h2>
              <p className="text-muted-foreground mb-6">
                Building scalable backend services, AI‑enabled platforms, and polished front‑ends. Experienced across Java/Spring, Python AI, Angular/React, and cloud data stores.
              </p>
              <div className="flex gap-3">
                <Button asChild variant="outline">
                  <Link href="/about">Full Experience</Link>
                </Button>
                <Button asChild>
                  <Link href="#blog">Read Insights</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Blog */}
        <Section id="blog" className="container">
          <div className="w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest Writing</h2>
              <Button variant="ghost" asChild>
                <Link href="/blog" className="flex items-center">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-md"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Microservices Architecture: A Real‑World Case Study</h3>
                  <p className="text-muted-foreground mb-4">Lessons transitioning from monolith to microservices: scaling, resilience, and velocity.</p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">System Design</span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Architecture</span>
                  </div>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-md"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Performance Patterns for Modern Web Apps</h3>
                  <p className="text-muted-foreground mb-4">Caching, streaming, and rendering strategies to keep UI silky smooth.</p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Performance</span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Frontend</span>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UniSearch */}
            <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
              <div className="h-48 w-full bg-muted flex items-center justify-center">
                <Image src="/projects/search-engine.svg" alt="UniSearch" width={160} height={120} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">UniSearch</h3>
                <p className="text-muted-foreground mb-4">Unified NLP search across customer channels for financial services.</p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">React</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Spring Boot</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">AWS</span>
                </div>
              </div>
            </div>

            {/* EduFlow */}
            <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
              <div className="h-48 w-full bg-muted flex items-center justify-center">
                <Image src="/projects/education-system.svg" alt="EduFlow" width={160} height={120} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">EduFlow</h3>
                <p className="text-muted-foreground mb-4">Modern LMS with intuitive dashboards and RBAC.</p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">React</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Django</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Azure</span>
                </div>
              </div>
            </div>

            {/* SplitAI */}
            <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
              <div className="h-48 w-full bg-muted flex items-center justify-center">
                <Image src="/projects/expense-app.svg" alt="SplitAI" width={160} height={120} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">SplitAI</h3>
                <p className="text-muted-foreground mb-4">AI‑powered expense splitting with vision‑based receipt parsing.</p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Python</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">React</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Azure</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* GitHub Activity */}
        <Section id="github" className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Active on GitHub</h2>
              <p className="text-muted-foreground mb-6">
                Check out my open-source contributions and projects. I’m passionate about sharing knowledge and collaborating with the community.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://github.com/SaiSanjay21" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
            <div className="md:w-1/2 w-full h-60 bg-muted rounded-lg flex items-center justify-center">
              <img
                src="https://ghchart.rshah.org/SaiSanjay21"
                alt="GitHub Contribution Graph"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Section>
      </SeamlessScroller>
    </div>
  );
}
