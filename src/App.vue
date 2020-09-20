<template>
  <v-app>
    <v-container fluid v-if="!this.$route.meta.hideAppBar" :class="{ 'background-graphic': !this.$route.meta.hideAppBar}">
        <v-row class="justify-center">
        <v-col cols="9">
            <v-app-bar flat color=transparent>
                <router-link to="/"><img alt="bounce" src="./assets/bounce.svg" /></router-link>
                <v-spacer></v-spacer>

                <div v-if="$store.getters['user/isUserAuthenticated']">
                  <v-btn  to="getfeedbackdash" text>get feedback</v-btn>
                  <v-btn  to="givefeedbackdash" text>give feedback</v-btn>
                  <v-btn  to="profile" text>user profile</v-btn>
                  <v-btn  @click="$store.dispatch('user/signOut')" text>log out</v-btn>
                </div>
            </v-app-bar>
        </v-col>
        </v-row>
    </v-container>
    <v-main>
      <route-transition-helper>
        <router-view></router-view>
      </route-transition-helper>
    </v-main>
  </v-app>
</template>

<script>
import RouteTransitionHelper from './components/RouteTransitionHelper';

export default {
  name: 'App',
  components: {RouteTransitionHelper},
};
</script>

<style lang="scss">
  @import "styles/main";
</style>
