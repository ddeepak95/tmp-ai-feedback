import AppWrapper from "./main/general/AppWrapper";
import AIFeedbackApp from "./AIFeedbackApp";
import { Box } from "@mui/material";

export default function Tab() {
  return (
    <Box padding={4}>
      <AppWrapper>
        <AIFeedbackApp />
      </AppWrapper>
    </Box>
  );
}
