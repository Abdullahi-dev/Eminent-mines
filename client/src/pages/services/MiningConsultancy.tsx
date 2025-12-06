import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/nigerian_mining_consultants_in_boardroom.png";

export default function MiningConsultancy() {
  return (
    <ServiceLayout
      title="Mining Consultancy & General Contracting"
      subtitle="Strategic support and professional guidance for the mining sector."
      heroImage={heroImage}
      overview="We provide strategic support, professional guidance and general contracting services that enable individuals and businesses to navigate the mining sector effortlessly. From licensing to community relations, we handle the complexities of mining business."
      features={[
        "Mining Consultancy & Advisory",
        "License & Permit Advisory",
        "Regulatory Compliance & Documentation",
        "Environmental & Community Impact Support",
        "General Contracting for Mining Projects"
      ]}
      whyChooseUs={[
        { title: "Knowledge", desc: "Deep understanding of Nigerian mining regulations." },
        { title: "Network", desc: "Strong relationships with regulatory bodies." },
        { title: "Transparency", desc: "Fast, reliable and transparent consultancy services." },
        { title: "Holistic", desc: "Support for both startups and established mining companies." }
      ]}
      methodology={[
        { title: "Assessment", desc: "Reviewing project status and regulatory requirements." },
        { title: "Strategy", desc: "Developing a roadmap for compliance and operations." },
        { title: "Execution", desc: "Handling documentation, filings, and negotiations." },
        { title: "Monitoring", desc: "Ongoing support to ensure continued compliance." }
      ]}
      faqs={[
        { question: "Can you help get a mining lease?", answer: "Yes, we assist with securing Exploration Licenses, Mining Leases, and Quarry Leases." },
        { question: "Do you handle community agreements?", answer: "Yes, we facilitate Community Development Agreements (CDA) required by law." },
        { question: "Do you offer feasibility studies?", answer: "Yes, we conduct full technical and economic feasibility studies." }
      ]}
    />
  );
}
