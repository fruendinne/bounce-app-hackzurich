<template>
    <v-container class="login-container background-graphic d-flex flex-column">
        <!-- LOGO -->
        <v-row class="justify-center">
            <v-col cols="9" class="px-8">
                <h3>choose your creative</h3>
                <h2>skills</h2>
            <v-combobox
                    class="mt-10"
                    :items="items"
                    v-model="selected"
                    chips
                    filled
                    clearable
                    label="Skills"
                    persistent-hint
                    multiple
                    solo
                    flat
                    outlined
            >
                <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                            color="primary"
                            text-color="secondary"
                            light
                            class="ma-2"

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
            items: ['UI Design','UX Design', 'Videography', 'Developer', 'Graphic Artist', 'Designer', 'Musician'],
            selected: [],
        }
    },
    watch: {
        selected() {
            this.SET_SKILLS(this.selected);
        }
    },
    methods: {
        ...mapMutations('onboarding', [
            'SET_SKILLS'
        ]),
        remove (item) {
            this.selected.splice(this.selected.indexOf(item), 1)
            this.selected = [...this.selected]
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
