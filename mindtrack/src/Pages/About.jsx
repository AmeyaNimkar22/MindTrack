export default function About() {
  return (
    <section className="min-h-screen  py-12 px-6 flex flex-col items-center text-center">

      <h2 className="text-4xl font-bold mb-4 text-blue-800">Understanding Schizophrenia</h2>

      <p className="text-gray-700 max-w-3xl mb-6 text-lg">
        Schizophrenia is a chronic brain disorder that affects how a person thinks, feels, and behaves. Contrary to popular myths, it is not the same as having a "split personality." With proper treatment and support, many people with schizophrenia can lead meaningful lives.
      </p>

      {/* Key Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mb-12">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-blue-700 mb-2">👥 Global Impact</h3>
          <p className="text-gray-600 text-sm">Affects over 24 million people worldwide—1 in every 300 people.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-blue-700 mb-2">🕊 Early Help Works</h3>
          <p className="text-gray-600 text-sm">Early intervention improves long-term outcomes significantly.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-blue-700 mb-2">💡 Common Onset Age</h3>
          <p className="text-gray-600 text-sm">Usually diagnosed between ages 16-30, though it can vary.</p>
        </div>
      </div>

      {/* Symptoms Section */}
      <h3 className="text-2xl font-bold text-blue-700 mb-4">🔍 Recognizing Symptoms</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mb-10">
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-4xl mb-2">🗣️</p>
          <p className="font-semibold text-gray-700">Hallucinations</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-4xl mb-2">🤯</p>
          <p className="font-semibold text-gray-700">Delusions</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-4xl mb-2">💭</p>
          <p className="font-semibold text-gray-700">Disorganized Speech</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-4xl mb-2">😶</p>
          <p className="font-semibold text-gray-700">Flat Affect</p>
        </div>
      </div>

     
      <div className="max-w-4xl mb-10">
  

  
  <div className="max-w-4xl mb-10">
  <h3 className="text-xl font-semibold text-blue-700 mb-4">Learn More About Schizophrenia:</h3>

  <a href="https://www.youtube.com/watch?v=QIYW9JjZ-Os" target="_blank" rel="noopener noreferrer" className="inline-block text-center">
    <img 
      src="https://img.youtube.com/vi/QIYW9JjZ-Os/maxresdefault.jpg" 
      alt="Watch on YouTube" 
      className="rounded-lg shadow-lg mb-4 w-full max-w-md mx-auto" 
    />
    <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
      Watch on YouTube
    </button>
  </a>

  <p className="text-sm text-gray-600 mt-2">
    Video Credit: <span className="font-semibold">Dr. Tracey Marks</span> — Psychiatrist and Mental Health Educator
  </p>
</div>

</div>


      {/* Top Mental Health Centers in Pune */}
      <div className="max-w-5xl text-left mb-12">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Mental Health Centers in Pune</h3>
        <ul className="list-disc text-gray-700 pl-6 space-y-2">
          <li><strong>Chaitanya Institute for Mental Health</strong> – Known for compassionate care and recovery-oriented programs.</li>
          <li><strong>KEM Hospital Pune</strong> – Offers psychiatric services including schizophrenia management.</li>
          <li><strong>Sahyadri Hospital</strong> – Comprehensive mental health care with access to specialists.</li>
          <li><strong>Deenanath Mangeshkar Hospital</strong> – Psychiatry and behavioral science division with skilled professionals.</li>
          <li><strong>Ruby Hall Clinic</strong> – Provides psychological assessment, therapy, and medication management.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <p className="text-lg text-gray-600 max-w-3xl mb-6">
        MindTrack helps you take the first step by offering a simple and private check-in tool to track symptoms and seek help when needed.
      </p>
      <a href="/test" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
        Take a Quick Mental Health Check
      </a>

    </section>
  );
}
