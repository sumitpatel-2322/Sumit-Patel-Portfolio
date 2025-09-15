import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import portfolioimg from './assets/Portfolio.jpeg';
import rankmateimg from './assets/Rankmate.jpeg';
import Clusterimg from './assets/Cluster_bar_graph.jpeg';
import Tradingbotimg from './assets/Trading_bot.jpeg';
import Predictorimg from './assets/Math_score_predictor.jpeg';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import useScrollReveal from './components/useScrollReveal';
const projects = [
  { 
    name: "Portfolio", 
    desc: "This portfolio is one of my project showcasing my front-end", 
    image: portfolioimg, 
    tech: ['HTML', 'React', 'TailwindCss'],
    github: "https://github.com/sumitpatel",
    live: "https://sumit-patel-portfolio.vercel.app/"
  },
  { 
    name: "Rankmate", 
    desc: "A web application that processes a college result ledger (PDF) and converts it into a ranked excel file, displaying student performance based on their calculated percentage.", 
    image: rankmateimg, 
    tech: ['HTML', 'CSS', 'Python', 'Flask', 'pdfplumber', 're(regex)'],
    github: "https://github.com/sumitpatel-2322/Student-ranker",
    live: "https://student-ranker.onrender.com/"
  },
  { 
    name: "Trading Bot", 
    desc: "A Python trading bot I built during my learning journey! 🚀\n This is my latest project - a trading bot that connects to Binance Futures Testnet. It was super exciting to work with APIs and create both a command-line tool and a web interface!", 
    image: Tradingbotimg, 
    tech: ['streamlit', 'Python', 'python-binance', 'plotly', 'python-dotenv','Binance-API'],
    github: "https://github.com/sumitpatel-2322/Trading_Bot"
  },
  { 
    name: "Math Score Predictor", 
    desc: "This project predicts student exam performance (math scores) based on demographic and academic features such as gender, race/ethnicity, parental education, lunch type, test preparation course, reading score, and writing score \nThe model was trained using scikit-learn pipelines with preprocessing, and deployed with a Flask web application on Render. The application provides a UI (index.html & predict.html) where users can input student details and get predictions.", 
    image: Predictorimg, 
    tech: ['HTML', 'CSS', 'Python','numpy', 'Flask', 'scikit-learn', 'pandas','seaborn','matplotlib'],
    github: "https://github.com/sumitpatel-2322/Student_perfomance_predictor",
    live: "https://math-score-predictor-frh6.onrender.com/"
  },
  { 
    name: "Trading Behaviour", 
    desc: "This project analyzes the relationship between cryptocurrency trader performance and market sentiment using machine learning clustering techniques. I worked with over 211,000 trading transactions from Hyperliquid exchange and Bitcoin Fear & Greed Index data to find patterns that could help understand different types of traders", 
    image: Clusterimg, 
    tech: ['Python','numpy', 'Pandas', 'plotly', 'seaborn','scikit-learn','KMeans clustering'
    ],
    github: "https://github.com/sumitpatel-2322/Trading_behaviour"
  }
];

function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      
      <section 
        id="myprojects" 
        className="scroll-mt-24 m-4 lg:m-6 card scroll-reveal"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl pb-2 sm:text-4xl text-center lg:text-left font-bold text-gradient mb-8 ">
            My Projects
          </h2>
          
          <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
            Here are some of my featured projects that showcase my skills in full-stack development, 
            machine learning, and problem-solving. Each project represents a unique challenge I've tackled 
            with modern technologies and best practices.
          </p>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch">
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
