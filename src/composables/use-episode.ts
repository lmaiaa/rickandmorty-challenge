import { getEpisodeApi } from 'src/services/episode.service';
import { Episode } from 'src/types/interfaces/episodes.interface';
import { reactive, readonly } from 'vue';

interface IUSeEpisode {
  episodeSelected: Episode | null;
  loading: boolean;
}
const state = reactive<IUSeEpisode>({
  loading: false,
  episodeSelected: null,
});

export function useEpisode() {
  async function getEpisode(id: string) {
    state.loading = true;
    const episodeRespomse = await getEpisodeApi(id);
    if (episodeRespomse) {
      state.episodeSelected = episodeRespomse;
    }
  }
  return { state: readonly(state), getEpisode };
}
