import { FC, ReactNode } from 'react';

import './index.scss';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button className="app-button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
