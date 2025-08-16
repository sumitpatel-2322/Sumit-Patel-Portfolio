import useScrollReveal from "./useScrollReveal";

function About() {
    useScrollReveal();
  return (
    <div id="aboutme" className="m-4 lg:m-6 card scroll-reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-8 text-center md:text-left font-bold text-gradient">
          About Me
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg text-text-primary leading-relaxed">
            I'm <span className="text-accent font-semibold">Sumit Patel</span>, an aspiring Machine Learning Engineer passionate about crafting intelligent applications that solve real-world problems. My journey spans the full spectrum of development - from creating intuitive frontend experiences to building robust backend systems, all while diving deep into the fascinating world of AI and machine learning.
          </p>
          
          <p className="text-text-secondary leading-relaxed">
            My technical expertise includes modern web technologies, data science frameworks, and machine learning libraries. I believe in the power of continuous learning and staying at the forefront of technological innovation. Whether it's developing responsive web applications, implementing complex algorithms, or experimenting with neural networks, I approach each project with curiosity and dedication.
          </p>
          
          <p className="text-text-secondary leading-relaxed">
            When I'm not coding, you'll find me exploring the latest research papers in AI, contributing to open-source projects, or working on personal projects that challenge my understanding of technology. I'm particularly interested in the intersection of web development and machine learning, where user experience meets intelligent automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Current Focus
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Machine Learning & AI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Full-Stack Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Data Science & Analytics
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Beyond Code
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Open Source Contributor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Tech Community Member
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Continuous Learner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
