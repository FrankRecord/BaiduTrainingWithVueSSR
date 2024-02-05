<script setup lang="ts">

</script>

<template>
  <div class="flex-box">
    <div class="image-card">
      <!--图片框设置400像素宽 300像素高-->
      <div class="box">
        <img
            src="https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg" class="fill"
            alt="mountain"/>
      </div>
      <!--文本不换行,溢出省略号表示-->
      <p class="word-container">
        这是一些文本 这是一些文本 这是一些文本这是一些文本 这是一些文本
        这是一些文本这是一些文本 这是一些文本 这是一些文本
      </p>
    </div>
    <div class="image-card">
      <!--图片框设置400像素宽 300像素高-->
      <div class="box">
        <img
            src="https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg" class="contain"
            alt="mountain"/>
      </div>
      <!--文本不换行,溢出省略号表示-->
      <p class="word-container">
        这是一些文本 这是一些文本 这是一些文本这是一些文本 这是一些文本
        这是一些文本这是一些文本 这是一些文本 这是一些文本
      </p>
    </div>
    <div class="image-card">
      <!--图片框设置400像素宽 300像素高-->
      <div class="box">
        <img
            src="https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg" class="cover"
            alt="mountain"/>
      </div>
      <!--文本不换行,溢出省略号表示-->
      <p class="word-container">
        这是一些文本 这是一些文本 这是一些文本这是一些文本 这是一些文本
        这是一些文本这是一些文本 这是一些文本 这是一些文本
      </p>
    </div>
    <div class="image-card">
      <!--图片框设置400像素宽 300像素高-->
      <div class="box">
      </div>
      <!--文本不换行,溢出省略号表示-->
      <p class="word-container">
        这是一些文本 这是一些文本 这是一些文本这是一些文本 这是一些文本
        这是一些文本这是一些文本 这是一些文本 这是一些文本
      </p>
    </div>
    <div class="image-card">
      <!--图片框设置400像素宽 300像素高-->
      <div class="box">
      </div>
      <!--文本不换行,溢出省略号表示-->
      <p class="word-container">
        这是一些文本 这是一些文本 这是一些文本这是一些文本 这是一些文本
        这是一些文本这是一些文本 这是一些文本 这是一些文本
      </p>
    </div>
    <div class="image-card">
      <!--图片框设置400像素宽 300像素高-->
      <div class="box">
      </div>
      <!--文本不换行,溢出省略号表示-->
      <p class="word-container">
        这是一些文本 这是一些文本 这是一些文本这是一些文本 这是一些文本
        这是一些文本这是一些文本 这是一些文本 这是一些文本
      </p>
    </div>
  </div>
</template>

<style scoped>
.flex-box{
  display: flex;
  flex-flow: wrap row;
  justify-content: space-around;
  align-items: baseline;
  align-content: space-between;
}
.image-card {
  width: 400px;
}

.box {
  width: 400px;
  height: 300px;
  border: 1px black solid;
  background-color: darkgreen;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

img {
  width: 100%;
  height: 100%;
}

.word-container {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
.image-card:nth-child(4) > .box{
  background-image: url("https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.image-card:nth-child(5) > .box{
  background-image: url("https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.image-card:last-of-type > .box{
  background-image: url("https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg");
  background-size: cover;
}
</style>