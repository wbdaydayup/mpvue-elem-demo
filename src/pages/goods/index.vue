<template>
  <div>
    <goods></goods>
  </div>

</template>

<script>
import goods from '@/components/goods/goods'

export default {
  data () {
    return {
      goods: []
    }
  },
  components: {
    goods
  }
}
</script>

<style scoped>

</style>
