<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar
      app
      color="#0D47A1"
      dark
      dense
    >
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-bold">Emergency Response App</span> Dashboard
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item-group v-model="selectedItem" active-class="v-list-item--active">
          <v-list-item v-for="(item, i) in filteredMenuItems" :key="i" @click="goto(item.link)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    drawer: false,
    selectedItem: null,
    menuItems: [
      { title: 'Home', icon: 'mdi-home', link: '/' },
      { title: 'Login', icon: 'mdi-login', link: '/login' },
      { title: 'Sign Up', icon: 'mdi-account-plus', link: '/signup' },
      { title: 'User Dashboard', icon: 'mdi-view-dashboard', link: '/user-dashboard', role: 'patient' },
      { title: 'First Aider Dashboard', icon: 'mdi-medical-bag', link: '/first-aider-dashboard', role: 'firstAider' }
    ]
  }),
  computed: {
    ...mapGetters(['isLoggedIn', 'userRole']),
    
    // Filter menu items based on user role
    filteredMenuItems() {
      if (!this.isLoggedIn) {
        // Only show general items when not logged in
        return this.menuItems.filter(item => !item.role);
      } else {
        // Show all items that match the user role
        return this.menuItems.filter(item => !item.role || item.role === this.userRole);
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    goto(link) {
      this.$router.push(link);
      this.drawer = false; // Close the drawer after navigation
    }
  },
  watch: {
    // Update the selected item based on route change
    $route(to) {
      this.selectedItem = this.menuItems.findIndex(item => item.link === to.path);
    }
  }
};
</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
}

.v-btn,
.v-icon,
.v-toolbar-title {
  font-size: 1.1rem;
}

.v-app-bar {
  background-color: #0D47A1; /* Navy blue for the app bar */
}

.v-list-item--active {
  background-color: rgba(13, 71, 161, 0.1); /* Light blue for active item */
}
</style>
