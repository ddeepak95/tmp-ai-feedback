import { Box, Typography } from "@mui/material";
import MicrosoftOAuth from "./MicrosoftOAuth";

interface OnboardingProps {
  userName: string;
}

const Onboarding = ({ userName }: OnboardingProps) => {
  return (
    <Box textAlign={"center"} paddingY={12}>
      <Typography variant="h6">Hello {userName}</Typography>
      <Typography variant="h4">Welcome to Teach M-Powered</Typography>
      <Box padding={3}>
        <img src="/images/light.png" alt="classroom illustration" width={400} />
      </Box>

      <Typography variant="body1">
        Please authenticate the app to get started!
      </Typography>
      <MicrosoftOAuth />
    </Box>
  );
};

export default Onboarding;
