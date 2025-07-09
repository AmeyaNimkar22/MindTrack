export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 ">
      <div className="bg-gradient-to-r from-blue-100 via-blue-100 to-blue-200 p-8 rounded-3xl shadow-lg transition-all">
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
