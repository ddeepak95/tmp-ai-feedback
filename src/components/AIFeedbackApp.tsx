import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { doc } from "firebase/firestore";
import { firestoreApp } from "../firebase/firestore";
import Onboarding from "./main/onboarding/Onboarding";
import ErrorInfo from "./main/general/ErrorInfo";
import Loading from "./main/general/Loading";
import AssignmentsListing from "./screens/AssignmentsListingScreen";
import { UserCredentialsContext } from "../contexts/UserCredentialsContext";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { TeamsFxContext } from "../contexts/TeamsFxContext";
import { UserDetailsContext } from "../contexts/UserDetailsContext";
import { app } from "@microsoft/teams-js";
import { AssignmentsListingContext } from "../contexts/AssignmentsListingContext";

const getTeamsUserInfo = async (): Promise<app.Context | null> => {
  const context = await microsoftTeams.app.getContext();
  return context;
};
export default function App() {
  const userCredentials = useContext(UserCredentialsContext);
  const [loading, setLoading] = useState<boolean>(true);
  const { teamsUserCredential } = useContext(TeamsFxContext);
  const userDetailsContext = useContext(UserDetailsContext);
  const { userDetails, setUserDetails } = userDetailsContext ?? {};
  const { assignments } = useContext(AssignmentsListingContext);

  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [contextInfo, setContextInfo] = useState<app.Context | null>(null);

  const docRef = doc(
    firestoreApp,
    "participants",
    userCredentials.preferredUserName
  );
  const [userDoc, loadingUserDoc, errorUserDoc] = useDocumentData(docRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (!microsoftTeams.app.isInitialized()) {
      microsoftTeams.app.initialize();
    }
  }, []);

  useEffect(() => {
    if (assignments.length > 0) {
      setLoading(false);
    }
  }, [assignments]);

  useEffect(() => {
    if (!userDoc || !teamsUserCredential) {
      setLoading(false);
      return;
    }
    async function getToken() {
      if (!teamsUserCredential) {
        return;
      }
      let token = await teamsUserCredential.getToken([
        "User.Read",
        "offline_access",
        "Files.ReadWrite.All",
        "EduAssignments.ReadWrite",
        "EduRoster.Read",
        "Member.Read.Hidden",
      ]);

      if (token && token.token !== undefined) {
        setAccessToken(token.token);
        setIsUserAuthenticated(true);
      } else {
        setLoading(false);
      }
    }
    getToken();
  }, [userDoc, teamsUserCredential]);

  useEffect(() => {
    const fetchTeamsUserInfo = async () => {
      if (isUserAuthenticated) {
        const userContextInfo = await getTeamsUserInfo();
        setContextInfo(userContextInfo);
      }
    };

    fetchTeamsUserInfo();
  }, [isUserAuthenticated]);

  useEffect(() => {
    if (
      !userDetails &&
      userCredentials &&
      accessToken &&
      contextInfo !== null &&
      setUserDetails
    ) {
      setUserDetails({
        userId: userCredentials.objectId,
        teamId: contextInfo?.team?.groupId,
        teamName: contextInfo?.team?.displayName,
        displayName: contextInfo?.user?.displayName,
        tenantId: userCredentials.tenantId,
        accessToken: accessToken !== undefined ? accessToken : "",
      });
      setLoading(false);
    }
  }, [contextInfo, accessToken, userCredentials, userDetails, setUserDetails]);

  if (loading) {
    return <Loading />;
  }
  if (
    !userDetails &&
    userCredentials &&
    !isUserAuthenticated &&
    accessToken === undefined
  ) {
    return <Onboarding userName={userCredentials.displayName} />;
  }
  if (isUserAuthenticated && userCredentials !== null && accessToken !== null) {
    return (
      <Box>
        <AssignmentsListing />
      </Box>
    );
  }
  if (errorUserDoc) {
    return <ErrorInfo />;
  }
  return <Loading />;
}
