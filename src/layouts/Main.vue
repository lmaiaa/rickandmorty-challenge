<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar size="xl">
          <img
            src="./../assets/rick-and-morty.png"
            @click="$router.push('/')"
          />
        </q-avatar>
        <q-toolbar-title> Rick and Morty </q-toolbar-title>
        <breadcrumb />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar class="row justify-center items-center">
        <h4 class="text-overline">
          Feito com <q-icon color="red" name="favorite" /> por Luccas Maia
        </h4>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Breadcrumb from 'src/components/Breadcrumb.vue';
export default {
  components: { Breadcrumb },
  name: 'Main',
};
</script>
