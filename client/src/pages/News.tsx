import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Search, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";

import lithiumFieldImage from "@assets/generated_images/nigerian_geologists_examining_lithium_ore_outdoors.png";
import communityProjectImage from "@assets/generated_images/community_development_project_in_mining_area.png";
import investorForumImage from "@assets/generated_images/nigerian_mining_investment_forum_scene.png";
import mineralTestingImage from "@assets/generated_images/mineral_testing_laboratory.png";

const articles = [
  {
    id: "lithium-revolution",
    title: "Nigeria's Lithium Revolution: EMRL Leads the Way",
    excerpt: "The global demand for clean energy has placed Nigeria's lithium deposits in the spotlight. EMRL is leading the charge with sustainable extraction practices that prioritize both industrial output and environmental integrity.",
    date: "Oct 24, 2025",
    author: "Engr. Yusuf Mohammed",
    category: "Industry News",
    image: lithiumFieldImage,
    tags: ["Lithium", "Clean Energy", "Mining Innovation"]
  },
  {
    id: "sustainable-mining",
    title: "Sustainable Mining: Integrating Community Growth",
    excerpt: "At EMRL, we believe mining should be a catalyst for local development. Our new 'School of Mines' initiative is providing young Nigerians with the technical skills needed to excel in the modern mining workforce.",
    date: "Oct 12, 2025",
    author: "Dr. Amina Bello",
    category: "Sustainability",
    image: communityProjectImage,
    tags: ["Education", "CSR", "Community"]
  },
  {
    id: "global-investment",
    title: "Global Investment Forum: Mining in West Africa",
    excerpt: "The recent mining investment forum in Abuja highlighted the massive potential for international partnerships in Nigeria's solid mineral sector. EMRL showcased its portfolio of high-value assets to global investors.",
    date: "Sep 28, 2025",
    author: "Executive Management",
    category: "Investor Relations",
    image: investorForumImage,
    tags: ["Investment", "Economy", "Partnership"]
  },
  {
    id: "mineral-tech",
    title: "Advancements in Mineral Analysis Technology",
    excerpt: "Our laboratory division has recently integrated new XRF technology, allowing for even more precise mineral grade quantification. This advancement ensures that EMRL remains at the forefront of quality assurance.",
    date: "Sep 15, 2025",
    author: "Lab Manager",
    category: "Technology",
    image: mineralTestingImage,
    tags: ["Laboratory", "Technology", "Quality Control"]
  }
];

const categories = ["All", "Industry News", "Sustainability", "Investor Relations", "Technology"];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-zinc-900 py-24 relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
              News & <span className="text-primary text-glow">Insights.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Stay updated with the latest developments in the Nigerian mining sector and EMRL's strategic initiatives.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 h-12 bg-zinc-50 border-zinc-200 rounded-xl focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredArticles.map((article, i) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 bg-zinc-50 p-6 rounded-[2.5rem] border border-zinc-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:w-1/2 h-64 md:h-auto rounded-[2rem] overflow-hidden shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary">
                      <span className="px-3 py-1 bg-primary/10 rounded-full">{article.category}</span>
                      <span className="text-zinc-400">{article.date}</span>
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <a className="block">
                        <h3 className="text-2xl font-black text-zinc-900 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h3>
                      </a>
                    </Link>
                    <p className="text-zinc-600 text-sm leading-relaxed font-medium line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-200/50">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
                      <User className="h-3 w-3 text-primary" /> {article.author}
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <a className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary group/btn">
                        Read More <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <Newspaper className="h-16 w-16 text-zinc-200 mx-auto mb-4" />
              <h3 className="text-xl font-black text-zinc-900">No articles found</h3>
              <p className="text-zinc-500">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
