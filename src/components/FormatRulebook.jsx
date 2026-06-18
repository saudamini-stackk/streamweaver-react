import { useState } from "react";
import formats from "../data/formats";

export default function FormatRulebook() {

  const [search, setSearch] = useState("");

  const filteredFormats = formats.filter((item) =>
    item.format.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="format-container">

      <div className="formats-header">

        <input
          type="text"
          className="search-input"
          placeholder="Search format..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="format-table">

        <thead>

          <tr>
            <th>Format</th>
            <th>Codec</th>
            <th>Resolution</th>
            <th>Bitrate</th>
            <th>Container</th>
          </tr>

        </thead>

        <tbody>

          {filteredFormats.map((item, index) => (

            <tr key={index}>

              <td>{item.format}</td>

              <td>{item.codec}</td>

              <td>{item.resolution}</td>

              <td>{item.bitrate}</td>

              <td>{item.container}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}