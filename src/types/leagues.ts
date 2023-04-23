export type League = {
  id: number;
  area: {
    id: number;
    name: string;
    code: string;
    flag?: string | null;
  };
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: null | null;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
};
