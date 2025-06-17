
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/lovable-uploads/7f6532e4-be5b-48fb-b4d6-3ee8bddbe2df.png" alt="Pitchpair" className="h-8" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#founders" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                For Founders
              </a>
              <a href="#investors" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                For Investors
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
              <a href="#team" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Team
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
