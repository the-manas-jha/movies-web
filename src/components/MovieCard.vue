<template>
  <div class="movie-card">
    <img :src="movie.thumbnail" alt="Movie thumbnail" class="movie-poster" />
    <div class="movie-info">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <p class="movie-release-date">{{ movie.description}}</p>
      <p class="movie-overview">{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.movie-poster {
  width: 100px;
  height: 150px;
  object-fit: cover;
}

.movie-info {
  padding: 10px;
}

.movie-title {
  margin: 0;
  font-size: 1.2rem;
}

.movie-release-date {
  margin: 5px 0;
  font-size: 0.8rem;
  color: #666;
}

.movie-overview {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>