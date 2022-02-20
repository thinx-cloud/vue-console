<template>
  <div class="auth-page">
    <b-container>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
        <p class="widget-auth-info">
          Use your username to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <b-form-group label="Username" label-for="username">
            <b-input-group>
              <b-input-group-text slot="prepend"><i class="la la-user text-white"></i></b-input-group-text>
              <input id="username"
                     ref="username"
                     class="form-control input-transparent pl-3"
                     type="text"
                     required
                     placeholder="Username"
                     autocomplete="username"/>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-input-group>
              <b-input-group-text slot="prepend"><i class="la la-lock text-white"></i></b-input-group-text>
              <input id="password"
                     ref="password"
                     class="form-control input-transparent pl-3"
                     type="password"
                     required
                     placeholder="Password"
                     autocomplete="current-password"/>
            </b-input-group>
          </b-form-group>
          <div class="bg-widget auth-widget-footer">
            <b-button type="submit" variant="danger" class="auth-btn" size="sm">
              <span class="auth-btn-circle">
                <i class="la la-caret-right"></i>
              </span>
              Login
            </b-button>
            <p class="widget-auth-info mt-4">
              Don't have an account? Sign up now!
            </p>
            <router-link class="d-block text-center mb-4" to="login">Create an Account</router-link>
            <div class="social-buttons">
              <b-button variant="primary" class="social-button">
                <i class="social-icon social-google"></i>
                <p class="social-text">GOOGLE</p>
              </b-button>
              <b-button variant="success" class="social-button">
                <i class="social-icon social-microsoft"></i>
                <p class="social-text">MICROSOFT</p>
              </b-button>
            </div>
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      Light Blue Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'LoginPage',
  components: { Widget },
  data() {
    return {
      errorMessage: null,
      apiBase: process.env.VUE_APP_THINX_API_BASE_URL,
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['setUser', 'setToken']),
    async login(e) {
      e.preventDefault();
      const username = this.$refs.username.value;
      const password = this.$refs.password.value;
      
      try {
        const response = await fetch(this.apiBase + '/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const { user, token } = await response.json();
        this.setUser(user);
        this.setToken(token);
        this.$router.push('/app/dashboard');
      } catch (e) {
          this.$error(e, 'ERROR');
          // TODO REMOVE
          this.setUser({ username: 'failedlogin' });
          this.setToken('tokenNotPresent');
          this.$router.push('/app/dashboard');
      }
      
    },
  },
  created() {
    if (this.isLoggedIn === true) {
      this.$router.push('/app/dashboard');
    }
    /*
    this.$log('TEST VUE-CONSOLES LOG', 'LOG');
    this.$info('TEST VUE-CONSOLES LOG', 'INFO');
    this.$warn('TEST VUE-CONSOLES LOG', 'WARN');
    this.$error('TEST VUE-CONSOLES LOG', 'ERROR');
    this.$debug('TEST VUE-CONSOLES LOG', 'DEBUG');
    */
  },
};
</script>
