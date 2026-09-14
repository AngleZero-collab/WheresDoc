import React from 'react';

export const BusinessModel: React.FC = () => {
  return (
    <section id="business" className="border-b border-[#174e45]/10 bg-white/70 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
              商業模式
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[#102420] sm:text-5xl">
              先賣可驗證的服務，再把流程產品化
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5a756f]">
              第一階段以高服務密度取得真實需求與更新資料；當共同欄位、異動模式與成交條件穩定後，再發展醫師自助維護與診所集團方案。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 shadow-xs">
              <h3 className="text-lg font-black text-[#174e45]">核心客群</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a756f]">
                同時在 2 間以上院所看診、已有搜尋量或社群聲量，且願意指定維護窗口的醫師。
              </p>
            </article>

            <article className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 shadow-xs">
              <h3 className="text-lg font-black text-[#174e45]">價值主張</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a756f]">
                一個可被分享、搜尋與長期持有的官方入口；降低患者核對門診與掛號路徑的成本。
              </p>
            </article>

            <article className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 shadow-xs">
              <h3 className="text-lg font-black text-[#174e45]">收入來源</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a756f]">
                一次性建置費、月維護費；團隊版另收資料移轉、權限流程與客製整合費。
              </p>
            </article>

            <article className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 shadow-xs">
              <h3 className="text-lg font-black text-[#174e45]">獲客通路</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a756f]">
                醫師轉介紹、診所集團合作、專科學會與搜尋結果免費盤點；不以病患資料換取收入。
              </p>
            </article>

            <article className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 shadow-xs">
              <h3 className="text-lg font-black text-[#174e45]">主要成本</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a756f]">
                資料盤點與核准、人工作業、網站主機、安全維護、客戶成功與合規審查。
              </p>
            </article>

            <article className="rounded-3xl border border-[#174e45]/10 bg-[#f6f8f6] p-6 shadow-xs">
              <h3 className="text-lg font-black text-[#174e45]">護城河假設</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a756f]">
                長期累積的醫師核准資料、跨院所異動流程與導流基準；須以續約率驗證，而非先假設成立。
              </p>
            </article>
          </div>
        </div>

        {/* Revenue Scenario */}
        <div className="mt-12 rounded-[30px] bg-[#173b39] p-7 text-[#f8fbf9] sm:p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6eae2]">
                專業版收入情境
              </p>
              <p className="mt-3 text-4xl font-black text-white">
                20 位醫師＝首年 NT$1,951,200
              </p>
              <p className="mt-3 text-sm leading-6 text-[#f8fbf9]/65">
                試算：每位建置費 49,800 元，加上 12 個月維護費 3,980 元。未計稅、折扣、流失與服務成本，因此是情境分析，不是營收預測。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/[0.08] p-4 text-center">
                <p className="text-2xl font-black text-[#d6eae2]">97,560</p>
                <p className="mt-2 text-xs text-[#f8fbf9]/55">每位首年收入</p>
              </div>
              <div className="rounded-2xl bg-white/[0.08] p-4 text-center">
                <p className="text-2xl font-black text-[#d6eae2]">79,600</p>
                <p className="mt-2 text-xs text-[#f8fbf9]/55">20 位月 recurring</p>
              </div>
              <div className="rounded-2xl bg-white/[0.08] p-4 text-center">
                <p className="text-2xl font-black text-[#d6eae2]">5→3</p>
                <p className="mt-2 text-xs text-[#f8fbf9]/55">試點付費續約門檻</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Validation Steps */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-[#174e45]/10 bg-white p-6 shadow-xs">
            <p className="text-xs font-black text-[#174e45]/40">01</p>
            <h3 className="mt-5 text-xl font-black text-[#102420]">30 天先訪談</h3>
            <p className="mt-3 text-sm leading-6 text-[#5a756f]">
              訪談 15 位目標醫師，確認資訊分散是否真的造成櫃檯詢問、患者抱怨或機會流失。
            </p>
          </article>

          <article className="rounded-3xl border border-[#174e45]/10 bg-white p-6 shadow-xs">
            <p className="text-xs font-black text-[#174e45]/40">02</p>
            <h3 className="mt-5 text-xl font-black text-[#102420]">5 位付費試點</h3>
            <p className="mt-3 text-sm leading-6 text-[#5a756f]">
              以實際付款驗證需求強度，量測更新工時、頁面瀏覽、掛號點擊與錯誤回報。
            </p>
          </article>

          <article className="rounded-3xl border border-[#174e45]/10 bg-white p-6 shadow-xs">
            <p className="text-xs font-black text-[#174e45]/40">03</p>
            <h3 className="mt-5 text-xl font-black text-[#102420]">3 位願意續約</h3>
            <p className="mt-3 text-sm leading-6 text-[#5a756f]">
              若至少 3 位升級正式方案，再投入自助後台；不足則調整客群或停止客製開發。
            </p>
          </article>
        </div>

        {/* Economic Conditions */}
        <div className="mt-8 rounded-[28px] border border-[#174e45]/10 bg-[#f6f8f6] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#174e45]">
                經濟成立條件
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#102420]">
                收入成長之前，先守住服務效率
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#5a756f]">
              以下是管理門檻假設，須用真實成交、工時與續約資料校正。
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-4 shadow-xs">
              <p className="text-xs font-bold text-[#5a756f]">試點轉正式</p>
              <p className="mt-2 text-2xl font-black text-[#174e45]">≥ 60%</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">
                確認需求不是只想看免費示範
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-xs">
              <p className="text-xs font-bold text-[#5a756f]">十二月續約率</p>
              <p className="mt-2 text-2xl font-black text-[#174e45]">≥ 70%</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">
                確認資訊維護具持續價值
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-xs">
              <p className="text-xs font-bold text-[#5a756f]">單位毛利率</p>
              <p className="mt-2 text-2xl font-black text-[#174e45]">≥ 60%</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">
                收入扣除直接維護成本
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-xs">
              <p className="text-xs font-bold text-[#5a756f]">獲客回收期</p>
              <p className="mt-2 text-2xl font-black text-[#174e45]">≤ 6 個月</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">
                獲客成本除以月貢獻毛利
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
