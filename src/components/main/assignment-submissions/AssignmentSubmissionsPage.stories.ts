import type { Meta, StoryObj } from "@storybook/react";
import { grey } from "@mui/material/colors";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-react-router-v6";

import AssignmentSubmissionsPage from "./AssignmentSubmissionsPage";
import studentDetails from "./dummy-data/student-details.json";

const meta: Meta<typeof AssignmentSubmissionsPage> = {
  component: AssignmentSubmissionsPage,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "light", value: grey[100] },
        { name: "dark", value: grey[900] },
      ],
    },
    decorators: [withRouter],
    mockData: [
      {
        url: "https://dummy-endpoint.com/api/assignment/asdf",
        method: "GET",
        status: 200,
        delay: 1000,
        response: {
          assignmentData: {
            assignmentStudents: studentDetails,
            assignmentName: "The Election of 1800",
            dueDate: "2021-10-31T23:59:59.000Z",
          },
        },
      },
      {
        url: "https://dummy-endpoint.com/api/assignment/undefined",
        method: "GET",
        status: 200,
        delay: 1000,
        response: {
          assignmentData: undefined,
        },
      },
      {
        url: "https://dummy-endpoint.com/api/assignment/no-students",
        method: "GET",
        status: 200,
        delay: 1000,
        response: {
          assignmentData: {
            assignmentStudents: [],
            assignmentName: "The Election of 1800",
            dueDate: "2021-10-31T23:59:59.000Z",
          },
        },
      },
    ],
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { assignmentId: "asdf" },
      },
      routing: {
        path: "/assignments/:assignmentId",
        handle: "Assignment Details",
      },
    }),
  },
};

export const No_Students: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { assignmentId: "no-students" },
      },
      routing: {
        path: "/assignments/:assignmentId",
        handle: "Assignment Details",
      },
    }),
  },
};

export const Wrong_Assignment_Id: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { assignmentId: "dsfd" },
      },
      routing: {
        path: "/assignments/:assignmentId",
        handle: "Assignment Details",
      },
    }),
  },
};
