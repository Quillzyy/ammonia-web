import HomepageTable from "@/components/homepage/homepage-table";
import HomepageDownloadCSV from "@/components/homepage/homepage-download-csv";

export default function Homepage() {
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
          {/* <select
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
          </select> */}

          {/* Download Button with neon effect */}
          <HomepageDownloadCSV />
        </div>

        {/* Table Container with horizontal scroll for mobile */}
        <HomepageTable />
      </main>
    </div>
  );
}
