import { useState } from "react";

export default function Test() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    fatigue: "",
    slowing: "",
    pain: "",
    hygiene: "",
    movement: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Replace with your AI model call (API/fetch)
    const mockPrediction = Math.random();
    const proneness =
      mockPrediction > 0.7
        ? "High Proneness"
        : mockPrediction > 0.4
        ? "Elevated Proneness"
        : "Moderate Proneness";

    setResult(proneness);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Schizophrenia Risk Predictor</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-4 max-w-xl w-full">

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Age */}
        <div>
          <label className="block font-semibold mb-1">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-1">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-3 border rounded-lg">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Marital Status */}
        <div>
          <label className="block font-semibold mb-1">Marital Status</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required className="w-full p-3 border rounded-lg">
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        {/* Fatigue */}
        <div>
          <label className="block font-semibold mb-1">Fatigue (0 to 1)</label>
          <input type="number" step="0.01" name="fatigue" value={formData.fatigue} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Slowing */}
        <div>
          <label className="block font-semibold mb-1">Slowing (0 to 1)</label>
          <input type="number" step="0.01" name="slowing" value={formData.slowing} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Pain */}
        <div>
          <label className="block font-semibold mb-1">Pain (0 to 1)</label>
          <input type="number" step="0.01" name="pain" value={formData.pain} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Hygiene */}
        <div>
          <label className="block font-semibold mb-1">Hygiene (0 to 1)</label>
          <input type="number" step="0.01" name="hygiene" value={formData.hygiene} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Movement */}
        <div>
          <label className="block font-semibold mb-1">Movement (0 to 1)</label>
          <input type="number" step="0.01" name="movement" value={formData.movement} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        </div>

        {/* Submit */}
        <button type="submit" className="bg-blue-400 text-white w-full py-3 rounded-full ">Predict Risk</button>
      </form>

      {/* Prediction Result */}
      {result && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow text-lg font-semibold text-blue-700 max-w-xl w-full text-center">
          {formData.name}, your predicted proneness is: <span className="text-blue-400">{result}</span>
        </div>
      )}
    </div>
  );
}
