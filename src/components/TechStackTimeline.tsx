"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

// Placeholder data - replace with your actual tech stack journey
const techStackData = [
  {
    id: 1,
    tech: 'HTML & CSS',
    startDate: '2018',
    description: 'Started my web development journey learning the fundamentals.',
    projects: ['First Personal Website'],
  },
  {
    id: 2,
    tech: 'JavaScript',
    startDate: '2019',
    description: 'Dived into dynamic web functionalities and interactivity.',
    projects: ['Simple Web Apps', 'DOM Manipulation Projects'],
  },
  {
    id: 3,
    tech: 'React',
    startDate: '2020',
    description: 'Adopted component-based architecture for building UIs.',
    projects: ['Task Management App', 'Portfolio v1'],
  },
  {
    id: 4,
    tech: 'Node.js & Express, Java & Spring Boot',
    startDate: '2021',
    description: 'Explored backend development, building APIs, and enterprise-grade services with Java and Spring Boot.',
    projects: ['RESTful APIs', 'Full-stack Projects', 'Enterprise Backend Systems'],
  },
  {
    id: 5,
    tech: 'TypeScript, AWS & DevOps',
    startDate: '2022',
    description: 'Enhanced code quality and scalability with static typing. Developed cloud-native applications and implemented DevOps practices on AWS.',
    projects: ['Large Scale Applications', 'Team Projects', 'Cloud Deployments', 'CI/CD Pipelines'],
  },
  {
    id: 6,
    tech: 'Next.js',
    startDate: '2023',
    description: 'Leveraged server-side rendering and advanced React features.',
    projects: ['This Portfolio Website', 'Client Projects'],
  },
];

const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export function TechStackTimeline() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-8 text-center">My Tech Journey</h2>
      <div className="relative pl-8 border-l-2 border-primary/30">
        {techStackData.map((item, index) => (
          <motion.div
            key={item.id}
            className="mb-10 ml-4 relative"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineItemVariants}
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[2.5rem] border-2 border-background mt-1.5"></div>
            <div className="p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-1 text-sm font-semibold text-primary">
                <Calendar className="w-4 h-4 mr-2" />
                {item.startDate}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.tech}</h3>
              <p className="mb-3 text-base font-normal text-muted-foreground">{item.description}</p>
              {item.projects && item.projects.length > 0 && (
                <div className="flex items-start text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Key Projects/Uses:</span>
                    <ul className="list-disc list-inside ml-1">
                      {item.projects.map((project, pIndex) => (
                        <li key={pIndex}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}