import { Button } from "@/components/ui/button";

const JoinWaitlist = () => {
  const handleFormRedirect = () => {
    window.open("https://forms.gle/Toh1qPNhVgRhDCheA", "_blank");
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

        <Button
          size="lg"
          className="w-full max-w-md bg-white text-blue-600 hover:bg-gray-100 py-3 text-lg font-semibold"
          onClick={handleFormRedirect}
        >
          Join Waitlist
        </Button>

        <p className="text-blue-200 text-sm mt-8">
          No spam, just updates on our progress and early access.
        </p>
      </div>
    </section>
  );
};

export default JoinWaitlist; 