import styles from './ProductCardSkeleton.module.scss';

export function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardImage} />

        <div className={styles.cardTitle} />

        <div className={styles.cardPrice}>
          <div className={styles.cardPriceActual} />
          <div className={styles.cardPriceFull} />
        </div>
      </div>

      <div className={styles.cardLine} />

      <div className={styles.cardSpecs}>
        <div className={styles.cardContainer}>
          <p className={styles.cardSpecsText}>Screen</p>
          <div className={styles.cardSpecsValue} />
        </div>

        <div className={styles.cardContainer}>
          <p className={styles.cardSpecsText}>Capacity</p>
          <div className={styles.cardSpecsValue} />
        </div>

        <div className={styles.cardContainer}>
          <p className={styles.cardSpecsText}>RAM</p>
          <div className={styles.cardSpecsValue} />
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <div className={styles.buyButton} />
        <div className={styles.favoriteButton} />
      </div>
    </div>
  );
}
