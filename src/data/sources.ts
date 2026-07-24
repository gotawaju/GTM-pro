export type SourceKind = "primary" | "research" | "investor" | "vendor" | "analysis";
export type Lens = "macro" | "micro";

export interface DigestSource {
  id: number;
  title: string;
  publisher: string;
  url: string;
  category: "origin" | "definition" | "market" | "demand" | "workflow" | "stack" | "impact" | "trend" | "hiring" | "history";
  categoryLabel: string;
  lens: Lens;
  kind: SourceKind;
  kindLabel: string;
  priority: "必読" | "深掘り" | "検証";
  question: string;
  takeaway: string;
}

export const sources: DigestSource[] = [
  {
    id: 1,
    title: "The Rise of the GTM Engineer",
    publisher: "The Signal",
    url: "https://www.thesignal.club/p/the-rise-of-the-gtm-engineer",
    category: "origin",
    categoryLabel: "概念の起点",
    lens: "macro",
    kind: "primary",
    kindLabel: "当事者発信",
    priority: "必読",
    question: "なぜGTM Engineerという役割が生まれたのか",
    takeaway: "AI・自動化・データを横断して、GTMの仕組み自体を実装する役割の出発点を押さえる。"
  },
  {
    id: 2,
    title: "26 FAQs about GTM Engineering in 2026",
    publisher: "The Signal",
    url: "https://www.thesignal.club/p/26-faqs-about-gtm-engineering-in",
    category: "definition",
    categoryLabel: "職種の定義",
    lens: "micro",
    kind: "primary",
    kindLabel: "実務者FAQ",
    priority: "必読",
    question: "RevOpsとの違いは何か、コードはどこまで必要か",
    takeaway: "曖昧になりやすい職務範囲、採用、評価、スキルの境界を具体的な問いから整理する。"
  },
  {
    id: 3,
    title: "The 2026 State of GTM Engineering",
    publisher: "Maja Voje",
    url: "https://knowledge.gtmstrategist.com/p/the-2026-state-of-gtm-engineering",
    category: "market",
    categoryLabel: "市場ベンチマーク",
    lens: "macro",
    kind: "research",
    kindLabel: "調査データ",
    priority: "必読",
    question: "給与・ツール・組織設計の現在地はどこか",
    takeaway: "228人規模の回答をもとに、報酬、利用ツール、収益貢献、組織上の配置を定量的に捉える。"
  },
  {
    id: 4,
    title: "The Rise of the GTM Engineer",
    publisher: "Gradient Ventures",
    url: "https://gradient.com/blog/posts/the-rise-of-the-gtm-engineer/",
    category: "demand",
    categoryLabel: "採用側の需要",
    lens: "macro",
    kind: "investor",
    kindLabel: "VC・採用視点",
    priority: "深掘り",
    question: "企業はどのような人材を求め、どこで失敗するのか",
    takeaway: "採用企業と投資家の側から、期待されるレバレッジと採用時の失敗パターンを見る。"
  },
  {
    id: 5,
    title: "GTM Engineering use cases",
    publisher: "Clay",
    url: "https://www.clay.com/blog",
    category: "workflow",
    categoryLabel: "ユースケース",
    lens: "micro",
    kind: "vendor",
    kindLabel: "ベンダー発信",
    priority: "深掘り",
    question: "現場では具体的に何を自動化しているのか",
    takeaway: "シグナル起点のアウトバウンドやウォーターフォール・エンリッチメントなど、実装単位で理解する。"
  },
  {
    id: 6,
    title: "GTM Engineering stack architecture",
    publisher: "SyncGTM",
    url: "https://syncgtm.com/",
    category: "stack",
    categoryLabel: "技術スタック",
    lens: "micro",
    kind: "vendor",
    kindLabel: "技術解説",
    priority: "深掘り",
    question: "GTMシステムはどのような層で構成されるのか",
    takeaway: "CRM、シグナル、アウトバウンド、AIの各層を分け、GTM-OSが担う接続面を考える。"
  },
  {
    id: 7,
    title: "The $127K Role That's Replacing Entire Sales Ops Teams",
    publisher: "Product Studio",
    url: "https://productstudio.com/",
    category: "impact",
    categoryLabel: "インパクト",
    lens: "micro",
    kind: "analysis",
    kindLabel: "事例記事",
    priority: "検証",
    question: "大幅な人員代替という主張には再現性があるか",
    takeaway: "強い効率化の主張を入口にしつつ、一次情報と実測値を分離して検証する。"
  },
  {
    id: 8,
    title: "2026 GTM trends",
    publisher: "Factors.ai",
    url: "https://www.factors.ai/blog",
    category: "trend",
    categoryLabel: "構造変化",
    lens: "macro",
    kind: "vendor",
    kindLabel: "市場分析",
    priority: "深掘り",
    question: "なぜ今、効率化圧力が強まっているのか",
    takeaway: "CACやパイプライン効率など、GTME需要を生む経済的な背景を確認する。"
  },
  {
    id: 9,
    title: "GTM Engineer job-market analysis",
    publisher: "ZoomInfo Pipeline",
    url: "https://pipeline.zoominfo.com/",
    category: "hiring",
    categoryLabel: "求人データ",
    lens: "macro",
    kind: "research",
    kindLabel: "求人分析",
    priority: "必読",
    question: "市場が実際に要求しているスキルとツールは何か",
    takeaway: "求人データから、理想論ではなく雇用市場が定義する職種像を抽出する。"
  },
  {
    id: 10,
    title: "The evolution of GTM Engineering, 2023–2026",
    publisher: "Michael Saruggia",
    url: "https://www.linkedin.com/in/michaelsaruggia/",
    category: "history",
    categoryLabel: "変遷",
    lens: "macro",
    kind: "analysis",
    kindLabel: "時系列分析",
    priority: "深掘り",
    question: "GTM Engineeringはどのように現在地へ到達したのか",
    takeaway: "2023年から2026年までの役割・ツール・期待値の変化を時系列で捉える。"
  }
];

export const additionalSources = [
  {
    purpose: "市場機会・競合",
    publisher: "The GTM Index",
    url: "https://thegtmindex.com/gtm-engineers/",
    note: "ツール、求人、教育、コミュニティを横断してエコシステムを把握する。"
  },
  {
    purpose: "市場機会・競合",
    publisher: "ICONIQ State of GTM",
    url: "https://www.iconiqcapital.com/growth/reports",
    note: "成長企業のGTM効率と投資対効果を比較する。"
  },
  {
    purpose: "ワークフロー設計",
    publisher: "Cargo GTM Engineering Playbook",
    url: "https://www.getcargo.ai/blog/gtm-engineering-playbook-2026-autonomous-workflows",
    note: "自律型ワークフローのパターンと評価指標を実装目線で見る。"
  },
  {
    purpose: "需要・外注市場",
    publisher: "Reachly",
    url: "https://www.reachly.co/blogs/what-is-gtm-engineering-the-complete-2026-guide-from-a-clay-certified-agency",
    note: "内製と外注の選択、Claygencyの提供価値と顧客像を確認する。"
  }
];
