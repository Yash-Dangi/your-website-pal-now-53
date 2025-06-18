
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Introducing: The Smartest Way to Fundraise
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-rich startup profiles</h3>
                <p className="text-gray-600">Comprehensive analytics-driven profiles with metrics, team info, and market data to showcase your startup's potential.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-based matching</h3>
                <p className="text-gray-600">Smart algorithms that match founders with investors based on thesis alignment and success patterns.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Investor filtering by stage, sector, geography</h3>
                <p className="text-gray-600">Find the right investors who are actively looking for startups like yours.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Signal-based scoring</h3>
                <p className="text-gray-600">Data-driven evaluation of traction, team strength, and market opportunity.</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Match Dashboard</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sequoia Capital</span>
                        <span className="text-green-600 font-semibold">98% Match</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Early-stage B2B SaaS specialist</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Andreessen Horowitz</span>
                        <span className="text-blue-600 font-semibold">92% Match</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Consumer and enterprise tech</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">First Round</span>
                        <span className="text-yellow-600 font-semibold">87% Match</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Pre-seed to Series A focus</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
