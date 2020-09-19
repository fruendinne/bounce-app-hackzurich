<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
        <v-col cols="8">
                <h3>choose your creative</h3>
                <h2>horizon</h2>

          <v-row class="mt-9" justify="space-between">

            <v-btn
                    icon
                    width="auto" height="auto"
                    v-for="(choice, index) in choices"
                    :key="index"
                    @click="selectChoice(choice)"
            >
              <v-avatar
                      :color="choice.color" size="350"
              >
                <p class="horizon-text secondary--text normal"
                   v-text="choice.text"
                ></p>
              </v-avatar>
            </v-btn>

          </v-row>
            <v-row no-gutters>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapMutations } from 'vuex';

    const choices = [
        {
            text: 'company-wide',
            color: 'primary'
        },
        {
            text: 'around the globe',
            color: 'thirdiary'
        },
        {
            text: 'someone special',
            color: 'quaternary'
        },
    ];

    export default {
        data () {
            return {
                horizon: "",
                choices
            }
        },
        methods: {
            ...mapMutations('createSession', [
                'SET_HORIZON'
            ]),
            selectChoice(choice) {
                this.SET_HORIZON(choice.text);
                this.$router.push('partner');
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
    .horizon-text{
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 0.345em;
    }
</style>
