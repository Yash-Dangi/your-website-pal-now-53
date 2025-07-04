import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ECOSYSTEM_ROLES = [
  "Mentor/Advisor",
  "Incubator/Accelerator",
  "Ecosystem Enabler (e.g., community builder, media, etc.)",
  "Investment Banker",
  "Aspiring Founder",
  "Other"
];

export default function EcosystemModalForm({ open, onClose, modalClassName = "" }) {
  const [form, setForm] = useState({
    ecoName: "",
    email: "",
    phone: "",
    ecosystemRoles: [],
    ecosystemOther: "",
    updates: "Yes",
    ecosystemAnything: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "ecosystemRoles") {
        setForm((prev) => ({
          ...prev,
          ecosystemRoles: checked
            ? [...prev.ecosystemRoles, value]
            : prev.ecosystemRoles.filter((v) => v !== value)
        }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    if (!form.ecoName || !form.email) {
      setError("Name and Email are required.");
      setLoading(false);
      return;
    }
    try {
      const payload = {
        type: "ecosystem",
        ecoName: form.ecoName,
        email: form.email,
        phone: form.phone,
        ecosystemRoles: form.ecosystemRoles,
        ecosystemOther: form.ecosystemOther,
        updates: form.updates,
        ecosystemAnything: form.ecosystemAnything
      };
      await axios.post("https://your-website-pal-now-53.onrender.com/api/submit", payload);
      setSuccess(true);
      setForm({
        ecoName: "",
        email: "",
        phone: "",
        ecosystemRoles: [],
        ecosystemOther: "",
        updates: "Yes",
        ecosystemAnything: ""
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
        ref={modalRef}
        className={`bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative animate-fade-in overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50 text-gray-900 ${modalClassName}`}
        style={{ scrollbarColor: '#93c5fd #f0f9ff', scrollbarWidth: 'thin' }}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Ecosystem Enabler Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="ecoName"
              value={form.ecoName}
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
            <label className="block font-medium mb-1">How are you involved in the startup ecosystem?</label>
            <div className="flex flex-wrap gap-4">
              {ECOSYSTEM_ROLES.map((role) => (
                <label key={role} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="ecosystemRoles"
                    value={role}
                    checked={form.ecosystemRoles.includes(role)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {role}
                </label>
              ))}
            </div>
            {form.ecosystemRoles.includes("Other") && (
              <input
                type="text"
                name="ecosystemOther"
                value={form.ecosystemOther}
                onChange={handleChange}
                placeholder="Please specify"
                className="w-full border rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Would you like to receive updates, opportunities, or collaborate with us in the future?</label>
            <div className="flex gap-4">
              {['Yes', 'No'].map((val) => (
                <label key={val} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="updates"
                    value={val}
                    checked={form.updates === val}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Anything you'd like to share or ask us?</label>
            <textarea
              name="ecosystemAnything"
              value={form.ecosystemAnything}
              onChange={handleChange}
              rows={2}
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