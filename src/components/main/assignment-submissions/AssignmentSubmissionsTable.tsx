import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import * as colors from "@mui/material/colors";

interface DataRow {
  studentName: string;
  assignmentStatus: string;
  aiFeedbackStatus: string;
}

interface AssignmentSubmissionsTableProps {
  data: DataRow[];
}

const AssignmentStatus = ({
  assignmentStatus,
}: {
  assignmentStatus: string;
}) => {
  return (
    <Typography
      color={
        assignmentStatus === "Handed in" ? colors.blue[500] : colors.grey[700]
      }
    >
      {assignmentStatus}
    </Typography>
  );
};

const AssignmentSubmissionsTable: React.FC<AssignmentSubmissionsTableProps> = ({
  data,
}) => {
  const [search, setSearch] = useState<string>("");

  const filteredData = data.filter((row: DataRow) => {
    return row.studentName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <TextField
        label="Search Student"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Assignment Status</TableCell>
              <TableCell>AI Feedback Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row: DataRow, index) => (
              <TableRow key={index}>
                <TableCell>{row.studentName}</TableCell>
                <TableCell>
                  <AssignmentStatus assignmentStatus={row.assignmentStatus} />
                </TableCell>
                <TableCell>{row.aiFeedbackStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AssignmentSubmissionsTable;
