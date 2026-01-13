import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Users, 
  CreditCard, 
  FileText, 
  Globe, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  UserPlus,
  Award
} from "lucide-react";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

export default function Membership() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-zinc-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
              EMRL Professional <span className="text-primary text-glow">Council.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Join the most influential network of mining professionals, engineers, and investors in Nigeria. Access exclusive data, networking opportunities, and professional accreditation.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-20">
              
              {/* Membership Value Proposition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Professional Growth", desc: "Access specialized workshops and international mining certifications.", icon: Award },
                  { title: "Strategic Network", desc: "Connect with MMSD officials, institutional investors, and tech partners.", icon: Globe },
                  { title: "Industry Insights", desc: "Receive monthly quarterly reports on Nigerian mineral market trends.", icon: Zap },
                  { title: "Global Advocacy", desc: "Support the standardization of ethically sourced Nigerian minerals.", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 hover:border-primary/30 transition-all group">
                    <item.icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-black text-zinc-900 mb-3">{item.title}</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Membership Tiers */}
              <div className="space-y-10">
                <h3 className="text-3xl font-heading font-black text-zinc-900 border-l-4 border-primary pl-6">Membership Tiers</h3>
                <div className="grid gap-6">
                  {[
                    { 
                      name: "Student Member", 
                      price: "₦15,000", 
                      period: "/ academic year", 
                      features: ["Access to School of Mines library", "Internship placement support", "Career mentorship", "E-newsletter"],
                      tag: "Entry Level"
                    },
                    { 
                      name: "Professional Member", 
                      price: "₦75,000", 
                      period: "/ year", 
                      features: ["Full voting rights in Council", "Listing in EMRL Database", "Discounted technical training", "MMSD compliance support"],
                      tag: "Recommended"
                    },
                    { 
                      name: "Corporate Member", 
                      price: "₦250,000", 
                      period: "/ year", 
                      features: ["Company profile on EMRL portal", "Executive roundtable access", "Policy advocacy representation", "Staff training packages"],
                      tag: "Institutional"
                    }
                  ].map((tier, i) => (
                    <div key={i} className="group relative bg-white p-8 rounded-[2.5rem] border border-zinc-200 hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">{tier.tag}</span>
                          <h4 className="text-2xl font-black font-heading text-zinc-900">{tier.name}</h4>
                        </div>
                        <div className="text-left md:text-right">
                          <div className="text-3xl font-black text-primary">{tier.price}</div>
                          <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{tier.period}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-100">
                        {tier.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-3 text-sm text-zinc-600 font-bold">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Registration Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-heading font-black flex items-center gap-3">
                      <UserPlus className="h-8 w-8 text-primary" /> Apply Now
                    </h3>
                    <p className="text-zinc-400 font-medium">Start your professional journey with EMRL today.</p>
                  </div>
                  <RegistrationForm />
                </div>
              </div>

              <div className="bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100 space-y-6">
                <h4 className="text-xl font-black font-heading text-zinc-900">Need Enterprise Solutions?</h4>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed">
                  For customized corporate membership packages for organizations with over 50 employees, please contact our relationship manager.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-zinc-300 text-zinc-900 hover:bg-zinc-900 hover:text-white h-14 font-black rounded-2xl transition-all"
                  onClick={() => window.open(`https://wa.me/2349076929317?text=${encodeURIComponent("Hello EMRL, I would like to discuss a customized corporate membership package.")}`, '_blank')}
                >
                  Contact Relationship Manager
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
