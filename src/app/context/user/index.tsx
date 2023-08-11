import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { PropsUserContext } from '../../models/Context';

const DEFAULT_VALUE = {
  state: {
    id: 0,
    name: '',
    email: '',
    password: '',
    created_at: '',
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [state]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
export default UserContext;
