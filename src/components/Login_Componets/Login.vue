<template>
  <v-card elevation="2" id="LogIn">
    <v-card-title id="SignInTitle" class="vueGreen--text justify-center">
      Sign In
    </v-card-title>
    <v-container class="px-9">
      <v-form ref="loginForm" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="loginEmail"
              :rules="loginEmailRules"
              label="E-mail"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="loginPassword"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              outlined
              counter
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>

          <v-col cols="12" v-show="LoginPopup === 1">
            <v-alert dense outlined type="error">
              {{ LoginPopupMessage }}
            </v-alert>
          </v-col>

          <v-col class="d-flex" cols="12" xsm="12">
            <v-btn
              block
              :loading="loadingLogin"
              :disabled="!valid"
              color="vueGreen"
              class="mr-4"
              @click="loginvalidate"
              :dark="valid"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
        <div id="Login_RD_text">
          Don't have an account?
          <router-link to="/register" id="Login_SignUp_link"
            >Sign Up</router-link
          >
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import {mapGetters, mapMutations} from 'vuex';
export default {
  data: () => ({
    dialog: true,
    valid: true,
    loginPassword: "",
    loginEmail: "",
    LoginPopup: 0,
    loadingLogin: false,
    LoginPopupMessage: "",
    snackbar: false,
    snackbarText: "You have successfully logged in",
    timeout: 3000,

    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    showPassword: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
  computed: {
    ...mapGetters(["userCheck"]),

    passwordMatch() {
      return () => this.password === this.cpassword || "Password must match";
    },
  },
  created() {
    if (this.tokenCheck != null) {
      this.dialog = false;
    }
  },

  methods: {
    ...mapMutations(["LOGIN_SUCCESS"]),

    loginvalidate() {
      if (this.$refs.loginForm.validate()) {
        this.loadingLogin = true;
        axios
          .post("http://18.223.28.96/login", {
            email: this.loginEmail,
            password: this.loginPassword,
          })
          .then((response) => {
            this.l_reset();
            this.LOGIN_SUCCESS(response.data);
            this.snackbar = true;
            this.dialog = false;
            this.LoginPopup = 0;
            this.loadingLogin = false;
            this.$router.push('/');

          })
          .catch((error) => {
            this.LoginPopupMessage = error.response.data.message;
            this.LoginPopup = 1;
            this.loadingLogin = false;
          });
      }
    },
    l_reset() {
      this.$refs.loginForm.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
#Login_RD_text {
  text-align: center;
  margin: 20px 0;
}

#Login_SignUp_link {
  padding-left: 6px;
}
#Login_SignUp_link:hover {
  text-decoration: underline;
  opacity: 85%;
}
#SignInTitle {
  font-size: 35px;
  padding-top: 25px;
  font-weight: bold;
}
#LogIn {
  margin: 18vh 15px;
}
@media (min-width: 550px) {
  #LogIn {
    max-width: 500px;
    margin: 18vh auto;
  }
}
</style>
