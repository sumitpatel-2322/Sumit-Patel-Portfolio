import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import testImage from './assets/test-image.jpeg';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

const projects = [
  { 
    name: "Portfolio", 
    desc: "This portfolio is one of my project showcasing my front-end", 
    image: testImage, 
    tech: ['HTML', 'React', 'TailwindCss'] 
  },
  { 
    name: "Rankmate", 
    desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", 
    image: testImage, 
    tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'] 
  },
  { 
    name: "Portfolio", 
    desc: "This portfolio is one of my project showcasing my front-end", 
    image: testImage, 
    tech: ['HTML', 'React', 'TailwindCss'] 
  },
  { 
    name: "Rankmate", 
    desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", 
    image: testImage, 
    tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'] 
  },
  { 
    name: "Portfolio", 
    desc: "This portfolio is one of my project showcasing my front-end", 
    image: testImage, 
    tech: ['HTML', 'React', 'TailwindCss'] 
  },
  { 
    name: "Rankmate", 
    desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", 
    image: testImage, 
    tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'] 
  }
];

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      
      <section 
  id="myprojects" 
  className="scroll-mt-24 m-4 sm:m-6 lg:m-4 p-4 sm:p-6 lg:p-8 bg-gray-200 border border-mint-green rounded-xl"
>
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl sm:text-4xl lg:text-4xl text-center lg:text-left font-semibold text-gray-800 mb-8 sm:mb-12">
      Projects
    </h1>
    
    <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-stretch">
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  </div>
</section>
      
      <Contact />
      <Footer />
    </>
  );
}

export default App;
