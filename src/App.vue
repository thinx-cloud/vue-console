<template>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapGetters('auth', ["isLoggedIn"])
  },
  created() {
    const currentPath = this.$router.history.current.path;

    if (this.isLoggedIn === false) {
      this.$router.push('/login');
    }

    if (currentPath === '/' || currentPath === '/app') {
      this.$router.push('/app/dashboard');
    }
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
