import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import PDFViewer from "./PDFViewer";

const meta: Meta<typeof PDFViewer> = {
  component: PDFViewer,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: grey[100] },
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
  },
};
