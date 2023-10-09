import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import FeedbackTab from "./FeedbackTab";

const meta: Meta<typeof FeedbackTab> = {
  component: FeedbackTab,
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

export const FeedbackGenerated: Story = {
  args: {
    feedbackText: "This is some feedback text",
    feedbackGenerated: true,
    feedbackGenerationInProgress: false,
  },
};
