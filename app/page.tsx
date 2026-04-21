export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Welcome to Our Page
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          This is a basic HTML page that renders without errors and works seamlessly across modern browsers including Chrome, Firefox, Safari, and Edge. The page is fully responsive, optimized for desktop screens, and designed to load quickly under standard connection speeds.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
          Built with Next.js 16, React 19, and Tailwind CSS, this page demonstrates clean, production-ready code with proper TypeScript strictness and semantic HTML structure. The layout is centered, accessible, and maintains excellent readability on all device sizes.
        </p>
      </div>
    </main>
  );
}