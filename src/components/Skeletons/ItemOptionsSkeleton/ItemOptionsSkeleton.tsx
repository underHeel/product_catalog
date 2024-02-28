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
              <p className={styles.grayText}>Avaliable colors</p>
              <p className={styles.grayText}>ID: 802390</p>
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
              <p className={styles.grayText}>Select Capacity</p>
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
              <div className={styles.featuresText}>
                <p className={styles.grayText}>Screen</p>
                <div className={styles.grayTextLong} />
              </div>
              <div className={styles.featuresText}>
                <p className={styles.grayText}>Resolution</p>
                <div className={styles.grayTextLong} />
              </div>
              <div className={styles.featuresText}>
                <p className={styles.grayText}>Processor</p>
                <div className={styles.grayTextLong} />
              </div>
              <div className={styles.featuresText}>
                <p className={styles.grayText}>RAM</p>
                <div className={styles.grayTextLong} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
