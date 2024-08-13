import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from './Menu';

import { appMenuList } from '../../const/constant';

import logo from '../../assets/images/logo.svg';
import './index.scss';
import Button from '../shared/Button';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="app-header__logo">
        <img src={logo} alt="app movie logo" />
      </div>
      <Menu list={appMenuList} />

      <div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </header>
  );
};

export default memo(Header);
