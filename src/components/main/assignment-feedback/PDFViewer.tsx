import { PdfLoader, PdfHighlighter } from "react-pdf-highlighter";
import { Box, CircularProgress } from "@mui/material";

type PDFViewerProps = {
  pdfLink: string;
};

const PDFViewer = ({ pdfLink }: PDFViewerProps) => {
  return (
    <div className="PDFViewer" style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <PdfLoader
          url={pdfLink}
          beforeLoad={
            <Box textAlign={"center"}>
              <CircularProgress />
            </Box>
          }
        >
          {(pdfDocument) => (
            <PdfHighlighter
              pdfDocument={pdfDocument}
              enableAreaSelection={(event) => event.altKey}
              onScrollChange={() => {}}
              scrollRef={() => {}}
              onSelectionFinished={() => <div></div>}
              highlightTransform={() => {
                return <div></div>;
              }}
              highlights={[]}
            />
          )}
        </PdfLoader>
      </div>
    </div>
  );
};

export default PDFViewer;
