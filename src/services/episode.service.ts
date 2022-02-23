import { api } from 'src/boot/axios';
import {
  Episode,
  EpisodeResponse,
} from 'src/types/interfaces/episodes.interface';

export const getEpisodeApi = async (id: string): Promise<Episode> => {
  const query = {
    operationName: 'Episode',
    query: `query Episode{
          episode(id:${id}) {
              id
              name
              air_date
              episode
              created
              characters{
                id
                name
                image
                species
                gender
              }
          }
        }`,
    variables: {},
  };
  const charactersResponse = await api.post<never, EpisodeResponse>('', query);
  return charactersResponse.data.episode;
};
