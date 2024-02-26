import React from 'react';
import { DetailedProduct } from 'src/types/DetailedProduct';
import cn from 'classnames';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { Button } from '../ui/buttons/Button';
import { ColorButton } from '../ui/buttons/ColorButton/ColorButton';
import { PhotosBlock } from '../PhotosBlock';
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
    capacity,
    color,
    colorsAvailable,
  } = product;

  return (
    <section className={styles.options}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.slider}>
        <PhotosBlock product={product} />
      </div>

      <div className={styles.container}>
        <div className={styles.color}>
          <div className={styles.colorTitle}>
            <p className={styles.grayText}>Avaliable colors</p>
            <p className={styles.grayText}>ID: 802390</p>
          </div>
          <div className={cn(styles.wrapper, styles.colorWrapper)}>
            <div className={styles.colorButtons}>
              {colorsAvailable.map((availableColor) => (
                <ColorButton
                  color={availableColor}
                  isSelected={availableColor === color}
                  onClick={() => {}}
                  key={availableColor}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.capacity}>
            <p className={styles.grayText}>Select capacity</p>
            <div className={styles.capacityButton}>
              {capacityAvailable.map((value) => (
                <button
                  type="button"
                  className={cn(styles.button, {
                    [styles.active]: value === capacity,
                  })}
                  key={value}
                >
                  {value}
                </button>
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
      </div>
    </section>
  );
};
