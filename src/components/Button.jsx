const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "default",
  className = "",
}) => {
  const baseStyles = "px-4 py-2 rounded ";
  const styles =
    variant === "outline"
      ? "border text-gray bg-transparent hover:bg-gray-100"
      : "bg-black text-white";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
