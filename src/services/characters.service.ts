import {
  Characters,
  CharactersResponse,
  FilterCharacter,
} from 'src/types/interfaces/characters.interface';
import { api } from 'src/boot/axios';

export const getCharactersApi = async (
  page = 1,
  filterCharacters: Partial<FilterCharacter> = {}
): Promise<Characters> => {
  const query = {
    operationName: 'Characters',
    query: `query Characters{
      characters(page:${page}, filter:${JSON.stringify(filterCharacters)}) {
        results{
          id
          name
          status
          species
          gender
          image          
        }
        info{
          count
          prev
          next
          pages
        }
      }
    }`,
    variables: {},
  };
  const charactersResponse = await api.post<never, CharactersResponse>(
    '',
    query
  );
  return charactersResponse.data.characters;
};
