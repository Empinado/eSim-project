<template>
  <div class="modal" v-if="show" @click="hideWindow">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideWindow() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="sass" scoped>
.modal
  top: 0
  bottom: 0
  right: 0
  left: 0
  background: rgba(0,0,0,0.5)
  position: fixed
  display: flex
  // box-shadow: 0px 4px 48px 0px #01000680
  &__content
    margin: auto
    background: #151324
    border-radius: 24px
    border: 1px solid #FFFFFF14
    width: 500px
    padding: 24px 32px
</style>
