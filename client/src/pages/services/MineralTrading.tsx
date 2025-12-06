import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/mineral_export_loading_operation.png";

export default function MineralTrading() {
  return (
    <ServiceLayout
      title="Mineral Trading & Supply"
      subtitle="Sourcing, processing and export of Nigeria's finest solid minerals."
      heroImage={heroImage}
      overview="Eminent Mines Resources Ltd engages in the large-scale sourcing, processing and export of Nigeria’s finest solid minerals to both local and international buyers. We ensure all our products meet international purity standards."
      features={[
        "Trading of Lead, Zinc, Lithium, Kaolin, Feldspar, Quartz, Mica, Gold",
        "Bulk supply for local industries",
        "International mineral export services",
        "Verified sourcing from licensed mining locations",
        "Quality testing/documentation for export readiness"
      ]}
      whyChooseUs={[
        { title: "Trust", desc: "Trusted supplier to major industries and exporters." },
        { title: "Quality", desc: "High purity minerals with documented lab analysis." },
        { title: "Logistics", desc: "Reliable logistics & timely delivery network." },
        { title: "Compliance", desc: "Fully licensed for export with all necessary permits." }
      ]}
      methodology={[
        { title: "Sourcing", desc: "Direct procurement from our mines or partner sites." },
        { title: "Processing", desc: "Cleaning, crushing, and sorting to meet buyer specs." },
        { title: "Testing", desc: "Laboratory analysis to certify grade and purity." },
        { title: "Logistics", desc: "Packaging, loading, and transport to port or factory." }
      ]}
      faqs={[
        { question: "What is your minimum order quantity?", answer: "We typically handle bulk orders starting from 30 tons (one truckload)." },
        { question: "Do you export internationally?", answer: "Yes, we have experience exporting to China, Europe, and the Americas." },
        { question: "Can I get samples?", answer: "Yes, we provide samples for testing upon request." }
      ]}
    />
  );
}
