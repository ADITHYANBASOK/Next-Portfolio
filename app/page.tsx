import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="ADITHYAN B ASHOK copy.JPG"
            alt="Your Name"
            fill
            className="rounded-full "
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm</span>
          <span className="block ">ADITHYAN B ASOK</span>
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          FULL STACK DEVELOPER
        </p>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
           MERN | REACT | NODE | EXPRESS | PYTHON | HTML | CSS | JAVASCRIPT | DJANGO
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link href="/projects" passHref>
              <Button size="lg">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link href="https://github.com/ADITHYANBASOK" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/adithyan-b-asok-2660b9221/" target="_blank" rel="noreferrer">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:adithyanbasok@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Mail</span>
          </Link>
          {/* <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
