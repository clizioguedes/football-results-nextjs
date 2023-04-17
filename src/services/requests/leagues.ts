import instance from "@/services/api";
import { League } from "@/types/leagues";

export async function getLeagues(): Promise<League[]> {
  const response = await instance.get("/leagues");

  const data = (await response.data) as League[];

  return data;
}
