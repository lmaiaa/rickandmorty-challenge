import {
  Character,
  characterResponse,
} from 'src/types/interfaces/characters.interface';
import { api } from 'src/boot/axios';

export const getCharacterApi = async (id: string): Promise<Character> => {
  const query = {
    operationName: 'Character',
    query: `query Character{
        character(id:${id}) {
            id
            name
            status
            species
            image
            gender
            type
            episode{
              name
              air_date
              episode
              id
            }
        }
      }`,
    variables: {},
  };
  const charactersResponse = await api.post<never, characterResponse>(
    '',
    query
  );
  return charactersResponse.data.character;
};
