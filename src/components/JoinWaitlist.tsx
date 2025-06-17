
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const JoinWaitlist = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email, "Role:", role);
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Be among the first 500 founders & investors to shape this platform.
        </h2>
        <p className="text-xl mb-12 text-blue-100">
          Join our exclusive waitlist and get early access to the future of startup fundraising.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <Label htmlFor="email" className="sr-only">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-900"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setRole("founder")}
              className={`flex-1 py-3 px-4 rounded-md border-2 transition-colors ${
                role === "founder"
                  ? "border-white bg-white text-blue-600"
                  : "border-white text-white hover:bg-white hover:text-blue-600"
              }`}
            >
              👤 Founder
            </button>
            <button
              type="button"
              onClick={() => setRole("investor")}
              className={`flex-1 py-3 px-4 rounded-md border-2 transition-colors ${
                role === "investor"
                  ? "border-white bg-white text-blue-600"
                  : "border-white text-white hover:bg-white hover:text-blue-600"
              }`}
            >
              💼 Investor
            </button>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 text-lg font-semibold"
            disabled={!email || !role}
          >
            Join Waitlist
          </Button>
        </form>

        <p className="text-blue-200 text-sm mt-8">
          No spam, just updates on our progress and early access.
        </p>
      </div>
    </section>
  );
};

export default JoinWaitlist;
