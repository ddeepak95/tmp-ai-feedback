import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import { useTeamsUserCredential } from "@microsoft/teamsfx-react";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import { TeamsFxContext } from "../contexts/TeamsFxContext";
import config from "./sample/lib/config";
import Loading from "./main/general/Loading";
import AssignmentsDetailsScreen from "./screens/AssignmentDetailsScreen";
import { AssignmentsListingContext } from "../contexts/AssignmentsListingContext";
import { AssignmentCardProps } from "./main/assignments/AssignmentCard";
import { UserDetailsContext } from "../contexts/UserDetailsContext";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, teamsUserCredential } = useTeamsUserCredential({
    initiateLoginEndpoint: config.initiateLoginEndpoint!,
    clientId: config.clientId!,
  });
  const [assignments, setAssignments] = useState<AssignmentCardProps[]>([]);
  const [userDetails, setUserDetails] = useState<any>(null);
  return (
    <TeamsFxContext.Provider value={{ teamsUserCredential }}>
      <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
        <AssignmentsListingContext.Provider
          value={{ assignments, setAssignments }}
        >
          <Router>
            {loading ? (
              <Loading />
            ) : (
              <Routes>
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/termsofuse" element={<TermsOfUse />} />
                <Route path="/tab" element={<Tab />} />
                <Route
                  path="/assignment/:assignmentId"
                  element={<AssignmentsDetailsScreen />}
                />
                <Route path="*" element={<Navigate to={"/tab"} />}></Route>
              </Routes>
            )}
          </Router>
        </AssignmentsListingContext.Provider>
      </UserDetailsContext.Provider>
    </TeamsFxContext.Provider>
  );
}
