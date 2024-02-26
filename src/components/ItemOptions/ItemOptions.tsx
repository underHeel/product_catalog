import React, { useMemo } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { DetailedProduct } from '../../types/DetailedProduct';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { Button } from '../ui/buttons/Button';
import { ColorButton } from '../ui/buttons/ColorButton/ColorButton';
import { PhotosBlock } from '../PhotosBlock';
import { Product } from '../../types/Product';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import { actions as favoriteActions } from '../../redux/slices/favoritesSlice';
import styles from './ItemOptions.module.scss';
import { FavoriteFilledIcon } from '../ui/icons/FavoriteFilledIcon';

interface Props {
  product: DetailedProduct;
  allProducts: Product[];
}

export const ItemOptions: React.FC<Props> = ({ product, allProducts }) => {
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
    id,
  } = product;

  const dispatch = useAppDispatch();
  const { productsList } = useAppSelector((state) => state.cart);
  const { favoritesList } = useAppSelector((state) => state.favorites);

  const isInCart = useMemo(() => {
    return productsList.some((item) => item.itemId === id);
  }, [id, productsList]);

  const isInFavorite = useMemo(() => {
    return favoritesList.some((favorite) => favorite.itemId === id);
  }, [id, favoritesList]);

  const productToAdd = allProducts.find((item) => item.itemId === id);

  const getProductUrl = (
    selectedColor: string = color,
    selectedCapacity: string = capacity,
  ) => {
    const splitedId = id.split('-');

    splitedId[splitedId.length - 1] = selectedColor.toLowerCase();
    splitedId[splitedId.length - 2] = selectedCapacity.toLowerCase();

    return splitedId.join('-');
  };

  const handleCart = () => {
    if (isInCart && productToAdd) {
      dispatch(cartActions.remove(productToAdd?.id));
    } else if (productToAdd) {
      dispatch(cartActions.add(productToAdd));
    }
  };

  const handleFavorite = () => {
    if (isInFavorite && productToAdd) {
      dispatch(favoriteActions.remove(productToAdd.id));
    } else if (productToAdd) {
      dispatch(favoriteActions.add(productToAdd));
    }
  };

  return (
    <section className={styles.options}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.main}>
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
                  <Link
                    to={`/product/${getProductUrl(availableColor)}`}
                    key={availableColor}
                  >
                    <ColorButton
                      color={availableColor}
                      isSelected={availableColor === color}
                      onClick={() => {}}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.capacity}>
              <p className={styles.grayText}>Select capacity</p>
              <div className={styles.capacityButton}>
                {capacityAvailable.map((value) => (
                  <Link
                    to={`/product/${getProductUrl(undefined, value)}`}
                    key={value}
                  >
                    <button
                      type="button"
                      className={cn(styles.button, {
                        [styles.active]: value === capacity,
                      })}
                    >
                      {value}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.price}>
              <p className={styles.priceText}>{`$${priceDiscount}`}</p>
              <p className={styles.discountPrice}>{`$${priceRegular}`}</p>
            </div>

            <div className={styles.addButtons}>
              <div className={styles.addToCart}>
                {isInCart ? (
                  <Button variant="outlined" onClick={handleCart}>
                    {' '}
                    Added
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleCart}>
                    Add to cart
                  </Button>
                )}
              </div>
              <div>
                {isInFavorite ? (
                  <IconButton
                    size="large"
                    classNames={styles.favoriteButton}
                    onClick={handleFavorite}
                  >
                    <FavoriteFilledIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    size="large"
                    classNames={styles.favoriteButton}
                    onClick={handleFavorite}
                  >
                    <FavoriteIcon />
                  </IconButton>
                )}
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
      </div>
    </section>
  );
};
