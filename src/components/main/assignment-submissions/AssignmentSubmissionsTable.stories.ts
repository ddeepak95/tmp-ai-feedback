import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";

import AssignemtSubmissionsTable from "./AssignmentSubmissionsTable";

import studentDetails from "./dummy-data/student-details.json";

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

const data = studentDetails;

export const Primary: Story = {
  args: {
    data: data,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    data: undefined,
  },
};

export const Error: Story = {
  args: {
    loading: false,
    data: undefined,
  },
};

export const No_Students: Story = {
  args: {
    loading: false,
    data: [],
  },
};
