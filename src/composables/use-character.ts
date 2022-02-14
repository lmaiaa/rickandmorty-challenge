import { getCharactersApi } from 'src/services/characters.service';
import {
  Characters,
  FilterCharacter,
} from 'src/types/interfaces/characters.interface';
import { reactive, readonly } from 'vue';

interface IUSeCharacter {
  characters: Characters | null;
  loading: boolean;
}
const state = reactive<IUSeCharacter>({
  characters: null,
  loading: false,
});

export function useCharacter() {
  async function getCharacters(
    nextPage = 1,
    filterCharacters: Partial<FilterCharacter> = {}
  ) {
    console.log('getCharacters');
    state.loading = true;
    const charactersResponse = await getCharactersApi(
      nextPage,
      filterCharacters
    );
    if (charactersResponse && nextPage === charactersResponse.info.next--) {
      state.characters?.results.push(...charactersResponse.results);
      state.characters?.info
        ? (state.characters.info = charactersResponse.info)
        : null;
    } else if (charactersResponse) {
      state.characters = charactersResponse;
    }
    state.loading = false;
  }
  return {
    state: readonly(state),
    getCharacters,
  };
}
