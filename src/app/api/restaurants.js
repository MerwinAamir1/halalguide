"use server";
import { getXataClient } from "../../xata";

export default async function getData() {
  const xata = getXataClient({ enableBrowser: true });
  const records = await xata.db.Resturants.getMany();
  return records;
}
