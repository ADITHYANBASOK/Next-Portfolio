import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const educationData = [
  {
    level: "Master of Science (MSc)",
    field: "Computer Science",
    institution: "Department of Computer Science Calicut University",
    year: "2021 - 2023"
  },
  {
    level: "Bachelor of Computer Science (BCA)",
    field: "Computer Application",
    institution: "Sree Narayana College , Vatakara",
    year: "2018 - 2021"
  },
  {
    level: "+2 (Higher Secondary)",
    field: "Science",
    institution: "G.H.S.S velliyode",
    year: "2016 - 2018"
  }
]

const internshipData = [
  {
    role: "MERN Stack Intern",
    company: "Maitexa Info Solutions LLP",
    duration: "08-23 to 01-24",
    description: "Worked on developing and optimizing backend services using Node.js and MongoDB."
  },
  {
    role: "Frontend Developer Intern",
    company: "Web Agency B",
    duration: "Winter 2018",
    description: "Assisted in building responsive web applications using React and Redux."
  }
]

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    url: "https://aws.amazon.com/certification/certified-developer-associate/"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    url: "https://cloud.google.com/certification/cloud-architect"
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    url: "https://learn.microsoft.com/en-us/certifications/azure-developer/"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    url: "https://www.cncf.io/certification/cka/"
  }
]

export default function EducationExperience() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Education & Experience</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.level} in {edu.field}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Internships</h2>
        <div className="space-y-4">
          {internshipData.map((internship, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{internship.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{internship.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{internship.duration}</p>
                <p>{internship.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <Link href={cert.url} key={index} target="_blank" rel="noopener noreferrer">
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors">
                {cert.name}
              </Badge>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}