import { getCharacterApi } from 'src/services/character.service';
import { getCharactersApi } from 'src/services/characters.service';
import {
  Character,
  Characters,
  FilterCharacter,
} from 'src/types/interfaces/characters.interface';
import { reactive, readonly } from 'vue';

interface IUSeCharacter {
  characters: Characters | null;
  loading: boolean;
  characterSelect: Character | null;
}
const state = reactive<IUSeCharacter>({
  characters: null,
  loading: false,
  characterSelect: null,
});

export function useCharacter() {
  async function getCharacters(
    nextPage = 1,
    filterCharacters: Partial<FilterCharacter> = {}
  ) {
    state.loading = true;
    const charactersResponse = await getCharactersApi(
      nextPage,
      filterCharacters
    );
    if (
      charactersResponse &&
      nextPage === charactersResponse.info.next - 1 &&
      nextPage > 1
    ) {
      state.characters?.results.push(...charactersResponse.results);
      state.characters?.info
        ? (state.characters.info = charactersResponse.info)
        : null;
    } else if (charactersResponse) {
      state.characters = charactersResponse;
    }
    state.loading = false;
    return state.characters;
  }
  async function getCharacter(id: string) {
    state.loading = true;
    const characterResponse = await getCharacterApi(id);
    if (characterResponse) {
      state.characterSelect = characterResponse;
    }
    state.loading = false;
  }
  return {
    state: readonly(state),
    getCharacters,
    getCharacter,
  };
}
