import Button from "../Button/Button";
import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.CTA}>
      <div className={styles.description}>
        <h1 className={styles.descriptionHeading}>Learn characters easily</h1>
        <p className={styles.descriptionText}>
          Our science-backed system lets you memorize chinese hyerogliphs as
          easy as possible. In just 15-20 minutes a day you will stop blanking
          when seeing chinese texts. The app has an easy-to-follow learning
          schedule, playful interface, and uses actually working study
          techiques.
        </p>
        <Button children={"Try it out!"} className={styles.CTAButton} />
      </div>
      <div className={styles.characterCard}></div>
    </section>
  );
}

export default CTA;
