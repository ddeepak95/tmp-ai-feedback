import { createContext } from "react";
import { AssignmentCardProps } from "../components/main/assignments/AssignmentCard";

type AssignmentsListingContextType = {
  assignments: AssignmentCardProps[];
  setAssignments: (assignments: AssignmentCardProps[]) => void;
};

export const AssignmentsListingContext =
  createContext<AssignmentsListingContextType>({
    assignments: [],
    setAssignments: () => {},
  });
