import { Paper, Box, Typography, ButtonBase } from "@mui/material";
import AssignmentInfo from "../general/AssignmentInfo";

type AssignmentCardProps = {
  assignmentTitle: string;
  numberOfSubmittedAssignments: number;
  numberOfTotalAssignments: number;
  dueDate: Date;
  onClick?: () => void;
};

const AssignmentCard = ({
  assignmentTitle,
  numberOfSubmittedAssignments,
  numberOfTotalAssignments,
  dueDate,
  onClick,
}: AssignmentCardProps) => {
  return (
    <ButtonBase sx={{ width: "100%" }} onClick={onClick}>
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
  );
};

export default AssignmentCard;
export type { AssignmentCardProps };
