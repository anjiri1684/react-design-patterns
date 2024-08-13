import { useState } from "react";

export default function SearchableList({ items, children }) {
  const [searchTearm, setSearchTearm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTearm.toLowerCase())
  );

  function hanldeChange(event) {
    setSearchTearm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." onChange={hanldeChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
