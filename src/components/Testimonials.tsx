
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Early believers love what we're building.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-4xl text-blue-600">"</span>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                As a founder, this would save me 100+ hours. The current process of finding the right investors is like looking for a needle in a haystack.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Anonymous Founder</p>
                  <p className="text-sm text-gray-600">YC-backed startup</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-4xl text-blue-600">"</span>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Matching thesis to traction is a dream for micro-VCs. We spend so much time sifting through irrelevant pitches.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Anonymous Investor</p>
                  <p className="text-sm text-gray-600">Angel Investor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700 font-medium">Already 73 founders and 21 investors signed up.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
