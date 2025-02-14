import db from "@/db";
import { sensorDataTable, sensorsTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export default async function HomepageTable() {
  const sensorData = await db
    .select({
      id: sensorDataTable.id,
      sensorName: sensorsTable.sensorName,
      temperature: sensorDataTable.temperature,
      humidity: sensorDataTable.humidity,
      ammoniaAmount: sensorDataTable.ammoniaAmount,
      time: sensorDataTable.time,
    })
    .from(sensorDataTable)
    .innerJoin(
      sensorsTable,
      eq(sensorDataTable.sensorId, sensorsTable.sensorId)
    )
    .orderBy(desc(sensorDataTable.time))
    .limit(10);
  // console.log(sensorData);

  return (
    <div className="bg-base-surface0 rounded-lg overflow-hidden border-2 border-base-mauve/50 shadow-[0_0_15px_rgba(203,166,247,0.2)]">
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
                Ammonia (R0)
              </th>
              <th className="px-6 py-3 text-left text-base-mauve font-semibold whitespace-nowrap">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-base-surface1">
            {sensorData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-base-surface1/50 transition-colors duration-150 hover:shadow-[0_0_10px_rgba(203,166,247,0.1)]"
              >
                <td className="px-6 py-4 text-base-text whitespace-nowrap">
                  {row.sensorName}
                </td>
                <td className="px-6 py-4 text-base-green whitespace-nowrap">
                  {row.temperature}
                </td>
                <td className="px-6 py-4 text-base-sky whitespace-nowrap">
                  {row.humidity}
                </td>
                <td className="px-6 py-4 text-base-peach whitespace-nowrap">
                  {row.ammoniaAmount}
                </td>
                <td className="px-6 py-4 text-base-lavender whitespace-nowrap">
                  {row.time.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
