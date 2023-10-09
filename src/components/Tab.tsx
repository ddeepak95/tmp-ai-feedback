import AssignmentSubmissionViewer from "./main/assignment-feedback/AssigmentSubmissionViewer";

export default function Tab() {
  return (
    <div>
      <AssignmentSubmissionViewer
        pdfLink="https://arxiv.org/pdf/quant-ph/0410100.pdf"
        studentName="Hello"
      />
    </div>
  );
}
