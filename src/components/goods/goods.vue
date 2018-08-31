<template>
  <div>
    <div class="goods">
      <scroll-view class="menu-wrapper"
                   scroll-y
                   :scroll-into-view="toViewed"
                   scroll-with-animation="true">
        <div class="menu-item" v-for="(item, index) in goods" :key="item.id"
             :class="{ active : currentIndex === index }" :id="item.id">
          <text class="text"
                :data-id="item.id"
                :data-index="index"
                @tap="tapClassify">{{item.name}}
          </text>
        </div>
        <div class="ttttttt"></div>
      </scroll-view>
      <scroll-view class="foods-wrapper"
                   scroll-y
                   :scroll-into-view="classifyViewed"
                   scroll-with-animation="true"
                   @scroll="onFoodsScroll">
        <div v-for="(good, index) in goods" :key="good.id" :id="good.id" class="food-list-hook" ref="list">
          <text class="title">{{good.name}}</text>
          <div v-for="(food, foodindex) in good.foods" :key="food.id" class="food-item border-1px">
            <div class='icon'>
              <img :src="food.icon" mode="aspectFill" style="width:57px; height:57px;" />
            </div>
            <div class='content'>
              <text class='name'>{{food.name}}</text>
              <text class='desc'>{{food.description}}</text>
              <div class='price'>
                <text>￥{{food.price}}</text>
              </div>
              <div class='cartcontrol-wrapper'>
                <cartcontrol :food="food"
                             @add="food.add ? selectFood(food) : addCartOne(food.id)"
                             @decrease="food.add ? alertMessage(food) : decreaseCartOne(food.id)"
                ></cartcontrol>
              </div>
              <decreasealert v-if="food.show"></decreasealert>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>
    <shopcart :select-foods="selectFoods" @list-show="listShow"></shopcart>
    <shopcartlist v-if="fold"
                  :select-foods="selectFoods"
                  @list-hide="listShow"
                  @add-cart="addCartOne"
                  @decrease-cart="decreaseCartOne"
                  @empty="empty"
    ></shopcartlist>
    <selectadd v-if="select"
               :select-add="selectAdd"
               @select-hide="selectHide"
               @select-food-add="selectFoodAdd"
    ></selectadd>
  </div>
</template>

<script>
import shopcart from '@/components/shopcart/shopcart'
import cartcontrol from '@/components/cartcontrol/cartcontrol'
import decreasealert from '@/components/decreasealert/decreasealert'
import selectadd from '@/components/selectadd/selectadd'
import shopcartlist from '@/components/shopcartlist/shopcartlist'

