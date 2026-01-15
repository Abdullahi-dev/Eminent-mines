import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import lithiumFieldImage from "@assets/WhatsApp_Image_2025-12-04_at_11.17.41_PM_1767759299456.jpeg";
import communityProjectImage from "@assets/image_1767761769382.png";
import investorForumImage from "@assets/generated_images/nigerian_mining_investment_forum_scene.png";
import mineralTestingImage from "@assets/generated_images/mineral_testing_laboratory.png";

const newsPosts = {
  "lithium-revolution": {
    title: "Nigeria's Lithium Revolution: EMRL Leads the Way",
    date: "October 24, 2025",
    category: "Industry News",
    author: "Engr. Yusuf Mohammed",
    img: lithiumFieldImage,
    content: `Nigeria stands at the precipice of a transformative moment in its economic history. As the world accelerates its transition toward clean energy, the global demand for lithium—the key component in electric vehicle batteries and renewable energy storage systems—has reached unprecedented heights. For Nigeria, this presents an extraordinary opportunity to leverage its abundant mineral resources and establish itself as a critical player in the global battery supply chain. At the forefront of this revolution is Eminent Mines Resources Limited (EMRL), a company that is not merely extracting minerals but is actively reshaping the narrative of what responsible, community-focused mining can achieve in Africa.

The global lithium market has experienced remarkable growth over the past decade, driven by the electrification of transportation and the expanding deployment of renewable energy infrastructure. According to industry analyses, global lithium demand is projected to increase fivefold by 2030, with supply chains scrambling to secure reliable sources of this critical mineral. The lithium-ion battery market, which accounts for approximately 65% of global lithium consumption, continues to expand as automotive manufacturers accelerate their electric vehicle programs and energy storage systems proliferate across residential, commercial, and utility-scale applications.

While much of the world's attention has focused on the "Lithium Triangle" of South America (Argentina, Bolivia, and Chile) and Australian operations, West Africa has emerged as the next frontier for lithium exploration and development. This geographic diversification reflects both geological reality and strategic imperative. Concentrated supply chains create vulnerability to geopolitical disruptions, logistics bottlenecks, and resource nationalism, prompting battery manufacturers and electric vehicle companies to seek diversified sourcing options.

EMRL's journey into lithium exploration began with a clear vision: to identify high-quality lithium deposits while maintaining the highest standards of environmental stewardship and community engagement. The company assembled specialized geological teams with extensive experience in West African lithium exploration, combining local expertise with international best practices to develop an exploration strategy suited to Nigeria's unique geological and operational environment.

Our geological teams conducted extensive surveys across Nigeria's northern license areas, employing modern exploration techniques and data-driven methodologies to pinpoint promising formations. The scientific approach has yielded exceptional results, with initial assays confirming high-purity spodumene deposits featuring mineral concentrations exceeding 6.5% Li2O—placing these prospects among the most promising in the entire West African sub-region.

Following the initial discovery, EMRL has moved decisively into the resource definition phase of development. Reverse Circulation (RC) drilling programs are underway to delineate the full extent and geometry of the ore body, with samples collected at regular intervals for comprehensive chemical analysis. This systematic approach to resource definition provides the technical foundation for future mine planning and development decisions, ensuring that the project moves forward on a solid scientific footing.

Beyond the technical success, the lithium project is designed with a "Community First" architecture, ensuring that exploration activities generate immediate local employment and infrastructure benefits. This approach reflects EMRL's broader philosophy that mining should serve as a catalyst for sustainable development rather than a source of temporary economic activity followed by long-term dependence.`
  },
  "sustainable-mining": {
    title: "Sustainable Mining: Integrating Community Growth and Social Equity",
    date: "October 12, 2025",
    category: "Sustainability",
    author: "Dr. Amina Bello",
    img: communityProjectImage,
    content: `Sustainability at Eminent Mines Resources Limited (EMRL) isn't just a corporate buzzword; it's a fundamental operational protocol that guides every drill bit and every community handshake. As we strategically scale our mining operations across the diverse landscapes of Nigeria, we are actively redefining the relationship between extractive industries and their host communities through a model of shared prosperity and environmental stewardship.

The traditional model of mining development has often left host communities in difficult circumstances. While mining companies have extracted significant wealth from the earth, local populations have frequently been left with few lasting benefits—temporary employment during the construction and operational phases, followed by economic decline when resources are depleted. EMRL recognised early in its development that a different approach was not only ethically preferable but also practically essential for long-term business success.

Our flagship 'School of Mines' initiative has recently reached a historic milestone, graduating its first cohort of 50 local youth. These young men and women have been rigorously trained in heavy machinery operation, advanced safety compliance, and modern mineral processing techniques. This initiative directly addresses the systemic gap between local talent and the technical requirements of a modern industrial mining operation, transforming job seekers into skilled professionals.

"True sustainability means that the day the mine eventually closes, the community must be fundamentally stronger, more skilled, and more resilient than the day it opened," says our Head of Sustainability. This philosophy is embedded in our Social License to Operate (SLO), which we view as an ongoing dialogue rather than a one-time permit.

EMRL employs a "Life-of-Mine" environmental strategy. Unlike traditional mining models that wait until closure to begin restoration, we practice concurrent reclamation. This means as we move through an ore body, we are simultaneously restoring the land behind us. Our reforestation program has already successfully planted over 5,000 indigenous trees in reclaimed zones, effectively restoring local biodiversity and preventing soil erosion.

We recognize that a healthy community requires a diverse economy. EMRL actively supports local Small and Medium Enterprises (SMEs) to become part of our supply chain. From catering and logistics to specialized maintenance services, we prioritize local vendors. This creates a powerful economic multiplier effect, where mining revenue stimulates growth across multiple sectors of the local economy.

Recent comprehensive environmental audits have confirmed the efficacy of our water engineering protocols. Our advanced borehole systems and filtration technologies have successfully protected local aquifers from contamination, ensuring that host communities have continued access to clean, safe drinking water.

In a recent commissioning ceremony in one of our host communities, local leaders joined EMRL executives to celebrate the opening of a new solar-powered water project. Dressed in vibrant traditional Ankara and EMRL-branded corporate attire, the scene was a powerful visual representation of our "Indigenous Insight" value—where global corporate standards meet local cultural respect.`
  },
  "global-investment": {
    title: "Global Investment Forum: Mining in West Africa",
    date: "September 28, 2025",
    category: "Investor Relations",
    author: "Executive Management",
    img: investorForumImage,
    content: `The West African Mining Investment Forum held in Lagos recently served as a powerful testament to the renewed global interest in Nigeria's solid mineral sector. EMRL's presentation on "The Intersection of Technology and Transparency" was a highlight of the three-day event.

Attended by institutional investors from London, New York, and Hong Kong, the forum provided a platform to showcase EMRL's robust project pipeline. Our CEO, Engr. Jamiu Rasheed Odofin, articulated a vision of a mining sector driven by data, compliance, and shared prosperity.

"Nigeria is open for business, but it is business on new terms—terms that prioritise scientific rigour and indigenous equity. We are building a mining industry that delivers value to investors, communities, and the nation alike, operating to the highest international standards while ensuring that Nigerians are the primary beneficiaries of their country's resources," Engr. Odofin remarked during the keynote session.

The forum resulted in several Memorandums of Understanding (MoUs) for strategic partnerships in mineral processing and value addition. This shift from raw ore export to domestic processing is a key component of EMRL's long-term strategy, aligned with the Federal Government's industrialization goals.

Investors praised EMRL's adherence to international ESG (Environmental, Social, and Governance) standards, noting that our transparent reporting and community engagement models significantly de-risk large-scale capital deployment in the region. The asset showcase also highlighted EMRL's diversified portfolio, which includes tantalum, gold, and other minerals with significant development potential.`
  },
  "mineral-tech": {
    title: "Advancements in Mineral Analysis Technology",
    date: "September 15, 2025",
    category: "Technology",
    author: "Lab Manager",
    img: mineralTestingImage,
    content: `Precision is the currency of trust in the mining industry. At Eminent Mines Resources Limited (EMRL), we are continuously investing in the latest analytical technologies to ensure that our clients and partners receive the most accurate data possible. Our laboratory division has recently integrated next-generation X-Ray Fluorescence (XRF) and X-Ray Diffraction (XRD) systems, representing a significant leap forward in our mineral quantification capabilities.

In a market where mineral grades can fluctuate by small margins and where minor differences in recovery can translate into millions of Naira of value, the ability to provide definitive, bankable data is not merely an operational advantage but a fundamental business imperative. This investment reflects EMRL's commitment to technical excellence and its recognition that analytical capability is fundamental to competitive success in the modern mining industry.

"In a market where mineral grades can fluctuate by small margins, the ability to provide definitive, bankable data is what sets EMRL apart," notes our Senior Lab Technologist. "Our new systems are calibrated to international standards, ensuring that an EMRL assay report is respected by traders and smelters globally."

The technological upgrade also includes advanced data management software that integrates directly with our geological modeling tools. This creates a seamless "Pit-to-Port" data chain, allowing for real-time adjustments to mining plans based on laboratory-verified grade control samples. This level of technical integration is a key component of our strategy to minimize waste and maximize the recovery of Nigeria's valuable mineral resources.

The integration of the new analytical systems into EMRL's laboratory workflow has delivered impressive performance improvements. Turnaround times for sample analysis have been reduced by 40% compared to previous methods, while simultaneously increasing the statistical confidence of geochemical assays. This combination of speed and accuracy creates substantial operational value, enabling faster decision-making without sacrificing the reliability that stakeholders require.`
  },
  "school-graduation": {
    title: "School of Mines Graduates First Cohort",
    date: "August 25, 2025",
    category: "Sustainability",
    author: "HR Department",
    img: communityProjectImage,
    content: `Eminent Mines Resources Limited (EMRL) proudly announces the graduation of the first cohort from its flagship School of Mines training programme. Fifty young Nigerians have successfully completed comprehensive training in heavy machinery operation, advanced safety compliance, and modern mineral processing techniques, emerging as skilled professionals ready to contribute to Nigeria's growing mining industry.

The graduation ceremony marked a historic occasion, celebrating not only the achievements of the fifty graduates but also the broader vision of professionalising Nigeria's mining sector through systematic skills development. The event brought together community leaders, government officials, industry representatives, and families of graduates in a celebration of educational achievement and economic opportunity.

EMRL recognised from its earliest days that successful mining development requires more than capital and technical expertise—it requires a skilled workforce capable of operating to international standards. The School of Mines represents the flagship of EMRL's skills development initiative, designed in consultation with international mining experts to reflect the actual skill requirements of contemporary industrial mining operations.

The curriculum addresses the full range of competencies required in modern mining operations, from technical skills in equipment operation and maintenance to softer skills in communication, teamwork, and workplace safety. This comprehensive approach ensures that graduates are prepared for the full range of challenges they will encounter in their professional careers.

EMRL has offered employment to all graduates of the first cohort, with positions available across the company's operations. This commitment to employing graduates reflects EMRL's belief in the quality of the training programme and its value in developing the workforce the company requires. Graduates will join EMRL as skilled operators, contributing to the company's mission of developing Nigeria's mining sector.`
  },
  "tantalum-discovery": {
    title: "New Discovery: High-Grade Tantalum Deposits",
    date: "August 10, 2025",
    category: "Industry News",
    author: "Chief Geologist",
    img: lithiumFieldImage,
    content: `Eminent Mines Resources Limited (EMRL) announces the discovery of significant tantalum concentrations in its northern licence areas, opening new opportunities in the critical minerals market and demonstrating the continued potential for major discoveries in Nigeria's underexplored terrain. Tantalum is classified as a critical mineral due to its essential role in electronics manufacturing and the concentrated nature of global supply.

The discovery drill hole EMRL-TA-001 intersected 42 metres of high-grade tantalum mineralisation from 15 metres depth, with individual sample grades reaching 0.08% Ta₂O₅. Subsequent drill holes have confirmed the continuity of mineralisation across the target area, confirming the significant lateral extent of the mineralised system. This finding reinforces Nigeria's emerging role as a significant source of minerals required for the global energy transition and technology sector.

Tantalum is essential for the manufacture of electronic components, particularly tantalum capacitors, which are used in virtually all modern electronic devices. From smartphones and computers to medical devices and automotive electronics, tantalum capacitors provide the compact, reliable energy storage that enables modern technology.

EMRL's tantalum discovery comes at a time when electronics manufacturers are increasingly seeking diversified, responsibly-sourced tantalum supplies. The company's commitment to transparent, responsible operations positions it favourably to meet these requirements and to establish relationships with customers who value supply chain integrity.

The current understanding of the deposit suggests significant resource potential, with the mineralised zone extending over several hundred metres in multiple directions. The development of the tantalum deposit would complement EMRL's lithium projects, enabling the company to offer multiple critical minerals to the market and providing resilience against commodity price volatility.`
  },
  "environmental-excellence": {
    title: "Environmental Excellence: 5,000 Trees Planted",
    date: "July 28, 2025",
    category: "Sustainability",
    author: "Environmental Team",
    img: communityProjectImage,
    content: `Eminent Mines Resources Limited (EMRL) announces that its ambitious reforestation programme has reached a significant milestone, with 5,000 indigenous trees now planted across reclaimed mining areas. This achievement reflects EMRL's unwavering commitment to environmental stewardship and its innovative approach to concurrent reclamation—restoring land as mining progresses rather than waiting until operations conclude.

The reforestation programme represents one of the most ambitious environmental restoration initiatives undertaken by any mining operation in Nigeria and demonstrates that extractive industries and environmental protection can coexist harmoniously. The milestone coincides with growing recognition of the importance of nature-based solutions to global environmental challenges, including climate change, biodiversity loss, and land degradation.

Indigenous tree species have been carefully selected for each planting site, ensuring that restored areas support native ecosystems rather than introducing potentially invasive exotic species. Seed collection and nursery propagation have been coordinated with local communities, creating income opportunities while ensuring that planting stock is well-adapted to local conditions.

Monitoring data indicate that the reforestation programme is achieving strong survival and growth performance. Current survival rates exceed 85% across all project areas, significantly exceeding typical survival rates for reforestation projects in the region. This performance reflects the quality of site preparation, species selection, and maintenance activities.

Forests play essential roles in maintaining ecological balance, regulating climate, supporting biodiversity, and providing ecosystem services that benefit human communities. The restoration of forest cover on reclaimed mining lands represents an opportunity to create environmental value that persists long after mining operations conclude, stabilising soils and reducing erosion and sedimentation of waterways.`
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
