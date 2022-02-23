<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        :loading="stateCharacter.loading"
        grid
        title="Characters List"
        :rows="characters"
        row-key="name"
        :filter="searchCharacter"
        hide-header
        v-model:pagination="pagination"
        hide-pagination
      >
        <template v-slot:top-right>
          <q-input
            standout="bg-primary text-white"
            dense
            debounce="300"
            label="Search Character"
            v-model="searchCharacter"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:item="props">
          <card-character
            class="q-ma-md"
            :key="props.row.id"
            :character="props.row"
          />
        </template>
      </q-table>
      <div class="row justify-center q-mt-md">
        <q-pagination
          v-model="pagination.page"
          color="grey-8"
          :max="pagesNumber"
          size="sm"
          boundary-numbers
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import CardCharacter from 'src/components/CardCharacter.vue';
import { useCharacter } from 'src/composables/use-character';
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core';

export default {
  components: { CardCharacter },
  name: 'ListCharacters',
  setup() {
    const { state: stateCharacter, getCharacters } = useCharacter();
    const characters = computed(() => {
      return stateCharacter.characters?.results;
    });
    const searchCharacter = ref('');
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 6,
    });
    const pagesNumber = computed(() =>
      Math.ceil(
        (characters.value ? characters.value.length : 0) /
          pagination.value.rowsPerPage
      )
    );
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    watchEffect(async () => {
      if (
        pagination.value.page === pagesNumber.value &&
        stateCharacter.characters
      ) {
        await getCharacters(stateCharacter.characters.info.next);
      }
    });
    onMounted(() => getCharacters());
    return {
      characters,
      searchCharacter,
      pagination,
      pagesNumber,
      stateCharacter,
    };
  },
};
</script>
