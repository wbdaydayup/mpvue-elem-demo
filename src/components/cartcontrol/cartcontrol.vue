<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon iconfont icon-jianhao"
         :class="{'icon-gery':food.add}"
         v-if="food.count && !selectAdd"
         :data-id="food.id"
         @click="decrease"
    ></div>
    <div class="cart-decrease icon iconfont icon-jianhao"
         v-if="selectAdd"
         :data-id="food.id"
         @click="decrease"
    ></div>
    <div class="cart-count" v-if="food.count && !selectAdd">{{food.count}}</div>
    <div class="cart-count" v-else>{{nowCount}}</div>
    <div class="cart-add icon iconfont icon-jiahao"
         :data-id="food.id"
         @click="add"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object
    },
    nowCount: {
      type: Number
    },
    selectAdd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    decrease () {
      this.$emit('decrease')
    },
    add () {
      this.$emit('add')
    }
  }
}
</script>

<style scoped>
@import "../../utils/iconfont/iconfont.css";

.cartcontrol {
  position: relative;
  font-size: 0;
  color: rgb(0, 160, 220);
}

.cartcontrol .cart-decrease, .cart-add {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  margin: 0;
}

.icon-gery {
  color: rgb(147, 153, 159);
}

.alert-wrapper {
  position: absolute;
  right: 0;
  bottom: 15px;
}

.alert-message {
  padding: 7px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  font-size: 10px;
  color: white;
  text-align: center;
}

.cart-count {
  display: inline-block;
  vertical-align: top;
  margin: 0 5px;
  padding-top: 6px;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

</style>
