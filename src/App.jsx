
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ProjectCard from './components/ProjectCard';
import testImage from './assets/test-image.jpeg'

const projects=[
  {name:"Portfolio", desc:"This portfolio is one of my project showcasing my front-end",image:testImage,tech:['HTML',,'React','TailwindCss']},
  {name:"Rankmate", desc:"A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.",image:testImage,tech:['HTML','CSS','Python','Flask','pdfplumber','re(regex)']},{name:"Portfolio", desc:"This portfolio is one of my project showcasing my front-end",image:testImage,tech:['HTML',,'React','TailwindCss']},
  {name:"Rankmate", desc:"A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.",image:testImage,tech:['HTML','CSS','Python','Flask','pdfplumber','re(regex)']},{name:"Portfolio", desc:"This portfolio is one of my project showcasing my front-end",image:testImage,tech:['HTML',,'React','TailwindCss']},
  {name:"Rankmate", desc:"A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.",image:testImage,tech:['HTML','CSS','Python','Flask','pdfplumber','re(regex)']}
]
function App() {
  return(
    <>
    <Header/>
    <div className="flex flex-wrap justify-center">
    {projects.map((proj,i) => (
      <ProjectCard key={i} {...proj}/>
    ))}
    </div>
    </>
  )
}

export default App
