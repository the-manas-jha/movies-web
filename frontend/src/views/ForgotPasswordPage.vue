<template>
  <v-container fluid fill-height class="no-scroll">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="auto">
        <v-card class="glossy-effect pa-6" width="400">
          <v-form 
          v-model="isFormValid">
          <v-container>
            <v-row>
              <v-col>
                <p>Please enter your username or email address. You will receive a link to create a new password via email.</p>
              </v-col>
            </v-row>
            <v-row class="mt-2">
              <v-col cols="12">
                <label for="usernameOrEmail" class="font-weight-bold">Username or Email Address</label>
                <v-text-field 
                  v-model="usernameOrEmail" 
                  id="usernameOrEmail" 
                  outlined 
                  dense 
                  solo 
                  flat 
                  class="custom-input" 
                  :rules="[$rules.requiredRules, $rules.usernameRules]"
                  required
                >
                  <template v-slot:prepend-inner>
                    <div style="height: 40px;"></div>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-2 mb-2">

              <v-col cols="12">
          
                <v-btn 
          
                  @click="getNewPassword" 
          
                  class="custom-btn pa-6" 
          
                  color="primary" 
          
                  :disabled="!isFormValid"
          
                >Get New Password</v-btn>
          
              </v-col>
          
            </v-row>
            <v-row>
              <v-col>
                <hr>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn to="/account" class="custom-btn pa-3" color="primary">Log in</v-btn>
              </v-col>
            </v-row>
          </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {

  data() {
    return {
      usernameOrEmail: '',
      isFormValid: false,
    };
  },
 

};

</script>
<style scoped>
.no-scroll {
  overflow: hidden;
}

.fill-height {
  height: 100vh;
}

.glossy-effect {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.custom-input {
  border: none;
  box-shadow: none;
  color: primary;
}

.custom-btn {
  margin-top: 0 ;
  margin-bottom: 0 ;
  padding-top: 8px;
  padding-bottom: 8px;
  color: primary;
}

hr {
  border-top: 0.01px solid #ccc;
  margin: 10px 0;
}
</style>