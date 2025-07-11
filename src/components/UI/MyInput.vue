<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="sass" scoped>
.input
   width: 100%
   border-radius: 12px
   padding: 17px 16px
   outline: none
   background-color: #272E3C
   border: none
</style>
