<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
            <v-col cols="9" class="px-8">
                <h3>we would love to call you by</h3>
                <h2> your name</h2>
                <v-row class="mt-10" justify="space-between" no-gutters>
                    <v-text-field
                        required
                        outlined
                        label="name"
                        :name="name"
                        v-model="name"
                    ></v-text-field>
                </v-row>
                <v-row no-gutters>
                    <v-spacer></v-spacer>
                    <v-btn
                            to="onboarding"
                            class="secondary--text"
                            large
                            dark
                            right

                            color="primary"

                    >
                        Continue
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        data () {
            return {
                name: "",
            }
        },
        watch: {
            name() {
                this.SET_NAME(this.name);
            }
        },
        methods: {
            ...mapMutations('onboarding', [
                'SET_NAME'
            ]),
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
