import React from 'react';
import { Search, FileCheck, Sparkles, Rocket } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';

export const Workflow: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="size-6 text-[#d6eae2]" />;
      case 1:
        return <FileCheck className="size-6 text-[#d6eae2]" />;
      case 2:
        return <Sparkles className="size-6 text-[#d6eae2]" />;
      default:
        return <Rocket className="size-6 text-[#d6eae2]" />;
    }
  };

  return (
    <section className="bg-[#174e45] py-20 text-[#f8fbf9] sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6eae2]">
              建置流程
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl text-white">
              從資料混亂到正式上線，每一步都由你確認
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#f8fbf9]/70">
              我們不會自行改寫醫療內容。門診、專科、院所名稱與連結都先完成盤點，再交由醫師或指定窗口核准。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {WORKFLOW_STEPS.map((step, idx) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur-xs transition hover:bg-white/[0.11]"
              >
                <div className="flex items-center justify-between">
                  {getIcon(idx)}
                  <span className="text-xs font-bold text-[#f8fbf9]/45">{step.day}</span>
                </div>
                <h3 className="mt-8 text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#f8fbf9]/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
