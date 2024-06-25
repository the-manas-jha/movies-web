
<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center" >
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" class="d-flex justify-center">
        <v-card class="glossy-effect pr-7 pl-7 pb-7 pt-4 flex-grow-1" elevation="5" height="110vh">
          <v-form 
          v-model="isFormValid">
          <v-row no-gutters>
            <v-col cols="12"  class="mt-1 d-flex justify-center">
              <v-card-title class="align-self-center" style="font-size: 25px;">Create Your Account</v-card-title>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="12" sm="6">
              <label for="firstName" class="font-weight-bold">First Name</label>
              <v-text-field v-model="firstName" id="firstName" outlined dense height="52" class="custom-input mt-2"
              :rules="[$rules.requiredRules, $rules.characterRules]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <label for="lastName" class="font-weight-bold">Last Name</label>
              <v-text-field  v-model="lastName" id="lastName" outlined dense height="52" class="custom-input mt-2"
              :rules="[$rules.requiredRules, $rules.characterRules]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-1">
            <v-col cols="12">
              <label for="email" class="font-weight-bold">Email*</label>
              <v-text-field v-model="email" id="email" outlined dense height="52" class="custom-input mt-2"
              :rules="[$rules.requiredRules, $rules.emailRules]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-1">
            <v-col cols="12" sm="6">
              <label for="username" class="font-weight-bold">Username*</label>
              <v-text-field v-model="username" id="username" outlined dense height="52" class="custom-input mt-2" autocomplete="username"
              :rules="[$rules.requiredRules, $rules.usernameRules]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <label for="password" class="font-weight-bold">Password*</label>
              <v-text-field
               v-model="password"
              id="password"
              outlined
              dense
              height="52"
              class="mt-2 custom-input"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="showPassword = !showPassword"
              append-icon-color="primary"
              :rules="[$rules.requiredRules, $rules.passwordRules]"
              align-center
              autocomplete="current-password"
              ></v-text-field>
              
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="12">
              <v-checkbox v-model="checkboxChecked" class="mt-0 pt-0 mb-0" :rules="[$rules.requiredRules]">
                <template v-slot:label>
                  <span class="font-weight-bold">I've read and accepted the</span>
                  <a href="/login" class=" no-underline ml-1 link-color">Terms & conditions*</a>
                </template>
              </v-checkbox>
              
            </v-col>
          </v-row>
          <v-row class="mt-1 align-center justify-center">
            <v-col cols="6">
              <v-btn color="primary" class="pt-6 pb-6" block :disabled="!isFormValid" @click="signUp">Sign Up</v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="12" class="d-flex justify-center">
              Already have an account? <a href="/login" class=" no-underline ml-2 link-color"> Sign In</a>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="12" class="d-flex justify-center">
              <hr class="divider"><span class="or-text"><h3>Or</h3></span><hr class="divider">
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="12" class="d-flex justify-center">
              <a href="#" class="mr-5"><v-icon>mdi-google</v-icon></a>
              <a href="#" class="mr-5"><v-icon>mdi-linkedin</v-icon></a>
              <a href="#"><v-icon>mdi-aws</v-icon></a>
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
  name: 'RegisterPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      showPassword: false,
      checkboxChecked: false,
      isFormValid: false,
    };
  },
  
  methods: {
  async signUp() {
    const payload = {
      username: this.username,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };

    try {
      await this.$store.dispatch('auth/signUp', payload, this.$config);
      console.log('Sign Up')

      this.$router.push('/');
    } catch (error) {
      console.error('Sign Up Failed failed:', error);
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
  width: 100%;
  min-width: 650px; 
  max-width: 100%;
  margin:

 0 auto;
}

.custom-input input {
  border-color: primary!important;
  border-radius: 0!important;
  height: 52px!important;
}

.custom-input input:focus {
  border-color: primary!important;
  box-shadow: none!important;
}

.custom-input {
  width: 100%; 
}

.divider {
  flex-grow: 1;
  height: 1px;
  margin: auto;
}

.or-text {
  margin: 0 10px;
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.v-card-title {
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis; 
}

.link-color {
  color: primary;
}


@media (max-width: 600px) {
  .v-card-title {
    font-size: 24px;
  }
}


@media (max-width: 600px) {
  .glossy-effect {
    min-width: auto !important; 
  }
}
</style>


