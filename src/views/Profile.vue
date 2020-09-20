<template>
  <v-container fluid class="fill-height">
    <!-- LOGO -->
    <v-row class="justify-center" v-if="userProfile">
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
                  label="Name"
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
                  @click="saveName"
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
                v-model="selected"
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
                  color="primary"
                  @click="saveSkills"
          >
            save
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      items: ['UI Design','UX Design', 'Videography', 'Developer', 'Graphic Artist', 'Designer', 'Musician'],
      selected: [],
      name: "",
    }
  },
  computed: {
    ...mapGetters('user', [
      'userProfile',
    ]),
  },
  watch: {
    userProfile() {
      if (this.userProfile !== null) {
        this.selected = this.userProfile.skills;
        this.name = this.userProfile.name;
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'updateUserProfile',
    ]),
    remove (item) {
      this.selected.splice(this.selected.indexOf(item), 1);
      this.selected = [...this.selected]
    },
    async saveName() {
      const userProfile = this.userProfile
      userProfile.name = this.name;
      await this.updateUserProfile(userProfile.toObject());
    },
    async saveSkills() {
      const userProfile = this.userProfile
      userProfile.skills = this.selected;
      await this.updateUserProfile(userProfile.toObject());
    }
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
