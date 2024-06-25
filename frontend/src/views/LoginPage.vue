<template>
  <v-container fluid fill-height>
    <v-row align-center justify-center>
      <v-col cols="12">
        <v-card class="pa-15 glossy-effect" elevation="5" width="400" height="100vh">
          <v-form v-model="isFormValid" @submit.prevent="login">
            <v-row no-gutters>
              <v-col cols="12">
                <v-img src="@/assets/streamit.png" alt="Banner" max-height="48" contain></v-img>
              </v-col>
            </v-row>
          
            <v-row class="mt-8">
              <v-col cols="12">
                <label for="identifier" class="font-weight-bold">Username or Email Address</label>
                <v-text-field 
                  v-model="identifier" 
                  id="identifier" 
                  outlined 
                  dense 
                  class="mt-3 custom-input"
                  :rules="[$rules.requiredRules, $rules.usernameRules]"
                  autocomplete="username"
                ></v-text-field>
              </v-col>
            </v-row>
            
            <v-row class="mt-1">
              <v-col cols="12">
                <label for="password" class="font-weight-bold">Password</label>
                <v-text-field 
                  v-model="password" 
                  id="password" 
                  outlined 
                  dense 
                  class="mt-3 custom-input" 
                  :type="showPassword ? 'text' : 'password'" 
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" 
                  @click:append="showPassword = !showPassword" 
                  :rules="[$rules.requiredRules, $rules.passwordRules]"
                  autocomplete="current-password"
                ></v-text-field>
                <a href="/forgot" class="forgot-password-link">Forgot Password?</a>
              </v-col>
            </v-row>
            
            <v-row class="mt-5">
              <v-col cols="12">
                <v-checkbox class="font-weight-bold mt-0 pt-0 mb-0" label="Remember Me"></v-checkbox>
              </v-col>
            </v-row>
            
            <v-row class="mt-1">
              <v-col cols="12">
                <v-btn 
                  color="primary" 
                  class="login-button" 
                  block 
                  :disabled="!isFormValid"
                  type="submit"
                >
                  Log In
                </v-btn>
              </v-col>
            </v-row>
            <p v-if="error" class="error-message">{{ error }}</p>
            <v-row class="mt-5">
              <v-col cols="12" class="d-flex justify-center">
                New to StreamIt? <a href="/register" class="sign-up-link">Sign Up</a>
              </v-col>
            </v-row>
            
            <v-row class="mt-5">
              <v-col cols="12" class="d-flex justify-center divider-container">
                <hr class="divider"><span class="or-text"><h3>Or</h3></span><hr class="divider">
              </v-col>
            </v-row>
            
            <v-row class="mt-5">
              <v-col cols="12" class="d-flex justify-center">
                <a href="#" class="social-icon"><v-icon>mdi-google</v-icon></a>
                <a href="#" class="social-icon"><v-icon>mdi-linkedin</v-icon></a>
                <a href="#" class="social-icon"><v-icon>mdi-aws</v-icon></a>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      identifier: '',
      password: '',
      showPassword: false,
      isFormValid: false,
      error: null, 
    };
  },
  methods: {
    async login() {
      const payload = {
        identifier: this.identifier,
        password: this.password
      };

      try {
        await this.$store.dispatch('auth/login', payload);
        this.error = null;
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
        this.error = 'Wrong username/email or password';
      }
    }
  }
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}

.glossy-effect {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 0;
}

.custom-input input {
  border-color: primary;
  border-radius: 0;
}

.custom-input .v-icon.mdi.mdi-eye, .custom-input .v-icon.mdi.mdi-eye-off {
  color: primary;
}

.divider {
  flex-grow: 1;
  height: 1px;
  margin: auto;
}

.or-text {
  margin: 0 10px;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.forgot-password-link {
  color: primary;
  font-style: italic;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  text-decoration: none;
}

.login-button {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
}

.sign-up-link {
  color: primary;
  text-decoration: none;
  margin-left: 0.5rem;
}

.divider-container {
  display: flex;
  align-items: center;
}

.social-icon {
  margin-right: 1.25rem;
}

.error-message {
  color: red;
  text-align: center;
}
</style>
