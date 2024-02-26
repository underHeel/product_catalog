import { Link, useLocation } from 'react-router-dom';
import { HomeIcon } from '../ui/icons/HomeIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';

export default function Breadcrumbs() {
  const location = useLocation();

  console.log(location);

  let currenrLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      currenrLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currenrLink}>{crumb}</Link>
          {!isLastCrumb && <ArrowRightIcon />}
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      {location.pathname !== '/' && (
        <>
          <Link to="/">
            <HomeIcon />
            <ArrowRightIcon />
          </Link>{' '}
          <span>{crumbs}</span>
        </>
      )}
    </div>
  );
}
