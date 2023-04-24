import { getLeagues } from '@/services/requests/leagues';
import { League } from '@/types/leagues';
import { useQuery } from '@tanstack/react-query';

interface ListCompetitionsProps {
  competitions: League[];
}

export default function ListCompetitions({
  competitions,
}: ListCompetitionsProps) {
  const { data } = useQuery({
    queryKey: ['leagues'],
    queryFn: () => getLeagues(),
    initialData: competitions,
  });

  return (
    <main>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </main>
  );
}
