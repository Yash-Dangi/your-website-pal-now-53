const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <img src="/lovable-uploads/7f6532e4-be5b-48fb-b4d6-3ee8bddbe2df.png" alt="Pitchpair" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered matchmaking platform connecting startups with their perfect investors.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/abhishek-tiwari-420bb7205/" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn - Abhishek
              </a>
              <a href="https://www.linkedin.com/in/sarveshwar-pandey-9010871b8/" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn - Sarveshwar
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pitchpair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 