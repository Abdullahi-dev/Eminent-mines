import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Beaker } from "lucide-react";
import labImage from "@assets/generated_images/mineral_testing_laboratory.png";
import identificationImage from "@assets/generated_images/geologists_examining_rock_samples.png";
import geochemicalImage from "@assets/generated_images/nigerian_mining_students_in_lab.png";
import assayImage from "@assets/generated_images/mineral_resources_development_compliance_document_scene.png";

export default function Laboratory() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/EMRL_Laboratory_Brochure.txt';
    link.download = 'EMRL_Laboratory_Brochure.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      <div className="bg-zinc-900 py-24 relative overflow-hidden">
         <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${labImage})`, opacity: 0.4 }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Minerals Standard Laboratory</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Accurate, reliable, and certified mineral analysis and testing services.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {[
              { 
                img: identificationImage, 
                title: "Mineral Identification", 
                desc: "Precise identification of ore composition and mineral content using XRF and XRD analysis." 
              },
              { 
                img: geochemicalImage, 
                title: "Geochemical Analysis", 
                desc: "Testing soil, rock, and water samples for trace elements and contamination." 
              },
              { 
                img: assayImage, 
                title: "Assay Reports", 
                desc: "Bankable feasibility reports and quality certification for export documentation." 
              }
            ].map((service, i) => (
              <div key={i} className="group overflow-hidden bg-white border border-zinc-200 rounded-2xl hover:shadow-2xl transition-all duration-500">
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold font-heading">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-600 leading-relaxed mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testing Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  <Beaker className="h-3 w-3" /> Technical Scope
                </div>
                <h2 className="text-4xl font-heading font-black text-zinc-900">Comprehensive Testing Capabilities</h2>
                <p className="text-zinc-600 text-lg leading-relaxed">Our state-of-the-art laboratory is equipped to handle a wide range of mineral and environmental testing requirements with absolute precision.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Gold Fire Assay", "Lithium Ore Analysis", "Heavy Metal Testing", "Water Quality Analysis", 
                    "Soil Contamination Test", "Specific Gravity Test", "Moisture Content", "Particle Size Analysis"
                  ].map((test, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-bold text-zinc-700">{test}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-zinc-900 text-white p-10 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <h3 className="text-2xl font-bold font-heading mb-6 relative z-10">Certification & Standards</h3>
                <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                  All our test results are ISO compliant and recognized by major international buyers and regulatory bodies. We adhere to strict quality control protocols to ensure accuracy.
                </p>
                <Button 
                  onClick={handleDownload}
                  variant="outline" 
                  className="bg-primary hover:bg-primary/90 text-white border-none w-full h-14 font-black text-lg group rounded-xl"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Download Lab Brochure
                </Button>
             </div>
          </div>

          <div className="bg-primary text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <h3 className="text-4xl font-black font-heading mb-6">Need to test your samples?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-xl font-medium">
              We provide fast turnaround times for all standard mineral tests. Contact us today to schedule a sample submission.
            </p>
            <a 
              href="https://wa.me/2348105087219?text=Hello%20Engr.%20Magaji%20of%20EMRL%2C%20I%20am%20a%20visitor%20from%20your%20website.%20I%20would%20like%20to%20schedule%20a%20mineral%20sample%20test%20at%20your%20laboratory."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 font-black px-12 h-16 text-xl rounded-2xl shadow-xl transition-transform hover:scale-105">Contact Lab Manager</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
