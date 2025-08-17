import IconsFlex from "./IconsFlex";

function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Main Content */}
          <div className="text-center">
            <p className="text-text-primary text-lg font-medium mb-2">
              Made with <span className="text-accent">❤️</span> by <span className="text-gradient font-semibold">Sumit Patel</span>
            </p>
            <p className="text-text-muted text-sm">
              Fueled by coffee ☕ and passion for creating amazing experiences
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center">
            <IconsFlex />
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Bottom Section */}
          <div className="text-center space-y-2">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} Sumit Patel. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-text-muted">
              <a href="#home" className="hover:text-primary transition-colors duration-200">
                Back to Top
              </a>
              <span>•</span>
              <a href="mailto:sumit@example.com" className="hover:text-primary transition-colors duration-200">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Floating Back to Top Button */}
        {/* <div className="fixed bottom-6 right-6 z-40">
          <a
            href="#home"
            className="w-12 h-12 bg-accent hover:bg-accent-hover rounded-full flex items-center justify-center text-text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
