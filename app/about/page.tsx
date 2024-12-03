import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download } from 'lucide-react'
import { FaReact, FaGitAlt, FaAws , FaPhp , FaLaravel} from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbBrandMongodb, TbBrandTailwind , TbBrandPython , TbBrandDjango } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoNodejs , IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiGraphql , SiRedux } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";








export default function About() {
  const skills = [
    { name: "JavaScript", icon: TbBrandJavascript },
    { name: "TypeScript", icon: TbBrandTypescript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: RiNextjsLine },
    { name: "Node.js", icon: IoLogoNodejs },
    { name: "Express", icon: SiExpress },
    { name: "HTML", icon: TiHtml5 },
    { name: "CSS", icon: IoLogoCss3 },
    { name: "Python", icon: TbBrandPython },
    { name: "Django", icon: TbBrandDjango },
    { name: "PHP", icon: FaPhp },
    { name: "Laravel", icon: FaLaravel },
    { name: "Redux", icon: SiRedux },
    { name: "MongoDB", icon: TbBrandMongodb },
    { name: "PostgreSQL", icon: DiPostgresql },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Tailwind", icon: TbBrandTailwind },
    { name: "AWS", icon: FaAws },
    { name: "Git", icon: FaGitAlt }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="about.jpg"
            alt="Your Name"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="mb-4">
            I'm a passionate Full Stack Developer with a keen interest in building scalable web applications and contributing to open-source projects. With a strong foundation in both front-end and back-end technologies, I strive to create efficient, user-friendly solutions to complex problems.
          </p>
          <p className="mb-4">
            My journey in tech started with a fascination for how things work behind the scenes. This curiosity led me to dive deep into various programming languages and frameworks, constantly expanding my skill set to stay at the forefront of technological advancements.
          </p>
          <p className="mb-8">
            When I'm not coding, you can find me exploring new technologies, contributing to tech communities, or enjoying a good book on software architecture and design patterns.
          </p>
          {/* <Button>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button> */}
          <Button asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>

        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Skills & Competencies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="flex items-center justify-center p-4 space-x-4">
                <skill.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}