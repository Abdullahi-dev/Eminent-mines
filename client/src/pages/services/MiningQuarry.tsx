import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/cinematic_modern_mining_site_hero_background.png";

export default function MiningQuarry() {
  return (
    <ServiceLayout
      title="Mining & Quarry Operations"
      subtitle="Precision extraction and world-class pit-site management for Nigeria's mineral wealth."
      heroImage={heroImage}
      overview="At Eminent Mines Resources Ltd, we deliver world-class mining and quarrying solutions that meet global standards. Our team combines decades of expertise with modern technologies to deliver safe, efficient and profitable mining operations for clients across Nigeria and beyond. We handle everything from initial site preparation to final mineral processing, ensuring maximum recovery and minimal environmental impact."
      features={[
        "Mining Site Infrastructure Development (Access Roads, Camps)",
        "Quarry Installation & Full-Scale Management",
        "Open-Pit Mine Design, Planning & 3D Optimization",
        "Precision Drilling & Controlled Blasting Services",
        "Comprehensive Mine Feasibility & Technical Studies",
        "Pit-to-Port Logistics & Heavy Equipment Deployment"
      ]}
      whyChooseUs={[
        { title: "Technical Expertise", desc: "Our COREN registered mining engineers lead every operation with precision." },
        { title: "MMSD Compliance", desc: "100% adherence to the Nigerian Minerals and Mining Act 2007." },
        { title: "Asset Density", desc: "We own and operate our own fleet of excavators, rigs, and crushers." },
        { title: "Safety Culture", desc: "Zero-harm policy with integrated occupational health and safety protocols." }
      ]}
      methodology={[
        { title: "Site Assessment", desc: "In-depth geological survey and topographic evaluation of the mineralized zone." },
        { title: "Strategic Design", desc: "Developing optimized pit geometry and safety berms for stable extraction." },
        { title: "Infrastructure Setup", desc: "Rapid deployment of mining camps, access roads, and logistics hubs." },
        { title: "Industrial Extraction", desc: "Systematic mineral recovery using modern blasting and high-tonnage hauling." }
      ]}
      faqs={[
        { question: "What minerals do you specialize in?", answer: "We specialize in a wide range of solid minerals including Gold, Lithium, Lead, Zinc, and high-quality Granite for construction." },
        { question: "Do you handle regulatory permits?", answer: "Yes, we manage all Federal Ministry of Mines (MMSD) documentation, including mining leases and community development agreements." },
        { question: "Can you manage an existing quarry?", answer: "Absolutely. We provide full management contracts to optimize production, reduce costs, and increase profitability for quarry owners." }
      ]}
    />
  );
}
