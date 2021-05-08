<template>
  <div></div>
</template>
<script>
export default {
  name: 'Callback',
  mounted () {
    let token = this.$route.hash
    autho.parseHash({ hash: token }, function (err, authResult) {
      if (err) {
      }
      // eslint-disable-next-line handle-callback-err
      autho.client.userInfo(authResult.accessToken, function (err, user) {
        localStorage.setItem('user', user)
        localStorage.setItem('access_token', authResult.accessToken)
        this.$router.push({ name: 'mini.dashboard.home-1' })
      })
    })
    this.$router.push('/')
  }
}
</script>
