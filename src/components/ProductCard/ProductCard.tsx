/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import { Phone } from 'src/types/Phone';
import styles from './ProductCard.module.scss';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { FavoriteFilledIcon } from '../ui/icons/FavoriteFilledIcon';
import { Button } from '../ui/buttons/Button';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { name, fullPrice, price, screen, capacity, ram, image } = phone;
  const [isFilled, setIsFilled] = useState(false);
  const [inCart, setInCart] = useState(false);

  const clickHandler = () => {
    setInCart(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img className={styles.card_image} src={image} alt={name} />

        <h2 className={styles.card_title}>{`${name} (iMT9G2FS/A)`}</h2>

        <div className={styles.card_price}>
          <p className={styles.card_price_actual}>{`$${price}`}</p>
          <p className={styles.card_price_full}>{`$${fullPrice}`}</p>
        </div>
      </div>

      <div className={styles.card_line} />

      <div className={styles.card_specs}>
        <div className={styles.card_container}>
          <p className={styles.card_specs_text}>Screen</p>
          <p className={styles.card_specs_value}>{screen}</p>
        </div>

        <div className={styles.card_container}>
          <p className={styles.card_specs_text}>Capacity</p>
          <p className={styles.card_specs_value}>{capacity}</p>
        </div>

        <div className={styles.card_container}>
          <p className={styles.card_specs_text}>RAM</p>
          <p className={styles.card_specs_value}>{ram}</p>
        </div>
      </div>

      <div className={styles.card_buy}>
        <Button
          children={inCart ? 'Added' : 'Add to cart'}
          variant={inCart ? 'outlined' : 'contained'}
          onClick={clickHandler}
        />
        <IconButton
          onClick={() => {
            setIsFilled(true);
          }}
          children={isFilled ? <FavoriteFilledIcon /> : <FavoriteIcon />}
        />
      </div>
    </div>
  );
};
