import * as React from "react";
import { Paper, Box, Typography, ButtonBase } from "@mui/material";
import { grey } from "@mui/material/colors";

type AssignmentCardProps = {
  assignmentTitle: string;
  numberOfSubmittedAssignments: number;
  numberOfTotalAssignments: number;
  dueDate: Date;
  onClick?: () => void;
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      sx={{ fontWeight: "400", color: grey[700] }}
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
  onClick,
}: AssignmentCardProps) => {
  return (
    <ButtonBase sx={{ width: "100%" }} onClick={onClick}>
      <Paper sx={{ width: "100%" }} elevation={3}>
        <Box padding={2}>
          <Typography component="h2" variant="h6" textAlign={"left"}>
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
    </ButtonBase>
  );
};

export default AssignmentCard;
export type { AssignmentCardProps };
