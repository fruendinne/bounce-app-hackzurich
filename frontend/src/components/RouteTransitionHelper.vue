<template>
  <transition
    :name="transitionName"
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'RouteTransitionHelper',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path === '/' ? 0 : to.path.split('/').length;
      const fromDepth = from.path === '/' ? 0 : from.path.split('/').length;

      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

      next();
    });
  },
};
</script>

<style lang="scss">
@import '../styles/animations';
</style>
