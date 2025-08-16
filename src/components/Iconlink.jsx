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
      "
      title={label}
    >
      {children}
    </a>
  );
}
export default IconLink;