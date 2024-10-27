<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="user.name" label="Name" required></v-text-field>
          <v-text-field v-model="user.dob" label="Date of Birth" required></v-text-field>
          <v-text-field v-model="user.phone" label="Phone" required></v-text-field>
          <v-text-field v-model="user.address" label="Address" required></v-text-field>
          <v-text-field v-model="user.email" label="Email" required></v-text-field>
          <v-text-field v-model="user.password" label="Password" type="password" required></v-text-field>
          <v-btn color="success" @click="uploadDocs('medical')">Upload Medical Information</v-btn>
          <v-btn color="success" @click="uploadDocs('health')">Link Health Services</v-btn>
          <!-- Conditionally rendered buttons for first aiders, if needed -->
          <v-btn color="info" @click="uploadDocs('accreditation')">First Aid Accreditation</v-btn>
          <v-btn color="info" @click="uploadDocs('documents')">Supporting Documents</v-btn>
          <v-btn color="primary" @click="finish">Finish!</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        dob: '',
        phone: '',
        address: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Submit user data to server
      console.log("Form submitted:", this.user);
    },
    uploadDocs(type) {
      // Here 'type' is utilized to log which button was pressed.
      console.log(`Uploading documents for type: ${type}`);
      // Add the appropriate upload handling logic here
    },
    finish() {
      // Redirect after account creation
      console.log("Account creation finished.");
      this.$router.push({ name: 'userDashboard' }); // Adjust the redirection as needed
    }
  }
}
</script>
