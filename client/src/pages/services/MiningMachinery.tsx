import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/mining_equipment_fabrication_workshop.png";

export default function MiningMachinery() {
  return (
    <ServiceLayout
      title="Machinery & Equipment"
      subtitle="Engineering high-performance mining equipment and industrial fabrication solutions."
      heroImage={heroImage}
      overview="EMRL's machinery division specializes in the fabrication, installation, and maintenance of heavy-duty mining equipment. From custom-built crushers to large-scale milling plants, we provide the technical infrastructure that powers Nigeria's industrial extraction sector."
      features={[
        "Custom Fabrication of Primary & Secondary Crushers",
        "Installation of Ball Mills & Mineral Processing Plants",
        "Heavy Equipment Leasing (Excavators, Dozers, Rigs)",
        "Preventive Maintenance & Field Repair Services",
        "Design of Conveyor Systems & Vibrating Screens",
        "Spare Parts Procurement & Supply Chain Support"
      ]}
      whyChooseUs={[
        { title: "Local Fabrication", desc: "Reducing costs and lead times through indigenous engineering." },
        { title: "Reliability", desc: "Robust designs tested in the harshest Nigerian mining terrains." },
        { title: "Technical Support", desc: "On-site maintenance teams available for rapid response." },
        { title: "Versatility", desc: "Equipment solutions tailored for both small-scale and industrial miners." }
      ]}
      methodology={[
        { title: "Needs Analysis", desc: "Evaluating tonnage requirements and material hardness for optimal design." },
        { title: "Engineering Design", desc: "CAD-based modeling and structural stress analysis." },
        { title: "Fabrication & QC", desc: "Precision welding and assembly using industrial-grade steel." },
        { title: "Deployment", desc: "On-site installation, calibration, and operator training." }
      ]}
      faqs={[
        { question: "Do you offer equipment on lease?", answer: "Yes, we have a diverse fleet of excavators, drilling rigs, and payloaders available for short and long-term lease." },
        { question: "Can you build custom-sized crushers?", answer: "Absolutely. We fabricate crushers and mills based on your specific output requirements (Tons Per Hour)." },
        { question: "Do you provide on-site repairs?", answer: "Yes, our mobile technical team provides 24/7 support for critical machinery breakdowns at the mine site." }
      ]}
    />
  );
}
