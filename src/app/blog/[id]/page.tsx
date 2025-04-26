import { Button } from "@/components/ui/button";
import { ArrowLeft, Bookmark, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { PerformanceMetricsButton } from "@/components/performance-metrics-button";
import "../blog.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import { ReadingProgress } from "@/components/reading-progress";

// Sample blog post data - in a real application, this would come from a database or CMS
const blogPosts = {
  "microservices-case-study": {
    title: "Microservices Architecture: A Real-World Case Study",
    date: "June 15, 2023",
    category: "System Design",
    content: `
      <h2>Introduction</h2>
      <p>This case study examines how a large e-commerce company transitioned from a monolithic architecture to microservices to solve scaling issues and improve development velocity.</p>
      
      <h2>The Challenge</h2>
      <p>The company was experiencing significant growth, with their user base increasing by 200% year over year. Their monolithic application was becoming increasingly difficult to maintain, scale, and deploy. Development velocity had slowed dramatically as the codebase grew, and even minor changes required extensive testing cycles.</p>
      
      <h2>The Solution</h2>
      <p>The team decided to gradually migrate to a microservices architecture, starting with the most critical and independent components:</p>
      <ul>
        <li>Product catalog service</li>
        <li>User authentication service</li>
        <li>Order processing service</li>
        <li>Payment processing service</li>
        <li>Inventory management service</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>Rather than attempting a complete rewrite, the team adopted the strangler pattern, gradually replacing functionality in the monolith with calls to new microservices. This allowed for incremental migration with minimal disruption to the business.</p>
      
      <h2>Technical Architecture</h2>
      <p>The new architecture included:</p>
      <ul>
        <li>API Gateway for request routing and composition</li>
        <li>Service discovery using Consul</li>
        <li>Event-driven communication with Kafka for asynchronous processes</li>
        <li>Circuit breakers with Hystrix for fault tolerance</li>
        <li>Containerization with Docker and orchestration with Kubernetes</li>
      </ul>
      
      <h2>Results</h2>
      <p>After completing the migration over 18 months:</p>
      <ul>
        <li>Deployment frequency increased from bi-weekly to multiple times per day</li>
        <li>Mean time to recovery decreased from hours to minutes</li>
        <li>Teams could develop and scale services independently</li>
        <li>Infrastructure costs were optimized by scaling only the necessary services</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>The transition wasn't without challenges:</p>
      <ul>
        <li>Distributed systems introduced new complexity in monitoring and debugging</li>
        <li>Data consistency across services required careful design</li>
        <li>The team had to invest in robust CI/CD pipelines and observability tools</li>
        <li>Service boundaries needed to be carefully defined to avoid tight coupling</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The microservices architecture provided the scalability and development agility the company needed, but required significant investment in infrastructure, tooling, and developer training. The incremental migration approach was key to the project's success.</p>
    `,
  },
  "scaling-database": {
    title: "Scaling Database Systems for High-Traffic Applications",
    date: "August 22, 2023",
    category: "System Design",
    content: `
      <h2>Introduction</h2>
      <p>This case study explores how a social media platform with millions of daily active users implemented various database scaling strategies to handle growing data volumes and traffic.</p>
      
      <h2>The Challenge</h2>
      <p>As the platform grew to over 10 million daily active users, the database became a significant bottleneck. Read and write operations were causing high latency, and the system struggled during peak usage times.</p>
      
      <h2>Key Database Scaling Strategies</h2>
      <p>The engineering team implemented multiple strategies to address these challenges:</p>
      
      <h3>1. Read Replicas</h3>
      <p>Multiple read replicas were deployed to distribute read traffic and reduce load on the primary database. This immediately improved read performance for most queries.</p>
      
      <h3>2. Database Sharding</h3>
      <p>Data was horizontally partitioned across multiple database instances based on user ID ranges. This distributed write operations and allowed for better resource utilization.</p>
      
      <h3>3. Caching Layer</h3>
      <p>Redis was implemented as a caching layer for frequently accessed data, significantly reducing database load for common queries.</p>
      
      <h3>4. Data Access Patterns</h3>
      <p>The team redesigned database schemas and access patterns to optimize for the most common operations, including denormalization where appropriate.</p>
      
      <h2>Implementation Challenges</h2>
      <p>Several challenges had to be overcome during implementation:</p>
      <ul>
        <li>Maintaining data consistency across shards and replicas</li>
        <li>Handling cross-shard queries efficiently</li>
        <li>Managing cache invalidation</li>
        <li>Migrating existing data without downtime</li>
      </ul>
      
      <h2>Results</h2>
      <p>After implementing these strategies:</p>
      <ul>
        <li>Database response times improved by 80%</li>
        <li>The system could handle 3x more concurrent users</li>
        <li>Infrastructure costs were better aligned with actual usage patterns</li>
        <li>The platform achieved 99.99% uptime even during traffic spikes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This case study demonstrates that a combination of scaling strategies is often more effective than relying on a single approach. The right mix depends on your specific workload characteristics, consistency requirements, and growth patterns.</p>
    `,
  },
  "api-gateway-patterns": {
    title: "API Gateway Design Patterns in Modern Distributed Systems",
    date: "October 10, 2023",
    category: "System Design",
    content: `
      <h2>Introduction</h2>
      <p>This case study examines how a financial technology company implemented API gateway patterns to manage their growing microservices ecosystem.</p>
      
      <h2>Background</h2>
      <p>As the company's microservices architecture expanded to over 50 services, they faced challenges with:</p>
      <ul>
        <li>Inconsistent API interfaces</li>
        <li>Duplicated cross-cutting concerns across services</li>
        <li>Complex client integration requirements</li>
        <li>Security and rate limiting implementation</li>
      </ul>
      
      <h2>API Gateway Implementation</h2>
      <p>The team decided to implement an API gateway as the single entry point for all client requests. They evaluated several patterns and ultimately implemented a hybrid approach:</p>
      
      <h3>1. Backend for Frontend (BFF) Pattern</h3>
      <p>Separate gateway instances were created for different client types (web, mobile, third-party), each optimized for specific client needs.</p>
      
      <h3>2. Aggregation Pattern</h3>
      <p>The gateway combined data from multiple microservices to reduce client-side requests and improve performance.</p>
      
      <h3>3. Offloading Cross-Cutting Concerns</h3>
      <p>The gateway handled:</p>
      <ul>
        <li>Authentication and authorization</li>
        <li>Rate limiting and throttling</li>
        <li>Request logging and monitoring</li>
        <li>Response caching</li>
        <li>Circuit breaking</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The solution was built using:</p>
      <ul>
        <li>Kong API Gateway for routing and policy enforcement</li>
        <li>Custom middleware for client-specific transformations</li>
        <li>Redis for rate limiting and caching</li>
        <li>OpenID Connect for authentication</li>
        <li>Prometheus and Grafana for monitoring</li>
      </ul>
      
      <h2>Results</h2>
      <p>After implementing the API gateway:</p>
      <ul>
        <li>Developer productivity improved as teams focused on business logic rather than cross-cutting concerns</li>
        <li>Client integration became simpler with consistent interfaces</li>
        <li>Security posture improved with centralized authentication and authorization</li>
        <li>System reliability increased with consistent rate limiting and circuit breaking</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>Key insights from the implementation:</p>
      <ul>
        <li>API gateways can become bottlenecks if not properly scaled</li>
        <li>Gateway logic should be kept minimal to avoid creating a new monolith</li>
        <li>Versioning strategy is critical for API evolution</li>
        <li>Automated testing of gateway configurations is essential</li>
      </ul>
    `,
  },
  "event-driven-architecture": {
    title: "Event-Driven Architecture: A Case Study in Real-Time Analytics",
    date: "December 5, 2023",
    category: "System Design",
    content: `
      <h2>Introduction</h2>
      <p>This case study examines how a financial services company implemented event-driven architecture to process millions of transactions in real-time while maintaining system resilience and data consistency.</p>
      
      <h2>The Business Need</h2>
      <p>The company needed to:</p>
      <ul>
        <li>Process 5+ million financial transactions daily</li>
        <li>Provide real-time fraud detection</li>
        <li>Generate instant notifications to customers</li>
        <li>Maintain accurate analytics dashboards</li>
        <li>Ensure regulatory compliance with complete audit trails</li>
      </ul>
      
      <h2>Previous Architecture Limitations</h2>
      <p>The existing request-response architecture had several limitations:</p>
      <ul>
        <li>Tight coupling between systems</li>
        <li>Synchronous processing created bottlenecks</li>
        <li>Difficulty scaling during peak periods</li>
        <li>Single points of failure</li>
        <li>Batch-based analytics with significant delays</li>
      </ul>
      
      <h2>Event-Driven Solution</h2>
      <p>The new architecture centered around an event backbone with the following components:</p>
      
      <h3>1. Event Sources</h3>
      <p>Systems that generate events, including:</p>
      <ul>
        <li>Transaction processing systems</li>
        <li>Customer-facing applications</li>
        <li>Partner integration points</li>
      </ul>
      
      <h3>2. Event Backbone</h3>
      <p>Apache Kafka served as the central nervous system, providing:</p>
      <ul>
        <li>Durable storage of events</li>
        <li>Topic-based routing</li>
        <li>Scalable throughput</li>
        <li>Replay capabilities</li>
      </ul>
      
      <h3>3. Event Processors</h3>
      <p>Specialized services consuming events:</p>
      <ul>
        <li>Fraud detection engine</li>
        <li>Notification service</li>
        <li>Analytics processors</li>
        <li>Compliance and audit systems</li>
      </ul>
      
      <h3>4. Event Storage</h3>
      <p>Events were stored in:</p>
      <ul>
        <li>Time-series databases for analytics</li>
        <li>Document stores for complete event data</li>
        <li>Specialized data warehouses for reporting</li>
      </ul>
      
      <h2>Implementation Approach</h2>
      <p>The team followed these steps:</p>
      <ol>
        <li>Defined the event taxonomy and schema registry</li>
        <li>Implemented the Kafka backbone with proper partitioning</li>
        <li>Developed event producers with at-least-once delivery guarantees</li>
        <li>Created event consumers with idempotent processing</li>
        <li>Built real-time analytics using Kafka Streams</li>
      </ol>
      
      <h2>Results</h2>
      <p>The event-driven architecture delivered significant improvements:</p>
      <ul>
        <li>Processing latency reduced from minutes to milliseconds</li>
        <li>System throughput increased by 300%</li>
        <li>Improved resilience with no single point of failure</li>
        <li>Better scalability during peak periods</li>
        <li>Real-time analytics dashboards</li>
        <li>Comprehensive audit trails for compliance</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>The team faced several challenges:</p>
      <ul>
        <li><strong>Event Schema Evolution:</strong> Implemented a schema registry with compatibility checks</li>
        <li><strong>Exactly-Once Processing:</strong> Used Kafka transactions and idempotent consumers</li>
        <li><strong>Monitoring:</strong> Developed custom metrics and dashboards for event flow visibility</li>
        <li><strong>Data Consistency:</strong> Implemented event sourcing patterns for critical domains</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The event-driven architecture enabled the company to meet its real-time processing needs while improving system resilience and scalability. The decoupled nature of the system allowed teams to develop and deploy independently, accelerating the delivery of new features.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];
  const [readingTime, setReadingTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Calculate reading time based on content length
    if (post) {
      const text = post.content.replace(/<[^>]*>/g, ''); // Remove HTML tags
      const words = text.split(/\s+/).length;
      const wordsPerMinute = 200;
      setReadingTime(Math.ceil(words / wordsPerMinute));
    }
    
    // Set loaded state for animations
    setIsLoaded(true);
  }, [post]);
  
  if (!post) {
    return (
      <div className="container py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 text-center bg-card rounded-lg border shadow-md"
        >
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Post Not Found</h1>
          <p className="mb-6 text-muted-foreground">Sorry, the blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-12 relative">
      {/* Reading Progress Indicator */}
      <ReadingProgress />
      
      {/* Theme Switch */}
      <ThemeSwitch />
      
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" size="sm" asChild className="mb-6 hover:bg-primary/10 transition-colors">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{post.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-8 p-4 bg-card/50 rounded-lg border border-primary/10 shadow-sm">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4 text-primary" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              <span>{readingTime} min read</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto hover:bg-primary/10 transition-colors">
              <Bookmark className="mr-2 h-4 w-4" /> Save for later
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="blog-content relative"
        >
          <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full hidden md:block" />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 p-6 bg-card rounded-lg border border-primary/20 shadow-md">
            <h3 className="text-xl font-bold mb-4">Share your thoughts</h3>
            <p className="text-muted-foreground mb-4">Did you find this case study helpful? Let me know your thoughts or questions in the comments.</p>
            <div className="flex gap-2">
              <Button variant="default">Comment</Button>
              <Button variant="outline">Share</Button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-center pt-6 border-t">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Was this helpful?</span>
              <Button variant="outline" size="sm" className="gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                Yes
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                No
              </Button>
            </div>
          </div>
        </motion.div>
      </article>
      
      <PerformanceMetricsButton />
    </div>
  );
}