import styles from "./Header.module.css";
import Button from "../Button/Button";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>HSKReady</p>
      <nav className={styles.navigation}>
        <a href="#!">Learning process</a>
        <a href="#!">Science</a>
      </nav>
      <div className={styles.CTAWrapper}>
        <Button children={"Start learning"} />
      </div>
    </header>
  );
}

export default Header;
