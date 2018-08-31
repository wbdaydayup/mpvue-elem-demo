<template>
  <div class="alert-wrapper">
    <div class="alert-message">多规格商品请在购物车删除哦</div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.alert-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
}

.alert-message {
  padding: 7px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  font-size: 10px;
  color: white;
  text-align: center;
}
</style>
