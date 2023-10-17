import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import AssignmentSubmissionsPageContent from "./AssignmentSubmissionsWithHeading";
import studentDetails from "./dummy-data/student-details.json";

const meta: Meta<typeof AssignmentSubmissionsPageContent> = {
  component: AssignmentSubmissionsPageContent,
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
    assignmentSubmissions: studentDetails,
    assignmentName: "The Election of 1800",
    dueDate: new Date("2021-10-31T23:59:59.000Z"),
  },
};

export const No_Students: Story = {
  args: {
    assignmentName: "The Election of 1800",
    assignmentSubmissions: [],
  },
};

export const Undefined_Return_Type: Story = {
  args: {
    assignmentSubmissions: undefined,
  },
};
