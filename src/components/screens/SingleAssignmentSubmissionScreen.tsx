import { useParams } from "react-router-dom";
import AssignmentSubmissionViewer from "../main/assignment-feedback/AssigmentSubmissionViewer";

const SingleAssignmentSubmissionScreen = () => {
  const params = useParams<{ assignmentId: string; submissionId: string }>();
  const assignmentId = params.assignmentId;
  const submissionId = params.submissionId;
  return (
    <div>
      <h1>SingleAssignmentSubmissionScreen</h1>
    </div>
  );
};

export default SingleAssignmentSubmissionScreen;
