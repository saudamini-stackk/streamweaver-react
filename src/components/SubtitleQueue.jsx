import subtitlesData from "../data/subtitles";

function SubtitleQueue() {
  return (
    <div>
      <h3 className="tab-heading">Subtitle Queue</h3>

      <table className="data-table">
        <thead>
          <tr>
            <th>Subtitle Text</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>

        <tbody>
          {subtitlesData.map((subtitle) => (
            <tr key={subtitle.id}>
              <td>{subtitle.text}</td>
              <td>{subtitle.start}</td>
              <td>{subtitle.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubtitleQueue;