import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { PerformanceMetricsButton } from "@/components/performance-metrics-button";

const blogPosts = [
  {
    id: "microservices-case-study",
    title: "Microservices Architecture: A Real-World Case Study",
    excerpt: "An in-depth analysis of how a monolithic e-commerce platform was successfully migrated to a microservices architecture, including challenges faced and solutions implemented.",
    date: "June 15, 2023",
    category: "System Design",
  },
  {
    id: "scaling-database",
    title: "Scaling Database Systems for High-Traffic Applications",
    excerpt: "A comprehensive case study on database sharding, replication strategies, and caching mechanisms implemented for a social media platform handling millions of daily active users.",
    date: "August 22, 2023",
    category: "System Design",
  },
  {
    id: "api-gateway-patterns",
    title: "API Gateway Design Patterns in Modern Distributed Systems",
    excerpt: "Exploring different API gateway implementation patterns with a focus on authentication, rate limiting, and request routing in a microservices environment.",
    date: "October 10, 2023",
    category: "System Design",
  },
  {
    id: "event-driven-architecture",
    title: "Event-Driven Architecture: A Case Study in Real-Time Analytics",
    excerpt: "How a financial services company implemented event-driven architecture to process millions of transactions in real-time while maintaining system resilience and data consistency.",
    date: "December 5, 2023",
    category: "System Design",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      {/* Welcome Section with Performance Metrics Suggestion */}
      <section className="mb-12 p-8 bg-card rounded-lg border relative">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Blog</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Explore in-depth case studies and insights on system design, architecture patterns, and performance optimization.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Click on the performance icon <Activity className="inline h-5 w-5 text-primary" /> in the bottom right corner to view the metrics of this website.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="#blog-posts">
              Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts">
        <h2 className="text-3xl font-bold mb-8">System Design Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read Case Study <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Metrics Component */}
      <PerformanceMetricsButton />
    </div>
  );
}