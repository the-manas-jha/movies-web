<template>
  <v-app id="inspire">
    <v-main class="background-container" >
      <v-container fluid fill-height >
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.background-container {
  background-image: url('../assets/banner.webp');
  background-size: cover; 
  background-position: center;
  overflow: hidden;
}


</style>
