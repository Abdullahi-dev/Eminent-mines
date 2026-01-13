import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2 } from "lucide-react";
import ceoImage from "@assets/Engr._Jamiu_Rasheed_odofin_Founder_CEO_1766651126730.jpeg";
import cfImage from "@assets/Dr._Isiak_Adeyemi_Alabi-Co-founder_1766780167112.png";
import ctoImage from "@assets/Mr._Abdullahi_Mahmud_Co-founder_CTOBR&D_1766574911792.png";
import csoImage1 from "@assets/Engr._Ola_Rokeeb_Co-founder_CSO_(2)_1766574916972.png";
import cmoImage from "@assets/Engr._Abdulmujeeb_Ramadan_Sodiq_Co-founder_CMO-_1766574924512.png";
import cloImage from "@assets/Mallam_Abdulazeez_Isa_Co-founder_CLO-removebg-preview_1766574935845.png";
import cooImage from "@assets/Engr_Ibrahim_Magagi_Abdulbaki_Founder_COO_1766651146379.jpeg";
import csoImage2 from "@assets/Engr._Abdulsalam_Abdulrahman_Adeshina_Co-founder_CSO_(2)_1766574946072.png";

export default function About() {
  const teamMembers = [
    {
      name: "Engr. Jamiu Rasheed Odofin",
      title: "Founder, Chief Executive Officer",
      role: "CEO",
      image: ceoImage,
      bio: "Visionary founder and strategic leader driving EMRL's expansion across Nigeria's mining sector."
    },
    {
      name: "Dr. Isiak Adeyemi Alabi",
      title: "Founder, Chief Financial Officer",
      role: "CFO",
      image: cfImage,
      bio: "Financial steward ensuring sound fiscal management and sustainable business growth."
    },
    {
      name: "Engr. Ibrahim Magagi Abdulbaki",
      title: "Founder, Chief Operating Officer",
      role: "COO",
      image: cooImage,
      bio: "Operational excellence leader driving efficiency and execution across all divisions."
    },
    {
      name: "Mr. Abdullahi Mahmud",
      title: "Co-founder, Chief Technology Officer",
      role: "CTO/BR&D",
      image: ctoImage,
      bio: "Technology innovator advancing mining solutions through modern geospatial systems."
    },
    {
      name: "Engr. Ola Rokeeb",
      title: "Co-founder, Chief Sustainability Officer",
      role: "CSO",
      image: csoImage1,
      bio: "Environmental steward ensuring sustainable and responsible mining practices."
    },
    {
      name: "Engr. Abdulmujeeb Ramadan Sodiq",
      title: "Co-founder, Chief Marketing Officer",
      role: "CMO",
      image: cmoImage,
      bio: "Strategic marketer building EMRL's presence in Nigerian and international markets."
    },
    {
      name: "Mallam Abdulazeez Isa",
      title: "Co-founder, Chief Legal Officer",
      role: "CLO",
      image: cloImage,
      bio: "Legal expert ensuring regulatory compliance and protecting company interests."
    },
    {
      name: "Engr. Abdulsalam Abdulrahman Adeshina",
      title: "Co-founder, Chief Safety Officer",
      role: "CSO",
      image: csoImage2,
      bio: "Safety champion maintaining zero-harm culture and occupational health initiatives."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-zinc-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">About EMRL</h1>
          <p className="text-xl text-gray-400 max-w-2xl">The premier choice for mining and natural resource development in Nigeria.</p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Building a Legacy of Excellence in Mining
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eminent Mines Resources Limited (EMRL) was established to bridge the gap between Nigeria's vast mineral potential and the global demand for ethically sourced resources. We are a fully licensed, indigenous company that operates with international standards of safety, efficiency, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Our Vision", desc: "To be the leading mining and resource company in West Africa, known for innovation and sustainability." },
              { title: "Our Mission", desc: "To explore, extract, and trade mineral resources efficiently while empowering communities and upholding global standards." },
              { title: "Our Values", desc: "Integrity, Safety, Sustainability, Innovation, and Excellence in every project we undertake." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 p-8 border-l-4 border-primary rounded-r-sm">
                <h4 className="text-xl font-bold font-heading mb-4 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">The EMRL Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-6 leading-tight">Driving Innovation in Mining</h3>
            <p className="text-zinc-600 text-lg leading-relaxed">Our multi-disciplinary executive team brings decades of combined experience in geological engineering, financial management, and operational safety to every project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.map((member, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-zinc-900/5 transition-colors group-hover:bg-transparent" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">{member.role}</p>
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <h4 className="text-xl font-black font-heading text-zinc-900 group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-xs text-primary font-black uppercase tracking-widest">{member.title}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact & Partnerships */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-heading font-black leading-tight">A Global Vision, <br /><span className="text-primary">Nigeria-Rooted.</span></h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                EMRL is not just a mining company; we are architects of Nigeria's industrial future. We partner with the Ministry of Mines and Steel Development (MMSD) and international investors to unlock the true value of West Africa's mineral wealth.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {[
                  { label: "State Licenses", val: "15+" },
                  { label: "Community Projects", val: "25+" },
                  { label: "Export Partners", val: "12" },
                  { label: "ISO Certifications", val: "3" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6">
                    <div className="text-3xl font-black font-heading text-white">{stat.val}</div>
                    <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-8">Our Strategic Pillars</h4>
              <div className="space-y-6">
                {[
                  { title: "Ethical Exploration", desc: "Respecting the land and its original custodians through fair compensation and land restoration." },
                  { title: "Technical Sovereignty", desc: "Investing in Nigerian talent and indigenous technology to reduce foreign dependency." },
                  { title: "Economic Resilience", desc: "Creating stable value chains for Nigerian minerals in the global market." }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div className="space-y-1">
                      <p className="font-bold text-white">{pillar.title}</p>
                      <p className="text-sm text-zinc-400">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
