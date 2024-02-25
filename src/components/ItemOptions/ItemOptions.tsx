/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { DetailedProduct } from 'src/types/DetailedProduct';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { Button } from '../ui/buttons/Button';
import { ColorButton } from '../ui/buttons/ColorButton/ColorButton';
import styles from './ItemOptions.module.scss';

interface Props {
  product: DetailedProduct;
}

export const ItemOptions: React.FC<Props> = ({ product }) => {
  const {
    name,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
  } = product;

  return (
    <section className={styles.options}>
      <h1 className={styles.title}>{name}</h1>
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
            {capacityAvailable.map((capacity) => (
              <div className={styles.buttonWrapper}>
                <Button variant="text" onClick={() => {}} key={capacity}>
                  {capacity}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.price}>
          <p className={styles.priceText}>{`$${priceDiscount}`}</p>
          <p className={styles.discountPrice}>{`$${priceRegular}`}</p>
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
            <p className={styles.featuresParams}>{screen}</p>
          </div>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>Resolution</p>
            <p className={styles.featuresParams}>{resolution}</p>
          </div>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>Processor</p>
            <p className={styles.featuresParams}>{processor}</p>
          </div>
          <div className={styles.featuresText}>
            <p className={styles.grayText}>RAM</p>
            <p className={styles.featuresParams}>{ram}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
