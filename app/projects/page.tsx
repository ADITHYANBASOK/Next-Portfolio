
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Info } from 'lucide-react'
import { projects } from '@/data/project'
import { FaReact , FaNodeJs } from 'react-icons/fa'




const IconMapping: { [key: string]: React.ReactNode } = {
  FaReact: <FaReact className="mr-2 h-4 w-4" style={{ color: "#61DAFB" }} />,
  FaNodeJs: <FaNodeJs className="mr-2 h-4 w-4" style={{ color: "#68A063" }} />,
  other: <Github className="mr-2 h-4 w-4" />, // Default fallback icon
};

export default function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const handleFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            {flippedCard === null || flippedCard !== index ? (
              <>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-t-lg object-cover h-48 w-full"
                  />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.liveUrl?
                  <Button asChild variant="outline">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  :<></>}
                  {/* <Button asChild variant="outline"> */}
                    {project.githubUrl.length > 1 ? (
                      <>
                        {/* Frontend Button */}
                        <Button asChild variant="outline">

                        <Link href={project.githubUrl[0].url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> {IconMapping[project.githubUrl[0].type] || IconMapping["other"]}
                        </Link>
                        </Button>
                        {/* Backend Button */}
                        <Button asChild variant="outline">

                        <Link href={project.githubUrl[1].url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />  {IconMapping[project.githubUrl[1].type] || IconMapping["other"]}
                        </Link>
                        </Button>
                      </>
                    ) : (
                      // Single URL case
                      <Button asChild variant="outline">

                      <Link href={project.githubUrl[0].url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Link>
                      </Button>
                    )}
                  {/* </Button> */}
                  <Button variant="outline" onClick={() => handleFlip(index)}>
                    <Info className="mr-2 h-4 w-4" /> Info
                  </Button>
                </CardFooter>
              </>
            ) : (
              <>
                <CardHeader>
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleFlip(index)}>
                    Back to Project
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
