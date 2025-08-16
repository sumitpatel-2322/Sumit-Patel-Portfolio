import { useState } from "react";
import { Menu, X } from "lucide-react";
import useScrollDirection from "./useScrollDirection";
function Header() {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`m-0 sticky transition-all duration-300 z-50 ${
          scrollDirection === "down" ? "-top-full" : "top-0"
        }`}
      >
        <nav className="bg-transparent backdrop-blur-md border-b border-dark-purple/30 text-dark-purple p-4 shadow-lg flex justify-between items-center">
          <a href="#home" className="text-lg font-bold">
            Sumit Patel
          </a>
          <ul className="hidden md:flex gap-6">
            {["Home", "About me", "Skills", "My projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-celadon transition-colors duration-200 font-medium hover:bg-dark-purple/80 px-4 py-2 rounded-xl"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-dark-purple text-white p-6 shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} className="text-white" />
        </button>
        <ul className="mt-12 flex flex-col gap-6 text-lg font-medium">
          {["Home", "About me", "Skills", "My projects", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-celadon transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
