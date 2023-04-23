import * as S from "@/components/contexts/Matches/MatchItem/MatchItem.styles";

import { Match } from "@/types/matches";
import Image from "next/image";

import React from "react";

type MatchItemProps = {
  match: Match;
};

export default function MatchItem({ match }: MatchItemProps) {
  return (
    <S.MatchItemContainer>
      <S.HeaderItem>
        {new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(match.utcDate))}
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
          {match.score.fullTime.home}X{match.score.fullTime.away}
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
    </S.MatchItemContainer>
  );
}
