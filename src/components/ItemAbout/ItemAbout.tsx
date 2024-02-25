import React from 'react';
import styles from './ItemAbout.module.scss';

export const ItemAbout: React.FC = () => {
  return (
    <section className={styles.about}>
      <div>
        <h2 className={styles.title}>About</h2>
        <div className={styles.borderLine} />
      </div>
      <div className={styles.textArea}>
        <article className={styles.textBlock}>
          <h3 className={styles.subtitle}>And then there was Pro</h3>
          <p className={styles.paragraph}>
            A transformative triple‑camera system that adds tons of capability
            without complexity.
            <br />
            <br />
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to be
            called Pro.
          </p>
        </article>
        <article className={styles.textBlock}>
          <h3 className={styles.subtitle}>Camera</h3>
          <p className={styles.paragraph}>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
        </article>
        <article className={styles.textBlock}>
          <h3 className={styles.subtitle}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h3>
          <p className={styles.paragraph}>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </article>
      </div>
    </section>
  );
};
