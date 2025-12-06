import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { Link } from "wouter";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  features: string[];
  whyChooseUs: { title: string; desc: string }[];
  methodology?: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  children?: React.ReactNode;
}

export function ServiceLayout({
  title,
  subtitle,
  heroImage,
  overview,
  features,
  whyChooseUs,
  methodology,
  faqs,
  children
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Core Service
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{overview}</p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-zinc-50 rounded-sm border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-zinc-900 text-white p-8 rounded-sm">
              <h2 className="text-2xl font-heading font-bold mb-8 text-primary">Why Choose EMRL?</h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-bold text-white shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process / Methodology */}
            {methodology && (
              <section>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Our Methodology</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {methodology.map((step, i) => (
                    <div key={i} className="bg-white p-6 border border-border shadow-sm rounded-sm hover:border-primary transition-colors">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Step {i + 1}</span>
                      <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
                <HelpCircle className="h-8 w-8 text-primary" /> Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Service Navigation */}
            <div className="bg-zinc-50 p-6 rounded-sm border border-border">
              <h3 className="font-bold font-heading text-lg mb-4">Our Services</h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { name: "Mining & Quarry Operations", href: "/services/mining-quarry" },
                  { name: "Geological & Exploration", href: "/services/geological-exploration" },
                  { name: "Water Engineering", href: "/services/water-engineering" },
                  { name: "Mineral Trading", href: "/services/mineral-trading" },
                  { name: "Machinery & Fabrication", href: "/services/machinery-fabrication" },
                  { name: "Mining Consultancy", href: "/services/consultancy" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm rounded-sm transition-all flex justify-between items-center group">
                      {link.name}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact CTA */}
            <div className="bg-primary text-white p-8 rounded-sm text-center">
              <h3 className="font-bold font-heading text-2xl mb-4">Need Professional Advice?</h3>
              <p className="text-white/90 mb-6 text-sm">Contact our experts today to discuss your mining project requirements.</p>
              <Link href="/contact">
                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-bold">Get in Touch</Button>
              </Link>
            </div>

            {/* Additional Content (Forms etc) passed as children */}
            {children}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
