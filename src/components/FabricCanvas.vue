<template>
  <canvas id="fabricCanvas"></canvas>
</template>

<script>
import { fabric } from 'fabric';

export default {
  name: 'FabricCanvas',
  props: {
    color: String
  },
  data() {
    return {
      fabricInstance: null,
    };
  },
  mounted() {
    this.fabricInstance = new fabric.Canvas('fabricCanvas');
    this.setDimensions();

    this.fabricInstance.on('object:modified', this.dumpCanvas);
    this.fabricInstance.on('object:added', this.dumpCanvas);
    this.fabricInstance.on('object:removed', this.dumpCanvas);

    window.onresize = () => this.setDimensions();
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
    setDimensions() {
      this.fabricInstance.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
    dumpCanvas() {
      this.$emit('update', JSON.parse(JSON.stringify(this.fabricInstance)));
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
