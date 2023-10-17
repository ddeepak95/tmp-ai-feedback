import { useContext, useEffect, useState } from "react";
import { TeamsFxContext } from "../../../contexts/TeamsFxContext";
import { UserCredentialsInterface } from "../../../contexts/UserCredentialsContext";
import { UserCredentialsContext } from "../../../contexts/UserCredentialsContext";

import ErrorInfo from "./ErrorInfo";
import Loading from "./Loading";

async function getUserCreds(teamsUserCredential: any) {
  if (!teamsUserCredential) {
    throw new Error("teamsUserCredential is undefined");
  }
  const userCredentials = await teamsUserCredential.getUserInfo();
  return userCredentials;
}

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { teamsUserCredential } = useContext(TeamsFxContext);
  const [userCredentials, setUserCredentials] =
    useState<UserCredentialsInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserCreds(teamsUserCredential)
      .then((creds: UserCredentialsInterface) => {
        setUserCredentials(creds);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [teamsUserCredential]);
  if (loading) {
    return <Loading />;
  }

  if (userCredentials !== null) {
    return (
      <UserCredentialsContext.Provider value={userCredentials}>
        {children};
      </UserCredentialsContext.Provider>
    );
  }
  return <ErrorInfo />;
};

export default AppWrapper;
