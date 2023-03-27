<template>
  <div class="app-first-div">
    <!--广告轮播区域-->
    <ad-swipe />
    <!--logo区域-->
    <div class="logo-div">
      <!--<img class="logo-img" src="@/assets/images/logo.png" alt="">-->
      <img class="logo-word-img" src="@/assets/images/background-word.png" alt="">
    </div>
  </div>
</template>

<script>
import AdSwipe from '@/pages/HomePage/AdSwipe'

export default {
  name: 'HomePage',
  components: {
    AdSwipe
  }
}
</script>

<style lang="scss" scoped>
.app-first-div {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: calc(100vh - 136px);

  .logo-div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .logo-img {
      width: 128px;
    }

    .logo-word-img {
      width: 260px;
    }
  }
}
</style>
