import React, {PropsWithChildren} from "react";

import {UserContextProvider} from "./user";

const GlobalContext: React.FC<PropsWithChildren> = ({children}) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default GlobalContext;