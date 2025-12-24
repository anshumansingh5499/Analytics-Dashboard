import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "rounded-md px-4 py-2 text-sm font-medium transition";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-gray-300 bg-white hover:bg-gray-50",
  };

  return (
    <button
      {...props}
      className={`${base} ${styles[variant]} ${className}`}
    />
  );
}
