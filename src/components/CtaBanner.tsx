import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-[#174e45] py-20 text-[#f8fbf9] sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8 lg:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#d6eae2]">
          <Sparkles className="size-3.5" />
          <span>醫師個人專屬品牌入口</span>
        </div>
        <h2 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          讓患者只記得一個連結
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f8fbf9]/75 sm:text-lg">
          不再需要每次換診所就重新發文、重新截圖、重新請患者私訊。一個由醫師本人確認的官方入口，讓搜尋結果只指向最新版本。
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#order"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#d6eae2] px-8 text-base font-black text-[#143831] shadow-lg transition hover:bg-white active:translate-y-px"
          >
            <span>取得建置建議</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
