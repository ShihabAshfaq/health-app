<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-2" outlined>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Welcome to Our Service</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="text-center">
            <p>Welcome! Please log in or sign up to continue.</p>
            <v-btn color="primary" dark @click="gotoLogin">Log In</v-btn>
            <v-btn color="secondary" dark @click="gotoSignUp">Sign Up</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    gotoLogin() {
      this.$router.push('/login');
    },
    gotoSignUp() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style scoped>
.v-container {
  background-color: #ECEFF1; /* Light gray background for less strain */
}
.v-card {
  background-color: #FFFFFF; /* White for clarity */
  border-radius: 8px; /* Rounded corners for a smoother look */
}
.v-toolbar {
  background-color: #0D47A1; /* Navy blue for a professional header */
}
.v-btn {
  margin-top: 20px; /* Proper spacing between the text and the buttons */
}
</style>
