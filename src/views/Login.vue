<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="logo-container">
            <v-col class="d-flex justify-center flex-column">
                <img alt="bounce" src="../assets/logo.svg" />
            </v-col>
        </v-row>

        <!-- FORM CONTAINER adheres to bottom -->
        <v-row justify="center" class="form-container flex-grow-0 text-center">
            <v-col align-self="end" lg="4" md="5" sm="8">
                <!-- Error alert -->
                <v-alert
                        type="error"
                        v-if="error"
                >
                </v-alert>

                <!-- Password reset success alert -->
                <v-alert
                        type="success"
                        v-if="passwordResetSuccess"
                >
                </v-alert>

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
                            label="'mail'"
                            :disabled="loading"
                            @keypress.enter="login"
                    ></v-text-field>

                    <!-- Login submit button -->
                    <v-text-field
                            required
                            outlined

                            v-model="loginForm.password.field"
                            :rules="loginForm.password.rules"
                            label="'password'"
                            :disabled="loading"

                            :type="loginForm.password.visibility ? 'text' : 'password'"
                            :append-icon="loginForm.password.visibility ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="loginForm.password.visibility = !loginForm.password.visibility"
                            @keypress.enter="login"
                    ></v-text-field>

                    <!-- Login submit button -->
                    <v-btn
                            large
                            block
                            light

                            color="primary"
                            :disabled="!loginForm.valid"
                            :loading="loading"

                            @click="login"
                    >
                        Login
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
                        class="white--text d-block mt-4"
                        @click="showPasswordResetForm = !showPasswordResetForm"
                >
                </a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // import fb from '../plugins/firebaseConfig'
    export default {
        data () {
            return {
                loading: false, // Pending request
                error: null, // Error after request
                showPasswordResetForm: false,
                passwordResetSuccess: false,
                loginForm: {
                    valid: false,
                    email: {
                        field: '',
                        rules: [
                                v => /.+@.+\..+/.test(v) || this.$t('forms.validation.emailMustBeValid') // Use regex to crudely validate the email
                        ]
                    },
                    password: {
                        field: '',
                        visibility: false,
                        rules: [
                        ]
                    }
                },
                passwordResetForm: {
                    valid: false,
                    email: {
                        field: '',
                        rules: [
                        ]
                    }
                }
            }
        },
        // methods: {
        //     /**
        //      * Send a request to login with Firebase, if the form is valid.
        //      */
        //     login () {
        //         if (this.$refs.loginForm.validate()) {
        //             this.loading = true
        //             fb.auth.signInWithEmailAndPassword(
        //                 this.loginForm.email.field,
        //                 this.loginForm.password.field
        //             ).then(user => {
        //                 this.loading = false
        //                 this.error = null
        //                 this.$store.commit('setCurrentUser', user.user)
        //                 this.$store.dispatch('fetchUserProfile')
        //                 this.$router.push('/dashboard')
        //             }).catch(err => {
        //                 this.loading = false
        //                 this.error = err
        //             })
        //         }
        //     },
        //     /**
        //      * Send a request to reset a users password, if the form is valid.
        //      */
        //     resetPassword () {
        //         if (this.$refs.passwordResetForm.validate()) {
        //             this.loading = true
        //             fb.auth.sendPasswordResetEmail(
        //                 this.passwordResetForm.email.field
        //             ).then(response => {
        //                 this.loading = false
        //                 this.error = null
        //                 this.passwordResetSuccess = true
        //             }).catch(err => {
        //                 this.loading = false
        //                 this.error = err
        //             })
        //         }
        //     }
        // }
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
