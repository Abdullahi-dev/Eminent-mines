import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/water_borehole_drilling_operation.png";

export default function WaterEngineering() {
  return (
    <ServiceLayout
      title="Water Exploration & Engineering"
      subtitle="Reliable and sustainable water solutions for communities, industries and government."
      heroImage={heroImage}
      overview="Our water engineering division offers reliable and sustainable water solutions to communities, estates, farms, industries and government bodies. We combine hydro-geological expertise with modern drilling technology to ensure access to clean water."
      features={[
        "Borehole Drilling & Water Exploration",
        "Water Treatment & Management Systems",
        "Well Piping, Reticulation & Installation",
        "Hydro-Geological Surveys"
      ]}
      whyChooseUs={[
        { title: "Accuracy", desc: "High accuracy water siting to prevent dry wells." },
        { title: "Equipment", desc: "Modern drilling equipment & professional crew." },
        { title: "Quality", desc: "Durable installations with quality casing and pumps." },
        { title: "Affordability", desc: "Competitive solutions for every sector." }
      ]}
      methodology={[
        { title: "Geophysical Survey", desc: "Electronic survey to identify best drilling points." },
        { title: "Drilling", desc: "Professional drilling to required depth." },
        { title: "Installation", desc: "Casing, gravel packing, and pump installation." },
        { title: "Treatment", desc: "Water analysis and installation of treatment plant if needed." }
      ]}
      faqs={[
        { question: "How deep do you drill?", answer: "Depth depends on the geological formation, ranging from 50m to over 200m." },
        { question: "Do you install solar pumps?", answer: "Yes, we specialize in solar-powered borehole systems for remote areas." },
        { question: "Do you offer maintenance?", answer: "We provide comprehensive maintenance packages for all our installations." }
      ]}
    />
  );
}
