import LeaguesList from "@/app/leagues/LeaguesList";
import { getLeagues } from "@/services/requests/leagues";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";

import * as S from "./LeaguesList.styles";

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["leagues"], getLeagues);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <S.Container>
        <LeaguesList />
      </S.Container>
    </Hydrate>
  );
}
