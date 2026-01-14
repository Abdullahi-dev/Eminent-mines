import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/mineral_export_loading_operation.png";

export default function MineralTrading() {
  return (
    <ServiceLayout
      title="Mineral Trading & Supply"
      subtitle="Bridging the gap between Nigerian mineral wealth and global industrial demand."
      heroImage={heroImage}
      overview="EMRL is a licensed mineral trading powerhouse, specializing in the ethical sourcing and global export of high-grade solid minerals. We operate a sophisticated value chain that ensures transparency, quality compliance, and reliable supply for international off-takers and local industries."
      features={[
        "Ethical Sourcing of Lead, Zinc, Lithium, and Gold",
        "Standardized Mineral Beneficiation & Processing",
        "Comprehensive Export Documentation (NXP, CO, CCVO)",
        "End-to-End Logistics & Freight Management",
        "Strategic Warehousing & Stockpile Management",
        "Market Intelligence & Price Advisory Services"
      ]}
      whyChooseUs={[
        { title: "Quality Control", desc: "Rigorous lab testing for purity and moisture content at our EMRL Lab." },
        { title: "Reliability", desc: "Stable supply chains backed by our own mining operations." },
        { title: "Global Network", desc: "Established relationships with shipping lines and international smelters." },
        { title: "Transparency", desc: "Ethical sourcing practices that meet international ESG standards." }
      ]}
      methodology={[
        { title: "Sourcing & QC", desc: "Primary sourcing from certified pits followed by immediate grade analysis." },
        { title: "Processing", desc: "Crushing, sorting, and packaging to meet specific client mesh sizes." },
        { title: "Documentation", desc: "Handling all MMSD permits, customs clearance, and export financing." },
        { title: "Execution", desc: "Seamless delivery via ocean freight or local haulage to industrial hubs." }
      ]}
      faqs={[
        { question: "What minerals do you currently export?", answer: "We primarily trade in high-grade Lithium ore, Lead ore, Zinc ore, and Gold dore bars." },
        { question: "Do you handle local supply within Nigeria?", answer: "Yes, we supply minerals in bulk to local manufacturing and processing industries across Nigeria." },
        { question: "Are your minerals ethically sourced?", answer: "Absolutely. We ensure all our minerals are traceable and sourced in compliance with child-labor-free and environmentally conscious laws." }
      ]}
    />
  );
}
