<template>
  <v-container fluid>
    <FabricCanvas
        ref="fabricCanvas"
        :color="color"
        :session="session"
        @update="updateCanvas"
    ></FabricCanvas>

    <v-toolbar
        dense
        rounded
        class="d-inline-block px-2"
    >
      <v-menu
          v-model="colorPickerMenu"
          offset-y
          :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon tile v-on="on" v-bind="attrs"><v-icon :color="color">mdi-circle</v-icon></v-btn>
        </template>

        <template v-slot:default>
          <v-color-picker class="ma-2" show-swatches v-model="color" mode="rgba"></v-color-picker>
        </template>
      </v-menu>

      <v-btn
          icon
          tile
          @click="$refs.fabricCanvas.addRect()"
      ><v-icon>mdi-square-outline</v-icon></v-btn>
      <v-btn
          icon
          tile
          @click="$refs.fabricCanvas.addOval()"
      ><v-icon>mdi-circle-outline</v-icon></v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
import FabricCanvas from '../components/FabricCanvas';
import Session from '../models/session';

export default {
name: "Session",
  components: { FabricCanvas },
  data() {
    return {
      colorPickerMenu: false,
      color: 'rgba(0,0,0,0.5)',
      session: null,
    };
  },
  created() {
    this.session = new Session();
  },
  methods: {
    updateCanvas(e) {
      this.session.canvas = e;
    }
  }
}
</script>

<style scoped>

</style>
