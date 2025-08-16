function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        w-10 h-10 sm:w-11 sm:h-11
        rounded-full
        bg-surface-secondary hover:bg-primary
        text-text-secondary hover:text-text-primary
        border border-border hover:border-primary
        transition-all duration-300
        hover:transform hover:-translate-y-1
        hover:shadow-lg
        group
      "
      title={label}
    >
      {children}
    </a>
  );
}

export default IconLink;
