const regions = [
  {
    city: "Mumbai",
    capacity: 85,
    status: "Healthy",
  },
  {
    city: "Delhi",
    capacity: 60,
    status: "Healthy",
  },
  {
    city: "Bangalore",
    capacity: 95,
    status: "Warning",
  },
  {
    city: "Chennai",
    capacity: 70,
    status: "Healthy",
  },
  {
    city: "Hyderabad",
    capacity: 78,
    status: "Healthy",
  },
];

export default function DeliveryNetworkStatus() {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">
        Delivery Network Status
      </h2>

      <div className="delivery-list">
        {regions.map((region) => (
          <div
            className="delivery-row"
            key={region.city}
          >
            <div className="delivery-info">
              <h3>{region.city}</h3>

              <span
                className={
                  region.status === "Healthy"
                    ? "healthy"
                    : "warning"
                }
              >
                {region.status}
              </span>
            </div>

            <div className="delivery-progress">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${region.capacity}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}