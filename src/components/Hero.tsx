
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const handleFormRedirect = () => {
    window.open("https://forms.gle/Toh1qPNhVgRhDCheA", "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Where Founders Meet Their
            <span className="text-blue-600"> Perfect Investors</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            AI-powered matchmaking for startup fundraising.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Tired of cold emails and pitch fatigue? Let data do the matching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" onClick={handleFormRedirect}>
              Join as Founder
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3" onClick={handleFormRedirect}>
              Join as Investor
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <Card className="w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Sarah Chen</h3>
                <p className="text-sm text-gray-600 mb-3">FinTech Startup Founder</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-700">Seeking: Seed Round $2M</p>
                  <p className="text-xs text-gray-700">Stage: MVP + Traction</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
          </div>

          <Card className="w-full max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Apex Ventures</h3>
                <p className="text-sm text-gray-600 mb-3">Early-stage VC Fund</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-700">Focus: FinTech, B2B SaaS</p>
                  <p className="text-xs text-gray-700">Check Size: $1-5M</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
