import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ChevronRight, Youtube, Music, Send } from "lucide-react";
import logo from "@assets/eminent_logo_mining_colors_1764979052205.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate(email);
    }
  };

  const socialLinks = [
    { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=100084362835491", label: "Facebook" },
    { Icon: Twitter, href: "https://x.com/Eminentmines", label: "Twitter" },
    { Icon: Instagram, href: "https://www.instagram.com/eminentmines/", label: "Instagram" },
    { Icon: Youtube, href: "https://www.youtube.com/@EminentMines", label: "YouTube" },
    { Icon: Music, href: "https://www.tiktok.com/@eminentmines", label: "TikTok" },
    { Icon: Linkedin, href: "https://linkedin.com/company/eminentmines", label: "LinkedIn" },
  ];

  const services = [
    { name: "Mining & Exploration", href: "/services/mining-quarry" },
    { name: "Mineral Trading", href: "/services/mineral-trading" },
    { name: "Water Engineering", href: "/services/water-engineering" },
    { name: "Consultancy", href: "/services/consultancy" },
    { name: "Machinery Rentals", href: "/services/machinery-fabrication" },
    { name: "School of Mines", href: "/school" },
  ];

  const quickLinks = [
    { name: "About Company", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Membership", href: "/membership" },
    { name: "Equipment", href: "/equipment" },
    { name: "Laboratory", href: "/laboratory" },
    { name: "Contact Us", href: "/contact" },
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
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <a className="hover:text-white transition-colors flex items-center gap-2">
                      <ChevronRight className="h-3 w-3 text-primary" /> {service.name}
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
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="hover:text-white transition-colors flex items-center gap-2">
                      <ChevronRight className="h-3 w-3 text-primary" /> {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
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

            <h3 className="font-heading font-bold text-lg mb-4 text-primary">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border-white/10 text-white h-10 text-xs focus-visible:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-primary hover:bg-primary/90 shrink-0"
                disabled={subscribeMutation.isPending}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
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
