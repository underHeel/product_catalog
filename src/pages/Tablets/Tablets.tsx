import React from 'react';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import noProductImg from '../../../public/img/no_product.png';

export const Tablets: React.FC = () => {
  return (
    <ErrorComponent image={noProductImg} errorMessage="No products there" />
  );
};
