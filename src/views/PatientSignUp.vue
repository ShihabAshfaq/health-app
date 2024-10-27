<template>
  <v-container>
    <v-card class="pa-5" outlined tile>
      <v-card-title class="headline">Patient Sign Up</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.name"
            :rules="[v => !!v || 'Name is required']"
            label="Full Name"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="user.dob"
            :rules="[v => !!v || 'Date of Birth is required']"
            label="Date of Birth"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="user.phone"
            :rules="[v => !!v || 'Phone number is required']"
            label="Phone"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="user.address"
            :rules="[v => !!v || 'Address is required']"
            label="Address"
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
          <v-btn :disabled="!valid" color="primary" class="mt-4">Register</v-btn>
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
      if (this.$refs.form.validate()) {
        // Additional actions post-validation can be handled here
      }
    }
  }
};
</script>

<style scoped>
.v-container {
  background-color: #ECEFF1; /* Soft gray background */
}
.v-card {
  background-color: #FFFFFF; /* White background for the card */
}
.headline {
  color: #0D47A1; /* Navy blue for the headline, keeping professional consistency */
}
.v-btn {
  background-color: #64B5F6; /* Lighter blue for the button, provides a friendly contrast */
}
</style>
