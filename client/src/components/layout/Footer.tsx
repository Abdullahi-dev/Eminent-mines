import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ChevronRight, Youtube, Music } from "lucide-react";
import logo from "@assets/eminent_logo_mining_colors_1764979052205.png";

export function Footer() {
  const socialLinks = [
    { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=100084362835491", label: "Facebook" },
    { Icon: Twitter, href: "https://x.com/Eminentmines", label: "Twitter" },
    { Icon: Instagram, href: "https://www.instagram.com/eminentmines/", label: "Instagram" },
    { Icon: Youtube, href: "https://www.youtube.com/@EminentMines", label: "YouTube" },
    { Icon: Music, href: "https://www.tiktok.com/@eminentmines", label: "TikTok" },
    { Icon: Linkedin, href: "https://linkedin.com/company/eminentmines", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#1B1B1B] text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="EMRL Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Eminent Mines Resources Limited is a leading Nigerian mining company dedicated to sustainable exploration, mineral trading, and technological advancement in the mining sector.
            </p>
            <p className="text-primary font-bold italic text-sm mb-6">If it can't be grown; it has to be mined!!!</p>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-gray-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-primary">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Mining & Exploration", "Mineral Trading", "Water Engineering", "Consultancy", "Machinery Rentals", "School of Mines"].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <a className="hover:text-white transition-colors flex items-center gap-2">
                      <ChevronRight className="h-3 w-3 text-primary" /> {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["About Company", "Our Projects", "Membership", "Equipment", "Laboratory", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="/about">
                    <a className="hover:text-white transition-colors flex items-center gap-2">
                      <ChevronRight className="h-3 w-3 text-primary" /> {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  1st Floor UBA Building,<br />
                  Poly Road, Tudunwada,<br />
                  Kaduna, Nigeria.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  +234 907 692 9317<br />
                  +234 906 726 3066<br />
                  +234 706 255 5819
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@emrl.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eminent Mines Resources Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
