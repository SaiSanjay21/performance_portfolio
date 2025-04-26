"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Search, Clock, Filter } from "lucide-react";
import Link from "next/link";
import { PerformanceMetricsButton } from "@/components/performance-metrics-button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Calculate reading time based on content length
const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const blogPosts = [
  {
    id: "microservices-case-study",
    title: "Microservices Architecture: A Real-World Case Study",
    excerpt: "An in-depth analysis of how a monolithic e-commerce platform was successfully migrated to a microservices architecture, including challenges faced and solutions implemented.",
    date: "June 15, 2023",
    category: "System Design",
    readingTime: 8,
  },
  {
    id: "scaling-database",
    title: "Scaling Database Systems for High-Traffic Applications",
    excerpt: "A comprehensive case study on database sharding, replication strategies, and caching mechanisms implemented for a social media platform handling millions of daily active users.",
    date: "August 22, 2023",
    category: "System Design",
    readingTime: 10,
  },
  {
    id: "api-gateway-patterns",
    title: "API Gateway Design Patterns in Modern Distributed Systems",
    excerpt: "Exploring different API gateway implementation patterns with a focus on authentication, rate limiting, and request routing in a microservices environment.",
    date: "October 10, 2023",
    category: "System Design",
    readingTime: 7,
  },
  {
    id: "event-driven-architecture",
    title: "Event-Driven Architecture: A Case Study in Real-Time Analytics",
    excerpt: "How a financial services company implemented event-driven architecture to process millions of transactions in real-time while maintaining system resilience and data consistency.",
    date: "December 5, 2023",
    category: "System Design",
    readingTime: 9,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Filter blog posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="container py-12 relative">
      {/* Welcome Section with Performance Metrics Suggestion */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-8 bg-card rounded-lg border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Welcome to My Blog</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Explore in-depth case studies and insights on system design, architecture patterns, and performance optimization.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Click on the performance icon <Activity className="inline h-5 w-5 text-primary" /> in the bottom right corner to view the metrics of this website.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild className="group">
              <Link href="#blog-posts">
                Browse Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#search">
                Search Content <Search className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* Search and Filter Section */}
      <motion.section 
        id="search"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-12 p-6 bg-card rounded-lg border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"} 
                size="sm" 
                onClick={() => setSelectedCategory(null)}
                className="text-xs"
              >
                All
              </Button>
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Section */}
      <section id="blog-posts">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">System Design Case Studies</h2>
          <p className="text-muted-foreground">{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.length > 0 ? filteredPosts.map((post) => (
            <motion.div 
              key={post.id} 
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="p-6 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="flex justify-between items-center mb-3 relative z-10">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{post.readingTime} min read</span>
                </div>
                <Button variant="outline" size="sm" asChild className="group/btn">
                  <Link href={`/blog/${post.id}`}>
                    Read Case Study <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          )) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="col-span-2 p-8 text-center border rounded-lg bg-card">
              <p className="text-muted-foreground">No articles found matching your criteria. Try adjusting your search.</p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Newsletter Subscription */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 p-8 bg-card rounded-lg border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Subscribe to the Newsletter</h3>
          <p className="text-muted-foreground mb-6">Get notified when new case studies are published. No spam, ever.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="sm:flex-shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* Performance Metrics Component */}
      <PerformanceMetricsButton />
    </div>
  );
}