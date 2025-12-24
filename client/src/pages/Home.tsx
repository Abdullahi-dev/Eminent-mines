import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, HardHat, Pickaxe, Trophy, Truck } from "lucide-react";
import heroImage from "@assets/generated_images/cinematic_modern_mining_site_hero_background.png";
import explorationImage from "@assets/generated_images/geologists_examining_rock_samples.png";
import machineryImage from "@assets/generated_images/heavy_mining_machinery_fleet.png";
import tradingImage from "@assets/generated_images/raw_minerals_pile_close_up.png";
import consultancyImage from "@assets/generated_images/nigerian_mining_consultants_in_boardroom.png";
import schoolImage from "@assets/generated_images/nigerian_mining_students_in_lab.png";
import waterImage from "@assets/generated_images/water_engineering_borehole_drilling.png";
import explosivesImage from "@assets/image_1766576190332.png";
import { Link } from "wouter";
import { Typewriter } from "@/components/ui/typewriter";
import { CEOMessage } from "@/components/home/CEOMessage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Building Nigeria's Mining Future
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              World-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                <Typewriter words={["Mining Solutions", "Mineral Trading", "Exploration", "Consultancy"]} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
              Eminent Mines Resources Limited delivers excellence in mineral exploration, trading, and mining consultancy. We bridge the gap between Nigeria's vast resources and global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 h-14 w-full sm:w-auto">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 h-14 backdrop-blur-sm w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-6 hidden md:block">
          <div className="container mx-auto px-4 flex justify-between text-white">
            {[
              { label: "Active Sites", value: "12+" },
              { label: "Tons Exported", value: "50k+" },
              { label: "Machinery Fleet", value: "100+" },
              { label: "Years Experience", value: "15+" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 px-6 border-r border-white/10 last:border-0">
                <span className="text-3xl font-bold font-heading text-primary">{stat.value}</span>
                <span className="text-sm uppercase tracking-wider text-gray-300 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h2>
                <h3 className="text-4xl font-heading font-bold text-foreground leading-tight">
                  Pioneering Sustainable Mining & Mineral Exploration
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                EMRL is more than a mining company; we are a strategic partner in Nigeria's natural resources sector. We combine geological expertise with modern technology to deliver safe, efficient, and profitable mining operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Global Standards", desc: "Adhering to international mining best practices." },
                  { icon: HardHat, title: "Safety First", desc: "Zero-harm culture in all our operations." },
                  { icon: Trophy, title: "Government Compliant", desc: "Fully licensed and regulatory ready." },
                  { icon: Pickaxe, title: "Advanced Tech", desc: "Using modern geospatial exploration tools." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" className="border-foreground/20 hover:bg-foreground hover:text-white font-bold mt-4">
                  Read CEO's Message
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img src={explorationImage} alt="Geologists at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-sm shadow-xl hidden md:block max-w-xs">
                <p className="text-white font-heading font-bold text-xl leading-tight">
                  "We are committed to unlocking Nigeria's mineral wealth responsibly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
            <h3 className="text-4xl font-heading font-bold text-foreground mb-6">Comprehensive Mining Solutions</h3>
            <p className="text-muted-foreground text-lg">From exploration to export, we handle every stage of the mining value chain with precision and professionalism.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mining & Exploration", desc: "Full-scale site development, pit optimization, and mineral extraction.", img: heroImage, link: "/services/mining-quarry" },
              { title: "Mineral Trading", desc: "Sourcing and exporting high-purity Lead, Zinc, Lithium, and Gold.", img: tradingImage, link: "/services/mineral-trading" },
              { title: "Equipment Leasing", desc: "Heavy-duty excavators, crushers, and drilling rigs for rent.", img: machineryImage, link: "/services/machinery-fabrication" },
              { title: "Water Engineering", desc: "Borehole drilling, hydrological surveys, and water treatment.", img: waterImage, link: "/services/water-engineering" },
              { title: "Mining Consultancy", desc: "Regulatory compliance, licensing, and feasibility studies.", img: consultancyImage, link: "/services/consultancy" },
              { title: "School of Mines", desc: "Professional training and certification for the next generation.", img: schoolImage, link: "/school" },
              { title: "Explosives Management & Mining Magazine Services", desc: "Secure storage, handling, and supply of mining explosives and blasting materials.", img: explosivesImage, link: "/services/explosives-management" },
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <Link href={service.link}>
                    <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 uppercase tracking-wide">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <CEOMessage />

      {/* CTA Strip */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to Start Your Mining Project?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Whether you need exploration services, machinery, or consultancy, EMRL is your trusted partner for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-bold text-base px-8 h-12 w-full sm:w-auto">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 h-12 backdrop-blur-sm w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
