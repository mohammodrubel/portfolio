"use client"

import { MotionDiv } from "./motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    "title": "Full-Stack Developer",
    "company": "Web Code Care",
    "location": "Dhaka, Dhanmondi 19",
    "period": "Present",
    "description": [
      "Developing scalable and high-performance web applications using React.js, Next.js, Node.js, PostgreSQL, and MongoDB.",
      "Building and optimizing backend APIs to ensure seamless data flow and efficient server-side processing.",
      "Collaborating with designers and developers to create responsive and user-friendly interfaces.",
      "Implementing performance optimizations, reducing load times, and ensuring a smooth user experience across devices."
    ]
  },
  {
    "title": "Junior MERN Stack Developer (Part-time)",
    "company": "Cynocraft",
    "location": "Dhaka, Banasree",
    "period": "January 2023 – June 2023",
    "description": [
      "Developed and maintained web applications using the MERN stack, ensuring responsiveness and performance optimization.",
      "Worked on API development and integration, enhancing data handling efficiency.",
      "Collaborated with the development team to improve code quality and maintainability.",
      "Assisted in debugging and troubleshooting to enhance application stability and performance."
    ]
  }
  
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and career highlights.</p>
        </MotionDiv>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary md:-translate-x-1/2 hidden md:block"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <Card className="glass-effect overflow-hidden border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="text-primary" size={18} />
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                          <Badge variant="outline" className="font-normal">
                            {exp.company}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{exp.location}</span>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <ul className="space-y-2 list-disc pl-5">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

