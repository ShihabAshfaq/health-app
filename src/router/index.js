import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store'; // Import Vuex store to access login state

import HomeView from '@/views/HomeView.vue';
import SignUp from '@/views/SignUp.vue';
import PatientSignUp from '@/views/PatientSignUp.vue';
import FirstAiderSignUp from '@/views/FirstAiderSignUp.vue';
import UserDashboard from '@/views/UserDashboard.vue';
import FirstAiderDashboard from '@/views/FirstAiderDashboard.vue';
import LoginPage from '@/views/LoginPage.vue';
import EmergencySymptoms from'@/views/EmergencySymptoms.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'loginPage', component: LoginPage },
    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/signup/patient', name: 'patientSignUp', component: PatientSignUp },
    { path: '/signup/firstAider', name: 'firstAiderSignUp', component: FirstAiderSignUp },
    {
      path: '/user-dashboard',
      name: 'userDashboard',
      component: UserDashboard,
      meta: { requiresAuth: true, role: 'patient' } // Added meta for auth and role
    },
    {
      path: '/emergency-symptoms',
      name: 'emergencySymptoms',
      component: EmergencySymptoms
    },    
    {
      path: '/first-aider-dashboard',
      name: 'firstAiderDashboard',
      component: FirstAiderDashboard,
      meta: { requiresAuth: true, role: 'firstAider' } // Added meta for auth and role
    }
  ]
});

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn; // Check if user is logged in
  const userRole = store.getters.userRole; // Get user role

  // If route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      return next({ name: 'loginPage' });
    }

    // If logged in but role doesn't match, redirect to home
    if (to.meta.role && to.meta.role !== userRole) {
      return next({ name: 'home' });
    }
  }

  // Proceed to the requested route
  next();
});

export default router;
