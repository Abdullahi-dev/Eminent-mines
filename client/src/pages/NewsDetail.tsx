import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import lithiumFieldImage from "@assets/WhatsApp_Image_2025-12-04_at_11.17.41_PM_1767759299456.jpeg";
import communityProjectImage from "@assets/image_1767761769382.png";
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
    title: "Sustainable Mining: Integrating Community Growth and Social Equity",
    date: "Oct 12, 2025",
    category: "Sustainability",
    author: "Sustainability Dept",
    img: communityProjectImage,
    content: `Sustainability at Eminent Mines Resources Limited (EMRL) isn't just a corporate buzzword; it's a fundamental operational protocol that guides every drill bit and every community handshake. As we strategically scale our mining operations across the diverse landscapes of Nigeria, we are actively redefining the relationship between extractive industries and their host communities through a model of shared prosperity and environmental stewardship.

Our flagship 'School of Mines' initiative has recently reached a historic milestone, graduating its first cohort of 50 local youth. These young men and women have been rigorously trained in heavy machinery operation, advanced safety compliance, and modern mineral processing techniques. This initiative directly addresses the systemic gap between local talent and the technical requirements of a modern industrial mining operation, transforming job seekers into skilled professionals.

"True sustainability means that the day the mine eventually closes, the community must be fundamentally stronger, more skilled, and more resilient than the day it opened," says our Head of Sustainability. This philosophy is embedded in our Social License to Operate (SLO), which we view as an ongoing dialogue rather than a one-time permit.

Our strategic approach to community integration is built upon three core pillars:

1. Technical Knowledge Transfer & Capacity Building:
We don't just provide jobs; we provide careers. By empowering local residents with globally recognized mining certifications and technical skills, we ensure that the economic benefits of mining remain within the community long-term. Our training programs are designed to meet international standards, making our graduates competitive in the global mining labor market.

2. Environmental Stewardship & Concurrent Reclamation:
EMRL employs a "Life-of-Mine" environmental strategy. Unlike traditional mining models that wait until closure to begin restoration, we practice concurrent reclamation. This means as we move through an ore body, we are simultaneously restoring the land behind us. Our reforestation program has already successfully planted over 5,000 indigenous trees in reclaimed zones, effectively restoring local biodiversity and preventing soil erosion.

3. Economic Diversification & SME Support:
We recognize that a healthy community requires a diverse economy. EMRL actively supports local Small and Medium Enterprises (SMEs) to become part of our supply chain. From catering and logistics to specialized maintenance services, we prioritize local vendors. This creates a powerful economic multiplier effect, where mining revenue stimulates growth across multiple sectors of the local economy.

Recent comprehensive environmental audits have confirmed the efficacy of our water engineering protocols. Our advanced borehole systems and filtration technologies have successfully protected local aquifers from contamination, ensuring that host communities have continued access to clean, safe drinking water. 

In a recent commissioning ceremony in one of our host communities, local leaders joined EMRL executives to celebrate the opening of a new solar-powered water project. Dressed in vibrant traditional Ankara and EMRL-branded corporate attire, the scene was a powerful visual representation of our "Indigenous Insight" value—where global corporate standards meet local cultural respect.

As Nigeria continues to position itself as a global hub for solid minerals, EMRL remains dedicated to proving that profitable mining and community development are not mutually exclusive, but are in fact two sides of the same coin of national progress.`
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
  },
  "mineral-tech": {
    title: "Advancements in Mineral Analysis Technology",
    date: "Sep 15, 2025",
    category: "Technology",
    author: "EMRL Lab Manager",
    img: "/attached_assets/generated_images/mineral_testing_laboratory.png",
    content: `Precision is the currency of trust in the mining industry. At Eminent Mines Resources Limited (EMRL), we are continuously investing in the latest analytical technologies to ensure that our clients and partners receive the most accurate data possible. Our laboratory division has recently integrated next-generation X-Ray Fluorescence (XRF) and X-Ray Diffraction (XRD) systems, representing a significant leap forward in our mineral quantification capabilities.

This new technology allows for non-destructive, high-precision analysis of base metals, rare earth elements, and industrial minerals with detection limits that were previously unattainable in a commercial setting. The integration of these systems into our workflow has reduced turnaround times by 40% while simultaneously increasing the statistical confidence of our geochemical assays.

"In a market where mineral grades can fluctuate by small margins, the ability to provide definitive, bankable data is what sets EMRL apart," notes our Senior Lab Technologist. "Our new systems are calibrated to international standards, ensuring that an EMRL assay report is respected by traders and smelters globally."

The technological upgrade also includes advanced data management software that integrates directly with our geological modeling tools. This creates a seamless "Pit-to-Port" data chain, allowing for real-time adjustments to mining plans based on laboratory-verified grade control samples. This level of technical integration is a key component of our strategy to minimize waste and maximize the recovery of Nigeria's valuable mineral resources.

Furthermore, we are expanding our environmental testing capabilities. The new laboratory equipment is capable of detecting trace elements in soil and water samples at parts-per-billion (ppb) levels. This ensures that our operations—and those of our consultancy clients—adhere to the highest standards of environmental compliance and groundwater protection.`
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
