/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { Button } from '../ui/buttons/Button';
import { ColorButton } from '../ui/buttons/ColorButton/ColorButton';
import styles from './ItemOptions.module.scss';

export const ItemOptions: React.FC = () => {
  return (
    <section className={styles.options}>
      <h1 className={styles.title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
      <div className={styles.slider}>SLIDER</div>

      <div className={styles.container}>
        <div className={styles.color}>
          <div className={styles.colorTitle}>
            <p className={styles.grayText}>Avaliable colors</p>
            <p className={styles.grayText}>ID: 802390</p>
          </div>
          <div className={styles.colorButtons}>
            <ColorButton color="yellow" onClick={() => {}} />
            <ColorButton color="green" onClick={() => {}} />
            <ColorButton color="black" onClick={() => {}} />
            <ColorButton color="white" onClick={() => {}} />
          </div>
        </div>

        <div className={styles.capacity}>
          <p className={styles.grayText}>Select capacity</p>
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

        <div className={styles.features}>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>Screen</p>
            <p className={styles.featuresParams}>6.5" OLED</p>
          </div>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>Resolution</p>
            <p className={styles.featuresParams}>2688x1242</p>
          </div>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>Processor</p>
            <p className={styles.featuresParams}>Apple A12 Bionic</p>
          </div>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>RAM</p>
            <p className={styles.featuresParams}>3 GB</p>
          </div>
        </div>
      </div>
    </section>
  );
};
