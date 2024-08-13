import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppMenuList } from '../../../../const/model';

import './index.scss';

const MenuItem: FC<AppMenuList> = ({ text, route }) => {
  return (
    <li className="app-header__menu__item">
      <NavLink to={route}>{text}</NavLink>
    </li>
  );
};

export default MenuItem;
