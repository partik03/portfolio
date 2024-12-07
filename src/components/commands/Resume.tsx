import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [thankYouMessage, setThankYouMessage] = useState<string>("");

  // Load initial download count from localStorage
  useEffect(() => {
    const savedCount = parseInt(
      localStorage.getItem("resumeDownloads") || "0",
      10
    );
    setDownloadCount(savedCount);
  }, []);

  // Function to handle resume download
  const handleResumeDownload = () => {
    const resumeURL = "../../../resume.pdf"; // Update with the actual path
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Partik_Bumrah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Increment the download count
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem("resumeDownloads", newCount.toString());

    // Set a fun thank-you message
    const messages = [
      "🚀 Thanks for downloading! You're awesome! 🌟",
      "🎉 Resume incoming! Best of luck in your journey! 💼",
      "✨ You rock! Hope this resume opens doors for you! 🚪",
      "📄 Download successful! Wishing you success and beyond! 🌈",
      "🌟 Thanks for showing interest! Go conquer the world! 🌍",
    ];
    setThankYouMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  /* ===== Execute commands only when rerender is true ===== */
  useEffect(() => {
    if (rerender) {
      const currentCommand = _.split(history[0], " ");

      if (currentCommand[0] === "resume" && currentCommand.length === 1) {
        handleResumeDownload();
      } else if (currentCommand[0] === "email" && currentCommand.length === 1) {
        window.open("mailto:partikbumrah13508@gmail.com", "_self");
      }
    }
  }, [rerender, history]);

  return (
    <Wrapper>
      <span>{thankYouMessage || "Enter 'resume' to download my resume!"}</span>
      {/* <div>📥 Resumes downloaded: {downloadCount}</div> */}
    </Wrapper>
  );
};

export default Resume;
