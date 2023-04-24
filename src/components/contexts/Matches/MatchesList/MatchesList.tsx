import MatchItem from '@/components/contexts/Matches/MatchItem/MatchItem';
import * as S from '@/components/contexts/Matches/MatchesList/MatchesList.styles';
import { Match } from '@/types/matches';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

type MatchesListProps = {
  matches?: Match[][];
  currentRound?: number;
};

export default function MatchesList({
  matches,
  currentRound,
}: MatchesListProps) {
  const [page, setPage] = useState(currentRound);

  const handleChangePagination = (
    _event: React.ChangeEvent<unknown> | undefined,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    if (currentRound) handleChangePagination(undefined, currentRound);
  }, [currentRound]);

  if (!page) {
    return <div>Carregando...</div>;
  }

  return (
    <S.MatchesListContainer>
      <S.RoundsContainer>
        <Pagination
          siblingCount={0}
          count={matches && matches.length - 1}
          color="primary"
          onChange={handleChangePagination}
          page={page}
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
