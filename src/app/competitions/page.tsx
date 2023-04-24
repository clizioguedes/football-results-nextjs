import ListCompetitions from '@/app/competitions/competitions-list';
import { getLeagues } from '@/services/requests/leagues';

export default async function Competitions() {
  const competitions = await getLeagues();

  return <ListCompetitions competitions={competitions} />;
}
