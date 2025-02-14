import {
  integer,
  pgTable,
  varchar,
  real,
  timestamp,
} from "drizzle-orm/pg-core";

export const sensorsTable = pgTable("sensors", {
  sensorId: varchar({ length: 255 }).primaryKey().notNull().unique(),
  sensorName: varchar({ length: 255 }).notNull(),
});

export const sensorDataTable = pgTable("sensor_data", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sensorId: varchar({ length: 255 }).references(() => sensorsTable.sensorId),
  temperature: real().notNull(),
  humidity: integer().notNull(),
  ammoniaAmount: real().notNull(),
  time: timestamp().notNull(),
});
