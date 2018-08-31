<template>
  <div>
    <div class="food-add">
      <div class="food-wrapper">
        <div class="food-item">
          <div class="icon">
            <img class="img" :src="selectAdd.icon" style="width:109px;height:109px">
          </div>
          <div class="content">
            <div class="name">{{selectAdd.name}}</div>
            <div class="select-name">已选：{{selectItem.name}}</div>
            <div class="price">
              <div class="font1">￥</div>
              <div class="font2">{{selectPrice * nowCount}}</div>
              <div class='cartcontrol-wrapper'>
                <cartcontrol :food="selectAdd"
                             :now-count="nowCount"
                             :select-add="true"
                             @add="addNowCount"
                             @decrease="decreaseNowCount"
                ></cartcontrol>
              </div>
            </div>
          </div>
        </div>
        <div class="add">
          <div class="title">规格</div>
          <div class="add-wrapper">
            <div class="add-item"
                 v-for="(item, index) in selectAdd.add"
                 :key="item.id"
                 :class="{ active: selectItem.id === item.id }"
                 :data-id="item.id"
                 @click="chooseItem(index)">{{item.name}}
            </div>
          </div>
        </div>
        <div class="close" @click="selectHide">
          <div class="icon iconfont icon-guanbi"></div>
        </div>
        <div class="food-btn" @click="selectFoodAdd" :data-id="selectItem.id">选好了</div>
      </div>
    </div>
    <div class="food-add-mask" @click="selectHide"></div>
  </div>
</template>

<script>
import cartcontrol from '@/components/cartcontrol/cartcontrol'

export default {
  props: {
    selectAdd: {
      type: 'Object'
    }
  },
  components: {
    cartcontrol
  },
  data () {
    return {
      nowCount: 1,
      itemIndex: 0
    }
  },
  computed: {
    selectItem () {
      return this.selectAdd.add[this.itemIndex]
    },
    selectPrice () {
      return this.selectAdd.price + this.selectItem.price
    }
  },
  methods: {
    chooseItem (index) {
      this.itemIndex = index
    },
    selectHide () {
      this.$emit('select-hide')
    },
    addNowCount () {
      this.nowCount++
    },
    decreaseNowCount () {
      if (this.nowCount > 1) {
        this.nowCount--
      }
    },
    selectFoodAdd () {
      this.$emit('select-food-add', this.selectItem.id, this.nowCount)
    }
  }
}
</script>

<style scoped>
/* 套餐饮料选择 */

.food-add {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 60;
  width: 100%;
  height: 415px;
  background: white;
}

.food-add .food-wrapper {
  padding: 15px;
}

.food-add .food-wrapper .food-item {
  position: relative;
  display: flex;
}

.food-add .food-wrapper .food-item .content {
  margin-left: 15px;
}

.food-add .food-wrapper .food-item .content .name {
  font-weight: 600;
  margin-bottom: 10px;
}

.food-add .food-wrapper .food-item .content .select-name {
  font-size: 12px;
  margin-bottom: 30px;
}

.food-add .food-wrapper .food-item .content .price {
  display: flex;
  line-height: 30px;
  font-size: 18px;
  color: rgb(233, 92, 75);
}

.food-add .food-wrapper .food-item .content .price .font1 {
  font-weight: 500;
}

.food-add .food-wrapper .food-item .content .price .font2 {
  font-size: 24px;
  font-weight: 700;
  color: rgb(233, 92, 75);
}

.food-add .food-wrapper .food-item .content .price .cartcontrol-wrapper {
  position: absolute;
  right: 15px;
}

.food-add .food-wrapper .add .title {
  font-size: 16px;
  color: rgb(85, 85, 85);
  margin: 20px 0;
}

.food-add .food-wrapper .add .add-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.food-add .food-wrapper .add .add-wrapper .add-item {
  flex: 0 0 105px;
  width: 105px;
  height: 40px;
  margin: 0 10px 10px 0;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  border-radius: 2px;
  background: rgb(245, 245, 245);
}

.food-add .food-wrapper .add .add-wrapper .active {
  color: rgb(45, 147, 222);
  background: rgb(225, 241, 255);
}

.food-add .food-wrapper .close {
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 6px;
  color: rgb(177, 177, 177);
}

.food-add .food-wrapper .food-btn {
  position: absolute;
  bottom: 10px;
  width: 92%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 2px;
  background: rgb(36, 149, 255);
}

.food-add .food-wrapper .icon .img {
  border: 1px solid rgb(235, 235, 235);
}

.food-add-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
}

.food-add .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: -3px;
}
</style>
