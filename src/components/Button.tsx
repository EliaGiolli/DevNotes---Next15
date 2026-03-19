import { ButtonProps } from "@/types/componentsTypes";

function Button({ children, ...props }:ButtonProps) {
  return (
    <button 
        className="bg-violet-50 text-violet-500 hover:bg-violet-600 hover:text-violet-200 border-2 border-violet-500 hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 rounded-md"
        {...props}
        >
        {children}
    </button>
  )
}

export default Button