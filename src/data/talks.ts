export type TalkItem = { title: string; where: string; when: string; status?: "Presented" | "Accepted" };
export const lectures: TalkItem[] = [
  {
    title: "Child Rights and Women Empowerment in India: Concepts and Practice",
    where: "Lady Irwin College, Delhi University (undergraduate students)",
    when: "11 Mar 2024",
  },
  {
    title: "Decentralised Public Finance in Indian Federalism",
    where: "Moolya Foundation (online lecture)",
    when: "16 Jan 2020",
  },
  {
    title: "Public Finance in Indian Federalism: Theory and Practice",
    where: "Jagannath Institute of Management Sciences",
    when: "6 Feb 2019",
  },
];
export const conferences: TalkItem[] = [
  {
    title: "Issues and Challenges in Fragmented Intergovernmental Fiscal Transfer System in Indian Federalism",
    where:
      "National Conference on 25 Years of Economic Reforms in India: Performance and Prospects, Tumkur University, Karnataka",
    when: "22 Apr 2017",
    status: "Presented",
  },
  {
    title: "Impact of Intergovernmental Transfers on Local Spending Decisions in India: The Flypaper Effect",
    where:
      "12th International Symposium on Econometric Theory and Applications & 26th NZ Econometric Study Group (SETA/NZESG), University of Waikato, Hamilton, New Zealand",
    when: "17–19 Feb 2016",
    status: "Accepted",
  },
  {
    title: "Inequality Effects of Fiscal Policy: Analysing the Benefit Incidence on Health Sector, India",
    where: "71st International Institute of Public Finance (IIPF) Annual Congress, Dublin, Ireland",
    when: "20–23 Aug 2015",
    status: "Presented",
  },
  {
    title: "Issues and Evidence in Ensuring Early Childhood Care and Development: Intergenerational India",
    where: "14th Annual Conference of Pacific Early Childhood Education Research Association (PECERA), Seoul, Korea",
    when: "4–6 Jul 2013",
    status: "Accepted",
  },
];
