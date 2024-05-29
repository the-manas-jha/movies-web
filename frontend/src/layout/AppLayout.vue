<template>
  <v-app>
    <v-app-bar app>
      <!-- Left section -->
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <v-img
            src="~@/assets/streamit.png"
            alt="Banner"
            max-height="48"
            contain
          ></v-img>
        </v-col>
        <!-- Middle section -->
        <v-col cols="auto">
          <!-- Button for Root Page -->
          <v-btn to="/" class="toolbar-btn" text>Home</v-btn>

          <!-- Button for Pages -->
          <v-menu bottom offset-y v-model="menuPages" :close-on-content-click="false" :nudge-width="100">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                class="toolbar-btn"
              >
                Pages
              </v-btn>
            </template>
            <v-list>
              <v-list-item :to="'/about'" @click="menuPages = false">
                <v-list-item-title>About Us</v-list-item-title>
              </v-list-item>
              <v-list-item :to="'/contact'" @click="menuPages = false">
                <v-list-item-title>Contact Us</v-list-item-title>
              </v-list-item>
              <v-list-item :to="'/faq'" @click="menuPages = false">
                <v-list-item-title>FAQ</v-list-item-title>
              </v-list-item>
              <v-list-item :to="'/privacy'" @click="menuPages = false">
                <v-list-item-title>Privacy Policy</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row no-gutter>
        <v-col cols="auto">
          <v-icon>mdi-magnify</v-icon>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-menu bottom v-model="menuAccount" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" :class="{ 'hover-icon': hover }">mdi-account</v-icon>
                </template>
                <v-list>
                  <template v-if="loggedIn">
                    <v-list-item :to="'/account'">
                      <v-list-item-title>My Account</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="'/favourite'">
                      <v-list-item-title>Favourite</v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-else>
                    <v-list-item :to="'/login'">
                      <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="'/register'">
                      <v-list-item-title>Register</v-list-item-title>
                    </v-list-item>
                  </template>
                </v-list>
              </v-menu>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer color="primary lighten-1" padless>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn to="/" text color="white" rounded class="footer-btn">Home</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn to="/about" text color="white" rounded class="footer-btn">About Us</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn to="/contact" text color="white" rounded class="footer-btn">Contact Us</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn to="/faq" text color="white" rounded class="footer-btn">FAQ</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn to="/privacy" text color="white" rounded class="footer-btn">Privacy Policy</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <v-btn text color="white">Follow us</v-btn>
            <v-btn href="https://www.facebook.com" target="_blank" text color="white" icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn href="https://www.instagram.com" target="_blank" text color="white" icon>
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn href="https://www.linkedin.com" target="_blank" text color="white" icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn text color="white">{{ new Date().getFullYear() }} — <strong>STREAMIT</strong></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      menuPages: false,
    };
  },
};
</script>

<style scoped>
.toolbar-btn {
  text-transform: none;
  font-size: 16px;
  font-weight: bold;
  color: #1976D2;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
}

.toolbar-btn:hover {
  color: #1976D2;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toolbar-btn::before {
  background-color: transparent;
}

.toolbar-btn.v-btn--active::before {
  background-color: transparent;
}

.footer-btn {
  margin: 0 8px;
}
</style>