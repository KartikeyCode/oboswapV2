import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Oboswap is the home of DeFi."),
        isHighlighted: true,
      },
      {
        label: t("Our community is building a comprehensive, decentralized trading platform for the future of finance."),
       
      },
      {
        label: t("Join us!"),
        href: "",
      },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: t("Troubleshooting"),
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: t("Guides"),
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: t("Bug Bounty"),
        href: "https://docs.pancakeswap.finance/code/bug-bounty",
      },
      {
        label: t("Audits"),
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: t("Careers"),
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];
