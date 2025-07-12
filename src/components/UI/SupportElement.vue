<template>
  <div>
    <div class="support">
      <svg
        @click="toggleWindow"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="32" fill="#F0F3F7" />
        <rect
          x="0.5"
          y="0.5"
          width="63"
          height="63"
          rx="31.5"
          stroke="black"
          stroke-opacity="0.08"
        />
        <path
          d="M44 37.3333C44 38.0406 43.719 38.7188 43.219 39.2189C42.7189 39.719 42.0406 40 41.3333 40H25.3333L20 45.3333V21.3333C20 20.6261 20.281 19.9478 20.781 19.4477C21.2811 18.9476 21.9594 18.6667 22.6667 18.6667H41.3333C42.0406 18.6667 42.7189 18.9476 43.219 19.4477C43.719 19.9478 44 20.6261 44 21.3333V37.3333Z"
          fill="#181E29"
        />
        <rect
          x="24.3333"
          y="28.3333"
          width="3.33333"
          height="3.33333"
          rx="1.66667"
          fill="#F0F3F7"
        />
        <rect
          x="30.3333"
          y="28.3333"
          width="3.33333"
          height="3.33333"
          rx="1.66667"
          fill="#F0F3F7"
        />
        <rect
          x="36.3333"
          y="28.3333"
          width="3.33333"
          height="3.33333"
          rx="1.66667"
          fill="#F0F3F7"
        />
        <circle
          cx="54"
          cy="10"
          r="5"
          fill="#F83F6C"
          stroke="#181E29"
          stroke-width="2"
        />
      </svg>
    </div>
    <modal-window v-model:show="windowVisible">
      <SupportForm v-model:show="windowVisible" />
    </modal-window>
  </div>
</template>

<script>
import SupportForm from "@/components/SupportForm";

export default {
  name: "support-element",
  components: {
    SupportForm,
  },
  data() {
    return {
      windowVisible: false,
    };
  },
  methods: {
    toggleWindow() {
      this.windowVisible = !this.windowVisible;
      console.log(1);
    },
  },
};
</script>

<style lang="sass" scoped>
.support
    position: fixed
    bottom: 32px
    right: 32px
    &:hover
        transition: 0.4s ease
        scale: 1.2
    &:active
        transition: 0.2s ease
        scale: 0.8
</style>
