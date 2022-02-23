<template>
  <div class="q-ma-md flex justify-center items-center">
    <q-card class="character" style="width: 400px" v-if="characterSelected">
      <q-img :src="characterSelected.image" height="350px" />

      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="check" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Status</q-item-label>
            <q-item-label caption>{{ characterSelected.status }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="red"
              :name="characterSelected.gender === 'male' ? 'male' : 'female'"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>Gender</q-item-label>
            <q-item-label caption>{{ characterSelected.gender }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="´secundary" name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Species</q-item-label>
            <q-item-label caption>{{ characterSelected.species }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section @click="dialog = true">
            <q-item-label>Episodes</q-item-label>
            <q-item-label caption>Click to view all</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <div class="q-pa-md q-gutter-sm">
      <q-dialog
        v-model="dialog"
        persistent
        maximized
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="text-white" style="overflow: hidden">
          <q-bar>
            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section class="q-pt-none">
            <div class="q-pa-md">
              <q-table
                class="my-sticky-dynamic bg-primary"
                style="height: 500px"
                title="Episodes"
                :rows="characterSelected.episode"
                row-key="index"
                virtual-scroll
                v-model:pagination="pagination"
                :rows-per-page-options="[0]"
              >
                <template v-slot:header="props">
                  <q-tr :props="props">
                    <q-th auto-width />
                    <q-th
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                    >
                      {{ col.label }}
                    </q-th>
                  </q-tr>
                </template>
                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td auto-width>
                      <q-btn
                        size="sm"
                        color="dark"
                        dense
                        label="More info"
                        flat
                        @click="$router.push(`/episode/${props.row.id}`)"
                      ></q-btn>
                    </q-td>
                    <q-td
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                    >
                      {{ col.value }}
                    </q-td>
                  </q-tr></template
                ></q-table
              >
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/runtime-core';
import { useCharacter } from 'src/composables/use-character';
export default defineComponent({
  name: 'CharacterPage',
  props: { id: { type: String, required: true } },
  setup(props) {
    const { getCharacter, state: stateCharacter } = useCharacter();
    const characterSelected = computed(() => stateCharacter.characterSelect);
    const dialog = ref(false);
    onMounted(() => getCharacter(props.id));
    return {
      characterSelected,
      dialog,
    };
  },
});
</script>
<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #88c172

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
