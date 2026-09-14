import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
          常見問題
        </p>
        <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[#102420] sm:text-5xl">
          合作前，醫師通常想知道這些事
        </h2>
      </div>

      <div className="mt-12 space-y-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-[#174e45]/10 bg-white transition"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left transition hover:bg-[#f6f8f6]"
                aria-expanded={isOpen}
              >
                <span className="text-base font-black text-[#102420] sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-[#174e45] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-[#174e45]/5 px-5 pb-5 pt-3 text-sm leading-7 text-[#5a756f]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
