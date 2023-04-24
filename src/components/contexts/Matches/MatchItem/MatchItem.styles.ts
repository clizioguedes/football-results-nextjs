import styled from 'styled-components';

export const MatchItemContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: px;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-direction: column;

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
  gap: 8px;
  justify-content: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const TagStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4fc3f7;
  height: 1.1rem;
  width: 5rem;
  border-radius: 0.75rem;
  span {
    font-size: x-small;
  }
`;
