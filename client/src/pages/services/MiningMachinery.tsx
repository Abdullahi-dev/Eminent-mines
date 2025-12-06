import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/mining_equipment_fabrication_workshop.png";

export default function MiningMachinery() {
  return (
    <ServiceLayout
      title="Mining Machinery & Fabrication"
      subtitle="Design, fabrication and leasing of high-quality mining equipment."
      heroImage={heroImage}
      overview="We design and fabricate high-quality mining machinery, tools and industrial equipment tailored to the needs of mining, construction and processing companies. We also offer a robust fleet of heavy machinery for lease."
      features={[
        "Fabrication of Mineral Processing Machinery (Crushers, Mills)",
        "Equipment Leasing & Rentals (Excavators, Loaders, Rigs)",
        "Maintenance & Repair Services",
        "Custom Fabrication Solutions"
      ]}
      whyChooseUs={[
        { title: "Engineering", desc: "Strong engineering expertise and design capability." },
        { title: "Durability", desc: "Durable fabrication with premium materials." },
        { title: "Flexibility", desc: "Affordable leasing & maintenance packages." },
        { title: "Support", desc: "On-site technical support for leased equipment." }
      ]}
      methodology={[
        { title: "Consultation", desc: "Understanding your operational needs and capacity." },
        { title: "Design/Selection", desc: "Designing custom machinery or selecting the right rental unit." },
        { title: "Fabrication/Prep", desc: "Manufacturing or servicing the equipment for deployment." },
        { title: "Commissioning", desc: "Installation and operator training on site." }
      ]}
      faqs={[
        { question: "Do you build custom crushers?", answer: "Yes, we design crushers tailored to the specific hardness of your rock." },
        { question: "What rental terms do you offer?", answer: "We offer daily, weekly, and monthly rental terms." },
        { question: "Do you provide operators?", answer: "Yes, our rentals come with experienced operators." }
      ]}
    />
  );
}
