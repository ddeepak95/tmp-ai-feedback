import { Alert, AlertTitle } from "@mui/material";
const ErrorInfo = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Something went wrong</AlertTitle>
      Please try again after sometime. If the issue persists, contact the Teach
      M-Powered team.
    </Alert>
  );
};

export default ErrorInfo;
