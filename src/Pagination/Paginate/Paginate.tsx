/* eslint-disable no-plusplus */

import styles from './Paginate.module.scss';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

export const Paginate: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.pageNumbers}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
