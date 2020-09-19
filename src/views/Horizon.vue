<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
        <v-col cols="8">
                <h3>choose your creative</h3>
                <h2>horizon</h2>

          <v-row class="mt-10" justify="space-between">

            <v-btn icon width="auto" height="auto">
              <v-avatar color="quaternary" size="224">
                <span class="black--text normal">company-wide</span >
              </v-avatar>
            </v-btn>

            <v-btn icon width="auto" height="auto">
              <v-avatar color="primary" size="224">
                <span class="black--text normal">around the globe</span>
              </v-avatar>
            </v-btn>

            <v-btn icon width="auto" height="auto">
              <v-avatar color="thirdiary" size="224">
                <span class="black--text normal">someone special</span>
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
