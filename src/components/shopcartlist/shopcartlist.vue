<template>
  <div>
    <div class="shopcart-list">
      <div class="list-header">
        <text class="title">购物车</text>
        <text class="empty" @click="empty">清空</text>
      </div>
      <scroll-view class="list-content" scroll-y>
        <div class="food border-1px" v-for="(item, index) in selectFoods" :key="item.id">
          <text class="name">{{item.name}}</text>
          <div class="price">
            <text>￥{{item.price*item.count}}</text>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="item"
                         @add="addCart(item.id)"
                         @decrease="decreaseCart(item.id)"
            ></cartcontrol>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="list-mask" @click="listHide"></div>
  </div>
</template>

<script>
import cartcontrol from '@/components/cartcontrol/cartcontrol'

export default {
  props: {
    selectFoods: {
      type: Array
    }
  },
  components: {
    cartcontrol
  },
  methods: {
    listHide () {
      this.$emit('list-hide')
    },
    addCart (id) {
      this.$emit('add-cart', id)
    },
    decreaseCart (id) {
      this.$emit('decrease-cart', id)
    },
    empty () {
      this.$emit('empty')
    }
  }
}
</script>

<style scoped>
/* 购物车详情 */

.shopcart-list {
  position: absolute;
  bottom: 46px;
  width: 100%;
  z-index: 45;
}

.list-header {
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  background: #f3f5f7;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}

.list-header .title {
  float: left;
  font-size: 14px;
  color: rbg(7, 17, 27);
}

.list-header .empty {
  float: right;
  font-size: 12px;
  color: rgb(0, 160, 220);
}

.list-content {
  max-height: 217px;
  overflow: hidden;
  background: #fff;
}

.list-content .food {
  position: relative;
  padding: 12px 0;
  margin: 0 18px;
  box-sizing: border-box;
}

.list-content .name {
  line-height: 24px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}

.list-content .price {
  position: absolute;
  right: 110px;
  bottom: 12px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  color: rgb(240, 20, 20);
}

.shopcart-list .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 6px;
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  background: rgba(7, 17, 27, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
