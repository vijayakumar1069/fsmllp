import {
  IconReceiptTax,
  IconShieldCheck,
  IconHeartHandshake,
  IconChartLine,
  IconFileCheck,
  IconScale,
} from "@tabler/icons-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";

export const navbarValues = [
  {
    id: 1,
    title: "Home",
    path: "#home",
  },
  {
    id: 2,
    title: "About",
    path: "#about",
  },
  {
    id: 3,
    title: "Services",
    path: "#services",
  },
  {
    id: 4,
    title: "Why US",
    path: "#whyus",
  },
  {
    id: 5,
    title: "Reviews",
    path: "#reviews",
  },
  {
    id: 6,
    title: "Contact",
    path: "#contact",
  },
];
export const percentageValues = [
  {
    id: 1,
    percentage: 95,
    symbol: "%",
    description: "Tax Compliance Accuracy", // Changed to reflect accounting focus
  },
  {
    id: 2,
    percentage: 3.5,
    symbol: "X",
    description: "Client Tax Savings", // Changed to emphasize financial benefits
  },
  {
    id: 3,
    percentage: 250,
    symbol: "+",
    description: "Charities & Non-Profits Assisted", // Changed to highlight charity work
  },
];
export const Hero_Section_Images = [
  { id: 1, src: "/home_1.jpeg", alt: "Customer 1" },
  { id: 2, src: "/home_2.jpeg", alt: "Customer 2" },
  { id: 3, src: "/home_3.jpeg", alt: "Customer 3" },
  { id: 4, src: "/home_4.jpeg", alt: "Customer 4" },
  { id: 5, src: "/home_5.jpeg", alt: "Customer 5" },
  { id: 6, src: "/home_6.jpeg", alt: "Customer 6" },
];

export const COMPANY_IMAGES = [
  { id: 1, src: "/r1.jpeg", alt: "Customer 1" },
  { id: 2, src: "/r2.jpeg", alt: "Customer 2" },
  { id: 3, src: "/r3.jpeg", alt: "Customer 3" },
];

