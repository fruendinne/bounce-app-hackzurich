<template>
    <v-container class="login-container background d-flex flex-column">
        <!-- LOGO -->
        <v-row class="logo-container">
            <v-col class="d-flex justify-center flex-column">
                <img alt="skills" src="../../assets/logo.svg" />
            </v-col>
        </v-row>
        <v-row class="justify-center">
        <v-col cols="8">
            <v-combobox
                    :items="items"
                    chips
                    filled
                    clearable
                    label="Skills"
                    persistent-hint
                    multiple
                    height="64"
                    solo
                    flat
                    outlined
            >
                <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                            color="thirdiary"
                            dark
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                    >
                        <strong>{{ item }}</strong>&nbsp;
                    </v-chip>
                </template>
            </v-combobox>
            <v-row no-gutters>
                <v-spacer></v-spacer>
            <v-btn
                    large
                    dark
                    right

                    color="thirdiary"
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
</style>
