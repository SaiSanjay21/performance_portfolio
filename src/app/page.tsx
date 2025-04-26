import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, MessagesSquare, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20 md:py-28 container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary">Creative</span> Developer
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          Building beautiful, functional websites with a focus on user experience and performance.
        </p>
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-primary/10 mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-center text-muted-foreground">
              Writing maintainable, efficient code that follows best practices.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-primary/10 mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-center text-muted-foreground">
              Building fast-loading, optimized websites for an exceptional user experience.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-primary/10 mb-4">
              <MessagesSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Communication</h3>
            <p className="text-center text-muted-foreground">
              Clear collaboration and constant feedback throughout the development process.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-16 container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects" className="flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
            <div className="h-60 w-full bg-muted"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
              <p className="text-muted-foreground mb-4">
                A modern e-commerce solution with cart functionality and payment processing.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">React</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Next.js</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Stripe</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
            <div className="h-60 w-full bg-muted"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Portfolio Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                A data visualization dashboard for tracking and analyzing portfolio performance.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Vue</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">D3.js</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-16 container bg-card rounded-lg border p-8 mb-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Active on GitHub</h2>
            <p className="text-muted-foreground mb-6">
              Check out my open-source contributions and projects. I'm passionate about sharing knowledge and collaborating with the community.
            </p>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
          <div className="md:w-1/2 w-full h-60 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">GitHub Contribution Graph</span>
          </div>
        </div>
      </section>
    </div>
  );
}
