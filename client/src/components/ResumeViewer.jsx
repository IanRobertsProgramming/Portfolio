import "../styles/resume-viewer.css";
import ResumeFile from "/assets/files/Resume.pdf";

export default function ResumeViewer() {
  return (
    <div className="viewer">
      <iframe src={ResumeFile} title="Resume" className="resume" />
    </div>
  );
}
