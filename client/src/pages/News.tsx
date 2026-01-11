import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import lithiumFieldImage from "@assets/WhatsApp_Image_2025-12-04_at_11.17.41_PM_1767759299456.jpeg";
import communityProjectImage from "@assets/generated_images/community_development_project_in_mining_area.png";
import investorForumImage from "@assets/generated_images/nigerian_mining_investment_forum_scene.png";

const newsPosts = [
  {
    id: "lithium-revolution",
    title: "Nigeria's Lithium Revolution: EMRL Leads the Way",
    date: "Oct 24, 2025",
    category: "Industry News",
    author: "EMRL Communications",
    img: lithiumFieldImage,
    excerpt: "EMRL's latest exploration results show record-high purity in our new lithium prospects across the northern corridors. This milestone positions Nigeria as a key player in the global energy transition."
  },
  {
    id: "sustainable-mining",
    title: "Sustainable Mining: Integrating Community Growth",
    date: "Oct 12, 2025",
    category: "Sustainability",
    author: "Sustainability Dept",
    img: communityProjectImage,
    excerpt: "Our new 'School of Mines' initiative is transforming local community engagement by providing technical training and sustainable livelihood opportunities for host communities."
  },
  {
    id: "global-investment",
    title: "Global Investment Forum: Mining in West Africa",
    date: "Sep 28, 2025",
    category: "Investor Relations",
    author: "Strategy Team",
    img: investorForumImage,
    excerpt: "EMRL recently hosted a strategic investment forum in Lagos, bringing together global institutional investors and government representatives to discuss the future of Nigerian mineral resources."
  }
];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-zinc-900 mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-zinc-600">
              Stay updated with the latest developments in Nigerian mining and EMRL's strategic projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-zinc-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-black text-zinc-900 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/news/${post.id}`}>
                    <a className="inline-flex items-center text-primary font-black uppercase tracking-widest text-xs pt-4 group/btn hover:underline">
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
