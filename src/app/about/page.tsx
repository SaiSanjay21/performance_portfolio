import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Coffee, GraduationCap, Palette, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      {/* Bio Section */}
      <section className="mb-12">
        <p className="text-lg mb-4 text-muted-foreground">
          Hi there! I'm a passionate full-stack developer with expertise in building modern web applications.
          I love creating elegant solutions to complex problems and have a keen eye for detail and design.
        </p>
        <p className="text-lg mb-4 text-muted-foreground">
          My journey in development started over 5 years ago, and since then, I've worked on numerous
          projects ranging from small business websites to complex enterprise applications. I'm constantly
          learning and evolving my skills to stay ahead in this ever-changing field.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Brain className="mr-2 h-6 w-6 text-primary" /> Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code2 className="mr-2 h-5 w-5 text-primary" /> Front-end
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  React & Next.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  Vue.js & Nuxt
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  TypeScript
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  Tailwind CSS
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-primary" /> Back-end
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  Node.js & Express
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  PostgreSQL & MongoDB
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  GraphQL
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
                  Firebase & Supabase
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <GraduationCap className="mr-2 h-6 w-6 text-primary" /> Experience
        </h2>

        <div className="space-y-8">
          <div className="relative pl-8 border-l border-muted">
            <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary" />
            <div className="mb-1 text-sm text-muted-foreground">2021 - Present</div>
            <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
            <p className="text-muted-foreground">TechCorp Inc.</p>
            <p className="mt-2">
              Leading the frontend development team, building scalable web applications, and implementing design systems.
            </p>
          </div>

          <div className="relative pl-8 border-l border-muted">
            <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary" />
            <div className="mb-1 text-sm text-muted-foreground">2018 - 2021</div>
            <h3 className="text-lg font-semibold">Full Stack Developer</h3>
            <p className="text-muted-foreground">WebSolutions Ltd.</p>
            <p className="mt-2">
              Developed and maintained multiple client websites, implemented e-commerce solutions, and optimized database performance.
            </p>
          </div>

          <div className="relative pl-8 border-l border-muted">
            <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary" />
            <div className="mb-1 text-sm text-muted-foreground">2016 - 2018</div>
            <h3 className="text-lg font-semibold">Junior Web Developer</h3>
            <p className="text-muted-foreground">Digital Agency XYZ</p>
            <p className="mt-2">
              Assisted in the development of marketing websites, implemented responsive designs, and created interactive UI components.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-primary" /> Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-lg font-semibold mb-2">Hackathon Winner 2022</h3>
            <p className="text-muted-foreground">
              First place at the Regional Web Development Hackathon for building an innovative accessibility tool.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-lg font-semibold mb-2">Open Source Contributor</h3>
            <p className="text-muted-foreground">
              Active contributor to several popular open-source projects with over 50 merged pull requests.
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Palette className="mr-2 h-6 w-6 text-primary" /> Interests
        </h2>

        <div className="bg-card rounded-lg p-6 border">
          <p className="text-muted-foreground">
            When I'm not coding, you'll find me exploring hiking trails, reading science fiction, experimenting with photography, or contributing to tech community events. I'm also passionate about mentoring aspiring developers and sharing knowledge through blog posts and tutorials.
          </p>
        </div>
      </section>
    </div>
  );
}
