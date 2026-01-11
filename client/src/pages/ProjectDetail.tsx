import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";
import projectImage1 from "@assets/WhatsApp_Image_2025-12-04_at_11.17.48_PM_(3)_1767759316504.jpeg";
import projectImage2 from "@assets/WhatsApp_Image_2025-12-04_at_11.18.01_PM_1767759477762.jpeg";
import projectImage3 from "@assets/WhatsApp_Image_2025-12-04_at_11.17.38_PM_1767759286529.jpeg";
import projectImage4 from "@assets/WhatsApp_Image_2025-12-04_at_11.17.41_PM_(1)_1767759284481.jpeg";

const projectData = {
  "ondo-gold": {
    title: "Ondo Gold Exploration",
    category: "Exploration",
    location: "Ondo State",
    status: "Ongoing",
    image: projectImage1,
    desc: "Large scale geological survey and core drilling operation for gold deposits.",
    details: "This project involves detailed geological mapping and exploratory drilling across several license areas in Ondo State. We are utilizing advanced geochemical sampling and core analysis to define the resource potential."
  },
  "bauchi-lithium": {
    title: "Bauchi Lithium Mining",
    category: "Mining",
    location: "Bauchi State",
    status: "Active Extraction",
    image: projectImage2,
    desc: "Open-pit lithium extraction project supplying battery manufacturers.",
    details: "Our Bauchi lithium project is at the forefront of the green energy transition. We are employing modern open-pit mining techniques and on-site processing to ensure high-grade concentrate delivery."
  },
  "kogi-iron": {
    title: "Kogi Iron Ore Processing",
    category: "Processing",
    location: "Kogi State",
    status: "Completed",
    image: projectImage3,
    desc: "Establishment of a 500TPD iron ore crushing and processing plant.",
    details: "Successfully completed the installation and commissioning of a 500 tons per day iron ore processing facility. This project included infrastructure development and community training for plant operations."
  },
  "zamfara-safe-mining": {
    title: "Zamfara Safe Mining Initiative",
    category: "Consultancy",
    location: "Zamfara State",
    status: "Ongoing",
    image: projectImage4,
    desc: "Implementation of safety protocols and environmental reclamation for artisanal miners.",
    details: "A landmark consultancy project aimed at professionalizing artisanal mining. We provide technical expertise in safe mining practices, environmental remediation, and regulatory compliance."
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const project = projectData[params?.id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link href="/projects" className="text-primary hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/projects">
            <a className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </a>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">{project.category}</span>
                <h1 className="text-4xl font-heading font-black text-zinc-900 leading-tight">
                  {project.title}
                </h1>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-zinc-500 border-y border-zinc-100 py-6">
                <span className="flex items-center gap-2 font-bold"><MapPin className="h-4 w-4 text-primary" /> {project.location}</span>
                <span className="flex items-center gap-2 font-bold"><Calendar className="h-4 w-4 text-primary" /> {project.status}</span>
              </div>

              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.desc}
              </p>

              <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Detailed Scope of Work</h3>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>{project.details}</p>
                  <p>Our approach for this project follows the EMRL Standard Operating Procedure for Sustainable Mining:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Advanced Geophysical Mapping & Data Interpretation</li>
                    <li>Systematic Soil & Stream Sediment Geochemical Analysis</li>
                    <li>High-Resolution Topographic Surveying</li>
                    <li>Community-First ESG Integration & Social License Management</li>
                  </ul>
                </div>
              </div>

              <a 
                href="/EMRL_Case_Study.pdf" 
                download
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <Download className="h-5 w-5" /> Download Full Case Study (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
