<template>
  <v-container fluid class="fill-height">
    <!-- LOGO -->
    <v-row class="justify-center">
      <v-col cols="9" class="px-8">
        <h3>It's nice to see you</h3>
        <h2 v-text="userProfile.name"></h2>
        <v-row no-gutters>
          <span>tell us what you want us to call you</span>
        </v-row>
        <v-row class="mt-5" justify="space-between" no-gutters>
          <v-text-field
                  required
                  outlined
                  :label=this.userProfile.name
                  :name="name"
                  v-model="name"
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

          >
            save
          </v-btn>
        </v-row>
        <v-row no-gutters>
          <span>edit your creative skills</span>
        </v-row>
        <v-combobox
                class="mt-5"
                :items="items"
                :v-model="selected"
                chips
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

                  color="primary">
            save
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      items: ['UI Design','UX Design', 'Videography', 'Developer', 'Graphic Artist', 'Designer', 'Musician'],
      selected: [],
      name: "",
    }
  },
  watch: {
    selected() {
      this.SET_SKILLS(this.selected);
    },
    name() {
      this.SET_NAME(this.name);
    }
  },
  computed: {
    ...mapGetters('user', [
      'userProfile',
    ]),
    ...mapGetters('onboarding', [
      'onboardingResult',
    ]),
  },
  methods: {
    ...mapMutations('onboarding', [
      'SET_SKILLS',
    ]),
    ...mapActions('user', [
      'updateUserProfile',
    ]),
    ...mapMutations('onboarding', [
      'SET_NAME'
    ]),
    remove (item) {
      this.selected.splice(this.selected.indexOf(item), 1);
      this.selected = [...this.selected]
    },
    async finishOnboarding() {
      const userProfile = this.userProfile
      Object.assign(userProfile, this.onboardingResult);
      await this.updateUserProfile(userProfile.toObject());
      this.$router.push('/');
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
