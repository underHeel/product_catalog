import styles from './ItemOptionsSkeleton.module.scss';

export function ItemOptionsSkeleton() {
  return (
    <section className={styles.options}>
      <div className={styles.title} />

      <div className={styles.main}>
        <div className={styles.slider} />

        <div className={styles.container}>
          <div className={styles.color}>
            <div className={styles.colorTitle}>
              <div className={styles.grayText} />
              <div className={styles.grayText} />
            </div>
            <div className={styles.colorWrapper}>
              <div className={styles.colorButtons}>
                {[...Array(4)].map(() => (
                  <div className={styles.roundedButton} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.capacity}>
              <div className={styles.grayText} />
              <div className={styles.capacityButton}>
                {[...Array(3)].map(() => (
                  <div className={styles.buttonCapacity} />
                ))}
              </div>
            </div>

            <div className={styles.price}>
              <div className={styles.priceText} />
              <div className={styles.discountPrice} />
            </div>

            <div className={styles.addButtons}>
              <div className={styles.addToCartButton} />
              <div className={styles.addToFavoriteButton} />
            </div>

            <div className={styles.features}>
              <div className={styles.grayTextLong} />
              <div className={styles.grayTextLong} />
              <div className={styles.grayTextLong} />
              <div className={styles.grayTextLong} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
