<template>
  <div class="layout">
    <Header />
    <div class="layout__main">
      <Main />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import SupportForm from "@/components/SupportForm.vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
    ModalWindow,
    SupportForm,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="sass" scoped>
.layout
    display: flex
    flex-direction: column
    min-height: 100vh
    &__main
      flex: 1
</style>
