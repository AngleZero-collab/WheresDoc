import { PricingPlan, ClinicSchedule, CaseClinic, FaqItem, StatItem } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    eyebrow: '適合剛開始經營個人品牌',
    name: '啟動版',
    setup: 'NT$29,800',
    monthly: '＋ NT$1,980／月',
    description: '把分散門診整理成一個正式入口。',
    features: [
      '最多 3 個院所',
      '專屬網域與手機版頁面',
      '門診、掛號、電話與地圖整合',
      '每月 1 次代更新',
      '基本流量月報',
    ],
  },
  {
    id: 'professional',
    eyebrow: '多院所執業醫師首選',
    name: '專業版',
    setup: 'NT$49,800',
    monthly: '＋ NT$3,980／月',
    description: '把官網、搜尋與日常異動一起顧好。',
    features: [
      '最多 8 個院所',
      '啟動版全部功能',
      '每月 4 次代更新',
      '臨時停診醒目公告',
      '搜尋呈現優化',
      '掛號點擊與熱門院所報告',
    ],
    recommended: true,
  },
  {
    id: 'team',
    eyebrow: '適合診所集團與醫師團隊',
    name: '團隊版',
    setup: 'NT$98,000 起',
    monthly: '＋ NT$8,800／月起',
    description: '多位醫師共用資料結構與維護流程。',
    features: [
      '3 位醫師起',
      '院所與醫師雙向索引',
      '批次門診更新',
      '角色與維護流程設計',
      '季度成效檢視',
    ],
  },
];

export const DEMO_SCHEDULES: ClinicSchedule[] = [
  {
    id: 'anhe',
    name: '安和骨科診所',
    day: '今天',
    hours: '18:30–21:00',
    district: '台北市大安區',
    isNext: true,
  },
  {
    id: 'chengdong',
    name: '城東聯合醫院',
    day: '週四',
    hours: '14:00–17:00',
    district: '台北市松山區',
  },
  {
    id: 'xinheng',
    name: '新衡運動醫學中心',
    day: '週六',
    hours: '09:00–12:00',
    district: '新北市板橋區',
  },
];

export const CASE_CLINICS: CaseClinic[] = [
  {
    id: 'sunrain',
    number: '01',
    name: '太陽雨信義身心診所',
    district: '台北市信義區',
    linkText: '官方網站可確認',
    url: 'https://sunrain-clinic.com/',
  },
  {
    id: 'seeing',
    number: '02',
    name: '看見佳醫診所',
    district: '台北市大安區',
    linkText: '提案者觀察・上線前需核對',
    url: 'https://www.seeingclinic.com/',
  },
  {
    id: 'weimu',
    number: '03',
    name: '萬華維沐身心診所',
    district: '台北市萬華區',
    linkText: '精神科診所協會名錄可確認',
    url: 'https://www.atpc.tw/p/blog-page_81.html',
  },
];

export const STATS_ITEMS: StatItem[] = [
  {
    value: '47%',
    title: '會上網評估醫師',
    description: '2025 年全國代表性調查：47% 台灣成人曾用 Google 或社群評估醫師；27% 曾依網路評價作出醫療決策。',
    sourceText: '研究摘要',
    sourceUrl: 'https://openalex.org/W4417357152',
  },
  {
    value: '41.9%',
    title: '近期用過線上掛號',
    description: '數位發展部調查顯示，網路族在近三個月內使用線上掛號的比例；患者已習慣從線上完成就醫前的關鍵動作。',
    sourceText: '數位發展部調查',
    sourceUrl: 'https://www-api.moda.gov.tw/File/Get/moda/zh-tw/qJEjIvRGm4LGlZw',
  },
  {
    value: '69.5%',
    title: '會搜尋健康資訊',
    description: '同份調查顯示，近三個月曾上網搜尋健康資訊的比例。搜尋結果若分散或過期，患者很難判斷哪一筆才正確。',
    sourceText: '數位發展部調查',
    sourceUrl: 'https://www-api.moda.gov.tw/File/Get/moda/zh-tw/qJEjIvRGm4LGlZw',
  },
  {
    value: '55,230',
    title: '台灣執業西醫師',
    description: '衛福部 2024 年統計。對跨院所執業、具專科聲量的醫師而言，清楚且可長期累積的個人入口正成為基本數位資產。',
    sourceText: '衛福部統計',
    sourceUrl: 'https://www.mohw.gov.tw/dl-63140-2b5ec371-267a-4872-90d9-04ddf7f75bfe.html',
  },
];

