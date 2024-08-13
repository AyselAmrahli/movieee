import { FC } from 'react';

import './index.scss';

type PageTitleProps = {
  content: string;
};

const PageTitle: FC<PageTitleProps> = ({ content }) => (
  <div className="app-page__title">{content}</div>
);

export default PageTitle;
