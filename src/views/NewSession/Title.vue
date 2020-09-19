<template>
  <v-container class="login-container d-flex flex-column">
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
              :name="title"
              v-model="title"
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
              @click="bounce()"
          >
            Bounce!
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      title: '',
    };
  },
  watch: {
    title() {
      this.SET_TITLE(this.title);
    },
  },
  methods: {
    ...mapMutations('createSession', [
      'SET_TITLE',
    ]),
    ...mapActions('createSession', [
      'startSession',
    ]),
    async bounce() {
      const sessionsCollection = firebase.firestore().collection('session');

      const session = await this.startSession();
      sessionsCollection.doc(session.uid).set(session.toObject());
      this.$router.push('/session/' + session.uid);
    },
  },
};
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
