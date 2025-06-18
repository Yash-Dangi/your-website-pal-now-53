const CompetitiveAdvantage = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Not another startup directory.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart matching</h3>
              <p className="text-gray-600 text-sm">AI-powered compatibility scoring</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-red-600 text-xl font-bold">✗</span>
                </div>
                <p className="text-gray-500 text-sm">Static lists</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Founder-first UX</h3>
              <p className="text-gray-600 text-sm">Built for entrepreneurs by entrepreneurs</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-red-600 text-xl font-bold">✗</span>
                </div>
                <p className="text-gray-500 text-sm">Investor-centric bias</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time signals</h3>
              <p className="text-gray-600 text-sm">Live data on traction and market fit</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-red-600 text-xl font-bold">✗</span>
                </div>
                <p className="text-gray-500 text-sm">Resume filters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage; 