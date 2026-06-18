import { useState } from "react";

export default function ProcessingConfiguration() {

  const [fps, setFps] = useState(60);

  return (

    <section className="dashboard-section">

      <h2 className="section-title">
        Processing Configuration
      </h2>

      <div className="slider-group">

        <label>

          <span>Frame Rate</span>

          <h4>{fps} FPS</h4>

        </label>

        <input
          type="range"
          min="24"
          max="120"
          value={fps}
          onChange={(e) => setFps(e.target.value)}
        />

      </div>

      <div className="preview-card">

        <h3>
          Output Settings
        </h3>

        <div className="preview-grid">

          <div>
            <span>Resolution</span>
            <h4>4K UHD</h4>
          </div>

          <div>
            <span>Bitrate</span>
            <h4>12 Mbps</h4>
          </div>

          <div>
            <span>Frame Rate</span>
            <h4>{fps} FPS</h4>
          </div>

          <div>
            <span>Encoding</span>
            <h4>H.265</h4>
          </div>

        </div>

      </div>

    </section>

  );
}