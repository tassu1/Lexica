
# Lexica

Lexica is an AI-powered platform that turns ideas into professional reports, business pitches, proposals, and lesson plans.

## Features
- Google OAuth login
- AI-generated reports using OpenRouter
- Clean UI with TailwindCSS
- Deployed on Vercel

## Tech Stack
- Next.js 14 + TypeScript
- Tailwind CSS
- NextAuth (Google OAuth)
- OpenRouter API
- Vercel

## Setup
1. Clone the repo
2. Install dependencies: `npm install`
3. Add a `.env.local` file with:
```

NEXTAUTH\_SECRET=your\_secret
NEXTAUTH\_URL=[http://localhost:3000](http://localhost:3000)
GOOGLE\_CLIENT\_ID=your\_client\_id
GOOGLE\_CLIENT\_SECRET=your\_client\_secret
OPENROUTER\_API\_KEY=your\_api\_key
NEXT\_PUBLIC\_SITE\_URL=[http://localhost:3000](http://localhost:3000)

```
4. Run locally: `npm run dev`

## OAuth
Redirect URIs:
- `http://localhost:3000/api/auth/callback/google`
- `https://lexicaai.vercel.app/api/auth/callback/google`

## Usage
1. Login with Google  
2. Select a template (Report, Proposal, Pitch, etc.)  
3. Enter your topic or idea  
4. Get your AI-generated document  
5. Download as PDF/DOCX or share directly  
```


