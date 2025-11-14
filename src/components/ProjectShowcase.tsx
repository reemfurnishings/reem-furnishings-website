import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const projects = [
  { image: gallery1, title: "Luxury Penthouse", location: "Dubai Marina" },
  { image: gallery2, title: "Villa Interior", location: "Emirates Hills" },
  { image: gallery3, title: "Show Unit", location: "Downtown Dubai" },
  { image: gallery4, title: "Executive Office", location: "DIFC" }
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Recent <span className="bg-gradient-gold bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafted for Dubai's finest interiors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-elegant transition-all duration-700"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                <p className="text-primary-foreground/80">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
