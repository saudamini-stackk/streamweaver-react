import audioLogsData from "../data/audioLogs";

function AudioFixLog() {
  return (
    <div>
     <h3 className="tab-heading">
    Audio Fix Log
</h3>

      <table className="data-table">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Offset</th>
            <th>Engineer</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {audioLogsData.map((log) => (
            <tr key={log.id}>
              <td>{log.issue}</td>
              <td>{log.offset}</td>
              <td>{log.engineer}</td>
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AudioFixLog;