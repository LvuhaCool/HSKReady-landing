import { motion } from "motion/react";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some", margin: "0px 0px -155px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What is HSKReady?
      </motion.h1>
    </div>
  );
}

export default About;
