<script setup >
  import {ref} from "vue";
  import router from "../router/router.js";

  let navData = ref([])
  let experience = ref()
  navData = [{
    itemName:'基本信息',
    itemId: 'self-introduction'
  },{
    itemName: '工作经历',
    itemId: 'experience'
  },{
    itemName: '教育经历',
    itemId: ''
  },{
    itemName: '语言技能',
    itemId: ''
  },{
    itemName: '将项&证书',
    itemId: ''
  }]
  experience = [{
    year: '2014 - 2015',
    description: 'Main responsibilities:\n' +
        'Drafted and maintain the testcases based on the requirement in each sprint\n' +
        'Maintain the API testcases on internal test management platform\n' +
        '\n' +
        'Key Achievements:\n' +
        'Release the app to the appstore of ios and android from 1.2.0 to 1.8.0',
    position: 'Quality Analyst'
  },{
    year: '2016 - 2017',
    description: 'Main responsibilities:\n' +
        'Drafted and maintain the testcases based on the requirement in each sprint\n' +
        'Maintain the API testcases on internal test management platform\n' +
        '\n' +
        'Key Achievements:\n' +
        'Release the app to the appstore of ios and android from 1.2.0 to 1.8.0',
    position: 'Quality Analyst'
  },{
    year: '2018 - 2019',
    description: 'Main responsibilities:\n' +
        'Drafted and maintain the testcases based on the requirement in each sprint\n' +
        'Maintain the API testcases on internal test management platform\n' +
        '\n' +
        'Key Achievements:\n' +
        'Release the app to the appstore of ios and android from 1.2.0 to 1.8.0',
    position: 'Quality Analyst'
  }]
  const jumpToNext = () => {
      router.push('/resumePage')
  }
</script>

<template>
  <nav class="flex justify-center bg-gray-200 align-middle">
    <div class="w-3/5 h-24">
      <ul class="nav-bar flex py-8">
        <li v-for="item in navData" class="inline-block pr-10 text-gray-400 hover:text-stone-950 hover:cursor-pointer ">
          <a v-bind:href="'#' + item.itemId">{{item.itemName}}</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="flex justify-evenly w-full mb-10" id="self-introduction">
    <div class="w-3/5 mt-10">
      <P class="mb-8">Hi, I'm from China</P>
      <div class="w-full ">
        <img src="../assets/WechatIMG22.jpg" alt="My photo" class="outline w-1/6 rounded-full float-left "/>
        <h1 class="text-6xl mb-20">Web Developer</h1>
        <p>
          我在上一份工作中从事xxxx，独立负责多款混合app前端的开发，测试与发版，也负责开发各种前端H5项目；
          我熟悉的技术有:
          首先 ，我掌握了XXX， 曾应用在XXX项目中，开发了XX功能；客户反馈非常好，使得项目XXX，给公司来带了XXX收益；（用数据和案例说话）
          除此之外，XX框架我也非常熟悉，XXX项目都是用到了这个XXX框架
        </p>
      </div>
    </div>
  </div>
  <div class="experience-container flex justify-evenly w-full bg-gray-200" id="experience">
    <div class="w-3/5 flex justify-evenly flex-col py-6">
      <h1 class="text-4xl py-2">工作经历</h1>
      <section v-for="year in experience" class="">
        <div class="year py-2">{{year.year}}</div>
        <div class="description py-2">
          <pre>{{year.description}}</pre>
        </div>
        <div class="position py-2">{{year.position}}</div>
      </section>
    </div>
  </div>
  `<button v-on="jumpToNext()">Next Page</button>
</template>
<style scoped>
.outline {
  shape-outside: circle(25%);
  margin-right: 100px;
  margin-bottom: 50px;
  object-fit: fill;
}
</style>