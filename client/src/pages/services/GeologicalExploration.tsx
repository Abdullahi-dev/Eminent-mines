import { ServiceLayout } from "@/components/layout/ServiceLayout";
import heroImage from "@assets/generated_images/geologists_examining_rock_samples.png";

export default function GeologicalExploration() {
  return (
    <ServiceLayout
      title="Geological & Exploration"
      subtitle="Unlocking Nigeria's mineral potential through advanced geoscience and satellite intelligence."
      heroImage={heroImage}
      overview="Eminent Mines Resources Ltd offers elite geological exploration services that turn raw land into quantified assets. Using a combination of traditional field geology and modern remote sensing technology, we provide the data-driven insights needed for high-stakes investment decisions."
      features={[
        "Detailed Geological Field Mapping & Topographic Surveys",
        "Geochemical Sampling & Multi-Element Lab Analysis",
        "Geophysical Surveys (Magnetic, Radiometric, IP)",
        "Remote Sensing & GIS-Based Structural Interpretation",
        "JORC/NI 43-101 Compliant Resource Estimation",
        "Exploration Core Drilling & Logging"
      ]}
      whyChooseUs={[
        { title: "Data Accuracy", desc: "Precision-driven data collection for bankable feasibility studies." },
        { title: "Modern Tech", desc: "Use of advanced GIS and satellite imagery for structural mapping." },
        { title: "Expert Geologists", desc: "Team of registered geoscientists with deep knowledge of Nigerian terrain." },
        { title: "Cost Efficiency", desc: "Targeted exploration programs that reduce 'dead-ground' drilling costs." }
      ]}
      methodology={[
        { title: "Desktop Study", desc: "Review of historical data, satellite imagery, and regional structural trends." },
        { title: "Field Reconnaissance", desc: "On-site mapping, rock-chip sampling, and initial structural observation." },
        { title: "Detailed Surveying", desc: "Grid-based geophysical and geochemical surveys to pinpoint mineralization." },
        { title: "Resource Modeling", desc: "3D geological modeling and grade estimation using industry-standard software." }
      ]}
      faqs={[
        { question: "What is the first step in exploring a new site?", answer: "We begin with a comprehensive Desktop Study and Satellite Imagery Analysis to identify high-potential targets before moving to the field." },
        { question: "How long does a typical exploration program take?", answer: "Depending on the size of the lease, a preliminary phase can take 4-8 weeks, while full resource estimation may take several months." },
        { question: "Do you provide laboratory services for samples?", answer: "Yes, through our dedicated EMRL Lab, we provide rapid and accurate mineral analysis for all field samples." }
      ]}
    />
  );
}
