import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50">
        <nav className="bg-surface/80 backdrop-blur-md border-b border-border text-text-primary p-4 shadow-lg flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
          >
            Sumit Patel
          </a>
          
          <ul className="hidden md:flex gap-2">
            {["Home", "About me", "Skills", "My projects", "Contact"].map(
              (item) => {
                const targetId = item.toLowerCase().replace(" ", "");
                return (
                  <li key={item}>
                    <a
                      href={`#${targetId}`}
                      onClick={(e) => handleNavClick(e, targetId)}
                      className="text-text-secondary hover:text-primary transition-all duration-300 font-medium hover:bg-surface-secondary px-4 py-2 rounded-lg relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </a>
                  </li>
                );
              }
            )}
          </ul>
          
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-secondary transition-colors duration-200"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} className="text-primary" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-surface border-l border-border text-text-primary p-6 shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-surface-secondary transition-colors duration-200"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} className="text-accent" />
        </button>
        
        <div className="mt-16">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
            Navigation
          </h3>
          <ul className="flex flex-col gap-4">
            {["Home", "About me", "Skills", "My projects", "Contact"].map(
              (item) => {
                const targetId = item.toLowerCase().replace(" ", "");
                return (
                  <li key={item}>
                    <a
                      href={`#${targetId}`}
                      onClick={(e) => handleNavClick(e, targetId)}
                      className="block text-text-secondary hover:text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-surface-secondary border-l-2 border-transparent hover:border-accent"
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
