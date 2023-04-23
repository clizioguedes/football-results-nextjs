import { ENDPOINTS } from "@/constants/endpoints";
import instance from "@/services/api";
import { MatchesPropsRepository } from "@/types/matches";

export async function getMatchesByLeagueCode(code: string) {
  const response = await instance.get(
    ENDPOINTS.GET_ALL_MATCHES_BY_LEAGUE(code)
  );

  const data = (await response.data) as MatchesPropsRepository;

  return data;
}
