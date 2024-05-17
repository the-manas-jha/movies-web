// src/pages/HomePage.vue

<template>
  <div class="home-page">
    <h1>Movie List!</h1>
    <div class="movie-card-container">
      <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'HomePage',
  components: {
    MovieCard,
  },
  computed: {
    ...mapGetters(['allMovies']),
    movieList() {
      return this.allMovies;
    },
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions(['fetchMovies']),
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
</style>