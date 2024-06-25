<template>
  <div>
    <h1>Home Page</h1>
    <v-btn @click="handleLogout" color="primary">Logout</v-btn>
  </div>
</template>

<script>

export default {
  name: 'HomePage',

  methods: {
    async handleLogout() {
      try {
        if (confirm('Do you want to log out?')) {
          
          this.clearAuthData();
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },

    clearAuthData() {
      this.$store.commit('auth/clearAuthData');
    },
  },
};
</script>
