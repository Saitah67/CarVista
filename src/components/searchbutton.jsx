import React, { useState } from "react";

// Your car database
const cars = ["BMW", "Mercedes", "Toyota", "Volkswagen", "Tesla", "Ford"];

function CarSearch() {
  const [query, setQuery] = useState("");

  // Filter cars dynamically based on input
  const filteredCars = cars.filter(car =>
    car.toLowerCase().includes(query.toLowerCase())
  );

  // Handle search button click
  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Please enter a car brand to search!");
    } else {
      alert(`Searching for "${query}"`);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Search Cars</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter car brand..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Search
        </button>
      </div>

      <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <li
              key={index}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee"
              }}
            >
              {car}
            </li>
          ))
        ) : (
          <li style={{ padding: "8px 0", color: "#888" }}>No cars found</li>
        )}
      </ul>
    </div>
  );
}

export default CarSearch;