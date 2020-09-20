<template>
  <canvas id="fabricCanvas"></canvas>
</template>

<script>
import { fabric } from 'fabric';
import Session from '../models/session';

export default {
  name: 'FabricCanvas',
  props: {
    color: String,
    session: Session,
  },
  data() {
    return {
      fabricInstance: null,
    };
  },
  watch: {
    color() {
      this.setBrushColor();
    }
  },
  mounted() {
    this.fabricInstance = new fabric.Canvas('fabricCanvas');
    this.fabricInstance.setBackgroundColor(
        this.$vuetify.theme.currentTheme.background,
    );

    this.setDimensions();
    this.setBrushColor();

    this.fabricInstance.on('object:modified', this.dumpCanvas);
    this.fabricInstance.on('object:added', this.dumpCanvas);
    this.fabricInstance.on('object:removed', this.dumpCanvas);

    window.onresize = () => this.setDimensions();
    document.onpaste = this.onImagePaste;
  },
  methods: {
    addRect() {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: this.color,
        width: 50,
        height: 50,
        rx: 2,
        ry: 2,
      });

      this.fabricInstance.add(rect);
    },
    addOval() {
      const oval = new fabric.Circle({
        left: 100,
        top: 100,
        fill: this.color,
        radius: 50,
      });

      this.fabricInstance.add(oval);
    },
    onImagePaste(e) {
      const items = e.clipboardData.items;
      e.preventDefault();
      e.stopPropagation();

      //Loop through files
      items.forEach((item) => {
        if (item.type.indexOf('image') === -1) return;

        const imageData = item.getAsFile();
        const reader = new FileReader();
        reader.readAsDataURL(imageData);
        reader.onload = () => {
          fabric.Image.fromURL(reader.result, (img) => {
            this.fabricInstance.add(img);
          });
        };
      });
    },
    setDrawingMode(isDrawingMode) {
      this.fabricInstance.freeDrawingBrush.width = 10;
      this.fabricInstance.isDrawingMode = isDrawingMode;
    },
    setBrushColor() {
      this.fabricInstance.freeDrawingBrush.color = this.color;
    },
    setDimensions() {
      this.fabricInstance.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
    dumpCanvas() {
      this.$emit('update', JSON.parse(JSON.stringify(this.fabricInstance)));
    },
    loadCanvas() {
      if (this.session && this.session.canvas) {
        this.fabricInstance.loadFromJSON(this.session.canvas);
      }
    }
  },
};
</script>

<style>
.canvas-container {
  position: fixed!important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
