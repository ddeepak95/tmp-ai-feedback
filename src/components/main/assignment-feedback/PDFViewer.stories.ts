import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import PDFViewer from "./PDFViewer";

const meta: Meta<typeof PDFViewer> = {
  component: PDFViewer,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: grey[100] },
        { name: "dark", value: grey[900] },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
