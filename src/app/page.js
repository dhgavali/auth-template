import Link from 'next/link'
import { Github, Globe, Linkedin, ArrowRight, Star, GitFork, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Next.js Authentication Template
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A modern, secure, and feature-rich authentication template built with Next.js 13+, NextAuth.js, and Prisma
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/docs"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/yourusername/auth-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View on GitHub
                  <Github className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Open Source</h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Free and open source template. Use it for your projects or contribute to make it better.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <GitFork className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Ready to Fork</h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Start your project quickly by forking this template. Everything you need is set up.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Community</h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Join our community. Raise issues, suggest features, or contribute to the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Created by
              </h2>
              
              {/* Profile Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/dh.jpeg"
                  alt="Dhananjay Gavali"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Name with better visibility */}
              <h3 className="text-2xl font-bold text-foreground py-2">
                Dhananjay Gavali
              </h3>

              {/* Social Links with bigger icons */}
              <div className="flex space-x-6">
                <Link
                  href="https://dhgavali.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm border hover:bg-accent transition-colors"
                >
                  <Globe className="h-7 w-7" />
                </Link>
                <Link
                  href="https://linkedin.com/in/dhgavali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm border hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-7 w-7" />
                </Link>
                <Link
                  href="https://github.com/dhgavali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm border hover:bg-accent transition-colors"
                >
                  <Github className="h-7 w-7" />
                </Link>
              </div>

              {/* Optional: Add a brief bio */}
              <p className="max-w-[600px] text-muted-foreground text-lg">
                Full Stack Developer passionate about creating modern web applications 
                and open-source solutions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Start building your next project with our authentication template.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Documentation
                </Link>
                <Link
                  href="https://github.com/yourusername/auth-template/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Report Issues
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Next.js Auth Template. Created by Dhananjay Gavali. 
          </p>
        </div>
      </footer>
    </div>
  )
}
