import { Button } from "@mui/material";

const oAuthScope =
  "User.Read offline_access Files.ReadWrite.All EduAssignments.ReadWrite EduRoster.Read Member.Read.Hidden";
const MicrosoftOAuth = () => {
  const initiateOAuth = () => {
    const clientId = "befa25df-239a-4c47-b6bd-47c7640c2f58";
    let redirectUriLink =
      "https://teachmpowered.vercel.app/api/microsoftAuthTeamsApp";
    const redirectUri = encodeURIComponent(redirectUriLink);
    console.log(redirectUri);
    const scope = encodeURIComponent(oAuthScope);
    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=${scope}`;

    window.open(authUrl, "_blank");
  };

  return (
    <Button variant="contained" onClick={initiateOAuth}>
      Authorize Access To Assignments
    </Button>
  );
};

export default MicrosoftOAuth;
