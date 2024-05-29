<template>
  <v-card class="pa-5 mb-5" elevation="5" style="opacity: 0.85;">
    <v-row no-gutters>
      <v-col>
        <v-img src="~@/assets/streamit.png" alt="Banner" max-height="48" contain></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <label for="usernameOrEmail" class="font-weight-bold">Username or Email Address</label>
        <v-text-field v-model="usernameOrEmail" id="usernameOrEmail" outlined dense></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <label for="password" class="font-weight-bold">Password</label>
        <v-text-field v-model="password" id="password" outlined dense hide-details :type="showPassword? 'text' : 'password'" :append-icon="showPassword? 'mdi-eye-off' : 'mdi-eye'" @click:append="showPassword =!showPassword" append-icon-color="red">
        </v-text-field>
        <a href="/forgot" class="red--text text--lighten-1 font-italic d-flex justify-end mt-2 no-underline">Forgot Password?</a>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <v-checkbox :label="`<span class='font-weight-bold'>Remember Me</span>`" class="mt-0 pt-0">
          <template v-slot:label>
            <span class="font-weight-bold">Remember Me</span>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <v-btn color="primary" block>Log In</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12" class="d-flex justify-center">
        New to StreamIt? <a href="/register">Sign Up</a>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12" class="d-flex justify-center">
        <div class="or-container">
          <div class="or-line"></div>
          <span class="or-text">Or</span>
          <div class="or-line"></div>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12" class="d-flex justify-center">
        <a href="#" class="mr-5"><v-icon>mdi-google</v-icon></a>
        <a href="#" class="mr-5"><v-icon>mdi-linkedin</v-icon></a>
        <a href="#"><v-icon>mdi-amazon</v-icon></a>
      </v-col>
    </v-row>
  </v-card>
</template>

<style>
.no-underline {
  text-decoration: none;
}

.or-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 20px 0;
  position: relative;
}

.or-text {
  position: relative;
  z-index: 1;
}

.or-line {
  position: absolute;
  height: 1px;
  background-color: #ccc;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

.or-line:first-child {
  left: 0;
  right: 50%;
  background-color: #000;
  border-radius: 0 0 0 10px;
}

.or-line:last-child {
  left: 50%;
  right: 0;
  background-color: #000;
  border-radius: 0 10px 0 0;
}
</style>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      usernameOrEmail: '',
      password: '',
      showPassword: false
    }
  }
}
</script>