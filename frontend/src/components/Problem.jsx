const Problem = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Founders are fed up of asking for Intros and Investors are becoming exclusive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why waste so much time in fundraising instead of spending time making your business better?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🧊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Getting warm introductions is nearly impossible
            </h3>
            <p className="text-gray-600">
              Breaking into investor networks requires connections most founders don't have. Cold outreach feels futile when everyone wants a warm intro.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🧭</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              No visibility into investor intent
            </h3>
            <p className="text-gray-600">
              Founders can't see what investors are actually looking for or when they're actively investing.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">⏳</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Time-consuming, bias-prone, inefficient
            </h3>
            <p className="text-gray-600">
              The process relies on networks and luck instead of data-driven matching and merit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem; 