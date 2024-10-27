<template>
  <v-container class="fill-height" fluid>
    <!-- Welcome Section -->
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="elevation-2 pa-4">
          <v-card-title class="text-h4 font-weight-bold purple--text text-center">Welcome First Aider</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-5">
            <v-row>
              <v-col cols="12" class="text-center">
                <v-avatar size="80">
                  <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                </v-avatar>
              </v-col>
            </v-row>
            <v-row class="mt-5">
              <v-col cols="12">
                <v-btn color="purple" block large @click="goToRefresherCourses">
                  <v-icon left>mdi-book</v-icon> Refresher Courses
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="mt-3">
              <v-col cols="12" v-for="request in emergencyRequests" :key="request.id">
                <v-btn color="red" block large @click="acceptEmergency(request.id)">
                  <v-icon left>mdi-account-alert</v-icon> Accept Request from User {{ request.userId }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Location Section -->
    <v-row align="center" justify="center" class="mt-5">
      <v-col cols="12" md="8" lg="6">
        <v-card class="elevation-2 pa-4">
          <v-card-title class="text-h4 font-weight-bold purple--text text-center">Location</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-5">
            <v-row>
              <v-col cols="12" class="text-center">
                <v-icon size="100" color="green darken-1">mdi-map-marker</v-icon>
                <div class="text-h5 mt-3">5 minutes</div>
              </v-col>
              <v-col cols="12">
                <v-btn color="red darken-2" block large @click="updateLocation">
                  <v-icon left>mdi-crosshairs-gps</v-icon> I'm Here
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Symptoms and Suspected Cases Section -->
    <v-row align="center" justify="center" class="mt-5">
      <v-col cols="12" md="8" lg="6">
        <v-card class="elevation-2 pa-4">
          <v-card-title class="text-h4 font-weight-bold purple--text text-center">Details</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-5">
            <v-row>
              <v-col cols="12">
                <v-text-field label="Symptoms" outlined color="yellow darken-2"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Suspected" outlined color="red darken-2"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Chat Log" outlined color="purple"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn color="purple" block large @click="sendChatLog">
                  <v-icon left>mdi-send</v-icon> Send
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Feedback Section -->
    <v-row align="center" justify="center" class="mt-5">
      <v-col cols="12" md="8" lg="6">
        <v-card class="elevation-2 pa-4">
          <v-card-title class="text-h4 font-weight-bold purple--text text-center">How did it go?</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-5">
            <v-row>
              <v-col cols="12">
                <v-text-field label="Your feedback" outlined color="grey darken-1"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn color="purple" block large @click="goHome">
                  <v-icon left>mdi-home</v-icon> Home
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Logout Button -->
    <v-row align="center" justify="center" class="mt-5">
      <v-col cols="12" md="8" lg="6">
        <v-btn color="grey darken-1" block large @click="logout">
          <v-icon left>mdi-logout</v-icon> Logout
        </v-btn>
      </v-col>
    </v-row>

    <!-- Snackbar for Confirmation -->
    <v-snackbar v-model="snackbar" :bottom="true" color="success" :timeout="3000">
      {{ snackbarMessage }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarMessage: ''
    };
  },
  computed: {
    emergencyRequests() {
      return this.$store.state.emergencyRequests; // Retrieves emergency requests from Vuex store
    }
  },
  methods: {
    goToRefresherCourses() {
      this.$router.push('/refresher-courses');
    },
    acceptEmergency(requestId) {
      this.snackbarMessage = `Emergency request accepted for Request ID: ${requestId}`;
      this.snackbar = true;
      console.log("Emergency accepted for Request ID:", requestId);
    },
    updateLocation() {
      console.log("Location updated");
    },
    sendChatLog() {
      console.log("Chat log sent");
    },
    goHome() {
      this.$router.push('/');
    },
    logout() {
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
  justify_content: center;
}
.text-center {
  text-align: center;
}
.text-h5 {
  font-size: 1.25rem;
}
</style>
