"use client"

import { MotionDiv } from "./motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Flexpoint",
    description:
      "Developed a scalable, high-performance web application with a seamless UI/UX, ensuring an optimal user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/flexpoint",
    githubUrl: "https://github.com/example/flexpoint",
    highlights: [
      "Optimized front-end architecture by building modular, reusable components with React.js, Next.js, and TypeScript.",
      "Worked closely with UX/UI designers and backend engineers to streamline API integrations and enhance application performance.",
    ],
  },
  {
    title: "ProHR",
    description:
      "Implemented an advanced candidate matching algorithm in ProHR, enhancing recruitment efficiency by precisely aligning candidate skills with job requirements.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://example.com/prohr",
    githubUrl: "https://github.com/example/prohr",
    highlights: [
      "Integrated video calling functionality, enabling seamless scheduling and management of virtual interviews, optimizing communication and resource allocation.",
      "Developed a streamlined onboarding module, simplifying and accelerating the onboarding process for new hires.",
    ],
  },
  {
    title: "Pharmik",
    description:
      "Pharmik is a B2B online medicine marketplace that streamlines transactions between medicine retailers and distributors.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React.js", "Tailwind CSS", "MobX"],
    liveUrl: "https://example.com/pharmik",
    githubUrl: "https://github.com/example/pharmik",
    highlights: [
      "The platform supports customers (retailers), merchants (suppliers), and admins, offering features like product, order and employee management, notifications, and real-time chat.",
      "Contributed to the project's success by utilizing React.js, Next.js, Tailwind CSS, MobX, and other modern front-end technologies.",
    ],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30 grid-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and projects I've contributed to.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="glass-effect overflow-hidden border-0 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {project.highlights.map((highlight, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        • {highlight}
                      </p>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" /> Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" /> Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

