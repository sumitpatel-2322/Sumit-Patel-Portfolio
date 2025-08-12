import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import testImage from './assets/test-image.jpeg';
import Intro from './components/Intro';
import Skills from './components/Skills';

const projects = [
{ name: "Portfolio", desc: "This portfolio is one of my project showcasing my front-end", image: testImage, tech: ['HTML', 'React', 'TailwindCss'] },
{ name: "Rankmate", desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", image: testImage, tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'] },
{ name: "Portfolio", desc: "This portfolio is one of my project showcasing my front-end", image: testImage, tech: ['HTML', 'React', 'TailwindCss'] },
{ name: "Rankmate", desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", image: testImage, tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'] },
{ name: "Portfolio", desc: "This portfolio is one of my project showcasing my front-end", image: testImage, tech: ['HTML', 'React', 'TailwindCss'] },
{ name: "Rankmate", desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", image: testImage, tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'] }
];

function App() {
return (
<>
<Header />
<Intro />
<About />
<Skills/>
  <section id="myprojects" className="scroll-mt-24">
    <h1 className="text-3xl text-center my-8 px-8 font-semibold">Projects</h1>

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </div>
  </section>
</>
);
}

export default App;