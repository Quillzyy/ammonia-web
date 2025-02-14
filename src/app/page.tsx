"use client";

import React, { useState } from "react";

const SensorDashboard = () => {
  const sensorData = [
    {
      id: 1,
      sensor: 1,
      temperature: 25.4,
      humidity: 65,
      ammonia: 0.03,
      date: "2024-02-13 10:30:00",
    },
    {
      id: 2,
      sensor: 1,
      temperature: 26.1,
      humidity: 63,
      ammonia: 0.04,
      date: "2024-02-13 11:30:00",
    },
    {
      id: 3,
      sensor: 2,
      temperature: 24.8,
      humidity: 68,
      ammonia: 0.02,
      date: "2024-02-13 10:30:00",
    },
    {
      id: 4,
      sensor: 2,
      temperature: 25.2,
      humidity: 66,
      ammonia: 0.03,
      date: "2024-02-13 11:30:00",
    },
  ];

  const [selectedSensor, setSelectedSensor] = useState("all");

  const filteredData =
    selectedSensor === "all"
      ? sensorData
      : sensorData.filter((data) => data.sensor === parseInt(selectedSensor));

  const downloadCSV = () => {
    const headers = ["Sensor", "Temperature", "Humidity", "Ammonia", "Date"];
    const csvData = filteredData.map((row) =>
      [row.sensor, row.temperature, row.humidity, row.ammonia, row.date].join(
        ","
      )
    );

    const csv = [headers.join(","), ...csvData].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sensor-data-${selectedSensor}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-base-base">
      {/* Header with neon border */}
      <header className="bg-base-surface0 p-6 shadow-lg border-b-2 border-base-mauve relative">
        <div className="absolute inset-0 bg-base-mauve/10 backdrop-blur-sm"></div>
        <h1 className="text-2xl font-bold text-base-text relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-base-mauve to-base-pink">
          Sensor Dashboard
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          {/* Sensor Dropdown with neon effect */}
          <select
            value={selectedSensor}
            onChange={(e) => setSelectedSensor(e.target.value)}
            className="w-full sm:w-auto bg-base-surface1 text-base-text px-4 py-2 rounded-lg 
                     border-2 border-base-mauve shadow-[0_0_10px_rgba(203,166,247,0.3)]
                     focus:outline-none focus:border-base-pink focus:shadow-[0_0_15px_rgba(245,194,231,0.5)]
                     transition-all duration-300"
          >
            <option value="all">All Sensors</option>
            <option value="1">Sensor 1</option>
            <option value="2">Sensor 2</option>
          </select>

          {/* Download Button with neon effect */}
          <button
            onClick={downloadCSV}
            className="w-full sm:w-auto bg-base-mauve hover:bg-base-pink text-base-base px-6 py-2 rounded-lg
                     transition-all duration-300 transform hover:scale-105
                     border-2 border-base-pink hover:border-base-mauve
                     shadow-[0_0_10px_rgba(245,194,231,0.3)]
                     hover:shadow-[0_0_20px_rgba(203,166,247,0.5)]
                     flex items-center justify-center gap-2"
          >
            Download CSV
          </button>
        </div>

        {/* Table Container with horizontal scroll for mobile */}
        <div
          className="bg-base-surface0 rounded-lg shadow-xl overflow-hidden
                      border-2 border-base-mauve/50 
                      shadow-[0_0_15px_rgba(203,166,247,0.2)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-base-surface1 border-b-2 border-base-mauve/30">
                <tr>
                  <th className="px-6 py-3 text-left text-base-mauve font-semibold whitespace-nowrap">
                    Sensor
                  </th>
                  <th className="px-6 py-3 text-left text-base-mauve font-semibold whitespace-nowrap">
                    Temperature (°C)
                  </th>
                  <th className="px-6 py-3 text-left text-base-mauve font-semibold whitespace-nowrap">
                    Humidity (%)
                  </th>
                  <th className="px-6 py-3 text-left text-base-mauve font-semibold whitespace-nowrap">
                    Ammonia (ppm)
                  </th>
                  <th className="px-6 py-3 text-left text-base-mauve font-semibold whitespace-nowrap">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-base-surface1">
                {filteredData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-base-surface1/50 transition-colors duration-150
                               hover:shadow-[0_0_10px_rgba(203,166,247,0.1)]"
                  >
                    <td className="px-6 py-4 text-base-text whitespace-nowrap">
                      Sensor {row.sensor}
                    </td>
                    <td className="px-6 py-4 text-base-green whitespace-nowrap">
                      {row.temperature}
                    </td>
                    <td className="px-6 py-4 text-base-sky whitespace-nowrap">
                      {row.humidity}
                    </td>
                    <td className="px-6 py-4 text-base-peach whitespace-nowrap">
                      {row.ammonia}
                    </td>
                    <td className="px-6 py-4 text-base-lavender whitespace-nowrap">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SensorDashboard;
