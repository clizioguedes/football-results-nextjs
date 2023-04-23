import MatchItem from '@/components/contexts/Matches/MatchItem/MatchItem';
import * as S from '@/components/contexts/Matches/MatchesList/MatchesList.styles';
import { Match } from '@/types/matches';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

type MatchesListProps = {
  matches?: Match[][];
  currentMatchDay: number;
};

export default function MatchesList({
  matches,
  currentMatchDay,
}: MatchesListProps) {
  const [page, setPage] = useState(currentMatchDay);

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
          defaultPage={currentMatchDay}
        />
      </S.RoundsContainer>
      <S.MatchesContainer>
        {matches &&
          matches[page].map((item) => {
            return <MatchItem match={item} />;
          })}
      </S.MatchesContainer>
    </S.MatchesListContainer>
  );
}
