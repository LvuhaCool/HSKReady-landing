import React, { useEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";

import Button from "../Button/Button";
import styles from "./CTA.module.css";

function CTA() {
  const hanziWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hanziWrapperRef.current) return;

    hanziWrapperRef.current.innerHTML = "";

    const writer = HanziWriter.create(hanziWrapperRef.current, "你", {
      width: 450,
      height: 450,
      padding: 5,
      delayBetweenLoops: 500,
      delayBetweenStrokes: 888,
      strokeAnimationSpeed: 0.8,
      strokeFadeDuration: 200,

      strokeColor: "#9d1609",
    });

    writer.loopCharacterAnimation();
  }, []);
  return (
    <section className={styles.CTA}>
      <div className={styles.description}>
        <h1 className={styles.descriptionHeading}>Learn characters easily</h1>
        <p className={styles.descriptionText}>
          Our science-backed system lets you memorize chinese hyerogliphs as
          easy as possible. In just 15–20 minutes a day you will stop blanking
          when seeing chinese texts. The app has an easy-to-follow learning
          schedule, playful interface, and uses actually working study
          techiques.
        </p>
        <Button children={"Try it out!"} className={styles.CTAButton} />
      </div>
      <div className={styles.characterCard}>
        <div className={styles.characterAnimation} ref={hanziWrapperRef}></div>
      </div>
    </section>
  );
}

export default CTA;
