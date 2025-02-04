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

export const COMPANY_IMAGES = [
  { id: 1, src: "/r1.jpeg", alt: "Customer 1" },
  { id: 2, src: "/r2.jpeg", alt: "Customer 2" },
  { id: 3, src: "/r3.jpeg", alt: "Customer 3" },
];

export const contnet = [
  {
    id: 1,
    img: "/r1.jpeg",
    title: "Audit",
    colorTitle: "Precision",
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
    img: "/r2.jpeg",
    title: "Assurance",
    colorTitle: "Integrity",
    serviceContent: [
      {
        id: 1,
        icon: (
          <IconShieldCheck
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Financial Verification",
        serviceContentText:
          "CSAE 3416 special purpose audits for government funding compliance and investor readiness",
      },
      {
        id: 2,
        icon: (
          <IconScale
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Regulatory Audits",
        serviceContentText:
          "TICO trust accounting compliance and MTCC reserve fund studies for condominium corporations",
      },
      {
        id: 3,
        icon: (
          <IconHeartHandshake
            size={45}
            className="rounded-full bg-star_color_1 text-white p-1"
          />
        ),
        serviceContentTitle: "Non-Profit Assurance",
        serviceContentText:
          "Charity Directorate-compliant audits that maintain donor confidence and CRA standing",
      },
    ],
  },
];

export const aboutContents = [
  {
    id: 1,
    icon: <IconReceiptTax color="#5456ED" size={55} />,
    title: "Tax Precision Partners",
    description:
      "Full-service tax preparation and strategic planning for businesses and individuals, ensuring compliance while maximizing your deductions and savings.",
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
    role: "Marketing Director",
    content:
      "The level of creativity and attention to detail is outstanding! Our web traffic has increased by 150% since implementing their content strategy. The team's ability to capture our brand voice while maintaining SEO best practices has been invaluable to our digital presence.",
  },
  {
    id: 2,
    author: "James Chen",
    role: "Startup Founder",
    content:
      "Quick, efficient, and remarkably professional. They transformed our complex technical documentation into clear, user-friendly content that our customers love.",
  },
  {
    id: 3,
    author: "Sarah Williams",
    role: "E-commerce Manager",
    content:
      "Working with this team has been a game-changer for our e-commerce platform. Their product descriptions are engaging, their email campaigns have doubled our open rates, and their blog content has established us as industry leaders. The ROI has been phenomenal - our conversion rate is up 75% since we started working together.",
  },
  {
    id: 4,
    author: "Michael Rodriguez",
    role: "Content Strategist",
    content:
      "What sets them apart is their versatility. From white papers to social media posts, everything is meticulously researched and perfectly tailored to the target audience. Their ability to maintain consistency across different platforms while adapting to each channel's unique requirements is remarkable.",
  },
  {
    id: 5,
    author: "Lisa Anderson",
    role: "Small Business Owner",
    content:
      "As a small business owner, I was hesitant about investing in professional content services. Now I wish I had done it sooner. They didn't just write content; they developed a voice for my brand that resonates with my customers and sets us apart from competitors. The personal attention and customized approach made all the difference.",
  },
];

export const socialLink = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: (
      <FaFacebook className="text-2xl lg:text-3xl xl:text-4xl text-star_color_1 " />
    ),
  },
  {
    id: 2,
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: (
      <FaTwitter className="text-2xl lg:text-3xl xl:text-4xl text-star_color_1 " />
    ),
  },
  {
    id: 3,
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=919876543210",
    icon: (
      <RiWhatsappFill className="text-2xl lg:text-3xl xl:text-4xl  text-star_color_1" />
    ),
  },
  {
    id: 4,
    title: "Linkedin",
    link: "https://www.instagram.com",
    icon: (
      <FaLinkedin className="text-2xl lg:text-3xl xl:text-4xl text-star_color_1" />
    ),
  },
  {
    id: 5,
    title: "Mobile",
    link: "tel:+919876543210",
    icon: (
      <FaPhone className="text-2xl lg:text-3xl xl:text-4xl text-star_color_1 " />
    ),
  },
];
