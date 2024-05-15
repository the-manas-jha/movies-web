<template>
  <div class="home-page">
    <h1>Welcome to Movie App</h1>
    <label for="movie">Movie name</label>
    <input id="movie" v-model="movieName" type="text" placeholder="Movie name">
    <button @click="searchMovie">Search movie</button>
    <div id="result" v-if="movie">
      <h2>{{ movie.Title }}</h2>
      <p><strong>Year:</strong> {{ movie.Year }}</p>
      <p><strong>Genre:</strong> {{ movie.Genre }}</p>
      <p><strong>Plot:</strong> {{ movie.Plot }}</p>
      <img :src="movie.Poster" alt="Movie Poster">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      movieName: '',
      movie: null,
    };
  },
  methods: {
    async searchMovie() {
      const apiKey = '69dbc9ed';
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${this.movieName}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === 'True') {
          this.movie = data;
        } else {
          alert(data.Error);
          this.movie = null;
        }
      } catch (error) {
        console.error('Error fetching movie:', error);
        this.movie = null;
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

input {
  margin: 10px 0;
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 16px;
  background-color: #6200ea;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3700b3;
}

#result {
  margin-top: 20px;
  text-align: left;
  display: inline-block;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
