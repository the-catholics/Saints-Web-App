import React, { PropsWithChildren } from 'react';

import { UserContextProvider } from './user';

const GlobalContext: React.FC<PropsWithChildren> = ({ children }) => (
  <UserContextProvider>{children}</UserContextProvider>
);

export default GlobalContext;
