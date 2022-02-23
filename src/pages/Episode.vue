<template>
  <div class="q-ma-md flex justify-center items-center">
    <q-card class="character" style="width: 400px" v-if="episodeSelected">
      <div class="text-h5 q-ma-md">{{ episodeSelected.name }}</div>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="brown" name="local_movies" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Episode</q-item-label>
            <q-item-label caption>{{ episodeSelected.episode }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="amber" name="today" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Air Date</q-item-label>
            <q-item-label caption>{{ episodeSelected.air_date }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator />
      <div class="text-h5 q-ma-sm">Episode Characters</div>
      <q-carousel
        animated
        v-model="slide"
        autoplay
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        height="300px"
        swipeable
      >
        <q-carousel-slide
          v-for="character in episodeSelected.characters"
          :key="character.id"
          :name="character.name"
          :img-src="character.image"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{ character.name }}</div>
            <div class="text-subtitle1">{{ character.species }}</div>
            <q-btn
              size="md"
              color="dark"
              dense
              label="More info"
              @click="$router.push(`/character/${character.id}`)"
            ></q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/runtime-core';
import { useEpisode } from 'src/composables/use-episode';
export default defineComponent({
  name: 'CharacterPage',
  props: { id: { type: String, required: true } },
  setup(props) {
    const { getEpisode, state: stateEpisode } = useEpisode();
    const episodeSelected = computed(() => stateEpisode.episodeSelected);
    const slide = ref(2);
    onMounted(() => getEpisode(props.id));
    return {
      episodeSelected,
      slide,
    };
  },
});
</script>
<style lang="scss" scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
