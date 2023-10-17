import React, { useContext, useEffect, useState } from "react";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";

import { AssignmentCardProps } from "../main/assignments/AssignmentCard";
import AssignmentsList from "../main/assignments/AssignmentsList";
import Loading from "../main/general/Loading";
import { AssignmentsListingContext } from "../../contexts/AssignmentsListingContext";

const AssignmentsListingScreen = () => {
  const userDetailsContext = useContext(UserDetailsContext);
  const { assignments, setAssignments } = useContext(AssignmentsListingContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(true);

    if (!userDetailsContext.userDetails) {
      return;
    }
    const { teamId, accessToken } = userDetailsContext.userDetails;

    if (!teamId) {
      setLoading(false);
      return;
    }

    if (assignments.length > 0) {
      setLoading(false);
      return;
    }
    const fetchAssignments = async () => {
      console.log("fetching assignments");
      const response = await fetch(
        `https://graph.microsoft.com/v1.0/education/classes/${teamId}/assignments`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      const assignmentsArray = data.value;
      if (!assignmentsArray) {
        setLoading(false);
        return;
      }

      const filteredAssignments: AssignmentCardProps[] = [];
      assignmentsArray.forEach((assignment: any) => {
        if (assignment.status === "assigned") {
          let assignmentItem: AssignmentCardProps = {
            assignmentId: assignment.id,
            assignmentTitle: assignment.displayName,
            numberOfSubmittedAssignments: assignment.submittedBy?.length || 0,
            numberOfTotalAssignments: assignment.assignees?.length || 0,
            dueDate: assignment.dueDateTime,
          };
          filteredAssignments.push(assignmentItem);
        }
      });

      setAssignments(filteredAssignments);
      setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchAssignments();
  }, [userDetailsContext]);

  if (loading) {
    return <Loading />;
  }

  if (!userDetailsContext) {
    return null;
  }

  return (
    <div>
      <h1>Assignments Listing</h1>
      <AssignmentsList assignments={assignments} />
    </div>
  );
};

export default AssignmentsListingScreen;
