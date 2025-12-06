import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, BookOpen, Award } from "lucide-react";
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
          <Button className="mt-8 bg-primary text-white font-bold px-8 h-12 hover:bg-primary/90">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Education & Training</h2>
            <h3 className="text-4xl font-heading font-bold text-foreground">Our Programs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "Professional Certification", desc: "Industry-recognized certifications in mining safety, operations, and management." },
              { icon: BookOpen, title: "Technical Training", desc: "Hands-on training in drilling, blasting, and heavy machinery operation." },
              { icon: Award, title: "Geological Fieldwork", desc: "Practical field courses in mineral identification, surveying, and mapping." }
            ].map((program, i) => (
              <div key={i} className="bg-zinc-50 p-8 rounded-sm border border-border text-center hover:border-primary transition-colors">
                <div className="h-16 w-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm text-primary">
                  <program.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold font-heading mb-4">{program.title}</h4>
                <p className="text-muted-foreground mb-6">{program.desc}</p>
                <Button variant="outline" className="w-full">View Curriculum</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
