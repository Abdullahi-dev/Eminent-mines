import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, User } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-zinc-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">About EMRL</h1>
          <p className="text-xl text-gray-400 max-w-2xl">The premier choice for mining and natural resource development in Nigeria.</p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Building a Legacy of Excellence in Mining
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eminent Mines Resources Limited (EMRL) was established to bridge the gap between Nigeria's vast mineral potential and the global demand for ethically sourced resources. We are a fully licensed, indigenous company that operates with international standards of safety, efficiency, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Our Vision", desc: "To be the leading mining and resource company in West Africa, known for innovation and sustainability." },
              { title: "Our Mission", desc: "To explore, extract, and trade mineral resources efficiently while empowering communities and upholding global standards." },
              { title: "Our Values", desc: "Integrity, Safety, Sustainability, Innovation, and Excellence in every project we undertake." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 p-8 border-l-4 border-primary rounded-r-sm">
                <h4 className="text-xl font-bold font-heading mb-4 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-sm shadow-sm text-center group">
                <div className="w-32 h-32 bg-zinc-200 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <User className="h-12 w-12 text-zinc-400 group-hover:text-primary" />
                </div>
                <h4 className="font-bold text-lg text-foreground">Executive Name</h4>
                <p className="text-sm text-primary font-medium mb-4">Position Title</p>
                <p className="text-xs text-muted-foreground">Experienced professional with over 15 years in the mining sector.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
