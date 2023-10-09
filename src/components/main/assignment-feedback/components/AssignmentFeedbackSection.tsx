import FeedbackTab from "./FeedbackTab";
import { Box, Tabs, Tab } from "@mui/material";
import { useState, useContext } from "react";
import { AssignmentDetailsContext } from "../contexts/AssignmentDetailsContext";
import { firestoreApp } from "../../../../firebase/firestore";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import ErrorInfo from "../../general/ErrorInfo";
import Loading from "../../general/Loading";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AssignmentFeedbackSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (
    event: React.SyntheticEvent,
    newselectedTab: number
  ) => {
    setSelectedTab(newselectedTab);
  };
  const assignmentDetails = useContext(AssignmentDetailsContext);
  const { teamId, assignmentId, submissionId } = assignmentDetails;

  const docRef = doc(
    firestoreApp,
    "teams",
    teamId,
    "assignments",
    assignmentId,
    "submissions",
    submissionId,
    "feedback",
    "data"
  );

  const [value, loading, error] = useDocumentData(docRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) return <Loading />;

  if (error) return <ErrorInfo />;

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Feedback" {...a11yProps(0)} />
            {/* <Tab label="Rubric" {...a11yProps(1)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={selectedTab} index={0}>
          <FeedbackTab
            feedbackText={
              value ? value.feedback_text : "No feedback generated yet"
            }
            feedbackGenerated={value ? value.is_feedback_generated : false}
            feedbackGenerationInProgress={
              value ? value.is_feedback_generation_in_progress : false
            }
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default AssignmentFeedbackSection;
