/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import { Product } from 'src/types/Product';
import styles from './ProductCard.module.scss';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { FavoriteFilledIcon } from '../ui/icons/FavoriteFilledIcon';
import { Button } from '../ui/buttons/Button';

type Props = {
  phone: Product;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { name, fullPrice, price, screen, capacity, ram, image } = phone;
  const [isFilled, setIsFilled] = useState(false);
  const [inCart, setInCart] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImage} src={image} alt={name} />

        <h2 className={styles.cardTitle}>{`${name}`}</h2>

        <div className={styles.cardPrice}>
          <p className={styles.cardPriceActual}>{`$${price}`}</p>
          <p className={styles.cardPriceFull}>{`$${fullPrice}`}</p>
        </div>
      </div>

      <div className={styles.cardLine} />

      <div className={styles.cardSpecs}>
        <div className={styles.cardContainer}>
          <p className={styles.cardSpecsText}>Screen</p>
          <p className={styles.cardSpecsValue}>{screen}</p>
        </div>

        <div className={styles.cardContainer}>
          <p className={styles.cardSpecsText}>Capacity</p>
          <p className={styles.cardSpecsValue}>{capacity}</p>
        </div>

        <div className={styles.cardContainer}>
          <p className={styles.cardSpecsText}>RAM</p>
          <p className={styles.cardSpecsValue}>{ram}</p>
        </div>
      </div>

      <div className={styles.cardBuy}>
        <div className={styles.buttonWrapper}>
          {inCart ? (
            <Button
              children="Added"
              variant="outlined"
              onClick={() => setInCart(false)}
            />
          ) : (
            <Button
              children="Add to cart"
              variant="contained"
              onClick={() => setInCart(true)}
            />
          )}
        </div>
        {isFilled ? (
          <IconButton
            size="large"
            onClick={() => {
              setIsFilled(false);
            }}
            children={<FavoriteFilledIcon />}
          />
        ) : (
          <IconButton
            size="large"
            onClick={() => {
              setIsFilled(true);
            }}
            children={<FavoriteIcon />}
          />
        )}
      </div>
    </div>
  );
};
