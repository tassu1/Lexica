"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const features = [
  {
    icon: "📚",
    title: "Template Library",
    description:
      "Start with professional templates for business, academic, and creative reports.",
  },
  {
    icon: "🤖",
    title: "Advanced AI Engine",
    description:
      "Our AI understands context and nuance to generate detailed, human-like text.",
  },
  {
    icon: "✨",
    title: "AI Prompt Enhancer",
    description:
      "Turn a simple idea into a detailed prompt with a single click for better results.",
  },
  {
    icon: "🎛️",
    title: "Tone & Detail Control",
    description:
      "The AI adapts its writing style and depth based on your input.",
  },
  {
    icon: "📄",
    title: "Multiple Export Options",
    description:
      "Download your final report as a professional PDF or an editable DOCX file.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "Your ideas and generated reports are confidential and securely stored.",
  },
];

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 mb-8"
            >
              <span className="mr-2">✨</span> For Students, Professionals, and
              Creatives
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              From Raw Ideas to <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-slate-700 to-amber-600 bg-clip-text text-transparent">
                Polished Reports in Seconds
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Lexica uses advanced AI to transform your prompts into
              professional, well-structured reports. Perfect for academic
              papers, business analysis, and client proposals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/generate"
                className="bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Get Started For Free →
              </Link>
              <a
                href="#how-it-works"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-amber-400 hover:text-amber-700 transition-all duration-300 text-center"
              >
                How It Works
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <motion.div
          {...fadeIn}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-slate-200"
        >
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Simple Three-Step Process
            </h2>
            <p className="text-xl text-slate-600">
              Go from idea to document in record time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Select a Template
              </h3>
              <p className="text-slate-600">
                Choose from a library of professional report templates.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Provide Your Topic
              </h3>
              <p className="text-slate-600">
                Enter your requirements and let our AI get to work.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Download & Share
              </h3>
              <p className="text-slate-600">
                Export your polished report as a PDF or DOCX file.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful Features, Simple Interface
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to produce high-quality documents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={`${feature.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A Tool for Every Need
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Generate any professional document you need, instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              {...fadeIn}
              className="text-center p-6 bg-white rounded-xl border border-slate-200"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                For Students
              </h3>
              <p className="text-slate-600">
                Create project reports, synopses, and research papers
                effortlessly.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center p-6 bg-white rounded-xl border border-slate-200"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-slate-600 text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                For Professionals
              </h3>
              <p className="text-slate-600">
                Draft market analysis, business reports, and meeting summaries
                in minutes.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center p-6 bg-white rounded-xl border border-slate-200"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-slate-600 text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                For Freelancers
              </h3>
              <p className="text-slate-600">
                Generate compelling client proposals and project reports with
                ease.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Writing?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
  Join thousands of users saving hours of work with Lexica&apos;s AI Report
  Generator.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-all duration-300 shadow-lg text-center"
            >
              Create Your First Report
            </Link>
          </div>
          <p className="text-slate-600 mt-6 text-sm">
            Free to start.
          </p>
        </div>
      </section>
    </div>
  );
}
