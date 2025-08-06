function ProjectCard(props){
    return(
        <>
        <div className="text-left w-[24rem] p-[1rem] m-[1rem] border rounded-xl shadow-md shadow-dark-purple">
            <img src={props.image} alt="Portfolio image" className="m-auto border border-dark-purple rounded-xl" />
            <p className="my-3 text-3xl font-semibold">
                {props.name}
            </p>
            <p className="my-3 text-black">{props.desc}</p>
            <div className="flex flex-wrap justify-evenly gap-3">
            {props.tech.map((lang,i)=>(
                <p className="bg-dark-purple/80 text-white px-3 py-1 rounded-xl border-celadon">{lang}</p>
            ))}
            </div>
        </div>
        </>
    )
}
export default ProjectCard;


