import { Button } from "@/components/Button";


const navLinks =[
  {href: "#", label: "Home"},
  {href: "#", label: "About"},
  {href: "#", label: "Projects"},
  {href: "#", label: "Experience"},
  {href: "#", label: "Contact"},
]

export const Navbar = () => { 

  return(
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className = "container mx-auto flex items-center justify-between">
      <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary"> 
        AA<span className="text-primary">.</span>
      </a>

      {/* Desktop navigation */}
      <div className="flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full bg-surface transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* call to action  */}
      <div>
        <Button size="small">Contact Me</Button>
      </div>
    </nav>
      
  </header>
  )
}
