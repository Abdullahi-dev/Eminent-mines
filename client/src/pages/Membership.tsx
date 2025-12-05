import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, CreditCard, FileText } from "lucide-react";

export default function Membership() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
      <Navbar />
      
      <div className="bg-zinc-900 py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Professional Membership</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Join an elite network of mining professionals and industry leaders.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Membership Tiers */}
            {[
              { name: "Student Member", price: "₦5,000", period: "/ year", features: ["Access to online library", "Mentorship programs", "Discounted training"] },
              { name: "Professional Member", price: "₦25,000", period: "/ year", features: ["Networking events", "Professional certification", "Industry reports", "Voting rights"] },
              { name: "Corporate Member", price: "₦150,000", period: "/ year", features: ["Company listing", "Exhibition discounts", "Staff training access", "Policy advocacy"] }
            ].map((tier, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-md border border-border flex flex-col">
                <h3 className="text-2xl font-bold font-heading mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{tier.price} <span className="text-sm text-gray-400 font-normal">{tier.period}</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">Join Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
