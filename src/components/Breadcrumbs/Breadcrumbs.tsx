import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HomeIcon } from '../ui/icons/HomeIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { Category } from '../../types/Category';
import styles from './Breadcrumbs.module.scss';
import { Button } from '../ui/buttons/Button';

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
        <div className={`${styles.crumb} ${styles.text}`} key={crumb}>
          <Link to={currentLink}>
            {capitalizeFirstLetter(newCrumb).split('-').join(' ')}
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
          <Button variant="text" onClick={handleGoBack}>
            <ArrowLeftIcon fill="var(--color)" />
            Back
          </Button>
        </div>
      )}
    </>
  );
};
