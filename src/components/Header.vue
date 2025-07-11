<template>
  <header class="header">
    <div class="header__container center">
      <router-link class="header__logo" to="./">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="18" fill="#7B61FF" />
          <path
            d="M16.4381 6.57191C17.4038 6.03992 18.5802 6.06903 19.5444 6.60387C20.4005 7.07882 21.5504 7.65131 22.8319 8.11435C24.2849 8.63933 25.7011 9.07499 26.7024 9.36624C27.5361 9.60874 28.125 10.3934 28.125 11.2927V16.4645C28.125 17.2131 28.0698 17.9606 27.96 18.7005C27.3277 22.9602 24.9243 26.7155 21.3879 28.9698L18.5574 30.774C18.2154 30.992 17.7846 30.992 17.4426 30.774L14.612 28.9697C11.0757 26.7155 8.67232 22.9602 8.03999 18.7006C7.93015 17.9607 7.87499 17.2131 7.875 16.4644L7.87505 11.3512C7.87506 10.4251 8.49874 9.6249 9.36251 9.3956C10.4585 9.10467 11.9793 8.65727 13.2859 8.11435C14.4254 7.64088 15.5649 7.05296 16.4381 6.57191Z"
            fill="#06050B"
          />
          <path
            d="M13.5997 18.1949L19.9269 11.9572C20.2728 11.6161 20.852 11.9243 20.7625 12.4017L19.7088 18.0215C19.6877 18.1339 19.7843 18.2332 19.8972 18.2152L22.826 17.7504C23.1424 17.7001 23.3382 18.0842 23.1117 18.3107L16.8976 24.5247C16.5528 24.8695 15.9696 24.5619 16.0595 24.0826L17.1097 18.4815C17.1307 18.3694 17.0347 18.2702 16.922 18.2876L13.8823 18.7571C13.5652 18.8061 13.3712 18.4201 13.5997 18.1949Z"
            fill="white"
          />
        </svg>
        <h1 class="header__title">Esimvpn</h1>
      </router-link>

      <di v class="header__right">
        <nav class="header__nav">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16666 15.0003H10.8333V13.3337H9.16666V15.0003ZM9.99999 1.66699C8.90564 1.66699 7.82201 1.88254 6.81096 2.30133C5.79991 2.72012 4.88125 3.33395 4.10743 4.10777C2.54463 5.67057 1.66666 7.79019 1.66666 10.0003C1.66666 12.2105 2.54463 14.3301 4.10743 15.8929C4.88125 16.6667 5.79991 17.2805 6.81096 17.6993C7.82201 18.1181 8.90564 18.3337 9.99999 18.3337C12.2101 18.3337 14.3297 17.4557 15.8925 15.8929C17.4553 14.3301 18.3333 12.2105 18.3333 10.0003C18.3333 8.90598 18.1178 7.82234 17.699 6.8113C17.2802 5.80025 16.6664 4.88159 15.8925 4.10777C15.1187 3.33395 14.2001 2.72012 13.189 2.30133C12.178 1.88254 11.0943 1.66699 9.99999 1.66699ZM9.99999 16.667C6.32499 16.667 3.33332 13.6753 3.33332 10.0003C3.33332 6.32533 6.32499 3.33366 9.99999 3.33366C13.675 3.33366 16.6667 6.32533 16.6667 10.0003C16.6667 13.6753 13.675 16.667 9.99999 16.667ZM9.99999 5.00033C9.11593 5.00033 8.26809 5.35151 7.64297 5.97664C7.01785 6.60176 6.66666 7.4496 6.66666 8.33366H8.33332C8.33332 7.89163 8.50892 7.46771 8.82148 7.15515C9.13404 6.84259 9.55796 6.66699 9.99999 6.66699C10.442 6.66699 10.8659 6.84259 11.1785 7.15515C11.4911 7.46771 11.6667 7.89163 11.6667 8.33366C11.6667 10.0003 9.16666 9.79199 9.16666 12.5003H10.8333C10.8333 10.6253 13.3333 10.417 13.3333 8.33366C13.3333 7.4496 12.9821 6.60176 12.357 5.97664C11.7319 5.35151 10.884 5.00033 9.99999 5.00033Z"
              fill="#F0F3F7"
            />
          </svg>
          <p class="header__help">Help</p>
        </nav>
        <my-button class="header__right_btn">Get Started</my-button>
      </di>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.header
  padding:16px 0

  &__container
    display: flex
    width: 100%
    justify-content: space-between
    align-items: center
  &__left

  &__logo
    display: flex
    flex-direction: row
    align-items: center
    gap: 12px
  &__title
    color: #fff
    font-size: 23px
  &__right
    display: flex
    flex-direction: row
    align-items: center
    &_btn
      @include buttonFont
      height: 40px
      width: 128px
      &:hover
        background-color: $selectColor
        color: $baseColor
        transition: ease 0.5s
      &:active
        transition: 0.1s
        background-color: $baseColor
        color: $selectColor
  &__nav
    display: flex
    flex-direction: row
    align-items: center
    &:hover svg path
      fill: $baseColor
      transition: ease 0.5s
    &:hover .header__help
      color: $baseColor
      transition: ease 0.5s
  &__help
    color: $selectColor
    font-size: 16px
    line-height: 140%
    padding: 0px 24px 0px 4px
    cursor: pointer
</style>
