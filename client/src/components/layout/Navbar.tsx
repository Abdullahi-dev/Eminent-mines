import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "School of Mines", href: "/school" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <p className="hidden md:block">Leading Nigeria's Mining & Natural Resources Sector</p>
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> +234 800 EMRL MINES</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> info@emrl.com</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            {/* Logo Placeholder */}
            <div className="h-10 w-10 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-primary/90 transition-colors">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-foreground leading-none">EMRL</span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase font-medium">Eminent Mines Resources</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary font-heading uppercase tracking-wide",
                location === link.href ? "text-primary font-bold" : "text-foreground/80"
              )}>
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-widest px-6">
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4 absolute w-full shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a 
                className="block text-sm font-medium py-2 hover:text-primary border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full mt-4">Get Quote</Button>
        </div>
      )}
    </header>
  );
}
