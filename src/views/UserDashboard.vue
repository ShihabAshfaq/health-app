<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="elevation-2 pa-4">
          <v-card-title class="text-h4 font-weight-bold primary--text">Welcome, User</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-5">
            <v-row class="mb-4">
              <v-col cols="12">
                <v-btn color="primary" block large to="/appointments">
                  <v-icon left>mdi-calendar-check</v-icon> Appointments
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col cols="12">
                <v-btn color="success" block large to="/medications">
                  <v-icon left>mdi-pill</v-icon> Medication Reminders
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col cols="12">
                <v-btn color="red darken-2" block large @click="$router.push('/emergency-symptoms')">
                  <v-icon left>mdi-alert</v-icon> EMERGENCY
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col cols="12">
                <v-btn color="amber darken-3" block large to="/wound-detection">
                  <v-icon left>mdi-bandage</v-icon> Wound Detection
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn color="grey darken-1" block large @click="logout">
                  <v-icon left>mdi-logout</v-icon> Logout
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    logout() {
      // Clear user session and redirect to login page
      this.$store.commit('setUser', null);
      this.$router.push('/login');
      console.log("User logged out");
    }
  }
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pa-4 {
  padding: 1rem !important;
}

.text-h4 {
  font-size: 1.5rem;
}
</style>
