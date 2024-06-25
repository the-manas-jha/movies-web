

import axios from 'axios';
import config from '@/config';
import { saveAuthData, clearAuthData } from '../helper';

export default {
  namespaced: true,
  state: {
    user: null,
    jwt: null,
  },
  getters: {
    isLoggedIn: function(state) {
      return state.user !== null && state.jwt !== null;
    }
  },
  mutations: {
    setUser: function(state, user) {
      state.user = user;
    },
    setJwt: function(state, jwt) {
      state.jwt = jwt;
    },
    clearAuthData: function(state) {
      state.user = null;
      state.jwt = null;
      clearAuthData(); 
    }
  },
  actions: {
    async login(context, payload) {
      try {
        const response = await axios.post(config.BaseApi + 'auth/local', payload);
        context.commit('setUser', response.data.user);
        context.commit('setJwt', response.data.jwt);
        
        // Save user and jwt to local storage
        saveAuthData(response.data.user, response.data.jwt);
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    async signUp(context, payload) {
      try {
        const response = await axios.post(config.BaseApi + 'auth/local/register', payload);
        context.commit('setUser', response.data.user);
        context.commit('setJwt', response.data.jwt);
        
        saveAuthData(response.data.user, response.data.jwt);
      } catch (error) {
        console.error('Sign Up failed:', error);
        throw error; 
      }
    },
  },
};
