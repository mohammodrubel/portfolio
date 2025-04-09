"use client"

import { MotionDiv } from "./motion"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, Wrench, MessageSquare, Braces } from "lucide-react"

const skills = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "ShadCN UI",
    "Ant Design",
    "Redux Toolkit",
    "RTK Query",
    "React Query",
  ],
  backend: ["Node.js", "Express.js", "REST API"],
  database: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose ODM"],
  tools: ["VS Code", "Git CLI", "GitHub", "Postman", "Chrome DevTools", "ClickUp"],
  softSkills: ["Communication", "Adaptability", "Time management", "Patience", "Multitasking"],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30 grid-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and professional capabilities.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend Development"
            skills={skills.frontend}
            icon={<Braces className="w-6 h-6" />}
            delay={0.1}
          />
          <SkillCard
            title="Backend Development"
            skills={skills.backend}
            icon={<Server className="w-6 h-6" />}
            delay={0.2}
          />
          <SkillCard title="Database" skills={skills.database} icon={<Database className="w-6 h-6" />} delay={0.3} />
          <SkillCard
            title="Tools & Platforms"
            skills={skills.tools}
            icon={<Wrench className="w-6 h-6" />}
            delay={0.4}
          />
          <SkillCard
            title="Soft Skills"
            skills={skills.softSkills}
            icon={<MessageSquare className="w-6 h-6" />}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, skills, icon, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect h-full"
    >
      <Card className="border-0 bg-transparent h-full">
        <CardContent className="p-6 h-full">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium"
                >
                  {skill}
                </MotionDiv>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  )
}

