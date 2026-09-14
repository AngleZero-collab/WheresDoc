import React from 'react';
import { Search, CircleX, PhoneCall, MousePointerClick } from 'lucide-react';

export const PatientDropoff: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 lg:px-10">
      <div className="rounded-[32px] border border-[#174e45]/10 bg-white p-6 shadow-[0_24px_70px_-48px_rgba(20,65,61,0.55)] sm:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-[#174e45]">一位患者如何在搜尋途中流失</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#102420]">
              每多一次查證，就多一次放棄的機會
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5a756f]">
              患者通常不是缺少醫師資訊，而是看到太多互相衝突的版本。統一入口把四段不確定，縮成一次確認。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {/* Step 01 */}
            <div className="relative rounded-2xl bg-[#f6f8f6] p-5">
              <div className="flex items-center justify-between">
                <Search className="size-5 text-[#174e45]" />
                <span className="text-[11px] font-black text-[#174e45]/35">01</span>
              </div>
              <p className="mt-6 text-sm font-black text-[#102420]">搜尋姓名</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">看到多個院所頁面</p>
            </div>

            {/* Step 02 */}
            <div className="relative rounded-2xl bg-[#f6f8f6] p-5">
              <div className="flex items-center justify-between">
                <CircleX className="size-5 text-[#174e45]" />
                <span className="text-[11px] font-black text-[#174e45]/35">02</span>
              </div>
              <p className="mt-6 text-sm font-black text-[#102420]">時間衝突</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">無法判斷哪一版最新</p>
            </div>

            {/* Step 03 */}
            <div className="relative rounded-2xl bg-[#f6f8f6] p-5">
              <div className="flex items-center justify-between">
                <PhoneCall className="size-5 text-[#174e45]" />
                <span className="text-[11px] font-black text-[#174e45]/35">03</span>
              </div>
              <p className="mt-6 text-sm font-black text-[#102420]">逐間詢問</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">增加患者與櫃檯成本</p>
            </div>

            {/* Step 04 */}
            <div className="relative rounded-2xl bg-[#f6f8f6] p-5">
              <div className="flex items-center justify-between">
                <MousePointerClick className="size-5 text-[#174e45]" />
                <span className="text-[11px] font-black text-[#174e45]/35">04</span>
              </div>
              <p className="mt-6 text-sm font-black text-[#102420]">找到入口</p>
              <p className="mt-2 text-xs leading-5 text-[#5a756f]">才有機會完成掛號</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
