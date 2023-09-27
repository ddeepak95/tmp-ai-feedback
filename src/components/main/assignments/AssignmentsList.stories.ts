import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import AssignmentsList from "./AssignmentsList";

const meta: Meta<typeof AssignmentsList> = {
  component: AssignmentsList,
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
  args: {
    assignments: [
      {
        assignmentTitle: "The Electoral College: Abolition or Retention?",
        numberOfSubmittedAssignments: 3,
        numberOfTotalAssignments: 5,
        dueDate: new Date("2023-10-31T23:59:59.000Z"),
      },
      {
        assignmentTitle: "The Constitution: A Living Document?",
        numberOfSubmittedAssignments: 3,
        numberOfTotalAssignments: 5,
        dueDate: new Date("2023-10-31T23:59:59.000Z"),
      },
    ],
  },
};

export const NoAssignmentData: Story = {
  args: {
    assignments: undefined,
  },
};
