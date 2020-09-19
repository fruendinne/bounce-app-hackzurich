<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
        <v-col cols="8">
                <h3>choose your creative</h3>
                <h2>horizon</h2>

          <v-row class="mt-9" justify="space-between">

            <v-btn icon width="auto" height="auto">
              <v-avatar color="quaternary" size="350">
                <body class="horizon-text secondary--text normal">company-wide</body>
              </v-avatar>
            </v-btn>

            <v-btn icon width="auto" height="auto">
              <v-avatar color="primary" size="350">
                <span class="horizon-text secondary--text normal">around the globe</span>
              </v-avatar>
            </v-btn>

            <v-btn icon width="auto" height="auto">
              <v-avatar color="thirdiary" size="350">
                <span class="horizon-text secondary--text normal">someone special</span>
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
