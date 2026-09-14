import React from 'react';
import { ExternalLink, Search, CalendarDays, Link2, Stethoscope } from 'lucide-react';
import { STATS_ITEMS } from '../data/content';

export const MarketData: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="size-6 text-[#174e45]" />;
      case 1:
        return <CalendarDays className="size-6 text-[#174e45]" />;
      case 2:
        return <Link2 className="size-6 text-[#174e45]" />;
      default:
        return <Stethoscope className="size-6 text-[#174e45]" />;
    }
  };

  return (
    <section id="why" className="border-y border-[#174e45]/10 bg-white/65 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
              市場數據
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-[-0.04em] text-[#102420] sm:text-5xl">
              患者已經上網找你。
              <br />
              <span className="text-[#174e45]">問題是他找到哪一版。</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#5a756f]">
              官網的價值不是「看起來專業」而已，而是把患者從搜尋、確認時間到完成掛號的路徑縮短，並讓正確資訊由醫師自己掌握。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {STATS_ITEMS.map((stat, idx) => (
              <article
                key={stat.title}
                className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 transition hover:shadow-sm sm:p-7"
              >
                {getIcon(idx)}
                <p className="mt-7 text-5xl font-black tracking-[-0.05em] text-[#174e45]">
                  {stat.value}
                </p>
                <p className="mt-3 font-black text-[#102420]">{stat.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#5a756f]">
                  {stat.description}
                </p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#174e45] hover:underline"
                >
                  <span>查看{stat.sourceText}</span>
                  <ExternalLink className="size-3" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs leading-6 text-[#5a756f]">
          資料說明：以上統計支持患者會在線上搜尋、評估與掛號，不代表架站後必然增加看診人次；實際成果仍取決於醫師知名度、搜尋曝光、院所掛號體驗與資訊維護品質。
        </p>
      </div>
    </section>
  );
};
