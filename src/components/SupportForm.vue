<template>
  <form class="from" @submit.prevent>
    <div class="form__title">
      <h4>Contact support</h4>
      <svg
        @click="hideWindow"
        class="form__title_icon"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.46 7L14 12.54V14H12.54L7 8.46L1.46 14H0V12.54L5.54 7L0 1.46V0H1.46L7 5.54L12.54 0H14V1.46L8.46 7Z"
          fill="#7F8A9F"
        />
      </svg>
    </div>
    <div class="form__content">
      <p>Get in touch with our support team if you need help.</p>
      <my-input
        name="form-input"
        class="form__content_input"
        type="email"
        placeholder="Email"
        required
        autofocus
      ></my-input>
      <textarea
        name="form-text"
        cols="30"
        rows="10"
        class="form__content_input_message"
        placeholder="Your message"
        required
      ></textarea>
      <my-button class="form__content_btn">Send</my-button>
      <p class="form__content_text">
        By clicking 'Send' I agree with
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  </form>
</template>

<script>
export default {
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
.form
    display: flex
    flex-direction: column
    &__title
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        font-size: 36px
        font-weight: 700
        line-height: 120%
        color: $selectColor
        padding-bottom: 24px

        svg
            cursor: pointer

            &:hover path
                fill: $baseColor
    &__content
        display: flex
        flex-direction: column
        color: $copyrightColor
        font-size: 16px
        line-height: 140%
        gap: 16px
        padding-top: 24px
        &_input
            color: $copyrightColor
            font-size: 16px
            line-height: 140%
            &::placeholder
                color: $copyrightColor
                font-size: 16px
                line-height: 140%
            &_message
                color: $copyrightColor
                font-size: 16px
                line-height: 140%
                width: 100%
                border-radius: 12px
                padding: 17px 16px
                outline: none
                background-color: #272E3C
                border: none
                height: 144px
                resize: none
                &::placeholder
                    color: $copyrightColor
                    font-size: 16px
                    line-height: 140%
        &_btn
            @include buttonFont
            height: 45px
            &:hover
                background-color: $selectColor
                color: $baseColor
                transition: ease 0.5s
            &:active
                transition: 0.1s
                background-color: $baseColor
                color: $selectColor
        &_text
            display: flex
            justify-content: center
a
    color: $copyrightColor
    text-decoration: underline
    padding-left: 5px
    &:hover
      transition: ease 0.4s
      color: $baseColor
    &:active
      transition: ease 0.1s
      color: $copyrightColor
</style>
