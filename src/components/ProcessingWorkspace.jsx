import { useState } from "react";
import {
  FaFilm,
  FaHeadphones,
  FaClosedCaptioning,
  FaShieldAlt
} from "react-icons/fa";

import FormatRulebook from "./FormatRulebook";
import AudioFixLog from "./AudioFixLog";
import SubtitleQueue from "./SubtitleQueue";
import CopyrightChecker from "./CopyrightChecker";

export default function ProcessingWorkspace() {

  const [activeTab, setActiveTab] = useState("Formats");

  return (
    <section className="workspace-section">

      <h2 className="section-title">
        Processing Workspace
      </h2>

      <div className="workspace-tabs">

        <button
          className={activeTab === "Formats" ? "active-tab" : ""}
          onClick={() => setActiveTab("Formats")}
        >
          <FaFilm />
          <span>Formats</span>
        </button>

        <button
          className={activeTab === "Audio" ? "active-tab" : ""}
          onClick={() => setActiveTab("Audio")}
        >
          <FaHeadphones />
          <span>Audio</span>
        </button>

        <button
          className={activeTab === "Subtitles" ? "active-tab" : ""}
          onClick={() => setActiveTab("Subtitles")}
        >
          <FaClosedCaptioning />
          <span>Subtitles</span>
        </button>

        <button
          className={activeTab === "Copyright" ? "active-tab" : ""}
          onClick={() => setActiveTab("Copyright")}
        >
          <FaShieldAlt />
          <span>Copyright</span>
        </button>

      </div>

      <div className="workspace-content">

        {activeTab === "Formats" && (
          <FormatRulebook />
        )}

        {activeTab === "Audio" && (
          <AudioFixLog />
        )}

        {activeTab === "Subtitles" && (
          <SubtitleQueue />
        )}

        {activeTab === "Copyright" && (
          <CopyrightChecker />
        )}

      </div>

    </section>
  );
}