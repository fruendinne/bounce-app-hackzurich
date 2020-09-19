<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
        <v-col cols="8"  class="extramarginoliveoil">
                <h3>choose your creative</h3>
                <h2>horizon</h2>
          <v-row>

          </v-row>
            <v-row no-gutters>
                <v-spacer></v-spacer>
            <v-btn
                    class="secondary--text"
                    large
                    dark
                    right

                    color="primary"
                    :loading="loading"

            >
                Continue
            </v-btn>
            </v-row>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                items: ['UI Design','UX Design', 'Videography', 'Developer', 'Graphic Artist', 'Designer', 'Musician'],
            }
        },

        methods: {
            remove (item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
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
    .extramarginoliveoil {
        margin-top: 20%;
    }
</style>