export default {
  props: {
    // goods: {
    //   type: Array
    // }
  },
  components: {
    shopcartlist,
    shopcart,
    cartcontrol,
    decreasealert,
    selectadd
  },
  data () {
    return {
      goods: [],
      toViewed: '',
      classifyViewed: '',
      listHeight: [],
      scrollY: 0,
      currentIndex: 0,
      selectFoods: [],
      fold: false,
      select: false,
      selectAdd: {}
    }
  },
  created () {
    this.getGoods()
  },
  mounted () {
  },
  methods: {
    getGoods () {
      this.showLoading('加载中')
      wx.request({
        // url: 'http://120.79.164.128',
        url: 'https://www.easy-mock.com/mock/5aed7089298b1e589c95a2af/dongchi/data',
        success: (res) => {
          this.goods = res.data.goods
          console.log(this.goods)
          this.closeLoading()
        }
      })
    },
    showLoading (text) {
      wx.showLoading({
        title: text
      })
    },
    closeLoading () {
      wx.hideLoading()
    },
    tapClassify (e) {
      let id = e.currentTarget.dataset.id
      this.classifyViewed = id
      this.$nextTick(() => {
        this.classifyViewed = ''
      })
    },
    queryMultipleNodes () {
      let height = 0
      let list = []
      list.push(height)
      const query = wx.createSelectorQuery()
      query.selectAll('.food-list-hook').boundingClientRect()
      query.exec((res) => {
        for (let i = 0; i < res[0].length; i++) {
          height += res[0][i].height
          list.push(height)
        }
        this.listHeight = list
      })
    },
    onFoodsScroll (e) {
      const len = this.listHeight.length
      if (len <= 0) {
        this.queryMultipleNodes()
      }
      let nowScrollTop = e.mp.detail.scrollTop
      this.scrollY = nowScrollTop
      this._calculateIndex()
    },
    _calculateIndex () {
      let list = this.listHeight
      for (let i = 0, len = list.length; i < len; i++) {
        let height1 = list[i]
        let height2 = list[i + 1]
        if (this.scrollY >= height1 && this.scrollY < height2) {
          this.currentIndex = i
          this.toViewed = this.goods[i].id
        }
      }
    },
    selectFood (item) {
      this.selectAdd = item
      this.select = true
    },
    selectHide () {
      this.select = false
    },
    selectFoodAdd (id, count) {
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.add) {
            food.add.forEach((item) => {
              if (item.id === id) {
                if (!item.count) {
                  item.count = count
                  if (!food.count) {
                    food.count = count
                  } else {
                    food.count += count
                  }
                  let nowSelectFood = {
                    name: `${food.name}-${item.name}`,
                    price: food.price,
                    count: count,
                    id: item.id
                  }
                  this.selectFoods.push(nowSelectFood)
                } else {
                  item.count = count
                  food.count += count
                  this.selectFoods.forEach((item) => {
                    if (item.id === id) {
                      item.count += count
                    }
                  })
                }
              }
            })
          }
        })
      })
      this.selectHide()
    },
    alertMessage (item) {
      this.$set(item, 'show', true)
      setTimeout(() => {
        this.$set(item, 'show', false)
      }, 1000)
    },
    addCartOne (id) {
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.id === id) {
            if (typeof food.count !== 'number' || food.count === 0) {
              this.$set(good, 'count', 1)
              this.$set(food, 'count', 1)
              let nowSelectFood = {
                name: food.name,
                price: food.price,
                count: 1,
                id: food.id
              }
              this.selectFoods.push(nowSelectFood)
            } else {
              good.count++
              food.count++
              this.selectFoods.forEach((item) => {
                if (item.id === id) {
                  item.count++
                }
              })
            }
          }
        })
      })
    },
    decreaseCartOne (id) {
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.id === id) {
            good.count--
            food.count--
            this.selectFoods.forEach((item, index) => {
              if (item.id === id) {
                item.count--
              }
              if (item.count <= 0) {
                this.selectFoods.splice(index, 1)
                this.fold = false
              }
            })
          }
        })
      })
    },
    listShow () {
      const len = this.selectFoods.length
      if (len <= 0) {
        this.fold = false
      } else {
        this.fold = !this.fold
      }
    },
    empty () {
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            food.count = 0
          }
        })
      })
      this.selectFoods = []
      this.fold = false
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  position: absolute;
  top: 134px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
}

.active {
  background: white;
  font-weight: 700;
}

.menu-wrapper {
  flex: 0 0 80px;
  width: 80px;
  height: 100%;
  background: #f3f5f7;
}

.menu-item {
  display: table;
  height: 54px;
  width: 56px;
  line-height: 14px;
  padding: 0 12px;
}

.menu-wrapper .text {
  display: table-cell;
  width: 56px;
  vertical-align: middle;
  font-size: 12px;
}

.foods-wrapper {
  flex: 1;
  height: 100%;
}

.foods-wrapper .title {
  display: block;
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: rgb(147, 153, 159);
  background: #f3f6f7;
}

.foods-wrapper .food-item {
  display: flex;
  margin: 18px;
}

.foods-wrapper .border-1px:last-child:after {
  display: none;
}

.foods-wrapper .icon {
  flex: 0 0 57px;
  margin-right: 10px;
}

.foods-wrapper .content {
  position: relative;
  flex: 1;
}

.foods-wrapper .name {
  display: block;
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}

.foods-wrapper .desc {
  display: block;
  margin-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: rgb(147, 153, 159);
}

.foods-wrapper .price {
  font-weight: 700;
  line-height: 24px;
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}

.foods-wrapper .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: -3px;
}
</style>
