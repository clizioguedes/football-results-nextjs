import { ENDPOINTS } from "@/constants/endpoints";
import instance from "@/services/api";
import { League } from "@/types/leagues";

export async function getLeagues(): Promise<League[]> {
  const response = await instance.get(ENDPOINTS.GET_LEAGUES);

  const data = (await response.data) as League[];

  return data;
}

export async function getLeagueByCode(code: string) {}
