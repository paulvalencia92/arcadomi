<template>
  <div>
    <h1 class="mb-0">Sign in</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './LoginForm'


export default {
  name: 'SignIn',
  components: {LoginForm},
  data: () => ({}),
  mounted() {
    const loggedIn = localStorage.getItem('access_token');
    if (loggedIn !== undefined && loggedIn !== null) {
      this.$router.push({name: 'dashboard.home-1'})
    }
  }
}
</script>
