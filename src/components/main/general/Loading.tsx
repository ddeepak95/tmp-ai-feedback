import { Box, CircularProgress } from "@mui/material";

const Loading = (props: React.PropsWithChildren<any>) => {
  return (
    <Box textAlign={"center"} {...props}>
      <CircularProgress />;
    </Box>
  );
};

export default Loading;