export const COMPARISON_ROWS = [
  {
    label: '跨院所完整呈現',
    search: '不一定',
    singleClinic: '否',
    wheresDoc: '是',
  },
  {
    label: '標示最近核准時間',
    search: '不一定',
    singleClinic: '不一定',
    wheresDoc: '是',
  },
  {
    label: '直達各院所官方掛號',
    search: '分散',
    singleClinic: '單一院所',
    wheresDoc: '全部整合',
  },
  {
    label: '醫師持有固定入口',
    search: '否',
    singleClinic: '否',
    wheresDoc: '是',
  },
  {
    label: '可量化導流點擊',
    search: '有限',
    singleClinic: '院所端',
    wheresDoc: '醫師端摘要',
  },
];

export const DELIVERABLE_ITEMS = [
  {
    number: '01',
    title: '公開資訊盤點',
    description: '整理 Google、院所官網與社群上的門診版本，找出衝突與過期資料。',
  },
  {
    number: '02',
    title: '專屬頁面建置',
    description: '以手機優先呈現下一個門診、完整週表、專科與醫師認證。',
  },
  {
    number: '03',
    title: '官方入口整合',
    description: '每個院所連回官方掛號、電話與地圖，不代收病歷或掛號資料。',
  },
  {
    number: '04',
    title: '持續維護成效',
    description: '協助更新異動，提供掛號點擊與熱門院所報告，知道患者在找什麼。',
  },
];

export const WORKFLOW_STEPS = [
  {
    day: '第 1–3 天',
    title: '公開資訊盤點',
    description: '蒐集院所官網、Google 與社群現況，標出過期、缺漏與互相衝突的資訊。',
  },
  {
    day: '第 4–7 天',
    title: '內容確認',
    description: '建立唯一門診主檔，由醫師確認專科、時段、掛號與聯絡方式。',
  },
  {
    day: '第 8–12 天',
    title: '頁面設計',
    description: '製作手機優先頁面，讓患者在第一個畫面就看到下一個門診。',
  },
  {
    day: '第 13–15 天',
    title: '上線與追蹤',
    description: '完成網域、搜尋設定與點擊追蹤，之後依方案持續更新。',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '這會取代醫院或診所的掛號系統嗎？',
    answer: '不會。WheresDoc 只把患者導向各院所的官方掛號、電話與地圖，避免重複建造掛號系統，也不碰病歷與患者健康資料。',
  },
  {
    question: '門診臨時更動怎麼辦？',
    answer: '專業版包含臨時停診的醒目公告與每月 4 次代更新；團隊版可另設批次維護流程。緊急異動以雙方約定的服務時段為準。',
  },
  {
    question: '多久可以上線？',
    answer: '資料齊全且醫師完成內容確認後，啟動版通常約 10–15 個工作天；專業版約 15–25 個工作天。客製整合另行估時。',
  },
  {
    question: '能保證增加多少患者嗎？',
    answer: '不能保證。我們能把資訊變得集中、可信、可追蹤，並降低患者找錯時間與入口的機率；實際成效仍受搜尋量、醫師聲量與院所流程影響。',
  },
  {
    question: '醫療廣告與內容合規怎麼處理？',
    answer: '我們以醫師官方資訊管理與掛號導流為核心；公開前由醫師確認內容。涉及療效、案例或廣告用語時，仍應依所在地法規與院所規範審核。',
  },
];
