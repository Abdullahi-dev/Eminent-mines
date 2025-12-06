import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "mining",
      title: "Mining & Quarry Operations",
      desc: "We deliver world-class mining and quarrying solutions that meet global standards.",
      href: "/services/mining-quarry",
      features: [
        "Mining Site Infrastructure Development",
        "Quarry Installation & Management",
        "Open-Pit Mine Design & Optimization",
        "Drilling & Blasting Services",
        "Mine Feasibility Studies"
      ]
    },
    {
      id: "geo",
      title: "Geological & Exploration",
      desc: "Advanced geoscience solutions to discover and quantify mineral resources.",
      href: "/services/geological-exploration",
      features: [
        "Field Mapping & Survey",
        "Mineral Sampling & Lab Analysis",
        "Remote Sensing & GIS Mapping",
        "Structural Interpretation"
      ]
    },
    {
      id: "water",
      title: "Water Exploration & Engineering",
      desc: "Reliable water solutions for communities, industries, and government bodies.",
      href: "/services/water-engineering",
      features: [
        "Borehole Drilling",
        "Water Treatment Systems",
        "Hydro-Geological Surveys",
        "Reticulation & Plumbing"
      ]
    },
    {
      id: "trading",
      title: "Mineral Trading & Supply",
      desc: "Sourcing and export of Nigeria's finest solid minerals.",
      href: "/services/mineral-trading",
      features: [
        "Export of Lead, Zinc, Lithium, Gold",
        "Bulk Supply for Local Industries",
        "Quality Testing & Documentation",
        "Logistics Management"
      ]
    },
    {
      id: "machinery",
      title: "Mining Machinery",
      desc: "Fabrication, leasing, and maintenance of heavy mining equipment.",
      href: "/services/machinery-fabrication",
      features: [
        "Equipment Leasing (Excavators, Rigs)",
        "Fabrication of Crushers & Mills",
        "Maintenance & Repair Services"
      ]
    },
    {
      id: "consultancy",
      title: "Mining Consultancy",
      desc: "Strategic support and professional guidance for the mining sector.",
      href: "/services/consultancy",
      features: [
        "Regulatory Compliance",
        "License & Permit Advisory",
        "Feasibility Studies",
        "Environmental Impact Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
      <Navbar />
      
      <div className="bg-zinc-900 py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Comprehensive solutions across the entire mining value chain.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-sm shadow-sm border border-border hover:border-primary transition-colors group">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-white group-hover:border-primary">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
