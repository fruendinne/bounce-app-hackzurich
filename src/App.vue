<template>
  <v-app>
    <v-container fluid v-if="!this.$route.meta.hideAppBar">
        <v-row class="justify-center">
        <v-col cols="9">
            <v-app-bar flat color=transparent>
                <img alt="bounce" src="./assets/bounce.svg" />
                <v-spacer></v-spacer>
                <v-btn  to="getfeedbackdash" text>get feedback</v-btn>
                <v-btn  to="givefeedbackdash" text>give feedback</v-btn>
                <v-btn  @click="$store.dispatch('user/signOut')" text>log out</v-btn>
            </v-app-bar>
        </v-col>
        </v-row>
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "styles/main";
</style>
