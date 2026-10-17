import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F2EEE5]/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Questions & Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Essential facts about the QR Loyalty architecture, counter operations, and introductory trial.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E6E4DC] overflow-hidden transition-all duration-200 shadow-xs hover:border-[#91A894]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29483D]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F3] text-[#747B73] border border-[#E6E4DC] shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#29332E]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#747B73] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#29483D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#747B73] leading-relaxed border-t border-[#F2EEE5] animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further questions footer note */}
        <div className="mt-10 text-center text-xs text-[#747B73]">
          <span>Have a specific architectural or merchant deployment question? </span>
          <a
            href="mailto:zenithforgehub@gmail.com"
            className="text-[#29483D] font-bold underline hover:text-[#C6A875] transition-colors"
          >
            Email zenithforgehub@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
