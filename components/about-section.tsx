"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code, GraduationCap } from "lucide-react"
import { MotionDiv } from "./motion"

export default function AboutSection() {
  return (
    <div className="w-full">
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about me, my background, and what I do.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-10">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
                I'm Md Rubel, a passionate Full-Stack Developer based in Dhaka, Bangladesh, with 2 years of professional experience.
              </p>
              <p className="text-muted-foreground mb-4">
                I specialize in building scalable and high-performance web applications using modern technologies like React.js, Next.js, Node.js, PostgreSQL, and MongoDB. I’m dedicated to writing clean, efficient, and maintainable code while optimizing performance and user experience.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects. I'm always eager for new challenges and opportunities to grow as a developer.
              </p>
            </MotionDiv>




            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid gap-6">
                <Card className="glass-effect overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Code size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Experience</h4>
                        <p className="text-muted-foreground">
                          2+ years of professional experience in frontend and full-stack development, working with modern
                          technologies and frameworks.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Current Role</h4>
                        <p className="text-muted-foreground">
                          Full-Stack Developer at Web Code Care, Dhaka, Dhanmondi 19 | Focused on developing scalable and high-performance web applications.

                          I specialize in modern web technologies, including React.js, Next.js, Node.js, PostgreSQL, and MongoDB, to build efficient and maintainable solutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Education</h4>
                        <p className="text-muted-foreground capitalize">
                          bachelor of business administration marketing Department from National University,
                          Dhaka.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  )
}

