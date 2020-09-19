<template>
  <v-container fluid>
    <v-btn @click="$store.dispatch('user/signOut')">Logout</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>
