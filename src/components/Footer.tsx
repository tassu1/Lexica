'use client';

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-slate-500 hover:text-amber-600 transition-colors"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/icon.svg"
                alt="Lexica Logo"
                width={32}
                height={32}
                className="rounded-lg mr-2"
              />
              <span className="text-lg font-semibold text-slate-800">
                Lexica
              </span>
            </div>
            <p className="text-slate-600 text-sm">
              AI-powered report generation for students, professionals, and
              creatives.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#use-cases"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/generate"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Lexica. All rights reserved. An AI
            project by Md Tahseen Alam.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialIcon
              href="https://github.com/tassu1/QuickPitch"
              label="GitHub"
            >
              <Github size={20} />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/md-tahseen-alam-892317263/"
              label="LinkedIn"
            >
              <Linkedin size={20} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
