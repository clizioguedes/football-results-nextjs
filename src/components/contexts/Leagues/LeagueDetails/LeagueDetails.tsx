import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Grid, Skeleton } from '@mui/material';

import StandingTable from '@/components/contexts/Standings/StandingTable/StandingTable';
import { getStandingsByLeagueCode } from '@/services/requests/standings';
import { getMatchesByLeagueCode } from '@/services/requests/matches';
import MatchesList from '@/components/contexts/Matches/MatchesList/MatchesList';
import { Match } from '@/types/matches';

type LeagueDetailsProps = {
  code: string;
};

export default function LeagueDetails({ code }: LeagueDetailsProps) {
  const { data: leagueStandings } = useQuery({
    queryKey: ['standing', `${code}`],
    queryFn: () => getStandingsByLeagueCode(code),
    enabled: !!code,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    refetchOnMount: false,
  });

  const { data: rounds } = useQuery({
    queryKey: ['matches', `${code}`],
    queryFn: () => getMatchesByLeagueCode(code),
    enabled: !!code,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    refetchOnMount: false,
    select: (data) => {
      const rounds = data.matches.reduce(
        (acc: Array<Match[]>, current: Match) => {
          const matchday = current.matchday;

          if (!acc[matchday]) {
            acc[matchday] = [];
          }

          acc[matchday].push(current);

          return acc;
        },
        []
      );

      return rounds;
    },
  });

  return (
    <Grid container spacing={1}>
      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <StandingTable table={leagueStandings?.standings[0].table} />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <MatchesList
          matches={rounds}
          currentRound={leagueStandings?.season.currentMatchday}
        />
      </Grid>
    </Grid>
  );
}
