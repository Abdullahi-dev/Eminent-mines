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
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Our Executive Team</h3>
            <p className="text-muted-foreground text-lg">Experienced professionals dedicated to advancing Nigeria's mining sector with integrity, innovation, and excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-sm shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-80 overflow-hidden bg-zinc-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-base font-bold font-heading text-foreground mb-1 line-clamp-2">{member.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
