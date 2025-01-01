import Link from 'next/link'
import { Github, Linkedin, Twitter , Mail , Code } from 'lucide-react'
import { LiaHackerrank } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by ADITHYAN B ASOK. The source code is available on{" "}
            <Link href="https://github.com/ADITHYANBASOK" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/ADITHYANBASOK" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/adithyan-b-asok-2660b9221/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:adithyanbasok@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Mail</span>
          </Link>
          <Link href="https://www.hackerrank.com/profile/adithyanbasok/" target="_blank" rel="noreferrer">
            <LiaHackerrank className="h-6 w-6" />
            <span className="sr-only">HackerRank</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer