import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6200EA',
        secondary: '#03DAC6',
        accent: '#FFC107',
        error: '#B00020',
      },
    },
  },
});
