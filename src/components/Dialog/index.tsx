import { FC, ReactElement } from 'react';

import './index.scss';

type DialogProps = {
  children: ReactElement;
};

const Dialog: FC<DialogProps> = ({ children }) => <div className="dialog">{children}</div>;

export default Dialog;
