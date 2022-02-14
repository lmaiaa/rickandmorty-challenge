<template>
  <q-card class="card-character" flat bordered style="max-width: 500px">
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">
          Specie: <strong>{{ character.species }}</strong>
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ character.name }}</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders" :src="character.image" />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="event" />
      <q-btn flat> 7:30PM </q-btn>
      <q-btn flat color="primary"> Reserve </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Character } from 'src/types/interfaces/characters.interface';
export default {
  name: 'CardCharacter',
  props: {
    character: Object as PropType<Character>,
  },
};
</script>
