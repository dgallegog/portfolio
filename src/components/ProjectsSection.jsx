import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise Identity & Access Management Tool",
    description: "Comprehensive authentication and password reset platform with React front-end, .NET Azure Functions, SMS/email notifications, and Kubernetes-based API orchestration.",
    image:  "/projects/project1.png",
    tags: ["React", ".Net", "Azure", "Kubernetes"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Automated Data Integration & Reporting Service",
    description:
      "Distributed .NET service that consumes business events from Kafka, processes and enriches data in Azure, and stores the results in a relational database for real-time analytics and reporting.",
    image: "/projects/project2.png",
    tags: ["Kafka", ".Net", "Azure", "Kubernetes","SQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Dynamics 365 Data Integration Service",
    description:
      ".NET microservice that consumes events from Kafka, processes customer and sales data, and syncs them with Dynamics 365 CRM in real time.",
    image: "/projects/project3.png",
    tags: ["Dynamics 366", ".Net", "Kafka"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects were developed with a 
          strong focus on scalability, 
          reliability, and business impact.
          Each solution was designed to meet 
          real-world requirements, ensuring performance, 
          maintainability, and long-term value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={ project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
