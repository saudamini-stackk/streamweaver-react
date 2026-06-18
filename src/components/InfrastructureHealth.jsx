import { FaServer, FaLayerGroup, FaDatabase, FaGlobe } from "react-icons/fa";

const infrastructure = [
  {
    icon: <FaServer />,
    title: "Ingest Servers",
    desc: "All systems operational",
    status: "Healthy",
  },
  {
    icon: <FaLayerGroup />,
    title: "Transcoding Cluster",
    desc: "12 / 12 nodes active",
    status: "Healthy",
  },
  {
    icon: <FaDatabase />,
    title: "Storage Systems",
    desc: "2.4 PB / 5 PB used",
    status: "Warning",
  },
  {
    icon: <FaGlobe />,
    title: "CDN Delivery",
    desc: "Global nodes active",
    status: "Healthy",
  },
];

function InfrastructureStatus() {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">
        Infrastructure Status
      </h2>

      <div className="infra-grid">
        {infrastructure.map((item) => (
          <div className="infra-card" key={item.title}>
            <div className="infra-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span
              className={
                item.status === "Healthy"
                  ? "healthy-pill"
                  : "warning-pill"
              }
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfrastructureStatus;