import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl("hero/heroImage.jpg")}
          alt="Hero Image of me"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Om</h1>
        <p className={styles.description}>
          "As a MERN Stack developer, I have a strong interest in creating
          attractive online apps. Through constant learning and development, I
          transform concepts into useful digital solutions.
        </p>
         <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className={styles.contactBtn} >
          Contact me
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles} />
    </section>
  );
};
