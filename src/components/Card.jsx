const Card = ({ children, className = "" }) => (
  <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>
);

export default Card;
