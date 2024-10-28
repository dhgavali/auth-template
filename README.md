# Next.js Authentication Template

This project is a comprehensive authentication template built with Next.js, featuring a robust set of user management functionalities.

## Features

- User Registration
- Login and Authentication
- Profile Page with User Profile Update
- Forgot Password with Email OTP Feature
- PostgreSQL Database Integration with Prisma ORM

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database

## Technologies Used

- Next.js 13+
- React 18
- NextAuth.js for authentication
- Prisma ORM
- PostgreSQL
- Tailwind CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up your environment variables in a `.env` file
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)

## Deployment

This project can be easily deployed on platforms like Vercel or any other hosting service that supports Next.js applications.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

### Setting Up Environment Variables

1. **Database URL**
   - Format: `postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE`
   - Example for local development: `postgresql://postgres:password@localhost:5432/auth_db`
   - For production, use your database provider's connection string

2. **NextAuth Secret**
   - Generate a secure random string for `NEXTAUTH_SECRET`
   - You can use this command in terminal:
     ```bash
     openssl rand -base64 32
     ```
   - Example: `NEXTAUTH_SECRET="8KVgwNXUqCGKBG/IDf2RFN9aeRvit5wFHVEgBtDVOeM="`

3. **NextAuth URL**
   - Development: `http://localhost:3000`
   - Production: Your actual domain (e.g., `https://your-app.com`)

4. **Email (SMTP) Configuration**
   
   For Gmail:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER="your-gmail@gmail.com"
   SMTP_PASSWORD="your-app-specific-password"
   SMTP_FROM="your-gmail@gmail.com"
   ```

   For SendGrid:
   ```env
   SMTP_HOST="smtp.sendgrid.net"
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER="apikey"
   SMTP_PASSWORD="your-sendgrid-api-key"
   SMTP_FROM="verified-sender@yourdomain.com"
   ```

### Important Notes

- Never commit your `.env` file to version control
- Use strong, unique passwords for production environments
- For Gmail, you'll need to:
  1. Enable 2-Step Verification
  2. Generate an App Password (Settings → Security → App Passwords)
- Make sure `SMTP_FROM` is a verified sender email address
- In development, you can use [Mailtrap](https://mailtrap.io)
