import PDFViewer from "./PDFViewer";
import { Box, Button, Grid, Typography } from "@mui/material";
import * as colors from "@mui/material/colors";
import AssignmentFeedbackSection from "./components/AssignmentFeedbackSection";
import { AssignmentDetailsContext } from "./contexts/AssignmentDetailsContext";
import { doc } from "firebase/firestore";
import { firestoreApp } from "../../../firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import ErrorInfo from "../general/ErrorInfo";
import Loading from "../general/Loading";

interface AssignmentSubmissionViewerProps {
  pdfLink: string;
  studentName: string;
}

const AssignmentSubmissionViewer = ({
  pdfLink = "https://arxiv.org/pdf/quant-ph/0410100.pdf",
  studentName = "Student Name",
}: AssignmentSubmissionViewerProps) => {
  const assignmentSubmissionDetails = {
    teamId: "team_id",
    assignmentId: "assignment1_id",
    studentId: "123",
    submissionId: "submission_id",
  };

  const docRef = doc(
    firestoreApp,
    "teams",
    assignmentSubmissionDetails.teamId,
    "assignments",
    assignmentSubmissionDetails.assignmentId,
    "submissions",
    assignmentSubmissionDetails.submissionId
  );

  const [value, loading, error] = useDocumentData(docRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) return <Loading />;

  if (error) return <ErrorInfo />;

  return (
    <AssignmentDetailsContext.Provider value={assignmentSubmissionDetails}>
      <Box bgcolor={colors.grey[50]}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
            <PDFViewer pdfLink={value ? value.pdf_link : ""} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box padding={2}>
              <Box>
                <Grid container justifyContent="space-between">
                  <Grid>
                    <Button>Back</Button>
                  </Grid>
                  <Grid>
                    <Button variant="contained">Return Feedback</Button>
                  </Grid>
                </Grid>
              </Box>
              <Box paddingTop={2}>
                <Box>
                  <Typography variant="subtitle1">
                    {value ? value.student_name : ""}
                  </Typography>
                </Box>
                <AssignmentFeedbackSection />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AssignmentDetailsContext.Provider>
  );
};

export default AssignmentSubmissionViewer;
