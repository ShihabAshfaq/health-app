<template>
  <v-container>
    <v-card class="pa-5" outlined tile>
      <v-card-title class="headline">First Aider Sign Up</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.name"
            :rules="[v => !!v || 'Name is required']"
            label="Name"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"
            label="Email"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="[v => !!v || 'Password is required', v => v.length >= 8 || 'Password must be at least 8 characters']"
            label="Password"
            type="password"
            outlined
            dense
          ></v-text-field>
          <v-file-input
            v-model="certificationFile"
            :rules="[v => !!v || 'Certification is required']"
            label="Upload Certification"
            outlined
            dense
            color="primary"
            prepend-icon="mdi-certificate"
          ></v-file-input>
          <v-btn :disabled="!valid" color="primary" class="mt-4" @click="submitForm">Finish Registration</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      user: {
        name: '',
        email: '',
        password: ''
      },
      certificationFile: null
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Handle form submission
        console.log("Form Submitted", this.user);
        // You would typically handle the file upload process here as well
      }
    }
  }
};
</script>

<style scoped>
.v-container {
  background-color: #FAFAFA;
}

.v-card {
  background-color: #FFFFFF; /* Ensures the card stands out against the lighter background */
}

.v-btn,
.v-file-input {
  margin-top: 15px; /* Provides uniform spacing above buttons and inputs */
}

.headline {
  color: #1976D2; /* Maintains consistency with professional theme */
}
</style>
