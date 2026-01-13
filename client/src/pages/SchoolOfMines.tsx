import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Globe, 
  ShieldCheck, 
  Users, 
  Zap, 
  ArrowRight, 
  Download,
  FileText,
  UserCheck
} from "lucide-react";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import schoolHeroImage from "@assets/generated_images/nigerian_mining_students_in_lab.png";
import authenticFieldImage from "@assets/generated_images/nigerian_geologists_examining_lithium_ore_outdoors.png";
import authenticProfessionalImage from "@assets/generated_images/nigerian_mining_consultants_in_boardroom.png";

export default function SchoolOfMines() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      {/* Hero Section - University Style */}
      <section className="relative min-h-[70vh] w-full overflow-hidden bg-zinc-900 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${schoolHeroImage})`, opacity: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
        
        <div className="relative container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest">
              <GraduationCap className="h-4 w-4" /> Global Excellence in Mining Education
            </div>
            
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[1.1]">
              Shape the <span className="text-primary">Future</span> of Mineral Science
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-2xl">
              The EMRL School of Mines is a premier international institution dedicated to developing the next generation of technical leaders in the global mining industry.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-black px-10 h-16 text-lg rounded-xl shadow-xl hover:-translate-y-1 transition-all"
                onClick={() => {
                  const el = document.getElementById('admission-portal');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 font-black px-10 h-16 text-lg rounded-xl backdrop-blur-sm transition-all"
                onClick={() => {
                  const content = "EMRL SCHOOL OF MINES - ACADEMIC PROSPECTUS 2025\n\n1. MISSION\nTo develop world-class mining professionals with technical excellence.\n\n2. PROGRAMS\n- Executive Mine Management\n- Advanced Mineral Exploration\n- Operational Safety Excellence\n\n3. ADMISSIONS\nApplicants must have relevant technical background or academic qualifications (SSCE/OND/HND/BSc).\n\n4. FACILITIES\nAccess to active mining sites, ISO-certified laboratory, and GIS mapping technology.\n\nContact: admissions@emrl.com.ng";
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'EMRL_School_of_Mines_Prospectus.txt';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
                }}
              >
                Download Prospectus <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Stats */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Accredited Programs", value: "12", icon: BookOpen },
              { label: "Industry Partners", value: "25+", icon: Globe },
              { label: "Graduation Rate", value: "98%", icon: Award },
              { label: "Certified Alumni", value: "1,500+", icon: Users }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <stat.icon className="h-6 w-6 text-primary mb-2" />
                <div className="text-3xl font-black font-heading text-zinc-900">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Content Side (Col 1-7) */}
          <div className="lg:col-span-7 space-y-24">
            
            {/* Academic Philosophy */}
            <section className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-black uppercase tracking-widest text-sm">Academic Excellence</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 leading-tight">
                  International Standards, <br /> Indigenous Expertise.
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Our curriculum is designed in collaboration with global mining authorities to ensure our graduates are ready for the complexities of modern mineral exploration and extraction. We bridge the gap between classroom theory and pit-site reality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Safety First", desc: "Rigorous training in MMSD compliance and international safety protocols.", icon: ShieldCheck },
                  { title: "Tech-Driven", desc: "Access to advanced GIS mapping and mineral identification technology.", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h4>
                    <p className="text-zinc-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Academic Programs */}
            <section className="space-y-10">
              <h3 className="text-3xl font-heading font-black text-zinc-900 border-l-4 border-primary pl-6">World-Class Programs</h3>
              <div className="grid gap-6">
                {[
                  { 
                    title: "Executive Mine Management", 
                    level: "Professional Diploma",
                    desc: "Comprehensive leadership training for future site managers and directors.",
                    modules: ["Strategic Planning", "Environmental Governance", "Financial Management"]
                  },
                  { 
                    title: "Advanced Mineral Exploration", 
                    level: "Technical Certification",
                    desc: "Specialized training in geochemical sampling and borehole logging.",
                    modules: ["Core Sampling", "Data Analysis", "Field Mapping"]
                  },
                  { 
                    title: "Operational Safety Excellence", 
                    level: "Mandatory Certification",
                    desc: "Critical training for pit-site safety officers and blast technicians.",
                    modules: ["Blast Safety", "PPE Standards", "Incident Response"]
                  }
                ].map((program, i) => (
                  <div key={i} className="group relative bg-white p-8 rounded-3xl border border-zinc-200 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-full -mr-16 -mt-16 group-hover:bg-primary/5 transition-colors" />
                    <div className="relative z-10">
                      <div className="text-primary text-xs font-black uppercase tracking-widest mb-2">{program.level}</div>
                      <h4 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-primary transition-colors">{program.title}</h4>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{program.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.modules.map((mod, j) => (
                          <span key={j} className="text-[10px] font-black uppercase tracking-wider bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full border border-zinc-200">
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Student Experience */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-0" />
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-heading font-black">Beyond the Classroom</h3>
                <p className="text-gray-400 text-lg">
                  Students at EMRL gain exclusive access to our active mining sites across Nigeria, participating in real-time exploration projects alongside seasoned Nigerian engineers wearing EMRL-branded attire.
                </p>
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img src={authenticFieldImage} alt="Nigerian engineers in EMRL attire" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Area (Col 8-12) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24" id="admission-portal">
            
            {/* Admission Portal Card */}
            <div className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="bg-primary p-8 text-white">
                <h3 className="text-2xl font-black font-heading flex items-center gap-3">
                  <FileText className="h-6 w-6" /> Admissions Portal
                </h3>
                <p className="text-white/80 text-sm mt-2">Submit your comprehensive application for the 2025 Academic Session.</p>
              </div>
              <div className="p-8">
                <ApplicationForm />
              </div>
            </div>

            {/* Quick Portal Access */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-primary/30 transition-all cursor-pointer group">
                <UserCheck className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-black text-zinc-900 text-sm uppercase tracking-wider">Student Login</h4>
              </div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-primary/30 transition-all cursor-pointer group">
                <Download className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-black text-zinc-900 text-sm uppercase tracking-wider">Fee Schedule</h4>
              </div>
            </div>

            {/* Financial Aid Banner */}
            <div className="bg-zinc-900 p-8 rounded-[2rem] text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10 space-y-4 text-center">
                <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-black font-heading text-primary">Global Scholarships</h4>
                <p className="text-sm text-gray-400">Supporting international talent with merit-based financial aid.</p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white hover:text-zinc-900 h-14 font-black rounded-xl transition-all"
                  onClick={() => window.open(`https://wa.me/2348105087219?text=${encodeURIComponent("Hello EMRL Admissions, I am interested in applying for financial aid for the School of Mines programs.")}`, '_blank')}
                >
                  Apply for Aid
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Graduation Showcase */}
      <section className="bg-zinc-50 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
              <img src={authenticProfessionalImage} alt="Nigerian professionals in EMRL attire" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-4xl font-heading font-black text-zinc-900 leading-tight">Your Career Starts in the Field</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                92% of our graduates secure leadership positions within six months of completion. Join a global network of EMRL alumni operating in over 15 countries, projecting Nigerian excellence to the world.
              </p>
              <div className="space-y-4">
                {[
                  "Global Career Support",
                  "Lifetime Access to Alumni Portal",
                  "Direct Recruitment by EMRL Partners"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="font-bold text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-zinc-900 text-white hover:bg-zinc-800 font-black px-10 h-16 text-lg rounded-xl shadow-xl transition-all"
                onClick={() => window.open(`https://wa.me/2348105087219?text=${encodeURIComponent("Hello EMRL School of Mines, I would like to request more information about your academic programs.")}`, '_blank')}
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
