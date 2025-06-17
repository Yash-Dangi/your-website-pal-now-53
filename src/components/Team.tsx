
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built by Founders Who've Lived This
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Abhishek Tiwari</h3>
              <p className="text-gray-600 mb-4">
                IIT Roorkee, ex-Redseer, Turno. Community-led builder, founder of Vrindaa.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarveshwar Pandey</h3>
              <p className="text-gray-600 mb-4">
                Tech founder, ex-Demyst. AI/Infra specialist with deep expertise in machine learning systems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
