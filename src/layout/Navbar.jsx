import { Button } from "@/components/Button";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";


const navLinks =[
  {href: "#about", label: "Home"},
  {href: "#about", label: "About"},
  {href: "#projects", label: "Projects"},
  {href: "#experience", label: "Experience"},
  {href: "#contact", label: "Contact"},
]

export const Navbar = () => { 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return(
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className = "container mx-auto flex items-center justify-between">
      <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary"> 
        AA<span className="text-primary">.</span>
      </a>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full bg-surface transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* call to action  */}
      <div className="hidden md:block">
        <Button size="small">Contact Me</Button>
      </div>

      {/* mobile menu button */}
      <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>
    </nav>
      
      {/* Mobile Menu */}
       {isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">
              {link.label}
            </a>
          ))}
          <Button size="small">Contact Me</Button>
        </div>
      </div>}
  </header>
  )
}
