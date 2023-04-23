export const ENDPOINTS = {
  GET_LEAGUES: "/leagues",
  GET_COUNTRIES: "/countries",
  GET_STANDINGS_BY_LEAGUE: (code: string) => `/leagues/${code}/standing`,
  GET_ALL_MATCHES_BY_LEAGUE: (code: string) => `/leagues/${code}/matches`,
};
