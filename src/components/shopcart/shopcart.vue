<template>
  <div class="shopcart">
    <div class='content'>
      <div class="content-left" @click="listShow">
        <div class="logo-wrapper">
          <div :class="[totalCount>0?'logo-highlight':'logo']">
            <div
              class="icon iconfont icon-cart"
              :class="[totalCount>0?'icon-shopping_cart-highlight':'icon-shopping_cart']"></div>
          </div>
          <!--<div hidden="{{!totalCount>0}}" class="num">{{totalCount}}</div>-->
        </div>
        <div :class="[totalCount>0?'price-highlight':'price']">￥{{totalPrice}}元</div>
        <!-- <div class="desc">另需配送费￥{{seller.deliveryPrice}}元</div> -->
      </div>
      <div class="content-right">
        <div class="pay" :class="[totalPrice<minPrice?'not-enough':'enough']"
             @tap="totalPrice<minPrice? '' : 'toOrder()'">{{payDesc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Object
    }
  },
  data () {
    return {
      minPrice: 20
    }
  },
  methods: {
    listShow () {
      this.$emit('list-show')
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += parseInt(food.count)
      })
      return count
    },
    payDesc () {
      let payDesc = ''
      if (this.totalPrice === 0) {
        payDesc = `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        payDesc = `还差￥${diff}元起送`
      } else {
        payDesc = `去结算`
      }
      return payDesc
    }
  }
}
</script>

<style scoped>
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
}

.shopcart .content {
  display: flex;
  background: #141d27;
  font-size: 0;
  color: rgba(255, 255, 255, 0.4);
}

.shopcart .content .content-left {
  flex: 1;
}

.logo-wrapper {
  display: inline-block;
  position: relative;
  top: -10px;
  margin: 0 12px;
  padding: 6px;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  vertical-align: top;
  border-radius: 50%;
  background: #141d27;
}

.logo-wrapper .logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  background: #2b343c;
}

.logo-wrapper .logo-highlight {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  background: rgb(0, 160, 220);
}

.logo-wrapper .logo .icon-shopping_cart {
  line-height: 44px;
  font-size: 24px;
  color: #80858a;
}

.logo-wrapper .logo .icon-shopping_cart-highlight {
  line-height: 44px;
  font-size: 24px;
  color: #fff;
}

.logo-wrapper .logo-highlight .icon-shopping_cart {
  line-height: 44px;
  font-size: 24px;
  color: #80858a;
}

.logo-wrapper .logo-highlight .icon-shopping_cart-highlight {
  line-height: 44px;
  font-size: 24px;
  color: #fff;
}

.logo-wrapper .num {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: rgb(240, 20, 20);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}

.content-left .price {
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  line-height: 24px;
  padding-right: 12px;
  box-sizing: border-box;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: 700;
}

.content-left .price-highlight {
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  line-height: 24px;
  padding-right: 12px;
  box-sizing: border-box;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.content-left .desc {
  display: inline-block;
  vertical-align: top;
  margin: 12px 0 0 12px;
  line-height: 24px;
  font-size: 10px;
}

.content-right {
  flex: 0 0 105px;
  width: 105px;
}

.content-right .pay {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
}

.content-right .not-enough {
  background: #2b333b;
}

.content-right .enough {
  background: #00b43c;
  color: #fff;
}
</style>
