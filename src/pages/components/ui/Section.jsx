export const Section = ({ children, className = '' }) => (
  <section
    className={`
      py-20
      ${className}
    `}
  >
    {children}
  </section>
);
