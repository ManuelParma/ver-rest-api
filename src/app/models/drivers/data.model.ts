import { DriverTable } from "./driver-table.model";

export interface Data {
  xmlns: string;
  series: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  DriverTable: DriverTable;
}