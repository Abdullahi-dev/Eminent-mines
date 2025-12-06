import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FlaskConical, Microscope, FileSearch, CheckCircle2 } from "lucide-react";
import labImage from "@assets/generated_images/mineral_testing_laboratory.png";

export default function Laboratory() {
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {[
              { icon: Microscope, title: "Mineral Identification", desc: "Precise identification of ore composition and mineral content using XRF and XRD analysis." },
              { icon: FlaskConical, title: "Geochemical Analysis", desc: "Testing soil, rock, and water samples for trace elements and contamination." },
              { icon: FileSearch, title: "Assay Reports", desc: "Bankable feasibility reports and quality certification for export documentation." }
            ].map((service, i) => (
              <div key={i} className="text-center p-8 border border-border rounded-sm hover:shadow-lg transition-all">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Testing Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">Comprehensive Testing Capabilities</h2>
                <p className="text-muted-foreground text-lg">Our state-of-the-art laboratory is equipped to handle a wide range of mineral and environmental testing requirements.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Gold Fire Assay", "Lithium Ore Analysis", "Heavy Metal Testing", "Water Quality Analysis", 
                    "Soil Contamination Test", "Specific Gravity Test", "Moisture Content", "Particle Size Analysis"
                  ].map((test, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-sm border border-border">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">{test}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-zinc-100 p-8 rounded-sm border-l-4 border-primary">
                <h3 className="text-xl font-bold font-heading mb-4">Certification & Standards</h3>
                <p className="text-muted-foreground mb-4">
                  All our test results are ISO compliant and recognized by major international buyers and regulatory bodies. We adhere to strict quality control protocols to ensure accuracy.
                </p>
                <Button variant="outline" className="bg-white w-full">Download Lab Brochure</Button>
             </div>
          </div>

          <div className="bg-zinc-900 text-white p-12 rounded-sm text-center">
            <h3 className="text-3xl font-bold font-heading mb-4">Need to test your samples?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We provide fast turnaround times for all standard mineral tests. Contact us today to schedule a sample submission.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8">Contact Lab Manager</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