export const service_Content = [
  {
    id: 1,
    img: "/service_1.jpeg",
    title: "Internal Audit",
    colorTitle: "Strength in Strategic Precision", // Updated to 3 words
    serviceContent: [
      {
        id: 1,
        icon: (
          <IconReceiptTax
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Corporate Tax Strategy",
        serviceContentText:
          "Optimize T2 returns and GST/HST compliance while maximizing R&D tax incentives for growth-focused businesses",
      },
      {
        id: 2,
        icon: (
          <IconChartLine
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Personal Tax Mastery",
        serviceContentText:
          "Strategic T1 filings with proactive RRSP/TFSA planning and investment income optimization",
      },
      {
        id: 3,
        icon: (
          <IconFileCheck
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Cross-Border Expertise",
        serviceContentText:
          "US-Canada tax treaty navigation for dual citizens and international business operations",
      },
    ],
  },
  {
    id: 2,
    img: "/service_2.jpeg",
    title: "Payroll Services",
    colorTitle: "Efficiency Through Precision", // Updated for clarity and impact
    serviceContent: [
      {
        id: 1,
        icon: (
          <IconShieldCheck
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Seamless Payroll Processing",
        serviceContentText:
          "Ensure timely and accurate payroll with biweekly, semi-monthly, or monthly processing.",
      },
      {
        id: 2,
        icon: (
          <IconScale
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Direct Deposit & Paystubs",
        serviceContentText:
          "Securely transfer employee wages via direct deposit and generate detailed electronic paystubs.",
      },
      {
        id: 3,
        icon: (
          <IconHeartHandshake
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "T4 & ROE Management",
        serviceContentText:
          "Issue T4 slips, file them online with the CRA, and generate Records of Employment for departing staff.",
      },
    ],
  },
];

export const aboutContents = [
  {
    id: 1,
    icon: <IconReceiptTax color="#5456ED" size={55} />,
    title: "Expert Tax Solutions",
    description:
      "Providing tailored tax strategies for individuals and businesses, including corporate and personal filings, CRA audit support, back tax resolution, and specialized returns such as trusts and partnerships.",
  },

  {
    id: 2,
    icon: <IconShieldCheck color="#5456ED" size={55} />,
    title: "Audit Assurance Guardians",
    description:
      "Comprehensive audit services that build stakeholder confidence, from financial statement reviews to regulatory compliance certifications.",
  },
  {
    id: 3,
    icon: <IconHeartHandshake color="#5456ED" size={55} />,
    title: "Charity Compliance Allies",
    description:
      "Specialized accounting solutions for non-profits and charities, ensuring transparency and compliance while you focus on your core mission.",
  },
];

export const keyword = [
  { id: 1, content: "Tax Compliance Mastery" },
  { id: 2, content: "Audit Precision Guaranteed" },
  { id: 3, content: "CRA Compliance Experts" },
  { id: 4, content: "Strategic Financial Planning" },
  { id: 5, content: "Non-Profit Accounting" },
  { id: 6, content: "Corporate Tax Optimization" },
  { id: 7, content: "T2/T1 Filings" },
  { id: 8, content: "GST/HST Compliance" },
  { id: 9, content: "Risk Mitigation" },
];

export const whyUspoints = [
  { id: 1, title: "Experienced & Certified Professionals" },
  { id: 2, title: "Full-Service Accounting Solutions" },
  { id: 3, title: "Strategic Tax Planning & Compliance" },
  { id: 4, title: "Audit & Assurance Expertise" },
  { id: 5, title: "Business Growth Consultation" },
  { id: 6, title: "Charities & Non-Profit Specialists" },
];

export const reviewsContent = [
  {
    id: 1,
    author: "Emma Thompson",
    role: "CFO, Tech Solutions Inc.",
    content:
      "FSMLLP's expertise in corporate tax planning and compliance has been invaluable. Their strategic approach not only optimized our tax position but also ensured full regulatory compliance. A truly professional and detail-oriented team!",
  },
  {
    id: 2,
    author: "James Chen",
    role: "Founder, Chen Enterprises",
    content:
      "The FSMLLP team streamlined our financial reporting and helped us navigate complex audits seamlessly. Their proactive guidance has been instrumental in scaling our business with confidence.",
  },
  {
    id: 3,
    author: "Sarah Williams",
    role: "E-commerce Business Owner",
    content:
      "Working with FSMLLP has transformed our financial operations. From bookkeeping to tax optimization, their insights have significantly improved our cash flow management and long-term financial planning.",
  },
  {
    id: 4,
    author: "Michael Rodriguez",
    role: "Investment Advisor",
    content:
      "FSMLLP stands out for their precision and strategic foresight. Their tax-saving strategies and financial advisory services have greatly benefited our high-net-worth clients and corporate partners.",
  },
  {
    id: 5,
    author: "Lisa Anderson",
    role: "Managing Director, Anderson Legal Firm",
    content:
      "FSMLLP’s expertise in trust and estate planning has been invaluable for our firm and clients. Their meticulous approach and deep industry knowledge make them a trusted partner in financial planning.",
  },
];

export const socialLink = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: (
      <FaFacebook className="text-2xl lg:text-3xl xl:text-4xl text-[#5456ED] " />
    ),
  },
  {
    id: 2,
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: (
      <FaTwitter className="text-2xl lg:text-3xl xl:text-4xl text-[#5456ED] " />
    ),
  },
  {
    id: 3,
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=919876543210",
    icon: (
      <RiWhatsappFill className="text-2xl lg:text-3xl xl:text-4xl  text-[#5456ED]" />
    ),
  },
  {
    id: 4,
    title: "Linkedin",
    link: "https://www.instagram.com",
    icon: (
      <FaLinkedin className="text-2xl lg:text-3xl xl:text-4xl text-[#5456ED]" />
    ),
  },
  {
    id: 5,
    title: "Mobile",
    link: "tel:+919876543210",
    icon: (
      <MdCall className="text-2xl lg:text-3xl xl:text-4xl text-[#5456ED] " />
    ),
  },
];
