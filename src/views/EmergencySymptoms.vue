<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="elevation-2 pa-4">
          <v-card-title class="text-h4 font-weight-bold primary--text text-center">
            Enter Symptoms
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-5">
            <v-row>
              <v-col cols="6" class="mb-3" v-for="symptom in symptoms" :key="symptom">
                <v-btn :color="symptomColors[symptom]" block large @click="selectSymptom(symptom)">
                  {{ symptom }}
                </v-btn>
              </v-col>
            </v-row>
            <!-- Display selected symptoms -->
            <v-row v-if="selectedSymptoms.length > 0" class="mt-3">
              <v-col cols="12">
                <v-chip-group column>
                  <v-chip
                    v-for="selected in selectedSymptoms"
                    :key="selected"
                    color="green"
                    close
                    @click:close="removeSymptom(selected)"
                  >
                    {{ selected }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
            <v-row class="mt-5">
              <v-col cols="12">
                <v-text-field
                  v-model="manualSymptom"
                  label="Enter Manually"
                  outlined
                  color="blue darken-2"
                  placeholder="Type a symptom..."
                  @keyup.enter="addManualSymptom"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn color="green darken-2" block large @click="sendSymptom">
                  <v-icon left>mdi-send</v-icon> Send
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar for confirmation -->
    <v-snackbar v-model="snackbar" :timeout="5000" :right="true" color="success">
      Help is on the way! Request ID: {{ requestId }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
data() {
  return {
    symptoms: ['Chest Pain', 'Short of Breath', 'Blood Loss', 'Dizzy Spells', 'Facial Paralysis', 'Severe Rashes', 'Loss of Balance', 'Nausea', 'Migraine'],
    symptomColors: {
      'Chest Pain': 'blue darken-1', 'Short of Breath': 'blue darken-1', 'Blood Loss': 'blue darken-1',
      'Dizzy Spells': 'blue darken-1', 'Facial Paralysis': 'blue darken-1', 'Severe Rashes': 'blue darken-1',
      'Loss of Balance': 'blue darken-1', 'Nausea': 'blue darken-1', 'Migraine': 'blue darken-1'
    },
    manualSymptom: '',
    selectedSymptoms: [],
    snackbar: false,
    requestId: ''
  };
},
methods: {
  selectSymptom(symptom) {
    if (!this.selectedSymptoms.includes(symptom)) {
      this.selectedSymptoms.push(symptom);
    }
  },
  removeSymptom(symptom) {
    const index = this.selectedSymptoms.indexOf(symptom);
    if (index > -1) {
      this.selectedSymptoms.splice(index, 1);
    }
  },
  addManualSymptom() {
    if (this.manualSymptom && !this.selectedSymptoms.includes(this.manualSymptom)) {
      this.selectedSymptoms.push(this.manualSymptom);
      this.manualSymptom = '';
    }
  },
  sendSymptom() {
    if (this.selectedSymptoms.length > 0) {
      const uniqueId = Date.now(); // A simple way to generate a unique ID
      this.$store.dispatch('sendEmergency', {
        userId: this.$store.state.currentUser.id,
        symptoms: this.selectedSymptoms,
        requestId: uniqueId
      });
      this.requestId = uniqueId.toString();
      this.snackbar = true;
      this.selectedSymptoms = []; // Reset after sending
    } else {
      alert('Please select or enter at least one symptom.');
    }
  }
}
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-h4, .v-btn {
  font-size: 1.5rem;
}
.text-center {
  text-align: center;
}
</style>
