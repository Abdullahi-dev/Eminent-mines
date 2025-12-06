import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, Calendar, AlertCircle } from "lucide-react";
import fleetImage from "@assets/generated_images/mining_equipment_rental_fleet.png";
import { BookingForm } from "@/components/forms/BookingForm";

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
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Fleet List */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Our Fleet</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Crawler Excavators", "Wheel Loaders", "Bulldozers", "Dump Trucks", "Crushing Plants", "Drilling Rigs", "Lowbeds", "Compressors"
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-50 border border-border p-6 rounded-sm hover:border-primary transition-colors group">
                    <div className="h-12 w-12 bg-white mb-4 flex items-center justify-center rounded-sm shadow-sm">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-heading mb-1">{item}</h3>
                    <p className="text-xs text-muted-foreground">Daily / Weekly / Monthly</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-sm">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900">Maintenance Guarantee</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    All our rentals come with on-site maintenance support. If a machine breaks down, we replace or repair it within 24 hours to minimize downtime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:sticky lg:top-24 h-fit">
            <BookingForm />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
