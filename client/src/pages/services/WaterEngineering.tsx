import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/water_engineering_borehole_drilling.png";

export default function WaterEngineering() {
  return (
    <ServiceLayout
      title="Water Engineering"
      subtitle="Industrial and community water solutions powered by hydro-geological precision."
      heroImage={heroImage}
      overview="EMRL provides comprehensive water engineering services, from initial hydro-geological surveys to the installation of industrial-grade reticulation systems. We specialize in providing sustainable water access for mining sites, factories, and residential estates."
      features={[
        "DTH & Mud-Rotary Borehole Drilling (Up to 300m)",
        "Industrial Water Treatment & Purification Systems",
        "Hydro-Geological & Geophysical Groundwater Surveys",
        "Large-Scale Reticulation & Storage Tank Installation",
        "Solar-Powered Water Pumping Solutions",
        "Borehole Rehabilitation & Yield Testing"
      ]}
      whyChooseUs={[
        { title: "Survey Accuracy", desc: "Advanced geophysical tools to ensure high success rates in drilling." },
        { title: "Industrial Grade", desc: "We use high-quality PVC and steel casings for long-term durability." },
        { title: "Sustainable Tech", desc: "Integration of solar power to reduce operational energy costs." },
        { title: "Turnkey Service", desc: "From 'no-water' to 'clean-tap' in a single project cycle." }
      ]}
      methodology={[
        { title: "Groundwater Survey", desc: "Vertical Electrical Sounding (VES) to identify water-bearing aquifers." },
        { title: "Precision Drilling", desc: "Professional borehole construction with proper sanitary seals." },
        { title: "System Integration", desc: "Installation of pumps, storage tanks, and treatment units." },
        { title: "Quality Testing", desc: "Physical, chemical, and biological analysis of the water source." }
      ]}
      faqs={[
        { question: "How do you ensure you will find water?", answer: "We conduct detailed hydro-geological surveys (VES) to locate the most productive aquifers before we start drilling." },
        { question: "Do you install solar-powered pumps?", answer: "Yes, we specialize in solar-powered solutions which are ideal for remote mining sites and communities." },
        { question: "What is your typical drilling depth?", answer: "We have the equipment to drill up to 300 meters depending on the geological formation." }
      ]}
    />
  );
}
