"use client";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";  // Path correction
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">About Me</h1>

        {/* Bio Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">👋</span>
            <p className="text-xl font-medium">Hello World!</p>
          </div>
          <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer crafting modern web experiences. 💻 Currently working as a Flutter Developer at WeXL, where I blend creativity with technical expertise to build innovative solutions.
          </p>
          <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
            🚀 My journey in tech is driven by curiosity and a love for problem-solving. When I'm not coding, you'll find me exploring competitive programming challenges and diving deep into backend engineering.
          </p>
        </section>

      {/* Skills Section */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🛠️</span> Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-xl">🎨</span> Front-end
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>⚛️</span> React.js & Next.js
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>📱</span> Flutter & Dart
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>🔷</span> TypeScript
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>🎭</span> Tailwind CSS
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Back-end
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>☕</span> Spring Boot
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>🐍</span> Django & FastAPI
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>☁️</span> AWS Services
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span>🔌</span> REST APIs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">💼</span> Experience
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative pl-8 border-l border-muted hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-3 p-2 bg-background border-2 border-primary rounded-full">
                <span className="text-lg">💻</span>
              </div>
              <div className="mb-1 text-sm font-medium text-primary">2021 - Present</div>
              <h3 className="text-lg font-semibold">Flutter Developer</h3>
              <p className="text-muted-foreground">WeXL</p>
              <p className="mt-2 text-muted-foreground">
                Building innovative mobile applications using Flutter, implementing responsive UI designs, and optimizing app performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative pl-8 border-l border-muted hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-3 p-2 bg-background border-2 border-primary rounded-full">
                <span className="text-lg">🚀</span>
              </div>
              <div className="mb-1 text-sm font-medium text-primary">2020 - 2021</div>
              <h3 className="text-lg font-semibold">Full Stack Developer</h3>
              <p className="text-muted-foreground">NetCracker Technology</p>
              <p className="mt-2 text-muted-foreground">
                Developed scalable web applications using React.js and Spring Boot, implemented microservices architecture, and managed cloud deployments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative pl-8 border-l border-muted hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-3 p-2 bg-background border-2 border-primary rounded-full">
                <span className="text-lg">⚡</span>
              </div>
              <div className="mb-1 text-sm font-medium text-primary">2019 - 2020</div>
              <h3 className="text-lg font-semibold">Backend Developer</h3>
              <p className="text-muted-foreground">Techborn IT Solutions</p>
              <p className="mt-2 text-muted-foreground">
                Engineered robust backend services and RESTful APIs, collaborated with frontend teams, and implemented efficient database solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🏆</span> Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-card rounded-lg p-6 border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">☁️</span>
                <h3 className="text-lg font-semibold">AWS Certified Developer</h3>
              </div>
              <p className="text-muted-foreground">
                Achieved AWS Developer certification, demonstrating expertise in cloud architecture and deployment strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-card rounded-lg p-6 border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎯</span>
                <h3 className="text-lg font-semibold">Hackathon Champion</h3>
              </div>
              <p className="text-muted-foreground">
                Led team to victory in Regional Hackathon, developing an innovative accessibility solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-card rounded-lg p-6 border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌟</span>
                <h3 className="text-lg font-semibold">Open Source Impact</h3>
              </div>
              <p className="text-muted-foreground">
                Active contributor to open-source projects, with significant contributions and merged pull requests.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Interests */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🌈</span> Interests & Hobbies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-card rounded-lg p-6 border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏃‍♂️</span>
                  <p className="text-muted-foreground">Exploring hiking trails and staying active</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📚</span>
                  <p className="text-muted-foreground">Reading science fiction and tech blogs</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📸</span>
                  <p className="text-muted-foreground">Experimenting with photography</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="bg-card rounded-lg p-6 border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">👨‍🏫</span>
                  <p className="text-muted-foreground">Mentoring aspiring developers</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">✍️</span>
                  <p className="text-muted-foreground">Writing technical blog posts</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🤝</span>
                  <p className="text-muted-foreground">Contributing to tech communities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      </motion.div>
    </div>
  );
  
}
