import { cn } from '../../libs/utils'

export const Button = ({ variant = "primary", children}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded transition-colors duration-200 border",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-blue-600"
          : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600"
      )}
    >
      {children}
    </button>
  );
};
