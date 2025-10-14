import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TechStackTimeline } from "@/components/TechStackTimeline"; // Added import
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
        <p className="text-muted-foreground text-lg mb-3 font-medium">Senior Software Engineer @ BNY — Texas</p>
        <p className="text-muted-foreground text-base mb-6 max-w-lg">
          Senior Software Engineer specializing in scalable backend services, full‑stack web development, and AI‑enabled platforms. Passionate about building performant systems, integrating ML services, and delivering reliable developer experiences.
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
        <div className="w-full mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">BNY</h3>
                  <p className="text-sm text-muted-foreground">Senior Software Engineer — Aug 2024 – Present, Texas</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Developed RESTful APIs using Java, Spring Boot, and PostgreSQL for an Internal Portfolio Dashboard with RAG‑enabled search, collaborating with experts and reducing response time by 40%.</li>
                    <li>Migrated financial data from SQL to NoSQL on AWS, implementing DynamoDB and Neo4j vector solutions and integrating Python‑based fraud detection AI with LLM capabilities.</li>
                    <li>Engineered responsive full‑stack components with Angular, TypeScript, and Bootstrap for a Client Portfolio Management Tool, integrating a Java backend with TensorFlow Serving APIs.</li>
                    <li>Built reporting services using ASP.NET Core and SQL Server for financial analytics, exposing interfaces to consume Python AI services with LLM fine‑tuning capabilities.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Netcracker Technology</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer — Jan 2020 – Dec 2022, India</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Constructed full‑stack RESTful APIs using FastAPI and MS SQL Server for data analytics, integrating TensorFlow model endpoints with RAG‑enhanced search and utilizing Azure DevOps/GitHub for promotion.</li>
                    <li>Designed RESTful APIs using Spring Boot for core telecom services, integrating Node.js legacy systems and leveraging PostgreSQL, Cosmos DB, Neo4j vector DB with PyTorch Serving and Redis caching.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Informative Web Solutions</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer — Jan 2018 – Dec 2019, India</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Crafted responsive UIs using React.js, TypeScript, and CSS3 for a Lead Management module in an enterprise CRM, improving sales pipeline visibility by 25%.</li>
                    <li>Optimized microservices performance using Spring Boot and Docker with Redis caching via AWS ElastiCache, reducing API response times and supporting back‑office integrations.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">University of Texas at Arlington</h3>
                  <p className="text-sm text-muted-foreground">AI Research Assistant — Jan 2023 – Dec 2024, Arlington, Texas</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Enhanced AI model development and data analysis using Python and XGBoost for machine learning tasks, achieving a 15% improvement in model accuracy and documenting experimental setups for reproducibility.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Added TechStackTimeline component */}
        <TechStackTimeline />
      </div>
    </div>
  );
}
