import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Pickaxe, 
  Globe2, 
  Droplets, 
  TrendingUp, 
  Settings, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Construction,
  FileSearch,
  Factory
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "mining",
      title: "Mining & Quarry Operations",
      desc: "World-class extraction and pit-site management solutions optimized for maximum recovery and safety.",
      href: "/services/mining-quarry",
      icon: Pickaxe,
      features: [
        "Infrastructure Development",
        "Quarry Installation",
        "Open-Pit Design",
        "Drilling & Blasting",
        "Feasibility Studies"
      ]
    },
    {
      id: "geo",
      title: "Geological & Exploration",
      desc: "Advanced geoscience solutions using satellite mapping and core sampling to quantify resources.",
      href: "/services/geological-exploration",
      icon: Globe2,
      features: [
        "Field Mapping & Survey",
        "Mineral Sampling",
        "Remote Sensing & GIS",
        "Structural Interpretation",
        "Resource Estimation"
      ]
    },
    {
      id: "water",
      title: "Water Engineering",
      desc: "Industrial and community water solutions, from hydro-geological surveys to reticulation.",
      href: "/services/water-engineering",
      icon: Droplets,
      features: [
        "Borehole Drilling",
        "Treatment Systems",
        "Hydro-Geological Surveys",
        "Reticulation Systems",
        "Maintenance Plans"
      ]
    },
    {
      id: "trading",
      title: "Mineral Trading & Supply",
      desc: "Standardized sourcing and global export of Nigeria's finest minerals (Lead, Zinc, Lithium, Gold).",
      href: "/services/mineral-trading",
      icon: TrendingUp,
      features: [
        "Export Management",
        "Bulk Local Supply",
        "Quality Documentation",
        "Logistics & Freight",
        "Market Advisory"
      ]
    },
    {
      id: "machinery",
      title: "Machinery & Equipment",
      desc: "Fabrication and leasing of heavy mining machinery including crushers, mills, and drilling rigs.",
      href: "/services/machinery-fabrication",
      icon: Settings,
      features: [
        "Equipment Leasing",
        "Crusher Fabrication",
        "Mill Installation",
        "Preventive Maintenance",
        "Spare Parts Supply"
      ]
    },
    {
      id: "consultancy",
      title: "Mining Consultancy",
      desc: "Expert strategic support for licensing, regulatory compliance, and environmental impact.",
      href: "/services/consultancy",
      icon: ShieldCheck,
      features: [
        "MMSD Compliance",
        "License Acquisition",
        "EIA Preparation",
        "Investment Advisory",
        "Technical Audits"
      ]
    },
    {
      id: "explosives",
      title: "Explosives Management",
      desc: "Professional blasting services and magazine storage compliant with international safety standards.",
      href: "/services/explosives-management",
      icon: Zap,
      features: [
        "Controlled Blasting",
        "Magazine Construction",
        "Safety Protocol Training",
        "Permit Procurement",
        "Blast Monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-zinc-900">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-zinc-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -mr-64 -mt-64" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 leading-[1.1]">
              Engineered for <span className="text-primary text-glow">Impact.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
              We provide end-to-end solutions across the entire mining value chain, from initial exploration to global mineral trade.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-full -mr-16 -mt-16 group-hover:bg-primary/5 transition-colors" />
                
                <div className="relative z-10 flex-1">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-black font-heading mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-bold">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={service.href}>
                  <Button className="w-full h-14 bg-zinc-900 hover:bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl transition-all active:scale-95 group-hover:-translate-y-1">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-primary font-black uppercase tracking-widest text-sm">Industrial Standard</h2>
              <h3 className="text-4xl md:text-6xl font-heading font-black leading-tight">
                Standardized for Global <span className="text-primary italic">Excellence.</span>
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                At EMRL, we don't just extract resources; we build systems that guarantee transparency, safety, and community development. Our operations are fully aligned with Nigerian Mining Laws and international ESG standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "MMSD Certified", icon: ShieldCheck },
                  { title: "ISO Compliance", icon: FileSearch },
                  { title: "Community Focused", icon: Construction },
                  { title: "Tech Driven", icon: Factory }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-200">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-black text-sm uppercase tracking-wider">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-zinc-900 p-12 md:p-16 rounded-[3rem] text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10" />
              <div className="relative z-10 space-y-8 text-center">
                <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Globe2 className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-3xl font-black font-heading">Ready to Partner?</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Join our network of institutional investors and technical partners today.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black text-lg h-16 rounded-2xl shadow-2xl transition-all hover:-translate-y-1"
                  onClick={() => window.open('https://wa.me/2349076929317?text=Hello%20EMRL%2C%20I%20am%20interested%20in%20partnering%20with%20your%20mining%20services.', '_blank')}
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
