<template>
  <div class="layout center">
    <Header />
    <main class="layout__main">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
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
