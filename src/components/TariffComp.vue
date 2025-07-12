<template>
  <div class="tariff">
    <div class="tariff__radio" v-for="tariff in tariffs" :key="tariff.id">
      <div class="tariff__radio_model">
        <label
          :for="tariff.id"
          class="tariff__radio_label"
          :class="{ active: selectedTariff === tariff.id }"
        >
          <input
            type="radio"
            :id="tariff.id"
            class="tariff__radio_input"
            name="tariff__model"
            :value="tariff.id"
            v-model="selectedTariff"
          /><span class="tariff__radio_input_real"></span>
          <div class="tariff__radio_block">
            <p class="tariff__radio_label_title">{{ tariff.eSim[0].data }}</p>
            <p class="tariff__radio_label_time">{{ tariff.eSim[0].time }}</p>
          </div>
          <div class="tariff__radio_block">
            <p class="tariff__radio_label_title">{{ tariff.vpn[0].data }}</p>
            <p class="tariff__radio_label_time">{{ tariff.vpn[0].time }}</p>
          </div>
          <div class="tariff__radio_label_discount">
            <div
              class="tariff__radio_label_discount_img"
              v-if="tariff.discount[0].isDisc === true"
            >
              <span class="curcle-cut"></span> -{{
                tariff.discount[0].discSize
              }}%
              <span class="curcle-cut_1"></span>
            </div>
          </div>
          <div class="tariff__radio_block_price">
            <p
              class="tariff__radio_label_title"
              :class="{ discColor: tariff.discount[0].isDisc }"
              v-if="tariff.discount[0].isDisc === true"
            >
              $ {{ setDisc(tariff.price, tariff.discount[0].discSize) }}
            </p>
            <p
              class="tariff__radio_label_title"
              :class="{ discColor: tariff.discount[0].isDisc }"
              v-else
            >
              $ {{ tariff.price }}
            </p>
            <p
              class="tariff__radio_label_title"
              :class="{ disc: tariff.discount[0].isDisc }"
              v-if="tariff.discount[0].isDisc === true"
            >
              $ {{ tariff.price }}
            </p>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTariff: 1,
      tariffs: [
        {
          id: 1,
          eSim: [{ data: "500 MB", time: "7 days eSIM" }],
          vpn: [{ data: "∞ GB", time: "7 days eSIM" }],
          price: "10.00",
          discount: [{ isDisc: false, discSize: 50 }],
        },
        {
          id: 2,
          eSim: [{ data: "1 GB", time: "30 days eSIM" }],
          vpn: [{ data: "∞ GB", time: "30 days eSIM" }],
          discount: [{ isDisc: false, discSize: 50 }],
          price: "20.00",
        },
        {
          id: 3,
          eSim: [{ data: "3 GB", time: "30 days eSIM" }],
          vpn: [{ data: "∞ GB", time: "30 days eSIM" }],
          discount: [{ isDisc: false, discSize: 50 }],
          price: "30.00",
        },
        {
          id: 4,
          eSim: [{ data: "5 GB", time: "7 days eSIM" }],
          vpn: [{ data: "∞ GB", time: "6 months VPN" }],
          discount: [{ isDisc: true, discSize: 50 }],
          price: "50.00",
        },
        {
          id: 5,
          eSim: [{ data: "10 GB", time: "60 days eSIM" }],
          vpn: [{ data: "∞ GB", time: "6 months VPN" }],
          discount: [{ isDisc: true, discSize: 25 }],
          price: "60.00",
        },
        {
          id: 6,
          eSim: [{ data: "20 GB", time: "60 days eSIM" }],
          vpn: [{ data: "∞ GB", time: "1 year VPN" }],
          discount: [{ isDisc: false, discSize: 50 }],
          price: "80.00",
        },
      ],
    };
  },
  methods: {
    setDisc(price, disc) {
      const discValue = price * (disc / 100);
      const finalPrice = price - discValue;
      return finalPrice + ".00";
    },
  },
};
</script>

<style lang="sass" scoped>
.curcle-cut
    position: absolute
    width: 8px
    height: 8px
    border-radius: 50%
    background-color: #181E29
    top: 50%
    left: 0px
    transform: translate(-50%, -50%)
    pointer-events: none
    z-index: 1
.curcle-cut_1
    position: absolute
    width: 8px
    height: 8px
    border-radius: 50%
    background-color: #181E29
    top: 50%
    right: 0px
    transform: translate(50%, -50%)
    pointer-events: none
    z-index: 1

.tariff
    display: flex
    flex-direction: column
    width: 100%
    gap: 8px
    &__radio

        &_input
            position: absolute
            overflow: hidden
            opacity: 0
            &:checked + &_real
                background-color: #fff
                border: 5px solid $baseColor
            &_real
                width: 20px
                height: 20px
                border-radius: 50%
                position: absolute
                top: 50%
                right: 20px
                border: 1px solid #FFFFFF3D
                transform: translateY(-50%)
        &_model
            width: 100%
        &_label
            cursor: pointer
            display: flex
            height: 100%
            align-items: center
            display: flex
            flex-direction: row
            width: 100%
            position: relative
            border: 1.25px solid #FFFFFF1F
            padding: 8px 20px
            border-radius: 12px
            max-height: 64px
            &_title
                font-weight: 700
                font-size: 20px
                line-height: 140%
                color: $selectColor
            &_time
                font-size: 14px
                line-height: 140%
                color: $copyrightColor
            &_discount
                display: flex
                justify-content: center
                width: 100%
                &_img
                    display: flex
                    justify-content: center
                    position: relative
                    width: 47px
                    font-size: 12px
                    font-weight: 700
                    padding: 4px 8px
                    color: #fff
                    background: linear-gradient(270deg, #B947FF 0%, #8A73FF 100%)
        &_block
            display: flex
            flex-direction: column
            width: 100%
            &_price
                display: flex
                width: 100%
                height: 100%
                flex-direction: column
                justify-content: center
                align-items: flex-end
                padding-right: 40px

.disc
    text-decoration: line-through
    color: $copyrightColor
    font-size: 14px
    line-height: 140%
.discColor
    color: #FF86A4
.active
    border: 2px solid $baseColor
    border-radius: 12px
    padding: 7.25px 19.25px
</style>
