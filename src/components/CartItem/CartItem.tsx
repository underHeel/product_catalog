/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Phone } from 'src/types/Phone';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { id, name, priceRegular, images } = phone;
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div>
      {id}
      <div className="cart-item">
        <button className="remove-button">x</button>
        <img src={images[1]} alt="header_logo" />
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <div className="quantity-control">
            <button className="decrement-button">-</button>
            <span className="quantity">{quantity}</span>
            <button
              className="increment-button"
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
          <span className="price">{`$${priceRegular}`}</span>
        </div>
      </div>
    </div>
  );
};
