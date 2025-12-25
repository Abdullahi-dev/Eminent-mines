import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { Link } from "wouter";
import ceoImage from "@assets/Engr._Jamiu_Rasheed_odofin_Founder_CEO_1766651126730.jpeg";
import ceoBackground from "@assets/generated_images/mining_corporate_background_texture.png";

export function CEOMessage() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url(${ceoBackground})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Leadership
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Driving Nigeria's Mining Revolution
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-4 -left-6 h-12 w-12 text-primary/20 rotate-180" />
              <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                At Eminent Mines Resources Limited, we are not just extracting minerals; we are unearthing value for Nigeria and the world. Our commitment to ethical mining, technological innovation, and community sustainability drives every project we undertake. We believe in a future where Nigeria's resource wealth translates into tangible prosperity for all stakeholders.
              </p>
            </div>
            
            <div>
              <h4 className="text-2xl font-heading font-bold text-primary">Engr. Jamiu Rasheed Odofin</h4>
              <p className="text-gray-400 uppercase tracking-wider text-sm font-medium mt-1">Founder & CEO</p>
            </div>
            
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold mt-4">
                Read Full Bio
              </Button>
            </Link>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5]">
              {/* Decorative Elements behind image */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-sm translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-sm overflow-hidden shadow-2xl">
                 {/* The CEO Image */}
                 <img 
                  src={ceoImage} 
                  alt="Engr. Jamiu Rasheed Odofin" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
