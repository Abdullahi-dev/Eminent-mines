import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/nigerian_mining_consultants_in_boardroom.png";

export default function MiningConsultancy() {
  return (
    <ServiceLayout
      title="Mining Consultancy"
      subtitle="Strategic advisory and regulatory navigation for Nigeria's mining sector."
      heroImage={heroImage}
      overview="EMRL provides top-tier consultancy services for investors, mining companies, and government agencies. We specialize in navigating the complex regulatory landscape of the Nigerian Ministry of Mines and Steel Development (MMSD), ensuring that your projects are compliant, bankable, and strategically positioned for success."
      features={[
        "MMSD Regulatory Compliance & Licensing (EL, ML, QL)",
        "Bankable Feasibility Studies (BFS) & Technical Audits",
        "Environmental Impact Assessments (EIA) & CDAs",
        "Mineral Investment Advisory & Market Entry Strategy",
        "Mine Closure Planning & Reclamation Strategy",
        "Community Relations & Conflict Resolution Advisory"
      ]}
      whyChooseUs={[
        { title: "Regulatory Insight", desc: "Unrivaled understanding of Nigerian mining laws and administrative processes." },
        { title: "Technical Integrity", desc: "Reports backed by registered engineers and geoscientists." },
        { title: "Risk Mitigation", desc: "Proactive identification of environmental and social risks." },
        { title: "Strategic Network", desc: "Direct connections with industry regulators and institutional investors." }
      ]}
      methodology={[
        { title: "Diagnostic Review", desc: "Analyzing current permits, technical data, and project status." },
        { title: "Strategic Roadmap", desc: "Developing a step-by-step path for licensing and compliance." },
        { title: "Execution & Filing", desc: "Professional preparation and submission of all technical documents." },
        { title: "Monitoring", desc: "Ongoing support to ensure long-term regulatory standing." }
      ]}
      faqs={[
        { question: "Can you help with Mining Lease applications?", answer: "Yes, we handle the entire process from initial exploration license conversion to final Mining Lease issuance." },
        { question: "What is a CDA?", answer: "A Community Development Agreement (CDA) is a mandatory document in Nigeria ensuring local communities benefit from mining projects. We specialize in negotiating and drafting these." },
        { question: "Do you provide technical audits?", answer: "Yes, we conduct comprehensive technical and financial audits for existing mining operations to identify areas for optimization." }
      ]}
    />
  );
}
