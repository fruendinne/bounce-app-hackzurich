<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
            <v-col cols="9" class="px-8">
                <h3>name and start your</h3>
                <h2>new Session</h2>
                <v-row class="mt-10" justify="space-between" no-gutters>
                    <v-text-field
                        required
                        outlined
                        label="title"
                ></v-text-field>
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
                        Start collaborating
                    </v-btn>
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
</style>
