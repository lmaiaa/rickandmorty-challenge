<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <template v-slot:separator>
        <q-icon size="1.2em" name="arrow_forward" />
      </template>
      {{ breadcrumbList }}
      <q-breadcrumbs-el
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        :to="breadcrumb.path"
        :label="breadcrumb.title"
        :icon="breadcrumb.icon"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute();
    const breadcrumbList = ref([]);
    watch(
      () => route.path,
      () => {
        breadcrumbList.value = route.meta.breadcrumb ?? [
          {
            path: '/',
            title: 'Home',
            icon: 'home',
          },
        ];
      }
    );
    onMounted(() => {
      breadcrumbList.value = route.meta.breadcrumb ?? [
        {
          path: '/',
          title: 'Home',
          icon: 'home',
        },
      ];
    });
    return { breadcrumbList };
  },
});
</script>

<style></style>
