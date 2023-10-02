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
  CircularProgress,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import * as colors from "@mui/material/colors";
import ErrorInfo from "../general/ErrorInfo";

interface DataRow {
  studentName: string;
  assignmentStatus: string;
}

interface AssignmentSubmissionsTableProps {
  data: DataRow[] | undefined | null;
  loading: boolean;
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

const CustomTable = ({ data }: { data: DataRow[] }) => {
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
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row: DataRow, index) => (
              <TableRow
                key={index}
                sx={{ cursor: "pointer" }}
                hover
                onClick={() => {
                  console.log("Row clicked:", row);
                  // Add your desired functionality here
                }}
              >
                <TableCell>{row.studentName}</TableCell>
                <TableCell>
                  <AssignmentStatus assignmentStatus={row.assignmentStatus} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const AssignmentSubmissionsTable: React.FC<AssignmentSubmissionsTableProps> = ({
  data,
  loading,
}) => {
  if (loading) {
    return (
      <Box textAlign={"center"}>
        <CircularProgress />
        <Typography>Loading data...</Typography>
      </Box>
    );
  }

  if (!loading && data === undefined) {
    return (
      <div>
        <Alert severity="warning">
          <AlertTitle>Unable to fetch data</AlertTitle>
          Please try again later. If the problem persists, please contact the
          Teach M-Powered team.
        </Alert>
      </div>
    );
  }

  if (!loading && Array.isArray(data)) {
    if (!loading && data.length === 0) {
      return <Alert severity="info">No students to show</Alert>;
    }
    return <CustomTable data={data} />;
  }

  return (
    <div>
      <ErrorInfo />
    </div>
  );
};

export default AssignmentSubmissionsTable;
