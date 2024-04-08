<script setup lang="ts">

</script>

<template>
  <div class="">
    <h1>分辨率响应图片</h1>
    <img
        srcset="
        ../assets/white-small.png ,
        ../assets/white-middle.png 1.5x,
        ../assets/white-big.png 2x"
        src="../assets/white-small.png"
        alt="test"
    />
  </div>
  <div class="">
    <h1>屏幕宽度响应图片</h1>
    <img srcset="../assets/white-small.png 520w,
             ../assets/white-middle.png 880w,
             ../assets/istockphoto-20240204.jpg 1280w,
             ../assets/white-big.png 1314w"
         sizes="(max-width: 600px) 100vw,
            (max-width: 900px) 80vw,
            (max-width: 1280px) 100vw,
            100vw"
         src="../assets/white-big.png" alt="test"
    />
  </div>
  <div class="">
    <h1>source与picture标签</h1>
    <picture>
      <source media="(max-width: 600px)" srcset="../assets/white-small.png">
      <source media="(max-width: 900px)" srcset="../assets/white-middle.png">
      <source media="(max-width: 1280px)" srcset="../assets/istockphoto-20240204.jpg">
      <img src="../assets/white-big.png" style="width: 300px">
    </picture>
  </div>
</template>

<style scoped>

</style>