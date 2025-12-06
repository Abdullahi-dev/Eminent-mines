import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/cinematic_modern_mining_site_hero_background.png";

export default function MiningQuarry() {
  return (
    <ServiceLayout
      title="Mining & Quarry Operations"
      subtitle="Delivering world-class mining and quarrying solutions that meet global standards."
      heroImage={heroImage}
      overview="At Eminent Mines Resources Ltd, we deliver world-class mining and quarrying solutions that meet global standards. Our team combines decades of expertise with modern technologies to deliver safe, efficient and profitable mining operations for clients across Nigeria and beyond."
      features={[
        "Mining Site Infrastructure Development",
        "Quarry Installation & Management",
        "Open-Pit Mine Design, Planning & Optimization",
        "Drilling & Blasting Services",
        "Mine Feasibility & Technical Studies"
      ]}
      whyChooseUs={[
        { title: "Expertise", desc: "Experienced mining engineers and field experts." },
        { title: "Compliance", desc: "Strict adherence to Nigerian mining laws & global standards." },
        { title: "Capacity", desc: "End-to-end project execution capacity." },
        { title: "Safety", desc: "Strong focus on safety, efficiency and sustainability." }
      ]}
      methodology={[
        { title: "Site Assessment", desc: "Comprehensive survey and geological evaluation of the mining site." },
        { title: "Planning & Design", desc: "Detailed mine design, safety planning, and operational scheduling." },
        { title: "Infrastructure Setup", desc: "Establishment of camps, access roads, and machinery deployment." },
        { title: "Extraction & Processing", desc: "Efficient mineral extraction using modern blasting and crushing techniques." }
      ]}
      faqs={[
        { question: "What minerals do you specialize in?", answer: "We specialize in a wide range of solid minerals including Gold, Lithium, Lead, Zinc, and Granite for quarrying." },
        { question: "Do you handle regulatory permits?", answer: "Yes, we ensure all our operations and client projects are fully licensed and compliant with Federal Ministry of Mines regulations." },
        { question: "Can you manage an existing quarry?", answer: "Absolutely. We offer management contracts to optimize production and profitability for existing quarry owners." }
      ]}
    />
  );
}
