import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import lithiumFieldImage from "@assets/WhatsApp_Image_2025-12-04_at_11.17.41_PM_1767759299456.jpeg";
import communityProjectImage from "@assets/generated_images/community_development_project_in_mining_area.png";
import investorForumImage from "@assets/generated_images/nigerian_mining_investment_forum_scene.png";

const newsPosts = {
  "lithium-revolution": {
    title: "Nigeria's Lithium Revolution: EMRL Leads the Way",
    date: "Oct 24, 2025",
    category: "Industry News",
    author: "EMRL Communications",
    img: lithiumFieldImage,
    content: `
      EMRL's latest exploration results show record-high purity in our new lithium prospects across the northern corridors. 
      This milestone positions Nigeria as a key player in the global energy transition. 
      The discovery comes after 18 months of intensive geological mapping and geochemical analysis. 
      Our team of experts has identified several high-potential zones that promise sustainable extraction for years to come.
    `
  },
  "sustainable-mining": {
    title: "Sustainable Mining: Integrating Community Growth",
    date: "Oct 12, 2025",
    category: "Sustainability",
    author: "Sustainability Dept",
    img: communityProjectImage,
    content: `
      Our new 'School of Mines' initiative is transforming local community engagement by providing technical training 
      and sustainable livelihood opportunities for host communities. We believe that for mining to be truly successful, 
      it must benefit the people living around our project sites. This program includes scholarships, 
      vocational training in heavy machinery operation, and community-led environmental monitoring.
    `
  },
  "global-investment": {
    title: "Global Investment Forum: Mining in West Africa",
    date: "Sep 28, 2025",
    category: "Investor Relations",
    author: "Strategy Team",
    img: investorForumImage,
    content: `
      EMRL recently hosted a strategic investment forum in Lagos, bringing together global institutional investors 
      and government representatives to discuss the future of Nigerian mineral resources. 
      The forum highlighted the significant untapped potential in Nigeria's solid mineral sector 
      and showcased EMRL's transparent and scientific approach to project development.
    `
  }
};

export default function NewsDetail() {
  const [, params] = useRoute("/news/:id");
  const post = newsPosts[params?.id as keyof typeof newsPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link href="/news" className="text-primary hover:underline">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/news">
            <a className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
            </a>
          </Link>
          
          <img 
            src={post.img} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-3xl mb-8 shadow-lg"
          />
          
          <div className="flex items-center gap-4 text-sm text-zinc-400 font-medium mb-6">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg text-zinc-600 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
