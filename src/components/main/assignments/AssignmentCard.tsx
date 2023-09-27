import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type AssignmentCardProps = {
  assignmentTitle: string;
  numberOfSubmittedAssignments: number;
  numberOfTotalAssignments: number;
  dueDate: Date;
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      sx={{ fontWeight: "500", color: grey[600] }}
      component="span"
      variant="body2"
      marginRight={1}
    >
      {children}
    </Typography>
  );
};

const Info = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography component="span" variant="body2">
      {children}
    </Typography>
  );
};

function dateToString(date: Date) {
  if (!date) {
    return "N/A";
  }
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("en-US", options);
}

const AssignmentCard = ({
  assignmentTitle,
  numberOfSubmittedAssignments,
  numberOfTotalAssignments,
  dueDate,
}: AssignmentCardProps) => {
  return (
    <Paper elevation={3}>
      <Box padding={2}>
        <Typography component="h2" variant="h6">
          {assignmentTitle}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box marginRight={2}>
            <Label>Submissions</Label>
            <Info>
              {numberOfSubmittedAssignments} out of {numberOfTotalAssignments}
            </Info>
          </Box>
          <Box>
            <Label>Due Date</Label>
            <Info>{dateToString(dueDate)}</Info>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default AssignmentCard;
