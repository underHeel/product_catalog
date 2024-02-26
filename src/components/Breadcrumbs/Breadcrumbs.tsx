import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon } from '../ui/icons/HomeIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs() {
  const location = useLocation();
  const history = useNavigate();

  const goBack = () => {
    history('..');
  };

  let currenrLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      currenrLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      return (
        <div className={styles.crumb} key={crumb}>
          <Link to={currenrLink}>{crumb}</Link>
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
            <button type="submit" onClick={goBack} className={styles.crumb}>
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
