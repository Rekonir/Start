import { NavLink } from 'react-router-dom';
import useBreadcrumbs, { BreadcrumbComponentType } from 'use-react-router-breadcrumbs';
import styles from './Breadcrumbs.module.scss'
import { publicRoutes } from '../../App/routes';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(publicRoutes);

  return (
    <div className={styles.Breadcrumbs}>
    {breadcrumbs.map(( {match, breadcrumb}, index ) => (
      <div  key={match.pathname} className="">
        <NavLink to={match.pathname}>
          {breadcrumb}
        </NavLink>
        {index < breadcrumbs.length - 1 && <span>&gt;</span>}
      </div>
    ))}
    </div>
  )
}

export default Breadcrumbs