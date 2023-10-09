import {
  Box,
  Button,
  Typography,
  LinearProgress,
  TextField,
  Alert,
} from "@mui/material";
import * as colors from "@mui/material/colors";

interface FeedbackTabProps {
  feedbackText: string;
  feedbackGenerated: boolean;
  feedbackGenerationInProgress: boolean;
}

const FeedbackTab = ({
  feedbackText,
  feedbackGenerated,
  feedbackGenerationInProgress,
}: FeedbackTabProps) => {
  return (
    <Box>
      <Box>
        {feedbackGenerationInProgress ? (
          <Box textAlign={"center"}>
            <FeedbackGenerationLoaderIndicator />
          </Box>
        ) : !feedbackGenerated ? (
          <Box textAlign={"center"} marginY={2}>
            <Typography variant="body2" marginBottom={2}>
              Generate feedback with AI support!
            </Typography>

            <TextField
              fullWidth
              multiline
              label="Optional additional info for AI"
              rows={4}
              maxRows={12}
            />
            <Box marginY={2}>
              <Button variant="contained">Generate Feedback With AI</Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Alert sx={{ margin: "1em 0em" }} severity="success">
              Feedback generated with AI support. Please review the feedback and
              update.
            </Alert>
            <FeedbackTextField
              isEnabled={feedbackGenerated}
              feedbackText={feedbackText}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const FeedbackTextField = ({
  feedbackText,
  isEnabled = false,
}: {
  feedbackText: string;
  isEnabled: boolean;
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        multiline
        disabled={!isEnabled}
        label="Feedback"
        value={feedbackText}
        rows={8}
        maxRows={12}
      />
    </Box>
  );
};

const FeedbackGenerationLoaderIndicator = () => {
  return (
    <Box marginY={2} padding={2} bgcolor={colors.blue[50]} borderRadius={4}>
      <Typography marginBottom={2} variant="body2">
        Generating feedback with AI support
      </Typography>
      <LinearProgress />
      <Typography marginTop={1} variant="body2">
        Please wait. This may take a few minutes.
      </Typography>
    </Box>
  );
};

export default FeedbackTab;
