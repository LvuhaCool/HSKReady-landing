import styles from "./Header.module.css";
import Button from "../Button/Button";

interface navLink {
  text: string;
  href: string;
}

const navigationLinks: navLink[] = [
  { text: "Learning process", href: "#!" },
  { text: "Science", href: "#!" },
];

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>HSKReady</p>
      <nav className={styles.navigation}>
        {navigationLinks.map((link) => (
          <a href={link.href}>{link.text}</a>
        ))}
      </nav>
      <div className={styles.CTAWrapper}>
        <Button children={"Start learning"} />
      </div>
    </header>
  );
}

export default Header;
