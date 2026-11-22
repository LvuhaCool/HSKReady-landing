import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./Button.module.css";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className = "", ...props }: buttonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      type="button"
      className={`${styles.CTABtn} ${isPressed ? styles.isPressed : ""} ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
