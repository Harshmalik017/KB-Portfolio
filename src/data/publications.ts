export type PubType = "Journal" | "Book Chapter" | "Working Paper" | "Monograph" | "Article";
export type Pub = {
  title: string;
  venue: string;
  year: number;
  type: PubType;
  coauthors?: string;
  firstAuthor?: boolean;
  link?: string;
};
const raw: Pub[] = [
  // Journals
  {
    title: "West Bengal State Finances: Debt, Revenue Effort and Fiscal Choices",
    venue: "Economic and Political Weekly, 61(35), 74-81",
    year: 2026,
    type: "Journal",
    coauthors: "Pinaki Chakraborty",
  },
  {
    title: "State Finance in India: Emerging Issues and Fiscal Challenges",
    venue: "The Indian Economic Journal, 73(1), 1-9",
    year: 2025,
    type: "Journal",
    coauthors: "Pinaki Chakraborty",
    link: "https://doi.org/10.1177/00194662241303991",
  },
  {
    title:
      "Issues and Challenges in Education System in India: Interface among School Administrators, Teachers, Students, and Parents",
    venue: "International Journal of Indian Psychology, 12(4), 290-299",
    year: 2024,
    type: "Journal",
    coauthors: "Jayeeta Bhadra",
  },
  {
    title:
      "Laapataa Ladies: Key lessons and reminder on socio-cultural, economic and governance aspects of women empowerment",
    venue: "Paripex – Indian Journal of Research, 13(9)",
    year: 2024,
    type: "Journal",
  },
  {
    title:
      "Sport as a vehicle of change for livelihoods, social participation and marital health for the youth: Findings from a prospective cohort in Bihar, India",
    venue: "EClinicalMedicine (Elsevier), 14:23",
    year: 2020,
    type: "Journal",
    coauthors: "Nandita Bhan, Namratha Rao, Jennifer Yore, Anita Raj",
  },
  {
    title:
      "Issues and Challenges in Fiscal Decentralisation to Rural Local Governments of North-Eastern States in India",
    venue: "Journal of North East India Studies, 10(1), 73-95",
    year: 2020,
    type: "Journal",
    coauthors: "Panchali Banerjee",
    firstAuthor: true,
  },
  {
    title:
      "Impacts of Traditional and Modern Cooking Fuels on the prevalence of Short-term and Long-term Ailments in India",
    venue: "Indian Journal of Human Development, 13(3), 294-307",
    year: 2019,
    type: "Journal",
    coauthors: "Rahul Ranjan",
  },
  {
    title:
      "Decentralised Curative Health Service Delivery in India: Evidence from Public Expenditure Benefit Incidence",
    venue: "Artha Vijnana, 58(2), 149-170",
    year: 2016,
    type: "Journal",
  },
  {
    title:
      "Financial Constraints and Governance Challenges in MGNREGA across Gram Panchayats in Jhargram: Towards some Explanations",
    venue: "Journal of Studies in Dynamics and Change, 1(3), 145-165",
    year: 2014,
    type: "Journal",
    coauthors: "Jayeeta Bhadra, Subhadip Mukherjee",
    firstAuthor: true,
  },
  {
    title: "Public Expenditure on Health across States in India: An Evaluation on Selected Issues and Evidences",
    venue: "International Journal of Research in Finance and Marketing, 2(6), 25-39",
    year: 2012,
    type: "Journal",
    coauthors: "Jayeeta Bhadra",
    firstAuthor: true,
  },
  {
    title: "Sub national Public Finance in Times of Recession",
    venue: "Economic and Political Weekly, 45(35), 15-19",
    year: 2010,
    type: "Journal",
    coauthors: "Lekha Chakraborty",
  },
  // Book chapters
  {
    title: "Impact of Food Inflation on Nutritional Intake in Indian Federalism: Role of Cyclicality of Fiscal Policy",
    venue:
      "In Health and Nutrition: Issues and Initiatives in Rural India, ed. R. K. Sinha, 35-59. Delta Book World, New Delhi",
    year: 2024,
    type: "Book Chapter",
    coauthors: "Krishanu Bhattacharya",
    firstAuthor: true,
  },
  {
    title: "Fragmented Inter-Governmental Fiscal Transfer System in India under Reforms: Issues and Challenges",
    venue:
      "In A Saga of Economic Reforms in India, ed. Neelakanta N. T. et al., 188-198. Madhav Books, New Delhi (Conference Proceeding)",
    year: 2017,
    type: "Book Chapter",
  },
  // Working papers
  {
    title: "Fiscal Policy for Equity: Analysing the Public Expenditure Benefit Incidence of Health Sector in India",
    venue: "NIPFP Working Paper No. 425, New Delhi",
    year: 2025,
    type: "Working Paper",
    coauthors: "Lekha Chakraborty, Rashmi Arora",
  },
  {
    title: "State Finances in India: Managing Fiscal Risks and Sustaining Recovery",
    venue: "NIPFP Working Paper No. 413, New Delhi",
    year: 2024,
    type: "Working Paper",
    coauthors: "Pinaki Chakraborty",
  },
  {
    title: "Parental Violence Against Unmarried Adolescents Aged 10-19 Years in Uttar Pradesh, India",
    venue: "Center on Gender Equity and Health, UC San Diego School of Medicine (26 Apr 2019)",
    year: 2019,
    type: "Working Paper",
    coauthors: "Namratha Rao, Natalie Wyss, Nandita Bhan, Anita Raj",
  },
  {
    title: "Adolescent participation in Family Life Education Programs in Uttar Pradesh, India",
    venue: "Center on Gender Equity and Health, UC San Diego School of Medicine (25 Apr 2019)",
    year: 2019,
    type: "Working Paper",
    coauthors: "Natalie Wyss, Namratha Rao, Nandita Bhan, Anita Raj",
  },
  {
    title: "Engaging Youth in Sports for Health and Development: a gender focus is needed in Bihar, India",
    venue: "Center on Gender Equity and Health, UC San Diego School of Medicine (6 Apr 2019)",
    year: 2019,
    type: "Working Paper",
    coauthors: "Namratha Rao, Natalie Wyss, Nandita Bhan, Anita Raj",
    firstAuthor: true,
  },
  {
    title: "Search for Resources in a High Income State: A Study of State Finances of Sikkim",
    venue: "NIPFP Working Paper No. 170, New Delhi",
    year: 2016,
    type: "Working Paper",
    coauthors: "Pratap Ranjan Jena, Satadru Sikdar",
  },
  // Monograph
  {
    title: "Tax Policy and Enterprise Development in South Asia: The Indian Case",
    venue: "Governance Institute Network International",
    year: 2014,
    type: "Monograph",
    coauthors: "R. Kavita Rao, Amarjyoti Mahanta",
  },
  // Articles
  {
    title: "Challenges of Electoral Economics (चुनावी अर्थशास्त्र की चुनौतियां)",
    venue: "Amar Ujala, 10 Apr 2024",
    year: 2024,
    type: "Article",
    coauthors: "Pinaki Chakraborty",
  },
  {
    title:
      "Understanding Cyclicality of Fiscal Policy, High Fiscal Deficit in Union Budget 2021-22: Implications on Inflation",
    venue: "The Public Economist, 7 Feb 2021",
    year: 2021,
    type: "Article",
    link: "https://thepubliceconomist.com/?p=140025",
  },
  {
    title: "Gender-Focussed Budgets Can Reduce Spousal Violence, Improve Women's Well-Being",
    venue: "IndiaSpend, 26 Dec 2018",
    year: 2018,
    type: "Article",
    coauthors: "Anita Raj, Nandita Bhan, Namratha Rao, Laishram Ladusingh",
    link: "https://www.indiaspend.com/gender-focussed-budgets-can-reduce-spousal-violence-improve-womens-well-being/",
  },
];
export const publications: Pub[] = [...raw].sort((a, b) => b.year - a.year);
export const pubTypes = ["All", "Journal", "Book Chapter", "Working Paper", "Monograph", "Article"] as const;
