function ProjectCard(props) {
  return (
    <div className="w-full max-w-sm mx-auto h-full flex flex-col p-4 border rounded-xl shadow-md shadow-dark-purple bg-mint-green hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full flex-shrink-0">
        <img
          src={props.image}
          alt={props.name + " image"}
          className="w-full h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52 object-cover border border-dark-purple rounded-xl"
        />
      </div>
      
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 line-clamp-2 flex-shrink-0">
          {props.name}
        </h3>
        <p className="mt-2 text-black/80 text-sm sm:text-base leading-relaxed line-clamp-3 flex-1">
          {props.desc}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2 flex-shrink-0">
          {props.tech.map((lang, i) => (
            <span
              key={i}
              className="bg-dark-purple/80 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg border border-celadon/50 text-xs sm:text-sm font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
