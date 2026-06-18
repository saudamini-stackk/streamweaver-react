export default function QualitySorter() {

  const sizes = [120, 300, 450, 800];

  return (

    <section className="dashboard-section">

      <h2 className="section-title">
        Media Quality Analyzer
      </h2>

      <div className="quality-grid">

        {sizes.map((size) => (

          <div
            className="quality-card"
            key={size}
          >

            <span>Video Block</span>

            <h3>{size} MB</h3>

          </div>

        ))}

      </div>

    </section>

  );
}