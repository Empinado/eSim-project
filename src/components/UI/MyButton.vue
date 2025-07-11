<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="sass" scoped>
.btn
    cursor: pointer
    border-radius: 50px
</style>
