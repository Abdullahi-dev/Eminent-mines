import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/geologists_examining_rock_samples.png";

export default function GeologicalExploration() {
  return (
    <ServiceLayout
      title="Geological & Exploration Services"
      subtitle="Advanced geoscience solutions to discover, quantify and develop mineral resources."
      heroImage={heroImage}
      overview="We provide advanced geoscience and exploration solutions to help investors, miners and landowners discover, quantify and develop mineral resources with accuracy and confidence. Our team uses state-of-the-art technology to minimize risk and maximize discovery potential."
      features={[
        "Geosciences Exploration Services",
        "Geological Mapping & Structural Interpretation",
        "Mineral Sampling & Laboratory Analysis",
        "Remote Sensing & GIS Mapping"
      ]}
      whyChooseUs={[
        { title: "Skilled Team", desc: "Highly skilled geologists and field researchers." },
        { title: "Technology", desc: "Modern exploration tools & GIS technologies." },
        { title: "Reliability", desc: "Clear, reliable mineral reporting (JORC compliant)." },
        { title: "Scalability", desc: "Supports both small-scale and large-scale mining investors." }
      ]}
      methodology={[
        { title: "Desktop Study", desc: "Analysis of existing geological data and satellite imagery." },
        { title: "Field Mapping", desc: "On-site geological survey and sample collection." },
        { title: "Lab Analysis", desc: "Geochemical testing of samples to determine mineral content." },
        { title: "Resource Modeling", desc: "3D modeling of the deposit to estimate volume and value." }
      ]}
      faqs={[
        { question: "How long does an exploration survey take?", answer: "It depends on the site size, but a preliminary survey typically takes 2-4 weeks." },
        { question: "Do you provide drilling services?", answer: "Yes, we offer core drilling services to recover deep samples for analysis." },
        { question: "Is your reporting accepted by banks?", answer: "Yes, our technical reports meet the standards required for bankable feasibility studies." }
      ]}
    />
  );
}
