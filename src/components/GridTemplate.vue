<script lang="ts" setup>

</script>

<template>
  <div class="grid-container-1">
    <h1>Gird layout Practice 1</h1>
    <dl class="practice-1">
      <dt class="title">恐龙类</dt>
      <dd>尹氏芦沟龙</dd>
      <dd>破碎中国虚骨龙</dd>
      <dd>原始川东虚骨龙</dd>
      <dt class="title">鲨鱼类</dt>
      <dd>六鳃鲨目</dd>
      <dd>鼠鲨目</dd>
      <dt class="title">鸟类</dt>
      <dd>雁形目</dd>
      <dd>雨燕目</dd>
      <dd>夜鹰目</dd>
    </dl>
  </div>
  <h1>Gird layout Practice 2</h1>
  <div class="grid-container-2">
    <div class="green-box"></div>
  </div>
  <h1>Gird layout Practice 3</h1>
  <div class="grid-container-3">
    <div class="grid-basic">1</div>
    <div class="grid-basic">2</div>
    <div class="grid-basic">3</div>
    <div class="grid-basic">4</div>
    <div class="grid-basic">5</div>
    <div class="grid-basic">6</div>
    <div class="grid-basic">7</div>
    <div class="grid-basic">8</div>
    <div class="grid-basic">9</div>
    <div class="grid-basic">10</div>
  </div>
  <br>
  <h1>Gird layout Practice 4</h1>
  <div class="grid-container-4">
    <div class="grid-layout-1">
        <div class="header1 background-grey border-radius">Header</div>
        <div class="sidebar1 border-radius background-black">Sidebar</div>
        <div class="sidebar2-1 border-radius background-grey">Sidebar2</div>
        <div class="content1 border-radius background-black">content a member of the British House of Lords who votes for a particular motion.</div>
        <div class="footer1 background-grey border-radius">footer</div>
    </div>
  </div>
</template>

<style scoped>
.practice-1{
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  margin: 20px 0;
}
.title{
  font-weight: bold;
}
.title:nth-child(1){
  grid-column: 1;
  grid-row: 1/4;
}

.title:nth-child(5){
  grid-column: 1;
  grid-row: 4/6;
}
.title:nth-child(8){
  grid-column: 1;
  grid-row: 6/9;
}
.grid-container-2{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 300px;
}
.green-box{
  width: 100px;
  height: 100px;
  background: green;
  grid-column: 2;
  grid-row: 2;
}
.grid-container-3{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 200px);
  grid-gap: 20px;
}
.grid-basic{
  background: #72b16a;
  padding: 20px 20px;
  color: white;
  font: 30px normal serif;
}
.grid-basic:nth-child(1){
  grid-column: 1/3;
  grid-row: 1/3;
}
.grid-basic:nth-child(2){
  grid-column: 3/5;
  grid-row: 1;
}
.grid-basic:nth-child(5){
  grid-column: 3/4;
  grid-row: 2/4;
}
.grid-basic:nth-child(6){
  grid-column: 4/5;
  grid-row: 3/4;
}
.grid-basic:nth-child(7){
  grid-column: 5/7;
  grid-row: 2/4;
}
.grid-basic:nth-child(8){
  grid-column: 4/5;
  grid-row: 2/3;
}

.grid-basic:nth-child(9){
  grid-column: 1/2;
  grid-row: 3/4;
}
.grid-basic:nth-child(10){
  grid-column: 2/3;
  grid-row: 3/4;
}
.grid-container-4{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  color: white;
}
.grid-layout-1 {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
  "head head head"
  "sidebar content sidebar2"
  "sidebar content sidebar2"
  "footer footer footer";
  text-align: center;
  gap: 20px;
}

@media (max-width: 800px) {
  .grid-layout-1{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
  "head"
  "sidebar"
  "content"
  "sidebar2"
  "footer";
    gap: 20px;
  }
}

@media (max-width: 1200px) and (min-width: 800px){
  .grid-layout-1{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
  "head head"
  "sidebar content"
  "sidebar2 sidebar2"
  "footer footer";
    gap: 20px;
  }
}

.background-grey{
  background: grey;
}
.background-black{
  background: black;
}
.border-radius{
  border-radius: 5px;
}
.header1 {
  grid-area: head;
}
.sidebar1{
  grid-area: sidebar;
}
.sidebar2-1{
  grid-area: sidebar2;
}
.content1{
  grid-area: content;
}
.footer1{
  grid-area: footer;
}
</style>