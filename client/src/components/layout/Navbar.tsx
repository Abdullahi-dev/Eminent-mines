import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Music, Linkedin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/eminent_logo_mining_colors_1764979052205.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "School of Mines", href: "/school" },
    { name: "Equipment", href: "/equipment" },
    { name: "Laboratory", href: "/laboratory" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=100084362835491", label: "Facebook" },
    { Icon: Twitter, href: "https://x.com/Eminentmines", label: "Twitter" },
    { Icon: Instagram, href: "https://www.instagram.com/eminentmines/", label: "Instagram" },
    { Icon: Youtube, href: "https://www.youtube.com/@EminentMines", label: "YouTube" },
    { Icon: Music, href: "https://www.tiktok.com/@eminentmines", label: "TikTok" },
    { Icon: Linkedin, href: "https://linkedin.com/company/eminentmines", label: "LinkedIn" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4 text-xs font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <p className="hidden lg:block font-bold italic">If it can't be grown; it has to be mined!!!</p>
          <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end flex-wrap">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> +234 907 692 9317</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> info@emrl.com</span>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="hover:opacity-75 transition-opacity"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img src={logo} alt="EMRL Logo" className="h-14 w-auto object-contain" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={cn(
                "text-[9px] xl:text-[10px] 2xl:text-xs font-black transition-all hover:text-primary font-heading uppercase tracking-widest",
                location === link.href ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:-translate-y-0.5"
              )}>
                {link.name}
              </a>
            </Link>
          ))}
          <a 
            href={`https://wa.me/2349076929317?text=${encodeURIComponent("Hello EMRL Founder, I am visiting your website and I would like to request a quote for your mining services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 xl:ml-2"
          >
             <Button className="bg-zinc-900 hover:bg-primary text-white font-black uppercase text-[9px] xl:text-[10px] tracking-widest px-4 xl:px-5 h-9 xl:h-10 rounded-xl transition-all shadow-xl hover:-translate-y-1 active:scale-95">
              Get Quote
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background p-4 space-y-4 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a 
                className="block text-sm font-medium py-3 hover:text-primary border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <a 
            href={`https://wa.me/2349076929317?text=${encodeURIComponent("Hello EMRL Founder, I am visiting your website and I would like to request a quote for your mining services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button className="w-full mt-4">Get Quote</Button>
          </a>
        </div>
      )}
    </header>
  );
}
