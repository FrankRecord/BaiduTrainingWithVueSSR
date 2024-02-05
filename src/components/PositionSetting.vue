<script setup lang="ts">

</script>

<template>
  <div class="positionContainer relative text-white">
    <figure  class="mx-auto my-3">
      <figcaption class="figureCaption absolute flex flex-col flex-wrap text-center items-center">
        <!--文字内容自定-->
        <h2 class="text-4xl mb-5">Beauty Makeup</h2>
        <p class="mb-5">
          Every Girl loves to be beautiful.
          <br>
          As the saying goes, there are no ugly Girl in the world.Only lazy women
        </p>
        <a href="#" class="w-32 p-1 mb-5 border-white border-solid border-2">Get in Touch</a>
      </figcaption>
      <img src="../assets/wren-8496039_1920.jpg" alt="img"><!--图片内容自定-->
    </figure>
  </div>
  <div class="positionContainer relative">
    <div class="leftBox absolute left-0 top-0"></div>
    <div class="centerBox"></div>
    <div class="rightBox absolute right-0 top-0"></div>
  </div>
  <div class="">
    <header>
      <h2 class="text-3xl">LOGO</h2>
    </header>
    <nav class="navLine w-full flex justify-center text-cyan-100 text-2xl bg-black">
      <a href="" class="px-4 py-8">Home</a>
      <a href="" class="px-4 py-8">Bolg</a>
      <a href="" class="px-4 py-8">Article</a>
      <a href="" class="px-4 py-8">Contact me</a>
    </nav>
    <main>
      <article class="py-20 text-center">
        <h1 class="text-4xl">Main Content Here</h1>
        <p class="mx-12">Lorem ipsum dolor sit amet, consectetur adipisicing elt. Dolores iste nula vero cum atque delectus sequi dolore oficia fuga, earum! Blanditisdolorem excepturi nisi, fugiat eius? Blanditiis, enim tenetur magni</p>
      </article>
      <article class="py-20 text-center bg-gray-200">
        <h1 class="text-4xl">Main Content Here</h1>
        <p class="mx-12">Lorem ipsum dolor sit amet, consectetur adipisicing elt. Dolores iste nula vero cum atque delectus sequi dolore oficia fuga, earum! Blanditisdolorem excepturi nisi, fugiat eius? Blanditiis, enim tenetur magni</p>
      </article>
      <article class="py-20 text-center">
        <h1 class="text-4xl">Main Content Here</h1>
        <p class="mx-12">Lorem ipsum dolor sit amet, consectetur adipisicing elt. Dolores iste nula vero cum atque delectus sequi dolore oficia fuga, earum! Blanditisdolorem excepturi nisi, fugiat eius? Blanditiis, enim tenetur magni</p>
      </article>
      <article class="py-20 text-center bg-gray-200">
        <h1 class="text-4xl">Main Content Here</h1>
        <p class="mx-12">Lorem ipsum dolor sit amet, consectetur adipisicing elt. Dolores iste nula vero cum atque delectus sequi dolore oficia fuga, earum! Blanditisdolorem excepturi nisi, fugiat eius? Blanditiis, enim tenetur magni</p>
      </article>
      <article class="py-20 text-center">
        <h1 class="text-4xl">Main Content Here</h1>
        <p class="mx-12">Lorem ipsum dolor sit amet, consectetur adipisicing elt. Dolores iste nula vero cum atque delectus sequi dolore oficia fuga, earum! Blanditisdolorem excepturi nisi, fugiat eius? Blanditiis, enim tenetur magni</p>
      </article>
      <article class="py-20 text-center bg-gray-200">
        <h1 class="text-4xl">Main Content Here</h1>
        <p class="mx-12">Lorem ipsum dolor sit amet, consectetur adipisicing elt. Dolores iste nula vero cum atque delectus sequi dolore oficia fuga, earum! Blanditisdolorem excepturi nisi, fugiat eius? Blanditiis, enim tenetur magni</p>
      </article>
      <article></article>
      <article></article>
    </main>

  </div>
</template>

<style scoped>

@font-face {
  font-family: "Architects Daughter";
  src: url("../assets/ArchitectsDaughter-Regular.ttf");
}

.positionContainer{
  font-family: "Architects Daughter";
  --figureWidth: 50%;
  --captionWidth: 30%;
  --sideWidth: 8rem;
  --sideHeight: 30rem;
}

figure{
  width: var(--figureWidth);
  height: auto;
}
.figureCaption{
  width: var(--captionWidth);
  top: calc((var(--figureWidth) - var(--captionWidth)/2)/3);
  left: calc(var(--figureWidth) - var(--captionWidth)/2);
}
.leftBox, .rightBox{
  width: var(--sideWidth);
  height: var(--sideHeight);
  background: green;
}
.centerBox{
  width: calc(100% - 2 * var(--sideWidth));
  height: calc(var(--sideHeight) + 2rem);
  margin-left: var(--sideWidth);
  background: crimson;
}
.navLine{
  position: sticky;
  top:0;
}

</style>