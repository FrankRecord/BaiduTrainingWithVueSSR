<script setup lang="ts">

</script>

<template>
  <div class="first-letter-container w-1/2">
    <p>
      I am in the Great Sahara Desert for the third sundown in a row. Fouad and I
      pass back and forth a sun-bleached map of the stars. It’s more of a tug-of-war
      to be honest. With what remains of the daylight, we commit to memory the
      positions of spots on the page. We hope to find some correlation in its
      negative, which slides overhead as the sun rapidly dies.
    </p>
  </div>
  <div class="float-picture">
    <!--图片设置固定宽度 练习溢出处理-->
    <article style="width:600px">
      <div>
        <!--图片设置固定大小为170像素 练习图片处理-->
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/mountain.jpg" style="width:170px;height:170px;" />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
        aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
        pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
        ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
        ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
        vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
        Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
        sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
        Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
        eget fermentum sapien. Nam vulputate diam nec tempor bibendum. Donec luctus
        augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet
        dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur
        eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit
        vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget
        velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in
        interdum. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </div>
    </article>
  </div>
  <div class="float-layout border-solid border-red-400 border-2 mt-10 p-4">
    <div class="head w-full border-solid border-red-400 border-2 bg-red-200 text-white text-center">Header</div>
    <div class="body w-full border-solid border-red-400 border-2 p-4 overflow-hidden mt-5">
      <div class="left float-left w-64 h-64 text-center bg-red-200 text-white">Left</div>
      <div class="center float-left text-center mx-2 border-solid border-red-400 border-2">Center</div>
      <div class="right float-right w-64 h-64 text-center bg-red-200 text-white">right</div>
    </div>
    <div class="head w-full border-solid border-red-400 border-2 bg-red-200 text-white text-center mt-2">Footer</div>
    <div class="footer w-full"></div>
  </div>
</template>

<style scoped>
.first-letter-container > p::first-letter{
  float: left;
  font-size: 80px;
  font-family: "SansSerif";
  padding:0 10px;
}
.float-picture img {
  float: left;
  margin: 20px 20px;
}
.float-layout{
  --parentWidth: 100%;
  --parentHeight: 26rem;
  width: var(--parentWidth);
  height: var(--parentHeight);
}
.left{
  line-height: 16rem;
}
.center{
  width: calc(var(--parentWidth) - 16.5rem * 2);
  height: calc(var(--parentHeight) - 4rem * 2 - 2rem );
  line-height: 16rem;
}
.right{
  line-height: 16rem;
}
</style>