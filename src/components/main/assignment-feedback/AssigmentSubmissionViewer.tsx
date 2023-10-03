import PDFViewer from "./PDFViewer";
import { Box, Button, Grid, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import * as colors from "@mui/material/colors";

const AssignmentSubmissionViewer = () => {
  const [pdfLink, setPdfLink] = useState<string>(
    "https://arxiv.org/pdf/quant-ph/0410100.pdf"
  );
  return (
    <Box bgcolor={colors.grey[50]}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8}>
          <PDFViewer pdfLink={pdfLink} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box padding={3}>
            <Grid container justifyContent="space-between">
              <Grid>
                <Button>Back</Button>
              </Grid>
              <Grid>
                <Button variant="contained">Get AI Support</Button>
              </Grid>
            </Grid>
            <Box>
              <Box>
                <Typography variant="h6">Student Name</Typography>
              </Box>
              <Box>
                <Tabs>
                  <Tab label="Feedback" />
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssignmentSubmissionViewer;
