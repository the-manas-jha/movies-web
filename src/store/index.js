// src/store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moviesData = require('../assets/data/movies.json');

export default new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
    allMovies: state => state.movies
  },
  actions: {
    fetchMovies({ commit }) {
      const movies = moviesData.movies.map(movie => ({
        ...movie,
        thumbnail: require(`../assets/thumbnail/${movie.thumbnail}`)
      }));
      commit('setMovies', movies);
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    }
  }
});
