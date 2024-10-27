<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
        </div>
        <div class="form-actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  created() {
    // Debugging to check if Vuex is accessible
    console.log('Vuex Store in LoginPage.vue:', this.$store);
  },
  methods: {
    login() {
      if (!this.$store) {
        console.error("Vuex store is not available");
        alert('Vuex store is not available');
        return;
      }

      this.$store.dispatch('loginUser', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        const role = this.$store.getters.userRole;
        if (role === 'patient') {
          this.$router.push('/user-dashboard');
        } else if (role === 'firstAider') {
          this.$router.push('/first-aider-dashboard');
        }
      })
      .catch(error => {
        console.error("Login error:", error);
        alert('Login failed: ' + error.message);
      });
    }
  }
}
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4; /* Assuming a light grey background */
}

.login-form {
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 340px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  text-align: right;
}

button {
  padding: 10px 20px;
  background-color: #0056b3; /* Dark blue background */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
