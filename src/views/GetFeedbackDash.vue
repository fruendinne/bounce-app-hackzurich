<template>
  <v-container fluid class="fill-height">
    <!-- LOGO -->
    <v-row class="justify-center">
      <v-col cols="9" class="px-8">
        <h3>bounce your idea off and</h3>
        <h2>get feedback</h2>
        <v-row no-gutters class="mt-10">
          <span>start new session</span>
        </v-row>
        <v-row no-gutters>
          <v-card class="mr-10 my-10 d-flex align-center justify-center"
                  height="110"
                  width="275"
                  v-ripple
                  outlined
          >
            <v-avatar color=transparent>
              <v-icon size="150" color=secondary>mdi-plus</v-icon>
            </v-avatar>
          </v-card>
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
    <v-container fluid class="fill-height background-graphic">
        <!-- LOGO -->
        <v-row class="justify-center">
            <v-col cols="9" class=" px-8">
                <h3>bounce your idea off and</h3>
                <h2>get feedback</h2>
               <v-row no-gutters class="mt-10">
                   <span>start new session</span>
               </v-row>
                <v-row no-gutters>
                    <v-card class="mr-10 mt-4 mb-10 d-flex align-center justify-center"
                            height="110"
                            width="275"
                            v-ripple
                            outlined
                    >
                        <v-avatar color=transparent>
                            <v-icon size="150" color=secondary>mdi-plus</v-icon>
                        </v-avatar>
                    </v-card>
                </v-row>
                <v-row no-gutters>
                    <span>review completed sessions</span>
                </v-row>
                <v-row no-gutters>
                    <v-card
                            v-for="i in 3" :key="i"
                            class="mr-10 mt-4"
                            height="110"
                            width="275"
                            ripple
                            outlined
                    >
                        <v-img alt="bounce" src="../assets/n.png" />
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
