import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, Calendar, AlertCircle } from "lucide-react";
import fleetImage from "@assets/generated_images/mining_equipment_rental_fleet.png";
import { BookingForm } from "@/components/forms/BookingForm";

import projectImage2 from "@assets/WhatsApp_Image_2025-12-04_at_11.18.01_PM_1767759477762.jpeg";
import drillingRigImage from "@assets/generated_images/borehole_drilling_rig_operation.png";
import machineryWorkshopImage from "@assets/image_1767763709253.png";
import heavyFleetImage from "@assets/image_1767763727146.png";
import dumpTruckImage from "@assets/generated_images/heavy_mining_machinery_fleet.png";
import compressorImage from "@assets/generated_images/mining_equipment_fabrication_workshop.png";

export default function Equipment() {
  const fleetItems = [
    { name: "Crawler Excavators", img: projectImage2 },
    { name: "Wheel Loaders", img: heavyFleetImage },
    { name: "Bulldozers", img: fleetImage },
    { name: "Dump Trucks", img: dumpTruckImage },
    { name: "Crushing Plants", img: machineryWorkshopImage },
    { name: "Drilling Rigs", img: drillingRigImage },
    { name: "Lowbeds", img: fleetImage },
    { name: "Compressors", img: compressorImage }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heavyFleetImage})`, opacity: 0.7 }}
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
                {fleetItems.map((item, i) => (
                  <div key={i} className="bg-zinc-50 border border-border overflow-hidden rounded-xl hover:border-primary transition-all group shadow-sm">
                    <div className="h-48 overflow-hidden relative">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-lg font-bold font-heading mb-1 text-zinc-900">{item.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Daily / Weekly / Monthly</p>
                    </div>
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
