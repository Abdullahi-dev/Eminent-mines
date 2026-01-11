import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Calendar, MapPin, Download } from "lucide-react";
import projectImage1 from "@assets/WhatsApp_Image_2025-12-04_at_11.17.48_PM_(3)_1767759316504.jpeg";
import projectImage2 from "@assets/WhatsApp_Image_2025-12-04_at_11.18.01_PM_1767759477762.jpeg";
import projectImage3 from "@assets/WhatsApp_Image_2025-12-04_at_11.17.38_PM_1767759286529.jpeg";
import projectImage4 from "@assets/WhatsApp_Image_2025-12-04_at_11.17.41_PM_(1)_1767759284481.jpeg";

export default function Projects() {
  const projects = [
    {
      id: "ondo-gold",
      title: "Ondo Gold Exploration",
      category: "Exploration",
      location: "Ondo State",
      status: "Ongoing",
      image: projectImage1,
      desc: "Large scale geological survey and core drilling operation for gold deposits."
    },
    {
      id: "bauchi-lithium",
      title: "Bauchi Lithium Mining",
      category: "Mining",
      location: "Bauchi State",
      status: "Active Extraction",
      image: projectImage2,
      desc: "Open-pit lithium extraction project supplying battery manufacturers."
    },
    {
      id: "kogi-iron",
      title: "Kogi Iron Ore Processing",
      category: "Processing",
      location: "Kogi State",
      status: "Completed",
      image: projectImage3,
      desc: "Establishment of a 500TPD iron ore crushing and processing plant."
    },
    {
      id: "zamfara-safe-mining",
      title: "Zamfara Safe Mining Initiative",
      category: "Consultancy",
      location: "Zamfara State",
      status: "Ongoing",
      image: projectImage4,
      desc: "Implementation of safety protocols and environmental reclamation for artisanal miners."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
      <Navbar />
      
      <div className="bg-zinc-900 py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Showcasing our commitment to excellence in mining operations across Nigeria.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden border border-border hover:shadow-lg transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.status}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-1">{project.category}</span>
                      <h3 className="text-2xl font-bold font-heading text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 border-t border-border pt-4">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {project.location}</span>
                    
                    <div className="ml-auto flex gap-2">
                       <a 
                         href="/EMRL_Case_Study.pdf" 
                         download 
                         className="inline-flex items-center justify-center h-8 px-3 border border-zinc-200 rounded-md text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-colors gap-2"
                       >
                         <Download className="h-3 w-3" /> Case Study
                       </a>
                       <Link href={`/projects/${project.id}`}>
                         <a className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                           View Details <ArrowRight className="ml-2 h-4 w-4" />
                         </a>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
