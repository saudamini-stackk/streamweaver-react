import {
  FaBriefcase,
  FaHeadphones,
  FaClosedCaptioning,
  FaShieldAlt
} from "react-icons/fa";

export default function StatCards() {
  const stats = [
    {
      icon: <FaBriefcase />,
      value: "24",
      title: "ACTIVE JOBS"
    },

    {
      icon: <FaHeadphones />,
      value: "12",
      title: "AUDIO EVENTS"
    },

    {
      icon: <FaClosedCaptioning />,
      value: "18",
      title: "SUBTITLES"
    },

    {
      icon: <FaShieldAlt />,
      value: "95%",
      title: "COMPLIANCE"
    }
  ];

  return (
    <section className="stats-grid">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon">
            {stat.icon}
          </div>
          <div className="stat-content">
            <h2>{stat.value}</h2>
            <span className="stat-title">
              {stat.title}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}