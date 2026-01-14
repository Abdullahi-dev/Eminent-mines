import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/cinematic_modern_mining_site_hero_background.png";

export default function ExplosivesManagement() {
  return (
    <ServiceLayout
      title="Explosives Management"
      subtitle="Secure, compliant, and professional blasting solutions for industrial mining."
      heroImage={heroImage}
      overview="EMRL operates a high-security mining magazine facility, providing end-to-end explosive management services. We handle everything from government-approved storage and inventory tracking to precision field blasting and regulatory permit procurement, ensuring 100% compliance with Nigeria's Explosives Act."
      features={[
        "Secure Licensed Mining Magazine (Storage Depot)",
        "Precision Controlled Blasting Services",
        "Real-Time Explosive Inventory Management",
        "Safe & Escorted Explosives Transportation",
        "Supply of High-Quality Detonators & ANFO",
        "MMSD & Police EOD Regulatory Support"
      ]}
      whyChooseUs={[
        { title: "Maximum Security", desc: "Fortified storage facility with 24/7 surveillance and government escort." },
        { title: "Blasting Precision", desc: "Optimized patterns that reduce fly-rock and vibration impact." },
        { title: "Full Compliance", desc: "Certified by Ministry of Mines, Nigeria Police EOD, and DSS." },
        { title: "Integrated Supply", desc: "One-stop shop for both storage and blasting accessories." }
      ]}
      methodology={[
        { title: "Magazine Intake", desc: "Digital logging and secure warehousing of explosive materials." },
        { title: "Operational Planning", desc: "Pre-blast surveys and technical design for safety and efficiency." },
        { title: "Secured Transport", desc: "Movement of materials from magazine to site under strict security." },
        { title: "Blast Execution", desc: "Professional detonation followed by post-blast fumes and vibration check." }
      ]}
      faqs={[
        { question: "What explosives are you licensed to store?", answer: "We store all classes of industrial explosives including Dynamites, ANFO, and electrical/non-electrical detonators." },
        { question: "Do you provide blasting accessories?", answer: "Yes, we supply cordtex, boosters, safety fuses, and other essential blasting accessories." },
        { question: "How is regulatory compliance handled?", answer: "We manage all permits from the Ministry of Mines, Nigeria Police Force (EOD), and other security agencies for our clients." }
      ]}
    />
  );
}
