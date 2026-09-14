import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CASE_CLINICS } from '../data/content';

export const CaseStudy: React.FC = () => {
  return (
    <section id="case" className="border-y border-[#174e45]/10 bg-[#173b39] py-20 text-[#f8fbf9] sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
        {/* Left Column: Context & Screenshot */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6eae2]">
            真實搜尋案例
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl text-white">
            搜尋「李若琦醫師」，患者先得到一份需要自己查證的拼圖
          </h2>
          <p className="mt-6 text-base leading-8 text-[#f8fbf9]/75">
            使用者提供的 Google 畫面同時出現不同院所、不同專業情境與社群內容。即使資料都真實，患者仍要判斷是不是同一位醫師、目前在哪裡看診，以及哪個入口能完成預約。
          </p>

          {/* Screenshot Figure */}
          <figure className="mt-8 overflow-hidden rounded-[26px] border border-white/12 bg-black/20 p-2 shadow-2xl">
            <img
              src="/li-ruoqi-google-search.png"
              alt="Google 搜尋李若琦醫師時出現多個不同來源的結果"
              width={1624}
              height={921}
              className="h-auto w-full rounded-[20px] object-cover"
              loading="lazy"
            />
            <figcaption className="px-3 py-3 text-xs leading-5 text-[#f8fbf9]/60">
              案例截圖由提案者提供，擷取日期為 2026 年 9 月。畫面用於說明資訊分散，不代表醫師或院所為 WheresDoc 客戶。
            </figcaption>
          </figure>
        </div>

        {/* Right Column: 3 Clinic Cards & WheresDoc Approach */}
        <div className="space-y-4">
          {CASE_CLINICS.map((clinic) => (
            <article
              key={clinic.id}
              className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur-sm transition hover:bg-white/[0.11]"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#d6eae2] font-black text-[#174e45]">
                  {clinic.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-black text-white">{clinic.name}</h3>
                  <p className="mt-1 text-sm text-[#f8fbf9]/60">{clinic.district}</p>
                  <a
                    href={clinic.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#d6eae2] hover:underline"
                  >
                    <span>{clinic.linkText}</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Solution callout */}
          <div className="rounded-3xl bg-[#d6eae2] p-6 text-[#143831] shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#174e45]">
              WheresDoc 的做法
            </p>
            <p className="mt-2.5 text-xl font-black text-[#102420]">
              不複製搜尋結果，而是建立由醫師核准、標示更新時間的唯一版本。
            </p>
            <p className="mt-2 text-sm leading-6 text-[#143831]/80">
              門診時段容易異動；正式頁面必須取得醫師或院所確認後才公開。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
