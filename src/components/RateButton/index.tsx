import { FC } from 'react';
import Star from '../../assets/images/star.svg';

import './index.scss';

type RateButtonProps = {
  rate: number;
};

const RateButton: FC<RateButtonProps> = ({ rate }) => {
  return (
    <div className="app-rate__btn">
      <img src={Star} alt="movie app rate" className="icon" />
      <span>{rate}</span>
    </div>
  );
};

export default RateButton;
