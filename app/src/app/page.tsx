import Link from 'next/link';

export default function Home() {
  return (
    <html>
      <body>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Logo or Brand Name */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Welcome to Toboggan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover stories, insights, and ideas that inspire
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="pt-8">
          <Link
            href="/en/blog"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 ease-in-out"
          >
            Explore Our Blog
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </Link>
        </div>

        {/* Language Options */}
        <div className="pt-12 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>Available in:</span>
          <Link href="/en/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            English
          </Link>
          <span>•</span>
          <Link href="/fr/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Français
          </Link>
          <span>•</span>
          <Link href="/es/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Español
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </div>
      </body>
    </html>
  );
}