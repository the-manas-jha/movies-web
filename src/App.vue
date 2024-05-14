<template>
  <v-app>
    <v-app-bar app>
      <!-- Stream link -->
      <v-toolbar-title class="link">
        <router-link to="/" class="link-item">Stream Link</router-link>
      </v-toolbar-title>
      
      <!-- Home -->
      <router-link to="/" class="link">Home</router-link>
      
      <!-- Pages -->
      <transition name="scale">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="link">
              Pages
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="page in pages" :key="page.route" class="link-item">
              <router-link :to="page.route" class="link">{{ page.name }}</router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </transition>
      
      <!-- Search bar -->
      <v-btn text class="link">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <!-- Login icon -->
      <transition name="scale">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="link">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list v-if="!isLoggedIn">
            <v-list-item v-for="link in loginLinks" :key="link.route" class="link-item">
              <router-link :to="link.route" class="link">{{ link.name }}</router-link>
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item v-for="link in userLinks" :key="link.route" class="link-item">
              <router-link :to="link.route" class="link">{{ link.name }}</router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </transition>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <span>&copy; 2024 Movie App</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      pages: [
        { name: "About Us", route: "/about" },
        { name: "Contact Us", route: "/contact" },
        { name: "FAQ", route: "/faq" },
        { name: "Privacy Policy", route: "/privacy" }
      ],
      loginLinks: [
        { name: "Login", route: "/login" },
        { name: "Register", route: "/register" }
      ],
      userLinks: [
        { name: "My Account", route: "/account" },
        { name: "Favourite", route: "/favourite" }
      ]
    };
  }
};
</script>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
}

.link-item {
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  color: inherit; /* Same color as other links */
  font-family: inherit; /* Same font as other links */
  transition: background-color 0.3s;
}

.link-item:hover {
  background-color: #f0f0f0;
}

/* Scale transition */
.scale-enter-active, .scale-leave-active {
  transition: transform 0.3s;
}
.scale-enter, .scale-leave-to {
  transform: scale(1);
}
.scale-enter-to, .scale-leave {
  transform: scale(0);
}
</style>
