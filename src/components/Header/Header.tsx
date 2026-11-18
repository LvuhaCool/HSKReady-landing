import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <header className={styles.header}>
      <p className={styles.logo}>HSKReady</p>
      <nav className={styles.navigation}>
        <a href="#!">Learning process</a>
        <a href="#!">Science</a>
      </nav>
      <div className={styles.CTAWrapper}>
        <button
          className={`${styles.CTABtn} ${isPressed ? styles.isPressed : ""}`}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
        >
          Start learning
        </button>
      </div>
    </header>
  );
}

export default Header;
