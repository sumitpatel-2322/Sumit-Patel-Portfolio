import IconsFlex from "./IconsFlex";
function Intro() {
  return (
    <div
      id="home"
      className=" p-4 pt-6 text-left w-full sm:w-3/4 sm:p-6 md:w-2/3 md:p-8 lg:pt-18 lg:p-12 min-h-screen flex flex-col justify-center">
      <p className="text-xl sm:text-2xl">Hello There!!</p>
      <p className="text-4xl sm:text-5xl lg:text-6xl my-[0.25rem] font-semibold">
        Sumit Patel
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl">
        Aspiring Machine Learning Engineer from India
      </p>
      <p>
        Skilled in Full Stack Development and continuously exploring the world
        of AI & ML to create innovative solutions.
      </p>
      <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4" >
      <IconsFlex/>
      </div>
    </div>
  );
}
export default Intro;
