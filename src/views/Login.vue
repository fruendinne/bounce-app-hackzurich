<template>
  <v-container class="login-container d-flex flex-column">
    <!-- LOGO -->
    <v-row class="logo-container">
      <v-col class="d-flex justify-center flex-column">
        <img alt="bounce" src="../assets/logo.svg"/>
      </v-col>
    </v-row>

    <!-- FORM CONTAINER adheres to bottom -->
    <v-row justify="center" class="form-container flex-grow-0 text-center">
      <v-col align-self="end" lg="4" md="5" sm="8">
        <!-- Error alert -->
        <v-alert type="error" v-if="error" v-text="error"></v-alert>

        <!-- Password reset success alert -->
        <v-alert type="success" v-if="passwordResetSuccess"></v-alert>

        <!-- Login Form -->
        <v-form
            lazy-validation

            ref="loginForm"
            v-if="!showPasswordResetForm"
            v-model="loginForm.valid"
        >
          <!-- Login Email Field -->
          <v-text-field
              required
              outlined

              v-model="loginForm.email.field"
              :rules="loginForm.email.rules"
              label="Email"
              :disabled="loading"
              @keypress.enter="login"
          ></v-text-field>

          <!-- Login password field -->
          <v-text-field
              required
              outlined

              v-model="loginForm.password.field"
              :rules="loginForm.password.rules"
              label="Password"
              :disabled="loading"

              :type="loginForm.password.visibility ? 'text' : 'password'"
              :append-icon="loginForm.password.visibility ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="loginForm.password.visibility = !loginForm.password.visibility"
              @keypress.enter="login"
          ></v-text-field>

          <!-- Login submit button -->
          <v-btn
              large block

              color="primary"
              :disabled="!loginForm.valid"
              :loading="loading"
              class="flex-grow-1"

              @click="login"
          >
            Login
          </v-btn>

          <!-- Login submit button -->
          <v-btn
              class="mt-4"
              large block
              text

              :disabled="!loginForm.valid"

              @click="signUp"
          >
            Create account
          </v-btn>
        </v-form>

        <!-- Password reset form -->
        <v-form
            ref="passwordResetForm"
            v-else
            v-model="passwordResetForm.valid"
        >
          <!-- Password reset email field -->
          <v-text-field
              required
              filled
              dark

              v-model="passwordResetForm.email.field"
              :rules="passwordResetForm.email.rules"
              :disabled="loading"
              @keypress.enter="resetPassword"
          ></v-text-field>

          <!-- Password reset submit button -->
          <v-btn
              large
              block

              :disabled="!passwordResetForm.valid"
              :loading="loading"
              @click="resetPassword"
          >
          </v-btn>
        </v-form>

        <!-- Password reset toggle link -->
        <a
            class="black--text text-caption mt-4"
            @click="showPasswordResetForm = !showPasswordResetForm"
            v-if="false"
        >
          {{ !showPasswordResetForm ? 'Forgot your password?' : 'Back to login' }}
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import fb from '../plugins/firebaseConfig'

import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      loading: false, // Pending request
      showPasswordResetForm: false,
      passwordResetSuccess: false,
      loginForm: {
        valid: false,
        email: {
          field: '',
          rules: [
            v => /.+@.+\..+/.test(v) || 'Please enter a valid email address.', // Use regex to crudely validate the email
          ],
        },
        password: {
          field: '',
          visibility: false,
          rules: [],
        },
      },
      passwordResetForm: {
        valid: false,
        email: {
          field: '',
          rules: [],
        },
      },
    };
  },
  computed: {
    ...mapGetters('user', [
      'error',
      'isUserAuthenticated',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'signUpWithEmailAndPassword',
      'signInWithEmailAndPassword',
      'signOut',
    ]),
    async login() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
        await this.signInWithEmailAndPassword({
          email: this.loginForm.email.field.trim(),
          password: this.loginForm.password.field,
        });
        this.loading = false;
      }
    },
    async signUp() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
        await this.signUpWithEmailAndPassword({
          email: this.loginForm.email.field.trim(),
          password: this.loginForm.password.field,
        });
        this.loading = false;
      }
    },
  },
}
</script>

<style lang="scss">
.login-container {
  height: 100%;
  max-width: unset !important;

  .form-container {
    margin-bottom: 5rem;
    min-height: 216px;
  }
}
</style>
