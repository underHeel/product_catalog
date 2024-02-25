/* eslint-disable react/no-children-prop */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { FavoriteFilledIcon } from '../ui/icons/FavoriteFilledIcon';
import { Button } from '../ui/buttons/Button';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import { actions as favoriteActions } from '../../redux/slices/favoritesSlice';
import styles from './ProductCard.module.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
    id,
    itemId,
    category,
  } = product;

  const dispatch = useAppDispatch();
  const { productsList } = useAppSelector((state) => state.cart);
  const { favoritesList } = useAppSelector((state) => state.favorites);

  const isInCart = useMemo(() => {
    return productsList.some((item) => item.id === id);
  }, [productsList, id]);

  const handleCart = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (isInCart) {
      dispatch(cartActions.remove(id));
    } else {
      dispatch(cartActions.add(product));
    }
  };

  const handleFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (favoritesList.some((favorite) => favorite.id === product.id)) {
      dispatch(favoriteActions.remove(id));
    } else {
      dispatch(favoriteActions.add(product));
    }
  };

  return (
    <Link
      to={`/product/${itemId}`}
      state={{ data: category }}
      className={styles.card}
    >
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

      <div className={styles.buttonWrapper}>
        {isInCart ? (
          <Button children="Added" variant="outlined" onClick={handleCart} />
        ) : (
          <Button
            children="Add to cart"
            variant="contained"
            onClick={handleCart}
          />
        )}
        {favoritesList.includes(product) ? (
          <IconButton
            size="large"
            classNames={styles.favoriteButton}
            onClick={handleFavorite}
            children={<FavoriteFilledIcon />}
          />
        ) : (
          <IconButton
            size="large"
            classNames={styles.favoriteButton}
            onClick={handleFavorite}
            children={<FavoriteIcon />}
          />
        )}
      </div>
    </Link>
  );
};
