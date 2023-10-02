import { Box, Typography } from "@mui/material";
import * as colors from "@mui/material/colors";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      sx={{ fontWeight: "400", color: colors.grey[700] }}
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

type AssignmentInfoProps = {
  numberOfSubmittedStudents: number;
  numberOfTotalStudents: number;
  dueDate: Date;
};

const AssignmentInfo = ({
  numberOfSubmittedStudents,
  numberOfTotalStudents,
  dueDate,
}: AssignmentInfoProps) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {numberOfSubmittedStudents >= 0 && numberOfTotalStudents > 0 && (
        <Box marginRight={2}>
          <Label>Submissions</Label>
          <Info>
            {numberOfSubmittedStudents} out of {numberOfTotalStudents}
          </Info>
        </Box>
      )}
      {dueDate && (
        <Box>
          <Label>Due Date</Label>
          <Info>{dateToString(dueDate)}</Info>
        </Box>
      )}
    </Box>
  );
};

export default AssignmentInfo;
