/* eslint-disable no-console */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon } from '../ui/icons/HomeIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const goBack = useNavigate();

  const handleGoBack = () => {
    goBack('..');
  };

  console.log(location);

  let currentLink = '';
  let previousProductType = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      let isLastCrumb = false;
      let newCrumb = crumb;

      if (crumb.includes('product')) {
        newCrumb = crumb.replace('product', location.state?.data || 'phones');
        currentLink += `/${newCrumb}`;
        isLastCrumb = index === array.length - 1;
      } else {
        currentLink += `/${crumb}`;
        isLastCrumb = index === array.length - 1;
      }

      if (newCrumb !== '' && !newCrumb.includes('product')) {
        previousProductType = newCrumb;

        console.log(previousProductType);
        console.log(`${location.pathname}`);
      }

      return (
        <div className={styles.crumb} key={crumb}>
          <Link to={currentLink}>{newCrumb}</Link>
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
      {location.pathname !== '/' && (
        <div className={styles.breadcrumbs}>
          <div className={styles.crumb}>
            <ArrowLeftIcon />
            <button
              type="submit"
              onClick={handleGoBack}
              className={styles.crumb}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
