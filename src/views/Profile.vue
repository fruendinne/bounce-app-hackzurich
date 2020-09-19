<template>
  <v-container fluid class="fill-height">
    <!-- LOGO -->
    <v-row class="justify-center">
      <v-col cols="9" class="px-8">
        <h3>It's nice to see you</h3>
        <h2>user.profile.name</h2>
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
        <v-row no-gutters>
          <span>review completed sessions</span>
        </v-row>
        <v-row no-gutters>
          <v-card
              v-for="session in mySessions" :key="session.uid"
              class="mr-10 mt-4"
              height="110"
              width="275"
              ripple
              outlined
              :to="{ name: 'Session', params: { uuid: session.uid }}"
          >
            <v-card-text v-text="session.uid"></v-card-text>
            <!--            <v-img alt="bounce" src="../assets/n.png"/>-->
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters('sessions', [
      'mySessions',
    ]),
  },
  created() {
    this.loadSessions();
  },
  methods: {
    ...mapActions('sessions', [
      'loadSessions',
    ]),
  },
};
</script>

<style lang="scss">
</style>
