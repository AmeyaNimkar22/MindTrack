export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden ">

      {/* 🌐 Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-gradient-to-r from-blue-300 to-purple-400 opacity-30 rounded-full w-72 h-72 top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute bg-gradient-to-r from-pink-300 to-blue-300 opacity-30 rounded-full w-96 h-96 top-40 right-20 animate-pulse-slower"></div>
        <div className="absolute bg-gradient-to-r from-yellow-200 to-pink-400 opacity-30 rounded-full w-64 h-64 bottom-20 left-1/4 animate-pulse-slow"></div>
      </div>

      {/* 🔷 Main Hero Content */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-100 to-blue-200 p-8 rounded-3xl shadow-lg z-10 relative">
        <h1 className="text-5xl font-bold text-black mb-4">Welcome to MindTrack</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Understanding schizophrenia—because awareness is the first step toward support.
        </p>
        <a href="/test" className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors">
          Check In
        </a>
      </div>
    </section>
  );
}
