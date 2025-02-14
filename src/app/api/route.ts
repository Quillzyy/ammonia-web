import db from "@/db";
import { sensorDataTable } from "@/db/schema";

interface SensorData {
  sensorId: string;
  temperature: number;
  humidity: number;
  ammoniaAmount: number;
}

export async function POST(request: Request) {
  try {
    const res: SensorData = await request.json();

    if (
      !res.sensorId ||
      res.temperature === undefined ||
      res.humidity === undefined ||
      res.ammoniaAmount === undefined
    ) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Payload is incomplete or missing",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data: typeof sensorDataTable.$inferInsert = {
      ...res,
      time: new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
      ),
    };
    await db.insert(sensorDataTable).values(data);

    return new Response(
      JSON.stringify({ status: "success", message: "Data inserted" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ status: "error", message: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ status: "error", message: "Unknown error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}
