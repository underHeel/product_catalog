/* eslint-disable no-plusplus */
import { calculatePageRange } from '../services/calculatePageRange';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import styles from './PaginateLine.module.scss';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export const PaginateLine: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const numbersToShow =
    currentPage === 1 ? [0, 4] : calculatePageRange(currentPage, pageCount, 4);

  const pageNumbersToShow = [...pageNumbers].slice(
    numbersToShow[0],
    numbersToShow[1],
  );

  return (
    <div className={styles.pagination}>
      <ul className={styles.pageNumbers}>
        <li>
          <IconButton
            onClick={() => paginate(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            <ArrowLeftIcon />
          </IconButton>
        </li>
        {pageNumbersToShow.map((number) => (
          <li key={number}>
            <IconButton
              isFilled={currentPage === number}
              onClick={() => paginate(number)}
            >
              {number}
            </IconButton>
          </li>
        ))}
        <li>
          <IconButton
            onClick={() => paginate(currentPage + 1)}
            isDisabled={currentPage === pageCount}
          >
            <ArrowRightIcon />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};
