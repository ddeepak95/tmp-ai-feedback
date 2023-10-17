import { createContext } from "react";
export interface UserDetailsInterface {
  userId: string | undefined;
  displayName: string | undefined;
  tenantId: string | undefined;
  teamId: string | undefined;
  teamName: string | undefined;
  accessToken: string | undefined;
}

export interface UserDetailsProviderProps {
  userDetails: UserDetailsInterface;
  setUserDetails: (userDetails: UserDetailsInterface) => void;
}

export const UserDetailsContext = createContext<UserDetailsProviderProps>({
  userDetails: {} as UserDetailsInterface,
  setUserDetails: () => {},
});
