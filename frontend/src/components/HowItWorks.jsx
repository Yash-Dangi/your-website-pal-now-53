import { Button } from "@/components/ui/button";
import { useState } from "react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("founders");

  const founderSteps = [
    {
      step: 1,
      title: "Create your profile",
      description: "Upload your deck, add key metrics, and tell your story",
      icon: "📝"
    },
    {
      step: 2,
      title: "Get matched with aligned investors",
      description: "Our AI finds investors actively looking for startups like yours",
      icon: "🤝"
    },
    {
      step: 3,
      title: "Track intros & interest",
      description: "Monitor engagement and manage your fundraising pipeline",
      icon: "📈"
    }
  ];

  const investorSteps = [
    {
      step: 1,
      title: "Define your thesis",
      description: "Set your investment criteria, sectors, and stage preferences",
      icon: "🎯"
    },
    {
      step: 2,
      title: "Discover quality startups",
      description: "Get matched with startups that fit your investment thesis",
      icon: "🔍"
    },
    {
      step: 3,
      title: "Connect & invest",
      description: "Streamline your deal flow with qualified opportunities",
      icon: "💰"
    }
  ];

  const currentSteps = activeTab === "founders" ? founderSteps : investorSteps;

  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <Button
                variant={activeTab === "founders" ? "default" : "ghost"}
                onClick={() => setActiveTab("founders")}
                className={activeTab === "founders" ? "bg-blue-600 text-white" : ""}
              >
                For Founders
              </Button>
              <Button
                variant={activeTab === "investors" ? "default" : "ghost"}
                onClick={() => setActiveTab("investors")}
                className={activeTab === "investors" ? "bg-blue-600 text-white" : ""}
              >
                For Investors
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 