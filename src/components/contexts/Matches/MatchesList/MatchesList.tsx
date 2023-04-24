import MatchItem from '@/components/contexts/Matches/MatchItem/MatchItem';
import * as S from '@/components/contexts/Matches/MatchesList/MatchesList.styles';
import { Match } from '@/types/matches';
import { Pagination } from '@mui/material';
import React, { useState } from 'react';

type MatchesListProps = {
  matches: Match[][];
};

export default function MatchesList({ matches }: MatchesListProps) {
  const [page, setPage] = useState(matches[1][1].season.currentMatchday);

  const handleChangePagination = (
    _event: React.ChangeEvent<unknown> | undefined,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <S.MatchesListContainer>
      <S.RoundsContainer>
        <Pagination
          siblingCount={0}
          count={matches && matches.length - 1}
          color="primary"
          onChange={handleChangePagination}
          page={matches[1][1].season.currentMatchday}
        />
      </S.RoundsContainer>
      <S.MatchesContainer>
        {matches &&
          matches[page].map((item) => {
            return <MatchItem key={item.id} match={item} />;
          })}
      </S.MatchesContainer>
    </S.MatchesListContainer>
  );
}
