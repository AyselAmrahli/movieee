import { FC, memo } from 'react';
import { AppMenuList } from '../../../const/model';
import MenuItem from './MenuItem';

import './index.scss';

type MenuProps = {
  list: AppMenuList[];
};

const Menu: FC<MenuProps> = ({ list }) => {
  const menuItem = list.map(({ text, route }, index) => (
    <MenuItem {...{ text, route }} key={index} />
  ));

  return (
    <nav className="app-header__menu">
      <ul>{menuItem}</ul>
    </nav>
  );
};

export default memo(Menu);
