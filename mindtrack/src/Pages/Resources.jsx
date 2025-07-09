import MentalHealthImage from "../assets/resources_img.png";
import MindsFoundation from"../assets/MindsFoundation.png";
import Sangath from "../assets/Sangath.png";
import liveJam from "../assets/liveJam.png";

export default function Resources() {
  return (
    <section className="min-h-screen  py-12 px-6 flex flex-col items-center">

      {/* Importance of Reaching Out Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mb-16">
        {/* Text */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">You Are Not Alone</h2>
          <p className="text-gray-700 text-lg mb-4">
            Mental health challenges can affect anyone at any stage of life. It's crucial to understand that reaching out for help is a sign of strength, not weakness. Early support can make a significant difference in managing symptoms and improving quality of life.
          </p>
          <p className="text-gray-600 text-sm">
            Whether it's talking to someone you trust, consulting a professional, or using resources like MindTrack, taking that first step can open the door to hope, healing, and recovery.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={MentalHealthImage}
            alt="Mental Health Support" 
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Helplines */}
      <h3 className="text-2xl font-bold text-blue-400 mb-6 ">Key Helplines in India</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-12 ">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="font-semibold text-blue-500 mb-2">iCall</h4>
          <p className="text-gray-600 text-sm">Helpline: +91 9152987821</p>
          <p className="text-gray-500 text-xs mt-1">Free & confidential mental health support</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="font-semibold text-blue-500 mb-2">AASRA</h4>
          <p className="text-gray-600 text-sm">Helpline: +91 9820466726</p>
          <p className="text-gray-500 text-xs mt-1">Suicide prevention & emotional support</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="font-semibold text-blue-500 mb-2">Vandrevala Foundation</h4>
          <p className="text-gray-600 text-sm">Helpline: 1860 266 2345 or 1800 233 3330</p>
          <p className="text-gray-500 text-xs mt-1">Mental wellness and crisis support</p>
        </div>
      </div>

      {/* Organizations */}
      <h3 className="text-2xl font-bold text-blue-400 mb-6">🌐 Organizations Offering Free or Low-Cost Support</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        
  
  {/* The MINDS Foundation */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
    <img 
      src={MindsFoundation} 
      alt="MINDS Foundation" 
      className="w-16 h-16 mb-4 rounded-full"
    />
    <h4 className="text-blue-700 font-semibold mb-2">The MINDS Foundation</h4>
    <p className="text-gray-600 text-sm mb-4">Working to eliminate stigma and provide mental health education and services across India.</p>
    <a href="https://www.mindsfoundation.org" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
      Visit
    </a>
  </div>

  {/* Sangath */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
    <img 
      src={Sangath}
      alt="Sangath" 
      className="w-16 h-16 mb-4 rounded-full object-contain"
    />
    <h4 className="text-blue-700 font-semibold mb-2">Sangath</h4>
    <p className="text-gray-600 text-sm mb-4">A non-profit committed to mental health research, services, and community support.</p>
    <a href="https://www.sangath.in" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
      Visit
    </a>
  </div>

  {/* LiveJam Foundation */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
    <img 
      src={liveJam}
      alt="LiveJam Foundation" 
      className="w-16 h-16 mb-4 rounded-full object-contain"
    />
    <h4 className="text-blue-700 font-semibold mb-2">LiveJam Foundation</h4>
    <p className="text-gray-600 text-sm mb-4">Youth-focused organization promoting mental well-being, positivity, and resilience through creative arts.</p>
    <a href="https://www.livejam.org" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
      Visit
    </a>
  </div>

  {/* Connecting NGO */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
    <img 
      src="https://connectingngo.org/wp-content/uploads/2020/08/connectinglogo.png" 
      alt="Connecting NGO" 
      className="w-16 h-16 mb-4 rounded-full object-contain"
    />
    <h4 className="text-blue-700 font-semibold mb-2">Connecting NGO</h4>
    <p className="text-gray-600 text-sm mb-4">Focused on suicide prevention and providing emotional support through listening services.</p>
    <a href="https://connectingngo.org" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
      Visit
    </a>
  </div>

  {/* Fortis Mental Health Program */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
    <img 
      src="https://www.fortishealthcare.com/themes/custom/fortis/assets/images/logo.svg" 
      alt="Fortis Mental Health" 
      className="w-16 h-16 mb-4 rounded-full object-contain"
    />
    <h4 className="text-blue-700 font-semibold mb-2">Fortis Mental Health</h4>
    <p className="text-gray-600 text-sm mb-4">Dedicated mental health program offering counseling, therapy, and psychiatric services across India.</p>
    <a href="https://www.fortishealthcare.com/mental-health" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
      Visit
    </a>
  </div>

</div>


      

    </section>
  );
}
