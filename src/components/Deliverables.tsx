import React from 'react';
import { Search, Sparkles, Link2, RefreshCw, CircleCheck } from 'lucide-react';
import { DELIVERABLE_ITEMS } from '../data/content';

export const Deliverables: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="size-5" />;
      case 1:
        return <Sparkles className="size-5" />;
      case 2:
        return <Link2 className="size-5" />;
      default:
        return <RefreshCw className="size-5" />;
    }
  };

  return (
    <section id="service" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
          交付內容
        </p>
        <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[#102420] sm:text-5xl">
          不是另一個醫師形象官網
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5a756f]">
          我們先解決患者最急的三個問題：你何時看診、在哪裡看、怎麼掛號。再把這個入口變成可長期累積的醫師數位資產。
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {DELIVERABLE_ITEMS.map((item, idx) => (
          <article
            key={item.number}
            className="rounded-3xl border border-[#174e45]/10 bg-white p-6 shadow-xs transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#d6eae2] text-[#174e45]">
                {getIcon(idx)}
              </span>
              <span className="text-xs font-black text-[#174e45]/30">{item.number}</span>
            </div>
            <h3 className="mt-10 text-lg font-black text-[#102420]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#5a756f]">{item.description}</p>
          </article>
        ))}
      </div>

      {/* Banner: 你擁有的，不只是頁面 */}
      <div className="mt-8 rounded-[30px] bg-[#174e45] p-7 text-[#f8fbf9] sm:p-10 shadow-lg shadow-[#174e45]/10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6eae2]">
              你擁有的，不只是頁面
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
              網址跟著醫師走，院所更換也不必從零開始
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-white">
              <CircleCheck className="size-4 shrink-0 text-[#d6eae2]" />
              醫師專屬網域與內容資產
            </span>
            <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-white">
              <CircleCheck className="size-4 shrink-0 text-[#d6eae2]" />
              由你核准的門診版本
            </span>
            <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-white">
              <CircleCheck className="size-4 shrink-0 text-[#d6eae2]" />
              院所官方掛號導流
            </span>
            <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-white">
              <CircleCheck className="size-4 shrink-0 text-[#d6eae2]" />
              可量化的點擊成效
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
