import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Check, MapPin, Clock3, CalendarDays, ExternalLink } from 'lucide-react';
import { DEMO_SCHEDULES } from '../data/content';
import { ClinicSchedule } from '../types';

export const Hero: React.FC = () => {
  const [activeClinic, setActiveClinic] = useState<ClinicSchedule>(DEMO_SCHEDULES[0]);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleActionClick = (action: string) => {
    setActionFeedback(`已模擬前往【${activeClinic.name}】的${action}`);
    setTimeout(() => setActionFeedback(null), 3500);
  };

  return (
    <section id="top" className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pb-28 lg:pt-16">
      {/* Left Column */}
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#174e45]/15 bg-white/70 px-3.5 py-2 text-xs font-bold text-[#174e45] shadow-xs backdrop-blur-sm">
          <ShieldCheck className="size-4 text-[#174e45]" />
          <span>醫師本人認證的官方門診入口</span>
        </div>

        <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,5.8vw,5.2rem)] font-black leading-[1.04] tracking-[-0.05em] text-[#102420]">
          在幾間院所看診，
          <span className="mt-2 block text-[#174e45]">患者就有幾種找不到你的方式。</span>
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-[#5a756f] sm:text-lg">
          WheresDoc 把所有門診時間、臨時異動與官方掛號入口，收進一個永遠不變的醫師個人連結。患者不用猜，你也不再被單一院所綁住。
        </p>

        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <a
            href="#order"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#174e45] px-7 text-base font-bold text-[#f8fbf9] shadow-[0_10px_30px_-12px_#174e45] transition hover:bg-[#123e37] active:translate-y-px"
          >
            <span>取得建置建議</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#demo"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#174e45]/20 bg-white/70 px-6 text-base font-bold text-[#102420] transition hover:bg-[#e7efe9] active:translate-y-px"
          >
            看患者端示範
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#5a756f]">
          <span className="flex items-center gap-1.5">
            <Check className="size-4 text-[#174e45]" />
            不碰病歷
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="size-4 text-[#174e45]" />
            不取代院所掛號
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="size-4 text-[#174e45]" />
            送出申請不扣款
          </span>
        </div>
      </div>

      {/* Right Column: Demo Preview Card */}
      <div id="demo" className="relative mx-auto w-full max-w-[570px] scroll-mt-8 lg:ml-auto">
        {/* Soft background aura */}
        <div className="absolute -left-16 -top-12 size-60 rounded-full bg-[#d6eae2]/80 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 size-56 rounded-full bg-[#f2ba63]/25 blur-3xl" />

        <div className="relative rounded-[32px] border border-[#174e45]/15 bg-white p-6 shadow-[0_28px_80px_-38px_rgba(20,65,61,0.5)] sm:p-7">
          {/* Header of Doctor Card */}
          <div className="flex items-center justify-between border-b border-[#174e45]/10 pb-5">
            <div>
              <span className="rounded-full bg-[#d6eae2] px-2.5 py-1 text-[11px] font-black text-[#143831]">
                骨科、運動醫學
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-[#102420]">林予安 醫師</h2>
              <p className="mt-1 text-sm text-[#5a756f]">跨院所門診官方頁</p>
            </div>
            <div className="grid size-12 place-items-center rounded-full bg-[#174e45] text-[#f8fbf9] shadow-sm">
              <ShieldCheck className="size-6" />
            </div>
          </div>

          {/* Next Clinic Highlight Box */}
          <div className="my-5 rounded-2xl bg-[#174e45] p-5 text-[#f8fbf9] shadow-md shadow-[#174e45]/10 transition-all">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f8fbf9]/70">
                下一個門診
              </p>
              <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-bold">
                {activeClinic.day}
              </span>
            </div>
            <p className="mt-3 text-2xl font-black tracking-tight">
              {activeClinic.hours}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#f8fbf9]/85">
              <MapPin className="size-4 shrink-0 text-[#f2ba63]" />
              <span>{activeClinic.name}・{activeClinic.district.replace(/^.+市/, '')}</span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleActionClick('官方掛號系統')}
                className="cursor-pointer rounded-xl bg-white px-4 py-2.5 text-center text-sm font-black text-[#174e45] transition hover:bg-[#f6f8f6] active:scale-[0.98]"
              >
                官方掛號
              </button>
              <button
                type="button"
                onClick={() => handleActionClick('Google 導航地圖')}
                className="cursor-pointer rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-white/20 active:scale-[0.98]"
              >
                地圖導航
              </button>
            </div>
          </div>

          {/* Feedback message if clicked */}
          {actionFeedback && (
            <div className="mb-4 rounded-xl bg-[#d6eae2] p-3 text-center text-xs font-bold text-[#143831] transition-all">
              {actionFeedback}
            </div>
          )}

          {/* Clinic List */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold text-[#5a756f]">點擊切換查看各院所時段：</p>
            {DEMO_SCHEDULES.map((item) => {
              const isSelected = activeClinic.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveClinic(item)}
                  className={`grid w-full grid-cols-[54px_1fr_auto] items-center gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                    isSelected
                      ? 'border-[#174e45]/30 bg-[#d6eae2]/45 ring-1 ring-[#174e45]/20 shadow-xs'
                      : 'border-[#d4e3dc] bg-white hover:border-[#174e45]/20 hover:bg-[#f6f8f6]'
                  }`}
                >
                  <p className={`text-center text-xs font-black ${isSelected ? 'text-[#174e45]' : 'text-[#5a756f]'}`}>
                    {item.day}
                  </p>
                  <div>
                    <p className="text-sm font-black text-[#102420]">{item.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-[#5a756f]">
                      <Clock3 className="size-3 text-[#5a756f]" />
                      <span>{item.hours}</span>
                      <span>・</span>
                      <span>{item.district}</span>
                    </p>
                  </div>
                  <CalendarDays className={`size-4 ${isSelected ? 'text-[#174e45]' : 'text-[#5a756f]/50'}`} />
                </button>
              );
            })}
          </div>

          {/* Footer of Demo */}
          <div className="mt-5 flex items-center justify-between border-t border-[#174e45]/10 pt-4 text-[11px] text-[#5a756f]">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              由醫師團隊確認
            </span>
            <span>固定顯示最近更新</span>
          </div>
        </div>
      </div>
    </section>
  );
};
