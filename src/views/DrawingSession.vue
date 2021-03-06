<template>
  <v-container fluid>
    <FabricCanvas
        ref="fabricCanvas"
        :color="color"
        :session="session"
        @update="updateCanvas"
    ></FabricCanvas>

    <v-row>
      <v-col>
        <v-toolbar
            dense
            rounded
            class="d-inline-block px-2"
        >
          <router-link to="/">
            <img alt="bounce" src="../assets/bounce.svg" class="mr-4"/>
          </router-link>

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
              @click="toggleDrawingMode"
          ><v-icon>{{ drawingMode ? 'mdi-pencil-off' : 'mdi-pencil' }}</v-icon></v-btn>

          <v-btn
              icon
              tile
              @click="drawShape($refs.fabricCanvas.addRect)"
          ><v-icon>mdi-square-outline</v-icon></v-btn>
          <v-btn
              icon
              tile
              @click="drawShape($refs.fabricCanvas.addOval)"
          ><v-icon>mdi-circle-outline</v-icon></v-btn>

          <v-btn
              icon
              tile
              @click="saveSession"
          ><v-icon>mdi-floppy</v-icon></v-btn>

          <span class="caption ml-2">or paste an image!</span>
        </v-toolbar>
      </v-col>

<!--      <v-col cols="3" >-->
<!--        <v-card v-for="(message, index) in messages"-->
<!--                :key="index"-->
<!--        >-->
<!--          <v-card-text>-->
<!--            <v-row cols="1" v-text="message"></v-row>-->
<!--          </v-card-text>-->
<!--        </v-card>-->
<!--        <v-text-field-->
<!--            autocomplete="off"-->
<!--            v-model="message"-->
<!--            label="Message"-->
<!--            type="text"-->
<!--            id="chat"-->
<!--            :append-outer-icon="'mdi-send'"-->
<!--            @click:append-outer="sendMessage"-->
<!--            @keydown.enter="sendMessage"-->
<!--        >-->
<!--        </v-text-field>-->
<!--      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import FabricCanvas from '../components/FabricCanvas';
import Session from '../models/session';

const messages = [];
let i = 0;

export default {
name: "Session",
  components: { FabricCanvas },
  props: {
    uuid: String,
  },
  data() {
    return {
      colorPickerMenu: false,
      color: 'rgba(0,0,0,0.5)',
      drawingMode: false,
      session: null,
      message:'',
      messages,
    };
  },
  created() {
    if (this.uuid) {
      this.loadSession(this.uuid);
    } else {
      this.session = new Session(this.$store.getters['user/user'].uid);
    }
  },
  watch: {
    drawingMode() {
      this.$refs.fabricCanvas.setDrawingMode(this.drawingMode);
    }
  },
  methods: {
    clearMessage () {
      this.message = ''
    },

    sendMessage(){
      messages[i] = document.getElementById("chat").value;
      console.log(messages[i])
      i++;
      this.clearMessage()
    },

    updateCanvas(e) {
      this.session.canvas = e;
      this.saveSession();
    },
    toggleDrawingMode() {
      this.drawingMode = !this.drawingMode;
    },
    drawShape(callback) {
      this.drawingMode = false;
      callback();
    },
    saveSession() {
      const sessionsCollection = firebase.firestore().collection('session');
      const session = this.session;

      sessionsCollection.doc(session.uid).set(session.toObject());
      if (!this.uuid) this.$router.push('/session/' + session.uid);
    },
    async loadSession(uuid) {
      try {
        const sessionsCollection = firebase.firestore().collection('session');
        const doc = await sessionsCollection.doc(uuid).get()
        if (doc.exists) {
          this.session = Session.fromSchema(doc.data());
          this.$nextTick(this.$refs.fabricCanvas.loadCanvas);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}

</script>

<style scoped>

</style>
