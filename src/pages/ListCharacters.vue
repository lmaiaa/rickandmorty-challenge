<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-6">
        <q-input standout="bg-primary text-white" label="Search Character">
          <template v-slot:append>
            <q-icon name="search" v-model="searchCharacter" />
          </template>
        </q-input>
        {{ searchCharacter }}
      </div>
    </div>
    <div ref="cards-container" style="max-height: 70vh; overflow: auto">
      <q-infinite-scroll
        class="flex row flex-center wrap"
        :scroll-target="cards - container"
      >
        <card-character
          class="q-ma-md"
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </q-infinite-scroll>
    </div>
  </q-page>
</template>

<script lang="ts">
import CardCharacter from 'src/components/CardCharacter.vue';
import { useCharacter } from 'src/composables/use-character';
import { computed, onMounted, ref } from '@vue/runtime-core';
export default {
  components: { CardCharacter },
  name: 'ListCharacters',
  setup() {
    const { state: stateCharacter, getCharacters } = useCharacter();
    const characters = computed(() => stateCharacter.characters?.results);
    const searchCharacter = ref('');
    onMounted(() => getCharacters());
    return { characters, searchCharacter };
  },
};
</script>
