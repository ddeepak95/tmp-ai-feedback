import { createContext } from "react";
interface AssignmentDetails {
  teamId: string;
  assignmentId: string;
  submissionId: string;
  // add other properties as needed
}
export const AssignmentDetailsContext = createContext<AssignmentDetails>({
  teamId: "",
  assignmentId: "",
  submissionId: "",
});
