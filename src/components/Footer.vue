<template>
  <footer class="footer center">
    <p>© {{ currentYear }} Esimvpn, All Rights Reserved.</p>
    <a href="#">Terms of Use</a>
    <a href="#">Privacy Policy</a>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="sass" scoped>
.footer
    display: flex
    flex-direction: row
    height: 41px
    align-items: center
    justify-content: center
    gap: 24px
    padding: 12px 0
    font-size: 12px
    line-height: 140%
    color: $copyrightColor
    width: 100%
    margin-top: auto
a
    color: $copyrightColor
    text-decoration: underline
    &:hover
      transition: ease 0.4s
      color: $baseColor
    &:active
      transition: ease 0.1s
      color: $copyrightColor
</style>
