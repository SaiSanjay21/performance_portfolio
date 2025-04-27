import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Detailed project data with real images
const projects = [
 
  {
    id: "data-dashboard",
    title: "Interactive Analytics Dashboard",
    description:
      "A data visualization dashboard that transforms complex datasets into actionable insights through interactive charts, graphs, and real-time analytics. Designed for business intelligence and performance monitoring.",
    longDescription:
      "This dashboard application was created to help companies visualize and analyze their business metrics in real-time. It features customizable widgets, multiple data visualization options (bar charts, line graphs, pie charts, etc.), and the ability to filter data by various parameters. Users can create personalized dashboards for different departments and set up automated reports. The application includes role-based access control and integrates with various data sources through API connections.",
    technologies: ["Vue.js", "D3.js", "Chart.js", "Firebase", "Tailwind CSS", "REST APIs", "NoSQL Database", "Java", "Spring Boot", "AWS", "DevOps"],
    imageUrl: "/projects/dashboard.jpg",
    demoUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/example/dashboard",
    featured: true,
    challenges: "Handling large datasets without compromising performance and creating intuitive data visualization components that remain responsive on all device sizes.",
    solutions: "Implemented data pagination, server-side filtering, and optimized rendering using Vue's virtual DOM. Created responsive visualization components with breakpoints for different screen sizes.",
  },
  {
    id: "task-management",
    title: "Collaborative Task Management App",
    description:
      "A real-time collaborative task management application that enables teams to organize projects, assign tasks, set deadlines, and track progress. Features include drag-and-drop interfaces, file attachments, and team chat.",
    longDescription:
      "This task management application was built to streamline team collaboration and project management. It features a drag-and-drop kanban board interface, real-time updates using WebSockets, task assignment with email notifications, and integrated file storage. Teams can create multiple project boards, set up custom workflows, add comments to tasks, and track time spent on each task. The application includes a reporting feature that generates insights about team productivity and project progress.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Redux", "JWT Authentication", "Java", "Spring Boot", "AWS", "DevOps"],
    imageUrl: "/projects/taskmanager.png",
    demoUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/example/taskmanager",
    featured: false,
    challenges: "Implementing real-time synchronization between multiple users while maintaining data consistency and handling offline mode functionality.",
    solutions: "Used Socket.io for real-time events and implemented a robust state management system with Redux. Added conflict resolution mechanisms for simultaneous edits.",
  },
  {
    id: "fitness-tracker",
    title: "Health & Fitness Tracker",
    description:
      "A mobile-first fitness tracking application that helps users set goals, log workouts, monitor nutrition, and visualize progress over time with interactive charts and personalized insights.",
    longDescription:
      "This fitness tracking application was designed to help users maintain a healthy lifestyle by tracking various aspects of their fitness journey. Users can create custom workout routines, log exercises with sets and reps, track calorie intake, monitor weight changes, and set fitness goals. The app provides visual representations of progress through charts and graphs, offers workout recommendations based on user preferences, and includes social features for connecting with friends. Integration with wearable devices allows for automatic activity tracking.",
    technologies: ["React Native", "Firebase", "Chart.js", "Google Fit API", "Apple HealthKit", "Node.js", "Express", "Java", "Spring Boot", "AWS", "DevOps"],
    imageUrl: "/projects/fitness-tracker.webp",
    demoUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/example/fitness",
    featured: false,
    challenges: "Integrating with various fitness APIs and wearable devices while maintaining consistent data structures and ensuring battery efficiency on mobile devices.",
    solutions: "Created a unified data model to normalize inputs from different sources and implemented background sync for efficient data transfer. Used React Native's performance optimization techniques.",
  },
  {
    id: "blog-platform",
    title: "Modern Content Management System",
    description:
      "A full-featured content management system with rich text editing, image optimization, SEO tools, and user management. Includes a commenting system and content scheduling.",
    longDescription:
      "This modern CMS platform was built to provide content creators with a powerful yet user-friendly tool for managing their digital content. The system includes a rich text editor with markdown support, image upload with automatic optimization, SEO analysis tools, and scheduled publishing. Administrators can manage user roles and permissions, moderate comments, and track content performance through built-in analytics. The platform supports multilingual content and features a responsive design for both the admin interface and public-facing pages.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TipTap Editor", "NextAuth.js", "Tailwind CSS", "Vercel", "Java", "Spring Boot", "AWS", "DevOps"],
    imageUrl: "/projects/placeholder-project.jpg",
    demoUrl: "https://example.com/cms",
    githubUrl: "https://github.com/example/cms",
    featured: false,
    challenges: "Creating a flexible content model that could support various content types while maintaining good SEO practices and ensuring fast page loads for content-heavy sites.",
    solutions: "Implemented a modular content block system and utilized Next.js static generation with incremental static regeneration for optimal performance and SEO.",
  },
  {
    id: 'unisearch',
    title: 'UniSearch',
    description: 'Intelligent communication search platform that unifies customer interactions across channels using advanced NLP for enhanced financial services support',
    technologies: ['React', 'Spring Boot', 'AWS', 'NLP', 'Microservices', 'PostgreSQL', 'Java', 'DevOps'],
    imageUrl: '/projects/search-engine.svg',
    demoUrl: 'https://example.com/unisearch',
    githubUrl: 'https://github.com/example/unisearch',
    featured: true
  },
  {
    id: 'eduflow',
    title: 'EduFlow',
    description: 'Modern learning management system with intuitive dashboards and role-based access control for streamlined educational service delivery',
    technologies: ['React.js', 'Django', 'Azure', 'RBAC', 'REST API'],
    imageUrl: '/projects/education-system.svg',
    demoUrl: 'https://example.com/eduflow',
    githubUrl: 'https://github.com/example/eduflow',
    featured: true
  },
  {
    id: 'splitai',
    title: 'SplitAI',
    description: 'Smart expense splitting app that uses AI vision to scan receipts and automatically identify items and prices for easy group expense management',
    technologies: ['Python', 'React', 'Azure', 'Computer Vision', 'AI/ML'],
    imageUrl: '/projects/expense-app.svg',
    demoUrl: 'https://example.com/splitai',
    githubUrl: 'https://github.com/example/splitai',
    featured: true
  }
];

export default function ProjectsPage() {
  // Filter for featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Here's a selection of my recent work. Each project represents a unique
        challenge and showcases different aspects of my skills and approach to
        development.
      </p>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-video w-full bg-muted overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
            >
              <div className="relative h-40 w-full bg-muted overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Demo <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-1 h-3 w-3" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
