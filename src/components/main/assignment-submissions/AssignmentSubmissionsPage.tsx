import { Paper, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AssignmentSubmissionsPageContent from "./AssignmentSubmissionsWithHeading";
import ErrorInfo from "../general/ErrorInfo";

type AssignmentSubmissionsPanelProps = {};

const AssignmentSubmissionsPanel: React.FC<
  AssignmentSubmissionsPanelProps
> = () => {
  const [assignmentData, setAssignmentData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { assignmentId } = useParams<{ assignmentId: string }>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummy-endpoint.com/api/assignment/${assignmentId}`)
      .then((response) => response.json())
      .then((data) => {
        setAssignmentData(data.assignmentData);
        console.log(data.assignmentData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setAssignmentData(undefined);
        setLoading(false);
      });
  }, [assignmentId]);

  if (assignmentId === undefined || assignmentData === undefined) {
    return <ErrorInfo />;
  }
  return (
    <Box>
      <AssignmentSubmissionsPageContent
        assignmentId={assignmentId || ""}
        assignmentName={assignmentData?.assignmentName}
        assignmentSubmissions={assignmentData?.assignmentStudents}
        dueDate={assignmentData?.dueDate}
        loading={loading}
      />
    </Box>
  );
};

const AssignmentSubmissionsPage = () => {
  return (
    <Box margin={4}>
      <Button>Back</Button>
      <Paper elevation={4}>
        <Box padding={4} minHeight={"200px"}>
          <AssignmentSubmissionsPanel />
        </Box>
      </Paper>
    </Box>
  );
};

export default AssignmentSubmissionsPage;
