import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/cinematic_modern_mining_site_hero_background.png";

export default function ExplosivesManagement() {
  return (
    <ServiceLayout
      title="Explosives Management & Mining Magazine Services"
      subtitle="Secure and compliant solutions for storage, handling, and management of mining explosives."
      heroImage={heroImage}
      overview="EMRL operates a secure, regulated, and fully compliant mining magazine facility for storing and managing explosives used in blasting operations. We provide comprehensive explosive management services including licensed storage, inventory control, safe transportation, and supply of blasting accessories, all in compliance with Nigeria's Explosives Act and global blasting standards."
      features={[
        "Licensed Mining Magazine (Explosives Depot)",
        "Secure Storage of Explosives & Accessories",
        "Explosive Inventory Management & Tracking",
        "Safe Explosive Transportation Services",
        "Supply of Blasting Accessories",
        "Explosives Safety & Compliance Training"
      ]}
      whyChooseUs={[
        { title: "Licensed Facility", desc: "Purpose-built, secure magazine compliant with all regulatory requirements." },
        { title: "Digital Tracking", desc: "Complete inventory control with intake, withdrawal, and authorization logs." },
        { title: "Expert Team", desc: "Trained personnel certified in explosive handling and safety management." },
        { title: "Regulatory Excellence", desc: "100% compliance with Nigeria's Explosives Act and federal standards." }
      ]}
      methodology={[
        { title: "Facility Security", desc: "Purpose-built, fortified storage facility for all classes of explosives." },
        { title: "Inventory Control", desc: "Digitized tracking of stock intake, withdrawals, daily logs, and personnel authorization." },
        { title: "Safe Transportation", desc: "Escort-secured and government-approved movement of explosives to mining sites." },
        { title: "Regulatory Support", desc: "Assistance in obtaining approvals from Ministry of Mines, Nigeria Police EOD, Federal Ministry of Environment, SSS, and Civil Defence." }
      ]}
      faqs={[
        { question: "What explosives do you store?", answer: "We store all approved mining explosives including dynamites, cordtex, gelatin, ANFO, and detonators." },
        { question: "Do you offer blasting training?", answer: "Yes, we provide comprehensive safety training for blasters, supervisors, and field operators." },
        { question: "How is safety ensured?", answer: "We maintain strict security protocols, regular inspections, and full compliance with Nigeria's Explosives Act." },
        { question: "Can you supply blasting materials?", answer: "Yes, we supply high-quality detonators, cordtex, boosters, ANFO, safety fuses, and electric detonators." }
      ]}
    />
  );
}
