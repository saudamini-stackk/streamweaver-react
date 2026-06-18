import "./App.css";

import Header from "./components/Header";
import StatCards from "./components/StatCards";
import ProcessingWorkspace from "./components/ProcessingWorkspace";
import DeliveryNetworkStatus from "./components/GlobalDeliveryNetwork";
import MediaQualityAnalyzer from "./components/MediaQualityAnalyzer";
import ErrorRecoverySystem from "./components/ErrorRecoverySystem";
import InfrastructureStatus from "./components/InfrastructureHealth";
import ProcessingConfiguration from "./components/ProcessingConfiguration";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <StatCards />

        {/* PROCESSING WORKSPACE */}
        <ProcessingWorkspace />

        {/* DELIVERY + QUALITY + SAFETY */}
        <div className="middle-grid">
    <div className="delivery-column">
        <DeliveryNetworkStatus />
    </div>
    <div className="side-column">
        <MediaQualityAnalyzer />
        <ErrorRecoverySystem />
    </div>
</div>

        {/* INFRA + FRAME RATE */}
        <section className="infra-frame-section">
          <div className="infra-column">
            <InfrastructureStatus />
          </div>
          <div className="frame-column">
  <ProcessingConfiguration />
</div>
        </section>
      </main>
    </div>
  );
}
export default App;