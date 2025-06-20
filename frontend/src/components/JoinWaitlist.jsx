import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModalForm from "@/components/ModalForm";
import InvestorModalForm from "@/components/InvestorModalForm";
import EcosystemModalForm from "@/components/EcosystemModalForm";

const JoinWaitlist = () => {
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [investorModalOpen, setInvestorModalOpen] = useState(false);
  const [ecosystemModalOpen, setEcosystemModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Be among the first 500 founders & investors to shape this platform.
        </h2>
        <p className="text-xl mb-12 text-blue-100">
          Join our exclusive waitlist and get early access to the future of startup fundraising.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button
            size="lg"
            className="w-full max-w-xs bg-white text-blue-600 hover:bg-gray-100 py-3 text-lg font-semibold"
            onClick={() => setFounderModalOpen(true)}
          >
            Join as Founder
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-xs border-white text-blue-600 bg-white hover:bg-gray-100 py-3 text-lg font-semibold"
            onClick={() => setInvestorModalOpen(true)}
          >
            Join as Investor
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-xs border-white text-blue-600 bg-white hover:bg-gray-100 py-3 text-lg font-semibold"
            onClick={() => setEcosystemModalOpen(true)}
          >
            Join as Ecosystem Enabler
          </Button>
        </div>
        <p className="text-blue-200 text-sm mt-8">
          No spam, just updates on our progress and early access.
        </p>
      </div>
      <ModalForm open={founderModalOpen} onClose={() => setFounderModalOpen(false)} modalClassName="text-gray-900" />
      <InvestorModalForm open={investorModalOpen} onClose={() => setInvestorModalOpen(false)} modalClassName="text-gray-900" />
      <EcosystemModalForm open={ecosystemModalOpen} onClose={() => setEcosystemModalOpen(false)} modalClassName="text-gray-900" />
    </section>
  );
};

export default JoinWaitlist; 