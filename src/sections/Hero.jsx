import { Button } from "@/components/Button";
import {
  FaArrowRight,
  FaChevronDown,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => {

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "Node.js",
  "SQL",
  "MYSQL",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  
]

  const pseudoRandom = (seed) => {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };

  const particles = Array.from({ length: 30 }, (_, index) => {
    const top = pseudoRandom(index + 1) * 100;
    const left = pseudoRandom(index + 101) * 100;
    const duration = 15 + pseudoRandom(index + 201) * 20;
    const delay = pseudoRandom(index + 301) * 5;

    return {
      top: `${top}%`,
      left: `${left}%`,
      duration: `${duration}s`,
      delay: `${delay}s`,
    };
  });

  return(
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0">
        <img src="./images/hero-bg1.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <div key={index} className="absolute w-1.5 h-1.5 rounded-full opacity-20"
          style={{
            top: particle.top,
            left: particle.left,
            animation: `slow-drift ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
            backgroundColor: "#20B2A6",
          }}></div>
        ))}
      </div>

      {/* content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center" >
          {/* left column */}
          <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary"/>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse">
              Software Engineer
              </span>       
          </div>

          {/* headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Crafting<span className="text-primary glow-text"> digital</span>
              <br />
              experiences with
              <br />
              <span className="font-serif italic font-normal text-white">precision.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus accusamus sequi maiores? Eaque tempore quasi voluptates cumque eius, corporis explicabo blanditiis deleniti, ea repellat unde autem voluptatibus libero odit!
            </p>
          </div>

          {/* call to action */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
          <Button size="small" variant="primary" className="animate-fade-in animation-delay-300">
            Contact Me <FaArrowRight className="w-3 h-3"/>
          </Button>
          <AnimatedBorderButton>
            <FaDownload className="w-3 h-3"/>
            Download CV
          </AnimatedBorderButton>
          </div>
          {/* social links */}
          <div className="mt-8 flex items-center gap-4 animate-fade-in animation-delay-400">
          <span className="text-sm text-muted-foreground">Follow: </span>
           {[
             { icon: FaGithub, href: "https://github.com/A-dot-Age" },
             { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/anthonyagedeveloper" },
             
            ].map((social, index) => (
              <a
              key={index}
              href={social.href}
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
              </div>
          </div>
          {/* right column */}
            <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="./images/profile-picture.jpg"
                  alt="Anthony Age"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
               
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
};