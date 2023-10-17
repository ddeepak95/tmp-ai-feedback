import { Paper, Box, Typography, ButtonBase } from "@mui/material";
import AssignmentInfo from "../general/AssignmentInfo";
import { Link } from "react-router-dom";

export interface AssignmentCardProps {
  assignmentId: string;
  assignmentTitle: string;
  numberOfSubmittedAssignments: number;
  numberOfTotalAssignments: number;
  dueDate: Date;
}

const AssignmentCard = ({
  assignmentId,
  assignmentTitle,
  numberOfSubmittedAssignments,
  numberOfTotalAssignments,
  dueDate,
}: AssignmentCardProps) => {
  return (
    <Link
      to={`/assignment/${assignmentId}`}
      state={{
        assignmentDetails: {
          assignmentId,
          assignmentTitle,
          numberOfSubmittedAssignments,
          numberOfTotalAssignments,
          dueDate,
        },
      }}
    >
      <ButtonBase sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%" }} elevation={3}>
          <Box padding={2}>
            <Typography component="h2" variant="h6" textAlign={"left"}>
              {assignmentTitle}
            </Typography>
            <AssignmentInfo
              dueDate={dueDate}
              numberOfSubmittedStudents={numberOfSubmittedAssignments}
              numberOfTotalStudents={numberOfTotalAssignments}
            />
          </Box>
        </Paper>
      </ButtonBase>
    </Link>
  );
};

export default AssignmentCard;
