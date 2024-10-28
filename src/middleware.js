import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const isAuth = !!req.nextauth.token
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/register')
    const isPublicPage = req.nextUrl.pathname === '/'

    // Redirect authenticated users away from auth pages
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL('/home', req.url))
    }

    // Redirect unauthenticated users to login page
    if (!isAuth && !isAuthPage && !isPublicPage) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: () => true // This ensures the middleware is always called
    },
  }
)

// Protect these routes
export const config = {
  matcher: ['/home', '/profile', '/login', '/register', '/']
}
