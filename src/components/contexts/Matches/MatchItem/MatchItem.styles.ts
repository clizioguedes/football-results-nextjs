import styled from "styled-components";

export const MatchItemContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: small;
`;

export const MatchItem = styled(MatchItemContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: right;
  align-items: center;

  /* border: 1px solid black; */
`;

export const ScoreContainer = styled.div``;
