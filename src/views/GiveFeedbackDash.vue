<template>
  <v-container fluid class="fill-height">
    <!-- LOGO -->
    <v-row class="justify-center">
      <v-col cols="9" class="px-8">
        <h3>help out your peers and</h3>
        <h2>give feedback</h2>

        <v-row no-gutters class="mt-10">
          <span>shared with me</span>
        </v-row>
        <v-row no-gutters>
          <v-card
              v-for="session in assignedSessions" :key="session.uid"
              class="mr-15 mt-15"
              height="150"
              width="350"
              ripple
              outlined
              :to="{ name: 'Session', params: { uuid: session.uid }}"
          >
            <v-card-text v-text="session.name"></v-card-text>
            <!--            <v-img alt="bounce" src="../assets/n.png"/>-->
          </v-card>
        </v-row>

        <v-row no-gutters class="mt-10">
          <span>review other sessions</span>
        </v-row>
        <v-row no-gutters>
          <v-card
              v-for="session in sessions" :key="session.uid"
              class="mr-15 mt-15"
              height="150"
              width="350"
              ripple
              outlined
              :to="{ name: 'Session', params: { uuid: session.uid }}"
          >
            <v-card-text v-text="session.name"></v-card-text>
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
  name: 'GiveFeedbackDash',
  computed: {
    ...mapGetters('sessions', [
      'sessions',
      'assignedSessions'
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
