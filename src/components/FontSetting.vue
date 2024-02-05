<script setup lang="ts">

</script>

<template>
  <div class="moby w-1/2">
    <h2 class="title">Title Loomings</h2>
    <p>
      Call me Ishmael. Some years ago- never mind how long precisely- having
      little or no money in my purse, and nothing particular to interest me on
      shore, I thought I would sail about a little and see the watery part of the
      world. It is a way I have of driving off the spleen and regulating the
      circulation. Whenever I find myself growing grim about the mouth; whenever
      it is a damp, drizzly November in my soul; whenever I find myself
      involuntarily pausing before coffin warehouses, and bringing up the rear of
      every funeral I meet; and especially whenever my hypos get such an upper
      hand of me, that it requires a strong moral principle to prevent me from
      deliberately stepping into the street, and methodically knocking people's
      hats off- then, I account it high time to get to sea as soon as I can. This
      is my substitute for pistol and ball. With a philosophical flourish Cato
      throws himself upon his sword; I quietly take to the ship. There is nothing
      surprising in this. If they but knew it, almost all men in their degree,
      some time or other, cherish very nearly the same feelings towards the ocean
      with me.
    </p>

    <p>
      There now is your insular city of the Manhattoes, belted round by wharves as
      Indian isles by coral reefs- commerce surrounds it with her surf. Right and
      left, the streets take you waterward. Its extreme downtown is the battery,
      where that noble mole is washed by waves, and cooled by breezes, which a few
      hours previous were out of sight of land. Look at the crowds of water-gazers
      there.
    </p>
  </div>
  <div id="content" class="w-10/12 my-32 mx-auto text-center">
    <h1 class="text-4xl font-bold my-10">CSS TEMPLATES using border radius</h1>
    <div class="flex justify-evenly align-middle">
      <div class="blue-round w-64 h-64 rounded-full bg-blue-600 ">BLUE</div>
      <div class="triangle w-64 h-64"><span class="text">TRIANGLE</span></div>
      <div class="red-round bg-blue-50 w-64 h-64 rounded-full">Red</div>
    </div>
  </div>
  <div class="button-section w-1/2 my-0 mx-auto">
    <input type="button" value="Default" class="px-5 py-3 hover:bg-gray-200 active:bg-gray-400 border-solid border-2 border-gray-200 rounded-md">
  </div>
  <div class="list-tab w-1/2 my-0 mx-auto ">
    <ul class="flex justify-items-start font-bold text-2xl">
      <li class="px-5 py-4">Tab1</li>
      <li class="px-5 py-4">Tab2</li>
      <li class="px-5 py-4">Tab3</li>
    </ul>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Architects Daughter';
  src: url("../assets/ArchitectsDaughter-Regular.ttf");
}
.moby{
  font-family: "Architects Daughter";
  margin: 0 auto
}
.title{
  writing-mode: vertical-rl;
  float: left;
  font-size: 40px;
  height: 100%;
  color: blue;
}
p:last-of-type{
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.blue-round{
  line-height: 15.5rem;
  color: white;
  font-weight: bold;
}
.triangle{
  border-top: red 8rem solid;
  border-right: yellow 8rem solid;
  border-bottom: green 8rem solid;
  border-left: purple 8rem solid;
  text-align: center;
}
.triangle .text{
  color: white;
  font-weight: bold;
  margin-left: -2.5rem;
}
.red-round{
  border: red 3rem solid;
  text-align: center;
  line-height: 9rem;
  font-weight: bold;
}
.list-tab > ul >li:nth-child(1){
  color: #888888;
  border-left: #888888 solid 0.1rem;
  border-top: #888888 solid 0.1rem;
  border-right: #888888 solid 0.1rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.list-tab > ul >li:nth-child(2){
  color: #747bff;
  border-bottom: #888888 solid 0.1rem;
}
.list-tab > ul >li:nth-child(3){
  color: #747bff;
  border-bottom: #888888 solid 0.1rem;
  width: 100%;
}

</style>