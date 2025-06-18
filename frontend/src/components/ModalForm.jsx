import React, { useState } from "react";
import axios from "axios";

const STAGES = [
  "Paper Idea",
  "MVP",
  "Early Revenue",
  "Scaling"
];
const INVESTOR_TYPES = [
  "Angel",
  "Micro VC",
  "Institutional VC",
  "Strategic Investor",
  "Not Yet Sure"
];

export default function ModalForm({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    startupName: "",
    website: "",
    stage: STAGES[0],
    sectors: "",
    investorTypes: [],
    challenge: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        investorTypes: checked
          ? [...prev.investorTypes, value]
          : prev.investorTypes.filter((v) => v !== value)
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e) => {
    setForm((prev) => ({ ...prev, stage: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    if (!form.email) {
      setError("Email is required.");
      setLoading(false);
      return;
    }
    try {
      // Map frontend fields to backend contract
      const payload = {
        type: "founder",
        name: form.name,
        email: form.email,
        phone: form.phone,
        startupName: form.startupName,
        website: form.website,
        stage: form.stage,
        sectors: form.sectors,
        investorTypes: form.investorTypes,
        challenge: form.challenge,
      };
      await axios.post("http://localhost:4000/api/submit", payload);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        startupName: "",
        website: "",
        stage: STAGES[0],
        sectors: "",
        investorTypes: [],
        challenge: ""
      });
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1200);
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 py-8">
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative animate-fade-in overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50"
        style={{ scrollbarColor: '#93c5fd #f0f9ff', scrollbarWidth: 'thin' }}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Join Waitlist</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Startup Name</label>
            <input
              type="text"
              name="startupName"
              value={form.startupName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Website/deck link</label>
            <input
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">What stage your startup is in?</label>
            <div className="flex flex-wrap gap-4">
              {STAGES.map((stage) => (
                <label key={stage} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="stage"
                    value={stage}
                    checked={form.stage === stage}
                    onChange={handleRadioChange}
                    className="accent-blue-600"
                  />
                  {stage}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Sectors / Markets you're building in</label>
            <input
              type="text"
              name="sectors"
              value={form.sectors}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">What kind of investors are you looking for?</label>
            <div className="flex flex-wrap gap-4">
              {INVESTOR_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="investorTypes"
                    value={type}
                    checked={form.investorTypes.includes(type)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">What's the biggest challenge you face in fundraising?</label>
            <textarea
              name="challenge"
              value={form.challenge}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <div className="text-red-600 text-center mt-2">{error}</div>}
          {success && <div className="text-green-600 text-center mt-2">Submitted successfully!</div>}
        </form>
      </div>
    </div>
  );
} 