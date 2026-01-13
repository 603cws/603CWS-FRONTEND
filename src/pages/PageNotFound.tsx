function PageNotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#cfe9fb]/60 to-[#fff9d1]/70 flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-lg">
        {/* Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#f1c40f"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0 3.75h.007v.008H12v-.008zM21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 leading-relaxed mb-6">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry, our workspace hasn’t gone anywhere — let’s get you back
          on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/"
            className="px-5 py-2 rounded-md bg-[#f6c915] font-medium text-gray-900 hover:brightness-110 transition"
          >
            Go to Homepage
          </a>
          <a
            href="/contactus"
            className="px-5 py-2 rounded-md border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Contact Support
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-6">Error Code: 404</p>
      </div>
    </div>
  );
}

export default PageNotFound;
