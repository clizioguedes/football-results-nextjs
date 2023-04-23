import { ENDPOINTS } from "@/constants/endpoints";
import instance from "@/services/api";
import { StandingPropsRepository } from "@/types/standings";

export async function getStandingsByLeagueCode(code: string) {
  const response = await instance.get(ENDPOINTS.GET_STANDINGS_BY_LEAGUE(code));

  const data = (await response.data) as StandingPropsRepository;

  return data;
}
