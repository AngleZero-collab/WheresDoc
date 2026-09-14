import React from 'react';
import { COMPARISON_ROWS } from '../data/content';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
            競爭替代方案
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[#102420] sm:text-5xl">
            不是多做一個網站，而是少掉患者的查證成本
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5a756f]">
            Google、院所官網與社群各自有價值；問題在於沒有任何一個來源替醫師維護跨院所的完整版本。
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#174e45]/10 bg-white shadow-xs">
          {/* Header */}
          <div className="grid grid-cols-[1.05fr_repeat(3,0.75fr)] bg-[#174e45] px-5 py-4 text-xs font-black text-[#f8fbf9]">
            <span>比較項目</span>
            <span className="text-center">搜尋結果</span>
            <span className="text-center">單一院所頁</span>
            <span className="text-center text-[#d6eae2]">WheresDoc</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#174e45]/10">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.05fr_repeat(3,0.75fr)] items-center px-5 py-4 text-sm ${
                  idx % 2 === 1 ? 'bg-[#d6eae2]/20' : 'bg-white'
                }`}
              >
                <span className="font-bold text-[#102420]">{row.label}</span>
                <span className="text-center text-xs text-[#5a756f]">{row.search}</span>
                <span className="text-center text-xs text-[#5a756f]">{row.singleClinic}</span>
                <span className="text-center text-xs font-black text-[#174e45]">
                  {row.wheresDoc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
