<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar();

    // calling here; equivalent to when component is created
    $q.dark.set(true);
  },
});
</script>
<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
  scroll-behavior: smooth;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #88c172;
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #88c172;
}
</style>
