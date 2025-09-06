import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber p-6">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full">
            <svg
              className="w-12 h-12 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-8xl font-bold text-gray-700 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          Oops! The page you&apos;re looking for seems to have wandered off. Maybe it&apos;s out crafting the perfect pitch elsewhere.
        </p>

        <Link
          href="/"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
        >
          Return to Home
        </Link>

        <p className="mt-6 text-sm text-gray-500">
          Or{" "}
          <Link
            href="/generate"
            className="text-gray-700 underline hover:text-gray-800"
          >
            create a new pitch
          </Link>
        </p>
      </div>
    </div>
  );
}
