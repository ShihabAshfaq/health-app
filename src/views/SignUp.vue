<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-2" outlined>
          <v-card-title class="headline text-center">Sign Up</v-card-title>
          <v-card-text>
            <v-btn block depressed color="primary" dark @click="navigateTo('patientSignUp')">Sign Up as Patient/User</v-btn>
            <v-btn block depressed color="secondary" dark @click="navigateTo('firstAiderSignUp')">Sign Up as First Aider</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>

<style scoped>
.v-container {
  background-color: #FAFAFA; /* Consistent light gray background */
}
.v-card {
  background-color: #FFFFFF; /* Maintaining white for clarity */
  margin-top: 20px; /* Ensures space above the card for aesthetics */
}
.headline {
  color: #0D47A1; /* Navy blue for professional and consistent headings */
}
.v-btn {
  margin-top: 10px; /* Adequate spacing between buttons */
}
</style>
