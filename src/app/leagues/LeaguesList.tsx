"use client";

import { getLeagues } from "@/services/requests/leagues";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import NextIcon from "../../../public/next.svg";

import * as S from "./LeaguesList.styles";
import Image from "next/image";

export default function LeaguesList() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["leagues"],
    queryFn: () => getLeagues(),
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <S.TableContainer>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Emblema</th>
            <th>Região</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((league) => (
            <tr key={league.id}>
              <td>{league.name}</td>
              <td className={league.type}>
                <Image
                  width={32}
                  height={32}
                  src={league?.emblem || NextIcon}
                  alt="Emblem League"
                />
              </td>
              <td>
                <S.TdWrapper>
                  {league.area.name}
                  <Image
                    width={32}
                    height={32}
                    src={league?.area.flag || NextIcon}
                    alt="Emblem Country"
                  />
                </S.TdWrapper>
              </td>
              <td>
                <span>...</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.TableContainer>
  );
}
