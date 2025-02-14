import db from "@/db";
import { sensorDataTable, sensorsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const sensorDataAll = await db
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
    );

  const headers = ["Sensor", "Temperature", "Humidity", "Ammonia", "Time"];
  const csvData = sensorDataAll.map((row) =>
    [
      row.sensorName,
      row.temperature,
      row.humidity,
      row.ammoniaAmount,
      row.time.toISOString(),
    ].join(",")
  );

  const csv = [headers.join(","), ...csvData].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=sensor_data.csv",
    },
  });
}
