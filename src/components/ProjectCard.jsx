function ProjectCard(props) {
return (
<div className="w-full p-4 border rounded-xl shadow-md shadow-dark-purple bg-mint-green">
<img
src={props.image}
alt={props.name +"image"}
className="w-full aspect-[16/9] object-cover border border-dark-purple rounded-xl"
/>
<p className="mt-3 text-2xl font-semibold">{props.name}</p>
<p className="mt-2 text-black/80 text-sm sm:text-base">{props.desc}</p>

  <div className="mt-3 flex flex-wrap gap-2">
    {props.tech.map((lang, i) => (
      <span
        key={i}
        className="bg-dark-purple/80 text-white px-3 py-1 rounded-xl border border-celadon/50 text-xs sm:text-sm"
      >
        {lang}
      </span>
    ))}
  </div>
</div>
);
}

export default ProjectCard;