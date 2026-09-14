import React from 'react';
import { Gauge, CircleCheck } from 'lucide-react';

export const MonthlyReport: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        {/* Left: Report Card Demo */}
        <div className="rounded-[30px] border border-[#174e45]/10 bg-white p-6 shadow-[0_26px_80px_-48px_rgba(20,65,61,0.5)] sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#174e45]">
                每月成效摘要
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#102420]">
                患者如何找到你的門診
              </h3>
            </div>
            <Gauge className="size-7 text-[#174e45]" />
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#d6eae2]/45 p-4 text-center">
              <p className="text-2xl font-black text-[#174e45]">1,284</p>
              <p className="mt-1 text-xs text-[#5a756f]">頁面瀏覽</p>
            </div>
            <div className="rounded-2xl bg-[#d6eae2]/45 p-4 text-center">
              <p className="text-2xl font-black text-[#174e45]">462</p>
              <p className="mt-1 text-xs text-[#5a756f]">掛號點擊</p>
            </div>
            <div className="rounded-2xl bg-[#d6eae2]/45 p-4 text-center">
              <p className="text-2xl font-black text-[#174e45]">36%</p>
              <p className="mt-1 text-xs text-[#5a756f]">點擊率</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-[#102420]">安和骨科診所</span>
                <span className="text-[#5a756f]">68%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e7efe9]">
                <div className="h-full rounded-full bg-[#174e45] transition-all duration-1000" style={{ width: '68%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-[#102420]">城東聯合醫院</span>
                <span className="text-[#5a756f]">21%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e7efe9]">
                <div className="h-full rounded-full bg-[#174e45] transition-all duration-1000" style={{ width: '21%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-[#102420]">新衡運動醫學中心</span>
                <span className="text-[#5a756f]">11%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e7efe9]">
                <div className="h-full rounded-full bg-[#174e45] transition-all duration-1000" style={{ width: '11%' }} />
              </div>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-[#5a756f]">
            以上為報告介面示範數據，不代表任何客戶實際成效。
          </p>
        </div>

        {/* Right: Explanation */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
            不只上線，還要能回答成效
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[#102420] sm:text-5xl">
            知道患者看了什麼，才能決定下一步
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5a756f]">
            每月報告會整理頁面瀏覽、掛號點擊、院所分布與常用裝置。它不等同實際就診人次，但能顯示患者最常查找哪個院所、哪個入口最常被使用。
          </p>

          <ul className="mt-7 space-y-4 text-sm text-[#102420]">
            <li className="flex gap-3">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-[#174e45]" />
              <span>找出患者最常點擊的院所與掛號入口</span>
            </li>
            <li className="flex gap-3">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-[#174e45]" />
              <span>比較門診異動前後的頁面與點擊變化</span>
            </li>
            <li className="flex gap-3">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-[#174e45]" />
              <span>把更新資源放在患者真正使用的資訊上</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
