<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn color="error" large block @click="handleEmergency">EMERGENCY</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    handleEmergency() {
      console.log("Emergency action triggered");
      // Additional emergency handling logic
    }
  }
}
</script>
