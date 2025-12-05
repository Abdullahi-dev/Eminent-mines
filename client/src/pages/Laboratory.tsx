import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FlaskConical, Microscope, FileSearch } from "lucide-react";
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

          <div className="mt-20 bg-zinc-50 p-12 rounded-sm text-center">
            <h3 className="text-3xl font-bold font-heading mb-4">Need to test your samples?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We provide fast turnaround times for all standard mineral tests. Contact us today to schedule a sample submission.
            </p>
            <Button size="lg" className="bg-primary text-white font-bold">Contact Lab Manager</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
