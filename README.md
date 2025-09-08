
# 🌐 Lexica – AI Report & Pitch Generator

[Live Demo 🚀](https://lexicaai.vercel.app/)

Lexica is an **AI-powered document generator** that helps you quickly create business pitches, academic synopses, proposals, market analyses, and lesson plans. With Google OAuth login and export options (PDF/DOCX), Lexica is designed to save time and make professional writing effortless.

---

## ✨ Features
- 🔐 **Google OAuth Login** – secure authentication
- 🤖 **AI-powered reports** – generates structured content from simple ideas
- 📊 **Multiple Templates** – Business Pitch, Market Analysis, Academic Synopsis, Lesson Plan, Freelance Proposal
- 📥 **Export Options** – download in PDF or DOCX
- 🎨 **Modern UI** – responsive design with TailwindCSS
- ⚡ **Deployed on Vercel** for fast global access

---

## 🛠 Tech Stack
- **Framework**: Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth (Google OAuth)
- **AI Integration**: OpenRouter API
- **Deployment**: Vercel
- **PDF/DOCX Export**: jsPDF + API route for docx

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/lexica.git
cd lexica
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file:

```env
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
OPENROUTER_API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the project locally

```bash
npm run dev
```

---

## 🔑 OAuth Setup

Add these **Authorized Redirect URIs** in your Google Cloud console:

* `http://localhost:3000/api/auth/callback/google`
* `https://lexicaai.vercel.app/api/auth/callback/google`

---

## 🖥 Usage

1. Login with Google
2. Pick a template (Business Pitch, Academic, Market Analysis, etc.)
3. Enter your topic or idea
4. Enhance it with AI (optional)
5. Generate your report
6. Download as **PDF/DOCX** or regenerate

---


## 📌 Roadmap

* ✅ Basic templates with AI generation
* ✅ PDF/DOCX export
* 🔜 User dashboard for managing reports
* 🔜 Shareable report links
* 🔜 More AI-powered customization options

---

## 📄 License

MIT License – free to use and modify.

---

👉 **Try it live now:** [Lexica AI](https://lexicaai.vercel.app/)

