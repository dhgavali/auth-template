'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import ThemeSwitch from '../ui/theme-switch'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleSignOut = async () => {
    await signOut({ 
      callbackUrl: '/login',
      redirect: true 
    })
  }

  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground">
              AuthTemplate
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/home" className="text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/docs" className="text-foreground hover:text-primary">
                Docs
              </Link>
              {session ? (
                <>
                  <Link href="/profile" className="text-foreground hover:text-primary">
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-foreground hover:text-primary"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-foreground hover:text-primary">
                    Login
                  </Link>
                  <Link href="/register" className="text-foreground hover:text-primary">
                    Register
                  </Link>
                </>
              )}
              <ThemeSwitch />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none ml-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-foreground hover:text-primary px-3 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="block text-foreground hover:text-primary px-3 py-2"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="block text-foreground hover:text-primary px-3 py-2"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut()
                    toggleMenu()
                  }}
                  className="block text-foreground hover:text-primary px-3 py-2 w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-foreground hover:text-primary px-3 py-2"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block text-foreground hover:text-primary px-3 py-2"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
