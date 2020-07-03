<template>
  <v-card elevation="2" id="Register">
    <v-card-title id="RegisterTitle" class="vueGreen--text justify-center">
      Register
    </v-card-title>
    <v-container class="px-9">
      <v-form ref="registerForm" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="firstName"
              :rules="[rules.required]"
              label="First Name"
              maxlength="20"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lastName"
              :rules="[rules.required]"
              label="Last Name"
              maxlength="20"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="streetAddress"
              :rules="[rules.required]"
              label="Street Address"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="city"
              :rules="[rules.required]"
              label="City"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="state"
              :rules="[rules.required]"
              label="State"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="zipCode"
              :rules="zipCodeRules"
              label="ZIP Code"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              @input="onChange"
              :rules="emailRules"
              :error="emailErrorDup"
              label="E-mail"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              outlined
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              block
              v-model="cpassword"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, passwordMatch]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              outlined
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-alert dense outlined type="error" v-show="RegisterPopup === 1">
              {{ RegisterPopupMessage }}
            </v-alert>
          </v-col>

          <v-col v-show="RegisterPopup === 2" cols="12">
            <v-alert dense text type="success">
              {{ RegisterPopupMessage }}
            </v-alert>
          </v-col>

          <v-spacer></v-spacer>
          <v-col class="d-flex" cols="12" xsm="12">
            <v-btn
              block
              :loading="loadingRegister"
              :disabled="!valid"
              color="vueGreen"
              class="mr-4"
              @click="registervalidate"
            >
              Register
            </v-btn>
          </v-col>
        </v-row>
        <div id="Login_RD_text"
          >Already have an account?
          <router-link to="/login" id='Login_Register_link'>Sign In</router-link>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
// import axios from "axios";
// import { mapMutations } from "vuex";
// import { mapGetters } from "vuex";

export default {
  data: () => ({
    valid: true,
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    city: "",
    state: "",
    streetAddress: "",
    cpassword: "",
    RegisterPopup: 0,
    loadingRegister: false,
    RegisterPopupMessage: "",
    emailErrorDup: false,
    timeout: 3000,

    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    zipCodeRules: [
      (v) => !!v || "Required",
      (v) => /^\d+$/.test(v) || "Zipcode contains only digits",
    ],

    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
  computed: {
    // ...mapGetters(["tokenCheck"]),

    passwordMatch() {
      return () => this.password === this.cpassword || "Password must match";
    },
  },

  methods: {
    // ...mapMutations(["LOGIN_SUCCESS"]),

    onChange() {
      this.emailErrorDup = false;
    },

    registervalidate() {
      //   if (this.$refs.registerForm.validate()) {
      //     this.loadingRegister = true;
      //     axios
      //       .post("http://localhost:3000/register", {
      //         firstName: this.firstName,
      //         lastName: this.lastName,
      //         streetAddress: this.streetAddress,
      //         city: this.city,
      //         state: this.state,
      //         zipCode: this.zipCode,
      //         email: this.email,
      //         password: this.password
      //       })
      //       .then(response => {
      //         this.r_reset();
      //         this.RegisterPopupMessage = response.data.message;
      //         this.RegisterPopup = 2;
      //         this.loadingRegister = false;
      //       })
      //       .catch(error => {
      //         this.RegisterPopup = 1;
      //         if (error.response.data.error.errorCode === 11000) {
      //           this.RegisterPopupMessage = error.response.data.message;
      //           this.emailErrorDup = true;
      //         } else {
      //           this.RegisterPopupMessage = error.response.data.message;
      //         }
      //         this.loadingRegister = false;
      //       });
      //   }
    },
    r_reset() {
      this.$refs.registerForm.reset();
    },
  },
};
</script>

<style lang="scss">
#Login_RD_text {
  text-align: center;
  margin: 20px 0;
}

#Login_Register_link {
  padding-left: 6px;
}
#Login_Register_link:hover {
  text-decoration: underline;
  opacity: 85%;
}
#RegisterTitle {
  font-size: 35px;
  padding-top: 25px;
  font-weight: bold;
}
#Register {
  margin: 18vh 15px;
}
@media (min-width: 650px) {
  #Register {
    max-width: 650px;
    margin: 18vh auto;
  }
}
</style>
