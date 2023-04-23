export type MatchesPropsRepository = {
  filters: {
    season: string;
    matches: string;
  };
  resultSet: {
    count: number;
    first: string;
    last: string;
    played: number;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  matches: Array<Match>;
};

export type Match = {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: any;
    stages: Array<string>;
  };
  id: number;
  utcDate: string;
  status: string;
  minute: string;
  injuryTime: number;
  attendance?: any;
  venue: string;
  matchday: number;
  stage: string;
  group?: any;
  lastUpdated: string;
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: {
      id: number;
      name: string;
      nationality: string;
    };
    leagueRank: number;
    formation: string;
    lineup: Array<any>;
    bench: Array<any>;
  };
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: {
      id: number;
      name: string;
      nationality: string;
    };
    leagueRank: number;
    formation: string;
    lineup: Array<any>;
    bench: Array<any>;
  };
  score: {
    winner: string;
    duration: string;
    fullTime: {
      home: number;
      away: number;
    };
    halfTime: {
      home: number;
      away: number;
    };
  };
  goals: Array<Goals>;
  penalties: Array<Penalties>;
  bookings?: Array<any>;
  substitutions?: Array<any>;
  odds: Odds;
  referees: Array<Refere>;
};

type Goals = {
  minute: number;
  injuryTime?: any;
  type: string;
  team: {
    id: number;
    name: string;
  };
  scorer: {
    id: number;
    name: string;
  };
  assist: null;
  score: {
    home: number;
    away: number;
  };
};

type Penalties = {
  player: {
    id: number;
    name: string;
  };
  team: {
    id: number;
    name: string;
  };
  scored: true;
};

type Odds = {
  homeWin: number;
  draw: number;
  awayWin: number;
};

type Refere = {
  id: number;
  name: string;
  type: string;
  nationality: string;
};
