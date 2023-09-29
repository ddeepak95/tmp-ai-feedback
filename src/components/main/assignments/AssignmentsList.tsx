import AssignmentCard from "./AssignmentCard";
import type { AssignmentCardProps } from "./AssignmentCard";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type AssignmentListProps = {
  assignments: AssignmentCardProps[] | undefined | null;
};

const Title = () => {
  return (
    <Typography variant="h4" component={"h2"} marginBottom={2}>
      Assignments
    </Typography>
  );
};

const AssignmentsList = ({ assignments }: AssignmentListProps) => {
  if (!assignments || assignments.length === 0 || assignments === null) {
    return (
      <Box>
        <Title />
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
      <Title />
      {assignments.map((assignment, index) => (
        <Box paddingBottom={2}>
          <AssignmentCard
            key={index}
            {...assignment}
            onClick={() => {
              console.log(assignment.assignmentTitle);
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AssignmentsList;
