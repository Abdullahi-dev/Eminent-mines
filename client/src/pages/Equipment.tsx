import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, Calendar } from "lucide-react";
import fleetImage from "@assets/generated_images/mining_equipment_rental_fleet.png";

export default function Equipment() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fleetImage})`, opacity: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Heavy Machinery <br />Rentals & Leasing</h1>
          <p className="text-xl text-gray-200 max-w-xl">
            High-performance mining equipment for any terrain. Reliable, maintained, and ready to deploy.
          </p>
          <div className="flex gap-4 mt-8">
            <Button className="bg-primary text-white font-bold px-8 h-12 hover:bg-primary/90">View Fleet</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12">Request Rates</Button>
          </div>
        </div>
      </section>

      {/* Fleet List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Crawler Excavators", "Wheel Loaders", "Bulldozers", "Dump Trucks", "Crushing Plants", "Drilling Rigs"
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 border border-border p-6 rounded-sm hover:border-primary transition-colors group">
                <div className="h-40 bg-zinc-200 mb-6 flex items-center justify-center rounded-sm">
                  <Truck className="h-16 w-16 text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{item}</h3>
                <p className="text-sm text-muted-foreground mb-4">Available for daily, weekly, and monthly rental.</p>
                <Button variant="link" className="text-primary p-0 h-auto font-bold">Check Availability</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
