"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 text-amber-900 p-6">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full">
            <svg
              className="w-12 h-12 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Heading */}

        {/* Message */}
        <p className="text-lg mb-8 text-amber-700">
          An unexpected error has occurred. Don&apos;t worry - it&apos;s not
          your fault. Try refreshing the page or returning to safety.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="border-2 border-amber-600 text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-all duration-300"
          >
            Go Home
          </button>
        </div>

        {/* Support Text */}
        <p className="mt-8 text-sm text-amber-600">
          If the problem persists, please contact our support team.
        </p>
      </div>
    </div>
  );
}
