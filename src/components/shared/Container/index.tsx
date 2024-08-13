import { FC, ReactNode } from 'react';

import './index.scss';

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="app-container">{children}</div>;
};

export default Container;
