import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-violet-500 text-white hover:bg-violet-600",
        outline: "border border-violet-300 text-violet-500 hover:bg-violet-100",
        active: "bg-violet-600 text-white border border-violet-600",
        ghost: "text-slate-400 hover:text-violet-500 hover:bg-violet-50"
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
export default Button;