<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import BlogSection from "./components/BlogSection.vue";
import LoginForm from "./components/LoginForm.vue";
import ResumePage from "./components/ResumePage.vue";
</script>

<template>
  <div class="flex justify-start">
    <router-link to="ResumePage" class="p-1">ResumePage</router-link>
    <router-link to="BlogPage" class="p-1">BlogPage</router-link>
    <router-link to="PseudoPage" class="p-1">PseudoPage</router-link>
    <router-link to="FontSetting" class="p-1">FontSetting</router-link>
    <router-link to="FloatBox" class="p-1">FloatBox</router-link>
    <router-link to="LayoutPractice" class="p-1">LayoutPractice</router-link>
    <router-link to="PositionSetting" class="p-1">PositionSetting</router-link>
    <router-link to="BuildingForms" class="p-1">BuildingForms</router-link>
    <router-link to="ResponsivePage" class="p-1">ResponsivePage</router-link>
    <router-link to="RegisterPage" class="p-1">RegisterPage</router-link>
    <router-link to="ImageProcess" class="p-1">ImageProcess</router-link>
    <router-link to="FloatLayout" class="p-1">FloatLayout</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
</style>
