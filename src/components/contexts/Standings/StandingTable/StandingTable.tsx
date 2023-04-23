import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Table as TableInterface } from "@/types/standings";

import * as S from "./StandingTable.styles";
import { Skeleton } from "@mui/material";
import { ARRAY } from "@/constants/general";

type StandingTableProps = {
  table?: TableInterface[];
};

export default function StandingTable({ table }: StandingTableProps) {
  if (!table) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ARRAY.map((row) => (
              <TableRow
                key={row}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Skeleton animation="wave" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="center">J</TableCell>
            <TableCell align="center">P</TableCell>
            <TableCell align="center">V</TableCell>
            <TableCell align="center">E</TableCell>
            <TableCell align="center">D</TableCell>
            <TableCell align="center">G</TableCell>
            <TableCell align="center">GP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table?.map((row) => (
            <TableRow
              key={row.position}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="center">
                <S.ItemTableContainer>
                  <Image
                    width={24}
                    height={24}
                    src={row.team.crest}
                    alt="Emblem Team"
                  />
                  {row.team.shortName}
                </S.ItemTableContainer>
              </TableCell>
              <TableCell align="center">{row.playedGames}</TableCell>
              <TableCell align="center">{row.points}</TableCell>
              <TableCell align="center">{row.won}</TableCell>

              <TableCell align="center">{row.draw}</TableCell>

              <TableCell align="center">{row.lost}</TableCell>

              <TableCell align="center">{row.goalsFor}</TableCell>

              <TableCell align="center">{row.goalDifference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
