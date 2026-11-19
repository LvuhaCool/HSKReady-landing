import { useState, useRef, useEffect, type CSSProperties } from "react";
import styles from "./Header.module.css";
import pencil from "./../../assets/pencil.svg";

const navItems: string[] = ["Learning process", "Science"];

interface NavLinkProps {
  label: string;
}

function NavLink({ label }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [pathData, setPathData] = useState<string>("");

  useEffect(() => {
    const updatePath = () => {
      if (!linkRef.current) return;
      const { width: w, height: h } = linkRef.current.getBoundingClientRect();
      const pad = 4; // небольшой отступ от края, чтобы линия не обрезалась
      const cx = w / 2;
      const top = pad;
      const bottom = h - pad;
      const left = pad;
      const right = w - pad;
      const cy = h / 2;

      // Кривые Безье для ровного эллипса в пикселях
      const d = `M ${cx},${top} C ${right * 0.85},${top} ${right},${cy * 0.45} ${right},${cy} C ${right},${h - cy * 0.45} ${right * 0.85},${bottom} ${cx},${bottom} C ${w * 0.15},${bottom} ${left},${h - cy * 0.45} ${left},${cy} C ${left},${cy * 0.45} ${w * 0.15},${top} ${cx},${top}`;
      setPathData(d);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [label]);

  return (
    <a
      ref={linkRef}
      href="#!"
      className={styles.navLink}
      style={{ "--ellipse-path": `path("${pathData}")` } as CSSProperties}
    >
      <span>{label}</span>

      {pathData && (
        <svg className={styles.ellipseSvg}>
          <path pathLength="1" className={styles.ellipsePath} d={pathData} />
        </svg>
      )}

      <img src={pencil} alt="" className={styles.pencil} />
    </a>
  );
}

function Header() {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <p className={styles.logo}>HSKReady</p>

      <nav className={styles.navigation}>
        {navItems.map((label) => (
          <NavLink key={label} label={label} />
        ))}
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
