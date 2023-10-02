import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import AssignmentSubmissionsTable from "./AssignmentSubmissionsTable";
import AssignmentInfo from "../general/AssignmentInfo";
import ErrorInfo from "../general/ErrorInfo";

type AssignmentSubmissionsPageContentProps = {
  assignmentName: string;
  dueDate: Date;
  assignmentId: string;
  assignmentSubmissions: any;
  loading: boolean;
};

function countHandedIn(assignments: any[]) {
  return assignments.filter(
    (assignment) => assignment.assignmentStatus === "Handed in"
  ).length;
}

const AssignmentSubmissionsPageContent: React.FC<
  AssignmentSubmissionsPageContentProps
> = ({
  assignmentName,
  assignmentId,
  assignmentSubmissions,
  dueDate,
  loading,
}) => {
  if (loading) {
    return (
      <Box textAlign={"center"}>
        <CircularProgress />
      </Box>
    );
  }

  if (Array.isArray(assignmentSubmissions)) {
    return (
      <Box>
        <Box>
          <Typography variant="h5">{assignmentName}</Typography>
          <AssignmentInfo
            numberOfSubmittedStudents={countHandedIn(assignmentSubmissions)}
            numberOfTotalStudents={assignmentSubmissions.length}
            dueDate={new Date(dueDate)}
          />
        </Box>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
        <Box>
          <AssignmentSubmissionsTable
            loading={loading}
            data={assignmentSubmissions}
          />
        </Box>
      </Box>
    );
  }
  return <ErrorInfo />;
};

export default AssignmentSubmissionsPageContent;
