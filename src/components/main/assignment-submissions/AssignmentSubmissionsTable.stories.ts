import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import AssignemtSubmissionsTable from "./AssignmentSubmissionsTable";

const meta: Meta<typeof AssignemtSubmissionsTable> = {
  component: AssignemtSubmissionsTable,
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
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
  args: {
    data: [
      {
        studentName: "Bella Morena",
        assignmentStatus: "Handed in",
        aiFeedbackStatus: "Pending",
      },
      {
        studentName: "Cameron Bauer",
        assignmentStatus: "Not handed in",
        aiFeedbackStatus: "Pending",
      },
      {
        studentName: "Hattie Ayers",
        assignmentStatus: "Handed in",
        aiFeedbackStatus: "Pending",
      },
      {
        studentName: "Josh Rocha",
        assignmentStatus: "Handed in",
        aiFeedbackStatus: "Pending",
      },
      {
        studentName: "Kiara Goodwin",
        assignmentStatus: "Handed in",
        aiFeedbackStatus: "Pending",
      },
    ],
  },
};
