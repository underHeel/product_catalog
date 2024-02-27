import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HomeIcon } from '../ui/icons/HomeIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import styles from './Breadcrumbs.module.scss';
import { Category } from '../../types/Category';

type Props = {
  category?: Category | null;
};

export const Breadcrumbs: React.FC<Props> = ({ category }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const goBack = useNavigate();

  let currentLink = '';

  const handleGoBack = () => {
    goBack('..');
  };

  function capitalizeFirstLetter(str: string) {
    if (!str) return '';

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function truncateAfterFifthWord(str: string) {
    const words = str.split('-');

    if (words.length <= 4) {
      return str;
    }

    const truncatedWords = words.slice(0, 4);

    truncatedWords.push('...');

    return truncatedWords.join(' ');
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      let isLastCrumb = false;
      let newCrumb = crumb;

      if (crumb.includes('product')) {
        newCrumb = crumb.replace('product', location.state?.data || category);
        currentLink += `/${newCrumb}`;
        isLastCrumb = index === array.length - 1;
      } else {
        currentLink += `/${crumb}`;
        isLastCrumb = index === array.length - 1;
      }

      return (
        <div className={styles.crumb} key={crumb}>
          <Link to={currentLink}>
            {truncateAfterFifthWord(capitalizeFirstLetter(newCrumb))}
          </Link>
          {!isLastCrumb && (
            <div className={styles.crumb}>
              <ArrowRightIcon />
            </div>
          )}
        </div>
      );
    });

  return (
    <>
      <div className={styles.breadcrumbs}>
        {location.pathname !== '/' && (
          <>
            <Link to="/" className={styles.crumb}>
              <div className={styles.crumb}>
                <HomeIcon />
              </div>
              <div className={styles.crumb}>
                <ArrowRightIcon />
              </div>
            </Link>{' '}
            <div className={styles.crumb}>{crumbs}</div>
          </>
        )}
      </div>
      {location.pathname !== '/' && location.pathname.includes('product') && (
        <div className={styles.breadcrumbs}>
          <div className={styles.crumb}>
            <ArrowLeftIcon />
          </div>
          <button type="submit" onClick={handleGoBack} className={styles.crumb}>
            Back
          </button>
        </div>
      )}
    </>
  );
};
