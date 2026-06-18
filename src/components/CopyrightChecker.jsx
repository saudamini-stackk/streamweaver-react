import { useState } from "react";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";

function CopyrightChecker() {
  const [format, setFormat] = useState("MP4");
  const [license, setLicense] = useState("Creative Commons");

  const compliant =
    format === "MP4" || license === "Creative Commons";

  return (
    <div className="copyright-container">

      <h3 className="tab-heading">
        Copyright Compliance Checker
      </h3>

      <div className="checker-controls">

        <div className="select-wrapper">

          <select
            className="copyright-select"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option>MP4</option>
            <option>MKV</option>
            <option>AVI</option>
            <option>MOV</option>
          </select>

          <FaSearch className="select-icon" />

        </div>

        <div className="select-wrapper">

          <select
            className="copyright-select"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          >
            <option>Creative Commons</option>
            <option>Commercial License</option>
            <option>Internal Use</option>
          </select>

          <FaSearch className="select-icon" />

        </div>

      </div>


      {compliant ? (

        <div className="compliance-button">

          <div className="compliance-icon">
            <FaCheck />
          </div>

          <div className="compliance-text">
            <small>STATUS</small>
            <span>Compliant</span>
          </div>

        </div>

      ) : (

        <div className="violation-button">

          <div className="violation-icon">
            <FaTimes />
          </div>

          <div className="compliance-text">
            <small>STATUS</small>
            <span>Violation Detected</span>
          </div>

        </div>

      )}

    </div>
  );
}

export default CopyrightChecker;