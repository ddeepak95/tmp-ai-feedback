import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import AssignmentSubmissionViewer from "./AssigmentSubmissionViewer";

const meta: Meta<typeof AssignmentSubmissionViewer> = {
  component: AssignmentSubmissionViewer,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: grey[300] },
        { name: "dark", value: grey[600] },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pdfLink:
      "https://tmplab.sharepoint.com/sites/4thPeriodLanguageArtsandSocialStudies/_layouts/15/download.aspx?UniqueId=02df5f91-f934-48a9-b80d-cd13c036fc46&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdG1wbGFiLnNoYXJlcG9pbnQuY29tQGQxMjhmMGFjLWE2OWMtNDZjMS04MDI1LTAwNWZlNDZmNDE3NiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2OTYzNTcwMjIiLCJleHAiOiIxNjk2MzYwNjIyIiwiZW5kcG9pbnR1cmwiOiIzakVySExpY1pnN3VXOG5oWVhrN1QyeG5rTnVnQlFmV2N1ZHJHKyt6c3VrPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTYxIiwiaXNsb29wYmFjayI6IlRydWUiLCJjaWQiOiJUcmVWT2JYYUlrK2RQb1dTQUNpN1ZnPT0iLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiT0daaE56TmlZbVV0WW1Nek1DMDBZMkkzTFRreU1UZ3RZamxqTWpoaVpHWmtaVFkzIiwiYXBwX2Rpc3BsYXluYW1lIjoiVGVhY2ggTS1Qb3dlcmVkIEFzc2lnbm1lbnRzIENvbm5lY3QiLCJhcHBpZCI6ImE4MDU3ZjdhLWNiNWItNGIyMS04Zjg1LTEzMmQ4MzI4NTg4OSIsInRpZCI6ImQxMjhmMGFjLWE2OWMtNDZjMS04MDI1LTAwNWZlNDZmNDE3NiIsInVwbiI6InQtaG9vcGVyQHRtcGxhYi5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDJDQUE5NzA4NSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAyY2FhOTcwODVAbGl2ZS5jb20iLCJzY3AiOiJhbGxmaWxlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwiaXBhZGRyIjoiMjAuMTkwLjEzMi4xMDYifQ.qPKx5QsKm8pQVXI6X_J2q0DeKUV2Ixvs_eR2NC0qDLY&ApiVersion=2.0",
  },
};
