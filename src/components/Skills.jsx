import useScrollReveal from "./useScrollReveal";

function Skills() {
  useScrollReveal();
  return (
    <div id="skills" className="m-4 lg:m-6 card scroll-reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl text-center md:text-left mb-6 text-gradient">
          Skills
        </h2>
        
        <p className="text-text-secondary leading-relaxed mb-8 max-w-4xl">
          Focused on Artificial Intelligence, Machine Learning, Deep Learning, and Natural Language Processing, 
          while continuously expanding my expertise in languages and tools essential to these domains. 
          I also bring hands-on experience in full-stack web development.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Core Languages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Core Languages
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-2 uppercase tracking-wide">
                  Proficient
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag-proficient">Python</span>
                  <span className="skill-tag-proficient">C</span>
                  <span className="skill-tag-proficient">C++</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-2 uppercase tracking-wide">
                  Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag-learning">Java</span>
                </div>
              </div>
            </div>
          </div>

          {/* ML Libraries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              ML Libraries
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-2 uppercase tracking-wide">
                  Proficient
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag-proficient">Pandas</span>
                  <span className="skill-tag-proficient">NumPy</span>
                  <span className="skill-tag-proficient">Matplotlib</span>
                  <span className="skill-tag-proficient">Scikit-learn</span>
                  <span className="skill-tag-proficient">Pdfplumber</span>
                  <span className="skill-tag-proficient">NLTK</span>
                  <span className="skill-tag-Proficient">TensorFlow</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-2 uppercase tracking-wide">
                  Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag-learning">SpaCy</span>
                  <span className="skill-tag-learning">PyTorch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>

          {/* Database */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Database
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">SQLite</span>
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Cloud & Deployment
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Render</span>
              <span className="skill-tag">Netlify</span>
              <span className="skill-tag">AWS Elastic Beanstalk</span>
            </div>
          </div>

          {/* Version Control & DevOps */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Version Control & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-primary border-b border-border pb-2">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Jupyter Notebook</span>
              <span className="skill-tag">Anaconda</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Google Colab</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
