import { Paper, Box, Button } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";
import AssignmentSubmissionsPageContent from "../main/assignment-submissions/AssignmentSubmissionsWithHeading";
import ErrorInfo from "../main/general/ErrorInfo";

type AssignmentSubmissionsPanelProps = {};

const AssignmentSubmissionsPanel: React.FC<
  AssignmentSubmissionsPanelProps
> = () => {
  const location = useLocation();
  const userDetails = useContext(UserDetailsContext)?.userDetails;
  const assignmentDetails = location.state.assignmentDetails;
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [assignmentSubmissions, setAssignmentSubmissions] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    if (!userDetails) {
      return;
    }
    const { teamId, accessToken } = userDetails;

    if (!teamId) {
      setLoading(false);
      return;
    }

    const fetchAssignments = async () => {
      const assignmentSubmissionsRes = await fetch(
        `https://graph.microsoft.com/v1.0/education/classes/${teamId}/assignments/${assignmentId}/submissions`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const classMembersRes = await fetch(
        `https://graph.microsoft.com/v1.0/education/classes/${teamId}/members`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const assignmentSubmissionsData = await assignmentSubmissionsRes.json();
      const classMembersData = await classMembersRes.json();

      const assignmentsArray = assignmentSubmissionsData.value;
      const classMembersArray = classMembersData.value;

      if (!assignmentsArray) {
        setLoading(false);
        return;
      }

      assignmentsArray.forEach((assignment: any) => {
        const assignee = classMembersArray.find(
          (classMember: any) =>
            classMember.id === assignment.submittedBy.user.id
        );

        assignment.studentDetails = assignment.studentDetails || {};
        assignment.studentDetails.displayName = assignee.displayName;
        assignment.studentDetails.email = assignee.userPrincipalName;
      });

      setAssignmentSubmissions(assignmentsArray);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchAssignments();
  }, [userDetails]);

  if (assignmentId === undefined || assignmentSubmissions === undefined) {
    return <ErrorInfo />;
  }
  return (
    <Box>
      <AssignmentSubmissionsPageContent
        assignmentName={assignmentDetails.assignmentTitle}
        assignmentSubmissions={assignmentSubmissions}
        dueDate={assignmentDetails.dueDate}
        loading={loading}
      />
    </Box>
  );
};

const AssignmentSubmissionsPage = () => {
  const navigate = useNavigate();
  return (
    <Box margin={4}>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Paper elevation={4}>
        <Box padding={4} minHeight={"200px"}>
          <AssignmentSubmissionsPanel />
        </Box>
      </Paper>
    </Box>
  );
};

export default AssignmentSubmissionsPage;
