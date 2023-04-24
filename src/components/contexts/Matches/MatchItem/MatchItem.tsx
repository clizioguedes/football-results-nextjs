import * as S from '@/components/contexts/Matches/MatchItem/MatchItem.styles';
import { MATCH_STATUS, MATCH_STATUS_ } from '@/constants/matches';

import { Match } from '@/types/matches';
import Image from 'next/image';

import React from 'react';

type MatchItemProps = {
  match: Match;
};

export default function MatchItem({ match }: MatchItemProps) {
  return (
    <S.MatchItemContainer>
      <S.HeaderItem>
        <div>
          {new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }).format(new Date(match.utcDate))}
        </div>
      </S.HeaderItem>
      <S.MatchItem>
        <S.TeamContainer>
          <Image
            width={24}
            height={24}
            src={match.homeTeam.crest}
            alt="Emblem Home Team"
          />
          {match.homeTeam.tla}
        </S.TeamContainer>
        <S.ScoreContainer>
          <p>{match.score.fullTime.home}</p>
          <p>x</p>
          <p>{match.score.fullTime.away}</p>
        </S.ScoreContainer>
        <S.TeamContainer>
          {match.awayTeam.tla}
          <Image
            width={24}
            height={24}
            src={match.awayTeam.crest}
            alt="Emblem Away Team"
          />
        </S.TeamContainer>
      </S.MatchItem>
      {match.status === MATCH_STATUS_.IN_PLAY && (
        <S.TagStatus>
          <span>{MATCH_STATUS[match.status as keyof typeof MATCH_STATUS]}</span>
        </S.TagStatus>
      )}
    </S.MatchItemContainer>
  );
}
