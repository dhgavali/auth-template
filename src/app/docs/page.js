'use client'

import { useState, useCallback, useEffect } from 'react'
import { Search, ChevronRight, Copy, Check } from 'lucide-react'

// New component for copyable code blocks
const CopyableCode = ({ children, className }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(children)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }, [children])

  return (
    <div className="relative group">
      <pre className={className}>{children}</pre>
      <button
        className="absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-muted hover:bg-muted/80"
        onClick={copyToClipboard}
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}

// Custom marked renderer for code blocks
const renderer = {
  code(code, language) {
    return `
      <div class="relative group">
        <pre class="language-${language}">${code}</pre>
        <button
          class="copy-button absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-muted hover:bg-muted/80"
          data-code="${code.replace(/"/g, '&quot;')}"
        >
          <svg class="h-4 w-4 copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.912 4.895 3 6 3h8c1.105 0 2 .912 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.088 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"/>
          </svg>
          <svg class="h-4 w-4 check-icon hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </button>
      </div>
    `
  }
}

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)
    
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = Object.entries(sections).filter(([key, section]) => {
      const searchable = `${section.title} ${section.content}`.toLowerCase()
      return searchable.includes(query.toLowerCase())
    }).map(([key, section]) => ({
      key,
      title: section.title,
      // Extract a relevant snippet from the content
      snippet: section.content
        .split('\n')
        .find(line => line.toLowerCase().includes(query.toLowerCase()))
        ?.slice(0, 100) + '...' || ''
    }))

    setSearchResults(results)
  }

  // Add client-side code copying functionality
  useEffect(() => {
    const addCopyButtons = () => {
      document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', () => {
          const code = button.dataset.code
          navigator.clipboard.writeText(code)
          
          const copyIcon = button.querySelector('.copy-icon')
          const checkIcon = button.querySelector('.check-icon')
          
          copyIcon.classList.add('hidden')
          checkIcon.classList.remove('hidden')
          
          setTimeout(() => {
            copyIcon.classList.remove('hidden')
            checkIcon.classList.add('hidden')
          }, 2000)
        })
      })
    }

    addCopyButtons()
  }, [activeSection])

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      icon: '🚀',
      content: `
<div class="space-y-8">
  <div class="flex items-center space-x-3">
    <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
      🚀
    </div>
    <h1 class="text-4xl font-bold">Getting Started</h1>
  </div>

  <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 dark:bg-blue-500/5">
    <h3 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Prerequisites</h3>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>Node.js 16.x or later</li>
      <li>npm or yarn</li>
      <li>A database (PostgreSQL recommended)</li>
    </ul>
  </div>

  <div class="space-y-6">
    <h2 class="text-2xl font-bold">Quick Start Guide</h2>
    
    <div class="space-y-4">
      <div class="rounded-lg border bg-card">
        <div class="flex items-center border-b px-4 py-2 bg-muted/50">
          <span class="font-mono text-sm text-muted-foreground">01</span>
          <h3 class="ml-4 font-semibold">Clone the Repository</h3>
        </div>
        <div class="p-4">
          <pre class="bg-black rounded-md"><code class="text-sm text-white">git clone https://github.com/yourusername/auth-template
cd auth-template</code></pre>
        </div>
      </div>

      <div class="rounded-lg border bg-card">
        <div class="flex items-center border-b px-4 py-2 bg-muted/50">
          <span class="font-mono text-sm text-muted-foreground">02</span>
          <h3 class="ml-4 font-semibold">Install Dependencies</h3>
        </div>
        <div class="p-4">
          <pre class="bg-black rounded-md"><code class="text-sm text-white">npm install</code></pre>
        </div>
      </div>

      <div class="rounded-lg border bg-card">
        <div class="flex items-center border-b px-4 py-2 bg-muted/50">
          <span class="font-mono text-sm text-muted-foreground">03</span>
          <h3 class="ml-4 font-semibold">Environment Setup</h3>
        </div>
        <div class="p-4 space-y-4">
          <p class="text-sm text-muted-foreground">Create your environment file:</p>
          <pre class="bg-black rounded-md"><code class="text-sm text-white">cp .env.example .env</code></pre>
          <p class="text-sm text-muted-foreground">Edit .env with your credentials:</p>
          <pre class="bg-black rounded-md"><code class="text-sm text-white">DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"</code></pre>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 flex items-center gap-4">
    <div class="flex-1 rounded-lg border bg-card p-4">
      <h3 class="font-semibold mb-2">Need Help?</h3>
      <p class="text-sm text-muted-foreground">Check out our community forums or GitHub discussions for support.</p>
    </div>
    <div class="flex-1 rounded-lg border bg-card p-4">
      <h3 class="font-semibold mb-2">Found a bug?</h3>
      <p class="text-sm text-muted-foreground">Report issues on our GitHub repository to help us improve.</p>
    </div>
  </div>
</div>
    `,
    },
    'architecture': {
      title: 'Project Architecture',
      icon: '🏗️',
      content: `
<div class="space-y-8">
  <div class="flex items-center space-x-3">
    <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
      🏗️
    </div>
    <h1 class="text-4xl font-bold">Project Architecture</h1>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-lg border bg-card p-6">
      <h3 class="text-lg font-semibold mb-4">Directory Structure</h3>
      <ul class="space-y-3">
        <li class="flex items-start">
          <div class="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
          <div>
            <span class="font-mono text-sm bg-muted px-2 py-1 rounded">/src/app</span>
            <p class="text-sm text-muted-foreground mt-1">Next.js 13+ App Router pages and layouts</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
          <div>
            <span class="font-mono text-sm bg-muted px-2 py-1 rounded">/src/components</span>
            <p class="text-sm text-muted-foreground mt-1">Reusable React components</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
          <div>
            <span class="font-mono text-sm bg-muted px-2 py-1 rounded">/src/lib</span>
            <p class="text-sm text-muted-foreground mt-1">Utility functions and configurations</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="rounded-lg border bg-card p-6">
      <h3 class="text-lg font-semibold mb-4">Key Features</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="rounded-lg bg-muted p-4">
          <div class="text-2xl mb-2">⚡️</div>
          <h4 class="font-medium">Next.js 13+</h4>
          <p class="text-sm text-muted-foreground">With App Router</p>
        </div>
        <div class="rounded-lg bg-muted p-4">
          <div class="text-2xl mb-2">🔐</div>
          <h4 class="font-medium">NextAuth.js</h4>
          <p class="text-sm text-muted-foreground">Authentication</p>
        </div>
        <div class="rounded-lg bg-muted p-4">
          <div class="text-2xl mb-2">🗃️</div>
          <h4 class="font-medium">Prisma ORM</h4>
          <p class="text-sm text-muted-foreground">Database management</p>
        </div>
        <div class="rounded-lg bg-muted p-4">
          <div class="text-2xl mb-2">🎨</div>
          <h4 class="font-medium">Tailwind CSS</h4>
          <p class="text-sm text-muted-foreground">Styling solution</p>
        </div>
      </div>
    </div>
  </div>
</div>
    `,
    },
    'authentication': {
      title: 'Authentication',
      content: `
### Auth Setup

This template uses NextAuth.js for authentication. Supported providers:

- Email/Password
- Google OAuth
- GitHub OAuth

### Configuration

1. Update \`/src/app/api/auth/[...nextauth]/route.js\` for providers
2. Configure environment variables:
   - \`NEXTAUTH_SECRET\`
   - Provider-specific credentials
   
### Protected Routes

Use the \`useSession\` hook or middleware to protect routes:

\`\`\`javascript
import { useSession } from 'next-auth/react'

const ProtectedPage = () => {
  const { data: session } = useSession()
  // ...
}
\`\`\`
      `
    },
    'database': {
      title: 'Database & Prisma',
      content: `
### Prisma Setup

The template uses Prisma ORM with a default User model.

\`\`\`prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String?
  name      String?
  // ...
}
\`\`\`

### Common Operations

\`\`\`javascript
// Create user
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    // ...
  }
})

// Find user
const user = await prisma.user.findUnique({
  where: { email: 'user@example.com' }
})
\`\`\`
      `
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Auth Template</span>
            </a>
          </div>
          
          {/* Enhanced Search */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full md:w-80 lg:w-96">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 pl-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                
                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 max-h-96 overflow-auto rounded-md border bg-background shadow-lg">
                    {searchResults.map((result) => (
                      <button
                        key={result.key}
                        className="w-full px-4 py-2 text-left hover:bg-muted"
                        onClick={() => {
                          setActiveSection(result.key)
                          setSearchQuery('')
                          setSearchResults([])
                        }}
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-muted-foreground">{result.snippet}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="relative overflow-hidden py-6 pr-6 lg:py-8">
            <nav className="space-y-1">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`group flex w-full items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium ${
                    activeSection === key
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.title}
                  <ChevronRight className={`ml-auto h-4 w-4 transition-transform ${
                    activeSection === key ? 'rotate-90' : ''
                  }`} />
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
              <ChevronRight className="h-4 w-4" />
              <div className="font-medium text-foreground">{sections[activeSection].title}</div>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: require('marked').parse(sections[activeSection].content) 
                }} 
              />
            </div>

            {/* Navigation cards at the bottom */}
            <div className="grid grid-cols-2 gap-4 mt-16">
              <button className="group rounded-lg border p-4 hover:border-primary transition-colors">
                <div className="text-sm text-muted-foreground mb-2">Previous</div>
                <div className="text-lg font-medium group-hover:text-primary">Getting Started</div>
              </button>
              <button className="group rounded-lg border p-4 hover:border-primary transition-colors text-right">
                <div className="text-sm text-muted-foreground mb-2">Next</div>
                <div className="text-lg font-medium group-hover:text-primary">Project Architecture</div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DocsPage
