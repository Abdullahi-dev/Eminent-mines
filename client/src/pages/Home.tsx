import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, HardHat, Pickaxe, Trophy, Shield, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Typewriter } from "@/components/ui/typewriter";
import { Counter } from "@/components/ui/counter";
import { CEOMessage } from "@/components/home/CEOMessage";
import { Newspaper } from "lucide-react";

import heroImage from "@assets/generated_images/cinematic_modern_mining_site_hero_background.png";
import explorationImage from "@assets/generated_images/geologists_examining_rock_samples.png";
import machineryImage from "@assets/generated_images/heavy_mining_machinery_fleet.png";
import tradingImage from "@assets/generated_images/unique_mineral_ores_and_crystals_close-up.png";
import consultancyImage from "@assets/generated_images/nigerian_mining_consultants_in_boardroom.png";
import schoolImage from "@assets/generated_images/nigerian_mining_students_in_lab.png";
import waterImage from "@assets/generated_images/water_engineering_borehole_drilling.png";
import explosivesImage from "@assets/generated_images/mining_explosives_storage_magazine.png";
import investorForumImage from "@assets/generated_images/nigerian_mining_investment_forum_scene.png";
import lithiumFieldImage from "@assets/generated_images/nigerian_geologists_examining_lithium_ore_outdoors.png";
import communityProjectImage from "@assets/generated_images/community_development_project_in_mining_area.png";
import mineralComplianceImage from "@assets/generated_images/mineral_resources_development_compliance_document_scene.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section - High Impact */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        
        <div className="relative container mx-auto px-4 z-10 pt-24 pb-12 sm:pb-24 lg:pb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/15 border border-primary/40 backdrop-blur-md text-primary text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(var(--primary),0.2)]">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-primary"></span>
              </span>
              Leading Nigeria's Mining Evolution
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tight">
              Unearthing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary-foreground animate-gradient-x">
                <Typewriter words={["Global Value", "Sustainable Wealth", "Mineral Assets", "Future Growth"]} />
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-medium">
              Eminent Mines Resources Limited integrates advanced geological science with indigenous expertise to deliver world-class mineral solutions across the African continent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 md:pt-6">
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg px-6 md:px-10 h-14 md:h-16 rounded-sm shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group w-full">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a 
                href="https://wa.me/2349076929317?text=Hello%20EMRL%20Founder%2C%20I%20am%20visiting%20your%20website%20and%20I%20would%20like%20to%20partner%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-bold text-base md:text-lg px-6 md:px-10 h-14 md:h-16 backdrop-blur-sm rounded-sm hover:-translate-y-1 transition-all duration-300 w-full">
                  Partner With Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Stats Section - Responsive Positioning */}
        <div className="relative md:absolute md:bottom-0 w-full bg-black/80 md:backdrop-blur-xl border-t border-white/10 py-8 md:py-8 lg:py-10 z-20">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8"
            >
              {[
                { label: "Strategic Assets", value: 15, suffix: "+", icon: Globe },
                { label: "Export Capacity", value: 100000, suffix: "+", icon: TrendingUp },
                { label: "Expert Personnel", value: 250, suffix: "+", icon: Users },
                { label: "Compliance Rate", value: 100, suffix: "%", icon: Shield }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-black font-heading text-white">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Edge - Improved Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Competitive Edge</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight">
                  Driving National Prosperity through Sustainable Mining
                </h3>
              </motion.div>

              <div className="bg-primary/5 p-8 border-l-8 border-primary rounded-r-2xl italic">
                <p className="text-zinc-800 font-heading font-medium text-xl leading-relaxed">
                  "At EMRL, we don't just extract minerals; we build the infrastructure for Nigeria's future, ensuring every ton mined contributes to our shared economic sovereignty."
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  { icon: Shield, title: "Uncompromising Compliance", desc: "Rigorous adherence to Ministry of Mines and Steel Development (MMSD) Mineral Resources regulations ensures smooth project execution." },
                  { icon: Zap, title: "Scientific Precision", desc: "Utilizing modern geochemical and geophysical methods for accurate resource mapping and pit optimization." },
                  { icon: Users, title: "Indigenous Insight", desc: "Our deep understanding of local community relations significantly mitigates operational risks and fosters shared prosperity." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6 group p-4 rounded-xl hover:bg-zinc-50 transition-colors"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-zinc-900 mb-2">{item.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <Link href="/about">
                  <Button variant="outline" className="border-primary/20 bg-primary text-white hover:bg-[#B8860B] font-bold h-14 px-8 text-base transition-all rounded-xl shadow-lg hover:shadow-primary/20">
                    Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative lg:sticky lg:top-24"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5]">
                <img src={mineralComplianceImage} alt="MMSD Compliance" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Refined */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-widest text-sm"
            >
              Industry-Leading Capabilities
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-black text-zinc-900 leading-tight"
            >
              Integrated Mining Ecosystem
            </motion.h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Strategic Exploration", desc: "Leveraging GIS and airborne surveys to identify high-potential mineral corridors.", img: heroImage, link: "/services/mining-quarry" },
              { title: "Global Mineral Trading", desc: "Expert logistics and certification for high-purity Lead, Zinc, and Lithium.", img: tradingImage, link: "/services/mineral-trading" },
              { title: "Specialized Rentals", desc: "Tier-1 mining equipment fleet maintained to international safety standards.", img: machineryImage, link: "/services/machinery-fabrication" },
              { title: "Hydrological Engineering", desc: "Industrial borehole solutions for mining camps and local communities.", img: waterImage, link: "/services/water-engineering" },
              { title: "Strategic Consultancy", desc: "Expert guidance on licensing, feasibility, and regulatory alignment.", img: consultancyImage, link: "/services/consultancy" },
              { title: "Magazines & Explosives", desc: "Secure storage and blasting management certified by safety authorities.", img: explosivesImage, link: "/services/explosives-management" },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-10 space-y-4">
                  <h4 className="text-2xl font-black text-zinc-900 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-zinc-600 leading-relaxed text-base">{service.desc}</p>
                  <Link href={service.link}>
                    <a className="inline-flex items-center text-sm font-black text-primary hover:text-primary-foreground transition-all uppercase tracking-widest pt-4 group/btn">
                      Explore Capability <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Impact Section */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Strategic Impact</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-white mb-8 leading-tight">
                Empowering Nigeria's <br /> Global Mineral Presence
              </h3>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                EMRL is strategically positioned to serve as the gateway for international investment in Nigeria's rich mineral corridors. We bridge the gap between geological potential and commercial reality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Investor-Ready Projects", desc: "Bankable feasibility studies and clear mineral titles for global partners." },
                  { title: "Government Alignment", desc: "Deep collaboration with federal mining authorities for seamless operations." },
                  { title: "Global Partnerships", desc: "Forging strategic alliances with international technology and equipment providers." },
                  { title: "Community Development", desc: "Investing in host communities to ensure shared social and economic value." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                    <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border border-white/10">
                <img src={tradingImage} alt="Mineral Export Operations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CEOMessage />

      {/* News & Insights Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">News & Insights</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight">
                Latest from the Mining Sector
              </h3>
            </div>
            <Link href="/news">
              <Button variant="outline" className="border-zinc-200 hover:border-primary font-bold h-12 px-6 rounded-xl transition-all hover:scale-105 active:scale-95">
                View All Updates <Newspaper className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Nigeria's Lithium Revolution: EMRL Leads the Way",
                date: "Oct 24, 2025",
                category: "Industry News",
                img: lithiumFieldImage,
                link: "/news/lithium-revolution",
                excerpt: "EMRL's latest exploration results show record-high purity in our new lithium prospects..."
              },
              {
                title: "Sustainable Mining: Integrating Community Growth",
                date: "Oct 12, 2025",
                category: "Sustainability",
                img: communityProjectImage,
                link: "/news/sustainable-mining",
                excerpt: "Our new 'School of Mines' initiative is transforming local community engagement..."
              },
              {
                title: "Global Investment Forum: Mining in West Africa",
                date: "Sep 28, 2025",
                category: "Investor Relations",
                img: investorForumImage,
                link: "/news/global-investment",
                excerpt: "Join EMRL at the upcoming mining forum to discuss strategic mineral partnerships..."
              }
            ].map((item, i) => (
              <Link key={i} href={item.link}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer bg-zinc-50 p-4 rounded-[2.5rem] border border-transparent hover:border-primary/30 transition-all hover:shadow-2xl"
                >
                  <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>
                  <div className="space-y-3 px-2">
                    <div className="text-zinc-400 text-sm font-bold">{item.date}</div>
                    <h4 className="text-xl font-black text-zinc-900 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 line-clamp-2 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-[3rem] p-6 sm:p-10 md:p-20 text-center border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-heading font-black mb-6 md:mb-8 text-white leading-tight">
              Let's Build the Future <br className="hidden sm:block" /> of Nigerian Mining together.
            </h2>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 md:mb-12 font-medium">
              Join a network of global investors and industry leaders partnering with EMRL to drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <a 
                href="https://wa.me/2349076929317?text=Hello%20EMRL%20Founder%2C%20I%20am%20visiting%20your%20website%20and%20I%20would%20like%20to%20initiate%20a%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-white text-primary hover:bg-zinc-100 font-black text-base md:text-xl px-8 md:px-12 h-14 md:h-20 rounded-xl md:rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 w-full">
                  Initiate Partnership
                </Button>
              </a>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black text-base md:text-xl px-8 md:px-12 h-14 md:h-20 backdrop-blur-sm rounded-xl md:rounded-2xl transition-all hover:scale-105 active:scale-95 w-full">
                  Our Corporate Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
