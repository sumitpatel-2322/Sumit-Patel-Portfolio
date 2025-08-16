import { ExternalLink, Github } from 'lucide-react';

function ProjectCard(props) {
  return (
    <div className="group h-full flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-border-light transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={props.image}
          alt={props.name + " preview"}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105 p-2 border border-background rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
          {props.name}
        </h3>
        
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
          {props.desc}
        </p>
        
        <div className="space-y-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {props.tech.map((lang, i) => (
              <span
                key={i}
                className="skill-tag text-xs"
              >
                {lang}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-surface-secondary hover:bg-primary text-text-secondary hover:text-text-primary border border-border hover:border-primary rounded-lg text-sm font-medium transition-all duration-200 flex-1 justify-center"
            >
              <Github size={16} />
              Code
            </a>
            
            <a
              href={props.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-text-primary rounded-lg text-sm font-medium transition-all duration-200 flex-1 justify-center"
            >
              <ExternalLink size={16} />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
