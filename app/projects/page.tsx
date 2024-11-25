// import Image from 'next/image'
// import Link from 'next/link'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { ExternalLink, Github } from 'lucide-react'

// const projects = [
//   {
//     title: "KALIKA",
//     description: "Kalika is an web application for Disabled persons.Its Provide Disabled Persons to selling their Manufactured Product to Public and free Online doctor consultations",
//     image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     tags: ["React", "Node.js", "MongoDB", "Socket.io" , "Express" , "Git"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com"
//   },
//   {
//     title: "Task Management App",
//     description: "A collaborative task management tool with real-time updates and team features.",
//     image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com"
//   },
//   {
//     title: "Weather Forecast App",
//     description: "A sleek weather application with location-based forecasts and interactive maps.",
//     image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     tags: ["React Native", "Redux", "OpenWeatherMap API"],
//     liveUrl: "https://weather-app-x23b.vercel.app/",
//     githubUrl: "https://github.com/ADITHYANBASOK/Weather_app"
//   },
// ]

// export default function Projects() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <Card key={index} className="flex flex-col">
//             <CardHeader>
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={400}
//                 height={200}
//                 className="rounded-t-lg object-cover h-48 w-full"
//               />
//             </CardHeader>
//             <CardContent className="flex-grow">
//               <CardTitle className="mb-2">{project.title}</CardTitle>
//               <CardDescription>{project.description}</CardDescription>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {project.tags.map((tag, tagIndex) => (
//                   <Badge key={tagIndex} variant="secondary">{tag}</Badge>
//                 ))}
//               </div>
//             </CardContent>
//             <CardFooter className="flex justify-between">
//               <Button asChild variant="outline">
//                 <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
//                 </Link>
//               </Button>
//               <Button asChild variant="outline">
//                 <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                   <Github className="mr-2 h-4 w-4" /> Source Code
//                 </Link>
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Info } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string[]
  features: string[]
}

const projects: Project[] = [
  {
    title: "KALIKA",
    description: "Kalika is a web application for Disabled persons. It provides disabled persons a platform to sell their manufactured products and offers free online doctor consultations.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Git"],
    liveUrl: "https://example.com",
    githubUrl: ["https://github.com"],
    features: [
      "Online doctor consultations",
      "User-friendly dashboard",
      "Real-time chat support",
      "Customizable product listings"
    ]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: ["https://github.com",],
    features: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project timelines and Gantt charts",
      "Notifications and reminders"
    ]
  },
  {
    title: "Weather Forecast App",
    description: "A sleek weather application with location-based forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tags: ["React Native", "Redux", "OpenWeatherMap API"],
    liveUrl: "https://weather-app-x23b.vercel.app/",
    githubUrl:[ "https://github.com/ADITHYANBASOK/Weather_app","https://github.com"],
    features: [
      "Real-time weather updates",
      "Location-based forecasting",
      "Interactive maps with weather layers",
      "7-day forecast and alerts"
    ]
  }
]

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
                  <Button asChild variant="outline">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  {/* <Button asChild variant="outline"> */}
                    {project.githubUrl.length > 1 ? (
                      <>
                        {/* Frontend Button */}
                        <Button asChild variant="outline">

                        <Link href={project.githubUrl[0]} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Front
                        </Link>
                        </Button>
                        {/* Backend Button */}
                        <Button asChild variant="outline">

                        <Link href={project.githubUrl[1]} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Back
                        </Link>
                        </Button>
                      </>
                    ) : (
                      // Single URL case
                      <Button asChild variant="outline">

                      <Link href={project.githubUrl[0]} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Link>
                      </Button>
                    )}
                  {/* </Button> */}
                  <Button variant="outline" onClick={() => handleFlip(index)}>
                    <Info className="mr-2 h-4 w-4" /> Details
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
