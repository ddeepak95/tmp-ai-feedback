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
    pdfLink: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
    studentName: "John Doe",
  },
};
