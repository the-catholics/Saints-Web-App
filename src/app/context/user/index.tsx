import React, { createContext, PropsWithChildren, useState } from "react";
import { User } from "../../models/User";
import { PropsUserContext } from "../../models/Context";

const DEFALT_VALUE = {
  state: {
    id: 0,
    name: "",
    email: "",
    password: "",
    created_at: "",
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFALT_VALUE);

const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFALT_VALUE.state);

  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
