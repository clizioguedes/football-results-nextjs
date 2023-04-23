export type StandingPropsRepository = {
  filters: {
    season: string;
  };
  area: {
    id: number;
    name: string;
    code: string;
    flag?: string | null;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type?: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
    stages: Array<string>;
  };
  standings: Array<Stading>;
};

export type Stading = {
  stage: string;
  type: string;
  group?: any;
  table: Array<Table>;
};

export type Table = {
  position: number;
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
};
