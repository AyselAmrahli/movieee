import { FC } from 'react';

export type AppMenuList = {
  text: string;
  route: string;
};

export type AppRoute = {
  path: string;
  Component: FC;
};

export type ActionType = {
  type: string;
  payload?: any;
};
