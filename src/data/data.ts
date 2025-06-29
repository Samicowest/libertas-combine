import { BlogPost } from "@/types/types";
import Blog1 from "/blog1_orig.png";
import Blog2 from "/blog2_orig.png";
import Blog3 from "/blog3_orig.png";
export const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "The future inside Libertas Alpha",
    excerpt:
      "Understand the direction of our tech NGO and how you can participate now and in the future",
    author: "Chinedu Jamike",
    date: "Jan 31, 2025",
    readTime: "5 min read",
    imageUrl: Blog1,
    category: ["Blockchain", "Research", "Innovation", "Tech", "Ngo"],
    link: "https://medium.com/@libertasalpha_10290/building-the-future-inside-libertas-alphas-vision-driven-ecosystem-ca0d5dbe3b6c",
  },
  {
    id: 2,
    title: "Blockchain X Agriculture",
    excerpt:
      "Understand the need and framework for enhanced liquidity and inclusivity.",
    author: "Chinedu Jamike",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    imageUrl: Blog2,
    category: ["Agriculture", "Technology", "Blockchain", "Investment"],
    link: "https://medium.com/@libertasalpha_10290/blockchain-technology-in-agricultural-real-estate-a-framework-for-enhanced-liquidity-and-089b6cd04029",
  },
  {
    id: 3,
    title: "Introducing Microventure Initiative",
    excerpt:
      "Understand tokenizatin, a new frontier in community investment from Libertas Alpha",
    author: "Chinedu Jamike",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    imageUrl: Blog3,
    category: ["Invest", "Tokenization", "Venture Capital", "Blockchain"],
    link: "https://medium.com/@libertasalpha_10290/introducing-micro-venture-initiative-mvi-tokenizing-sustainable-social-impact-72f9b67069bd",
  },
];
