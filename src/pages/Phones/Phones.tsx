import React from 'react';
import { PaginatedStore } from '../../components/PaginatedStore/PaginatedStore';

export const Phones: React.FC = () => {
  return <PaginatedStore itemsPerPage={8} />;
};
