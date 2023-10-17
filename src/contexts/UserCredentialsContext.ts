import { createContext } from "react";

import { UserInfo } from "@microsoft/teamsfx";

export interface UserCredentialsInterface extends UserInfo {}
export const UserCredentialsContext = createContext<UserCredentialsInterface>(
  {} as UserCredentialsInterface
);
