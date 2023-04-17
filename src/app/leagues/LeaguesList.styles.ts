"use client";

import styled from "styled-components";

export const Container = styled.main`
  margin: 16px;
  padding: 1rem 1rem;
`;

export const TableContainer = styled.main`
  margin-top: 2rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      text-align: center;
      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

export const TdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const LeagueCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
