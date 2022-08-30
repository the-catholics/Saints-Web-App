import React, { SetStateAction } from "react";
import { User } from "../User";

export interface PropsUserContext {
  state: User;
  setState: React.Dispatch<SetStateAction<User>>;
}
