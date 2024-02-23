import React from 'react';
import { Button } from '../../components/ui/buttons/Button';
import { ColorButton } from '../../components/ui/buttons/ColorButton/ColorButton';
import styles from './ProductPage.module.scss';
import { FavoriteIcon } from '../../components/ui/icons/FavoriteIcon';
import { IconButton } from '../../components/ui/buttons/IconButton';

export const ProductPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={styles.slider}>SLIDER</div>

      <section className={styles.options}>
        <div className={styles.color}>
          <div className={styles.colorTitle}>
            <p className={styles.optionsText}>Avaliable colors</p>
            <p className={styles.optionsText}>ID: 802390</p>
          </div>
          <div className={styles.colorButtons}>
            <ColorButton color="yellow" onClick={() => {}} />
            <ColorButton color="green" onClick={() => {}} />
            <ColorButton color="black" onClick={() => {}} />
            <ColorButton color="white" onClick={() => {}} />
          </div>
        </div>

        <div className={styles.capacity}>
          <p className={styles.optionsText}>Select capacity</p>
          <div className={styles.capacityButton}>
            <div className={styles.buttonWrapper}>
              <Button variant="text" onClick={() => {}}>
                64 GB
              </Button>
            </div>
            <div className={styles.buttonWrapper}>
              <Button variant="text" onClick={() => {}}>
                256 GB
              </Button>
            </div>
            <div className={styles.buttonWrapper}>
              <Button variant="text" onClick={() => {}}>
                512 GB
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.price}>
          <p className={styles.priceText}>$799</p>
          <p className={styles.discountPrice}>$1199</p>
        </div>

        <div className={styles.addButtons}>
          <div className={styles.addToCart}>
            <Button variant="contained" onClick={() => {}}>
              Add to cart
            </Button>
          </div>
          <div>
            <IconButton
              size="large"
              classNames={styles.favoriteButton}
              onClick={() => {}}
            >
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
};
