import { FaCode, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa6";

const highlights = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
               I’m a full-stack developer focused on building clean, responsive, and user-friendly web applications. My front-end work is centered around React, where I create intuitive interfaces with a strong emphasis on performance, accessibility, and modern UI design. I enjoy turning complex ideas into simple, engaging user experiences that feel seamless across devices.
              </p>
              <p>
               On the back end, I work with Java and Spring Boot to design scalable APIs and handle application logic efficiently. I have experience integrating MySQL databases, managing data relationships, and building secure authentication systems. I am comfortable working across the full stack, connecting front-end interfaces to robust back-end services and ensuring everything works smoothly end-to-end.
              </p>
              <p>
                When I'm not coding, you'll find me spending time with my family, watching college football, or exploring the latest tech trends. I'm passionate about learning and always eager to take on new challenges that push my skills to the next level.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “I build digital experiences that go beyond just working, they feel smooth, intuitive, and actually enjoyable to use. At the same time, I care about keeping the code clean and structured, so it is easy to maintain and scale without becoming a headache later.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}