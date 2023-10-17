import AssignmentCard from "./AssignmentCard";
import type { AssignmentCardProps } from "./AssignmentCard";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type AssignmentListProps = {
  assignments: AssignmentCardProps[] | undefined | null;
};

const AssignmentsList = ({ assignments }: AssignmentListProps) => {
  if (!assignments || assignments.length === 0 || assignments === null) {
    return (
      <Box>
        <Typography
          textAlign={"center"}
          sx={{ color: grey[500] }}
          variant="h5"
          component={"p"}
        >
          No Assignments Available
        </Typography>
      </Box>
    );
  }
  return (
    <Box>
      {assignments.map((assignment, index) => (
        <Box paddingBottom={2} key={index}>
          <AssignmentCard key={index} {...assignment} />
        </Box>
      ))}
    </Box>
  );
};

export default AssignmentsList;
