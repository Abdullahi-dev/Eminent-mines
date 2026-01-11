import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from "lucide-react";
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
    content: `Nigeria is currently witnessing a transformative shift in its mining sector, with lithium emerging as the cornerstone of the nation's energy transition strategy. Eminent Mines Resources Limited (EMRL) is proud to be at the forefront of this revolution.

Recent exploration activities led by our specialized geological teams have yielded exceptional results across our northern license areas. Initial assays confirm high-purity spodumene deposits with mineral concentrations exceeding 6.5% Li2O, placing these prospects among the most promising in the West African sub-region.

"Our commitment to scientific excellence has enabled us to identify these high-potential zones with surgical precision," states our Chief Geologist. "We aren't just looking for minerals; we are defining the economic sovereignty of Nigeria's future energy landscape."

The project has already moved into the resource definition phase, utilizing modern RC (Reverse Circulation) drilling to delineate the ore body. This milestone isn't just a victory for EMRL, but a clear signal to global battery manufacturers that Nigeria is ready for large-scale, sustainable lithium supply chains.

Beyond the technical success, the lithium project is designed with a "Community First" architecture, ensuring that exploration activities generate immediate local employment and infrastructure benefits.`
  },
  "sustainable-mining": {
    title: "Sustainable Mining: Integrating Community Growth",
    date: "Oct 12, 2025",
    category: "Sustainability",
    author: "Sustainability Dept",
    img: communityProjectImage,
    content: `Sustainability at EMRL isn't a buzzword; it's a fundamental operational protocol. As we scale our operations across Nigeria, we are redefining the relationship between extractive industries and their host communities.

Our flagship 'School of Mines' initiative has recently graduated its first cohort of 50 local youth, trained in heavy machinery operation and safety compliance. This initiative directly addresses the historic gap between local talent and technical industrial requirements.

"True sustainability means that the day the mine closes, the community is stronger than the day it opened," says our Head of Sustainability. 

Our approach integrates three core pillars:
1. Technical Knowledge Transfer: Empowering locals with globally recognized mining skills.
2. Environmental Stewardship: Concurrent reclamation strategies that restore the land alongside mining activities.
3. Economic Diversification: Supporting local SMEs to provide services to the mining site, ensuring a resilient local economy.

Recent environmental audits have confirmed that our water engineering protocols have successfully protected local aquifers, while our reforestation program has already planted over 5,000 indigenous trees in reclaimed areas.`
  },
  "global-investment": {
    title: "Global Investment Forum: Mining in West Africa",
    date: "Sep 28, 2025",
    category: "Investor Relations",
    author: "Strategy Team",
    img: investorForumImage,
    content: `The West African Mining Investment Forum held in Lagos recently served as a powerful testament to the renewed global interest in Nigeria's solid mineral sector. EMRL's presentation on "The Intersection of Technology and Transparency" was a highlight of the three-day event.

Attended by institutional investors from London, New York, and Hong Kong, the forum provided a platform to showcase EMRL's robust project pipeline. Our CEO, Engr. Jamiu Rasheed Odofin, articulated a vision of a mining sector driven by data, compliance, and shared prosperity.

"Nigeria is open for business, but it is business on new terms—terms that prioritize scientific rigor and indigenous equity," Engr. Odofin remarked during the keynote session.

The forum resulted in several Memorandums of Understanding (MoUs) for strategic partnerships in mineral processing and value addition. This shift from raw ore export to domestic processing is a key component of EMRL's long-term strategy, aligned with the Federal Government's industrialization goals.

Investors praised EMRL's adherence to international ESG (Environmental, Social, and Governance) standards, noting that our transparent reporting and community engagement models significantly de-risk large-scale capital deployment in the region.`
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
          <Link href="/news" className="text-primary hover:underline font-bold">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/news">
            <a className="inline-flex items-center text-primary font-bold mb-8 hover:gap-2 transition-all group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </a>
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">
                {post.category}
              </span>
              <div className="h-px flex-grow bg-zinc-100" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">{post.author}</p>
                  <p className="text-xs text-zinc-500">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-zinc-400 hover:text-primary transition-colors"><Share2 className="h-5 w-5" /></button>
                <button className="text-zinc-400 hover:text-primary transition-colors"><MessageSquare className="h-5 w-5" /></button>
              </div>
            </div>
          </header>
          
          <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src={post.img} 
              alt={post.title} 
              className="w-full h-auto aspect-video object-cover"
            />
          </div>

          <div className="prose prose-zinc max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-lg text-zinc-600 leading-relaxed mb-6 font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-zinc-100">
            <div className="bg-zinc-50 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Enjoying our insights?</h3>
              <p className="text-zinc-600 mb-8 max-w-md mx-auto">Subscribe to our newsletter for the latest updates on Nigerian mining and EMRL projects.</p>
              <div className="flex gap-2 max-w-sm mx-auto">
                <input type="email" placeholder="Your email address" className="flex-grow rounded-full px-6 py-3 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <button className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all">Join</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
