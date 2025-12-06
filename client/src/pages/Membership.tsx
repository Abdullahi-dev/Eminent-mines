import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, CreditCard, FileText } from "lucide-react";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Content */}
            <div className="space-y-12">
               {/* Membership Tiers */}
               <div>
                <h2 className="text-2xl font-heading font-bold mb-8">Membership Tiers</h2>
                <div className="space-y-6">
                  {[
                    { name: "Student Member", price: "₦5,000", period: "/ year", features: ["Access to online library", "Mentorship programs", "Discounted training"] },
                    { name: "Professional Member", price: "₦25,000", period: "/ year", features: ["Networking events", "Professional certification", "Industry reports", "Voting rights"] },
                    { name: "Corporate Member", price: "₦150,000", period: "/ year", features: ["Company listing", "Exhibition discounts", "Staff training access", "Policy advocacy"] }
                  ].map((tier, i) => (
                    <div key={i} className="bg-white p-6 rounded-sm shadow-sm border border-border hover:border-primary transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-heading">{tier.name}</h3>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary block">{tier.price}</span>
                          <span className="text-xs text-gray-400">{tier.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm border border-border">
                <h3 className="font-bold font-heading text-xl mb-4">Member Benefits</h3>
                <p className="text-muted-foreground mb-6">
                  As a member of the EMRL Professional Body, you gain access to exclusive resources, networking opportunities, and professional development tools designed to advance your career in the mining sector.
                </p>
                <Button variant="outline">Download Member Handbook</Button>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:sticky lg:top-24 h-fit">
              <RegistrationForm />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
