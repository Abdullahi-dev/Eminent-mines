import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, BookOpen, Award } from "lucide-react";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import schoolImage from "@assets/generated_images/nigerian_mining_students_in_lab.png";

export default function SchoolOfMines() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${schoolImage})`, opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">EMRL School of Mines</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Empowering the next generation of mining professionals with practical skills, technical knowledge, and safety certification.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Content Side */}
          <div className="space-y-16">
            
            {/* Programs Grid */}
            <section>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Our Programs</h2>
              <div className="space-y-8">
                {[
                  { 
                    title: "Professional Certification", 
                    desc: "Industry-recognized certifications in mining safety, operations, and management.",
                    modules: ["Health & Safety", "Mine Management", "Regulatory Compliance"]
                  },
                  { 
                    title: "Technical Training", 
                    desc: "Hands-on training in drilling, blasting, and heavy machinery operation.",
                    modules: ["Drilling Techniques", "Blasting Safety", "Equipment Maintenance"]
                  },
                  { 
                    title: "Geological Fieldwork", 
                    desc: "Practical field courses in mineral identification, surveying, and mapping.",
                    modules: ["Mineralogy", "Surveying", "Field Mapping"]
                  }
                ].map((program, i) => (
                  <div key={i} className="bg-zinc-50 p-6 rounded-sm border border-border hover:border-primary transition-colors">
                    <h3 className="text-xl font-bold font-heading mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.modules.map((mod, j) => (
                        <span key={j} className="text-xs font-bold bg-white border border-border px-2 py-1 rounded-sm text-gray-600">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Process */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Admission Process</h2>
              <div className="space-y-4 relative pl-8 border-l-2 border-primary/20">
                {[
                  { step: "01", title: "Submit Application", desc: "Fill out the online form with your details and program choice." },
                  { step: "02", title: "Review & Interview", desc: "Our academic board reviews your application." },
                  { step: "03", title: "Payment", desc: "Pay tuition fees via bank transfer or online portal." },
                  { step: "04", title: "Orientation", desc: "Receive course materials and start your training." }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Form Side */}
          <div className="lg:sticky lg:top-24 h-fit">
            <ApplicationForm />
            
            <div className="mt-8 bg-zinc-900 p-6 rounded-sm text-white text-center">
              <h4 className="font-bold text-lg mb-2 text-primary">Need Financial Aid?</h4>
              <p className="text-sm text-gray-400 mb-4">We offer scholarship opportunities for outstanding students.</p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full">Contact Finance Office</Button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
