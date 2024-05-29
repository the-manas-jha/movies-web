<template>
  <v-app>
    <component :is="currentLayout">
  </component>
  </v-app>
</template>

<script>

import DefaultLayout from '../src/layout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  },

  data: () => ({
    //
  }),
  computed: {
    currentLayout() {
      if (!this.$route.meta.layout) {
        return DefaultLayout
      }

      return this.$route.meta.layout;
      
    }
  }
};
</script>
