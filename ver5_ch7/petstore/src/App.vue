<!-- html 태그 부분
     자식 태그로는 한개의 태그만
     그 안에 여러 태그 ㄱㄱ
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<!-- 스크립트 태그 부분 -->
<script>
export default {
  // main.js 에서 사용한다는 애가 얘임
  name: 'App'
}
</script>

<!-- #app 안에 있는 애들만 적용하는 스타일 태그 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
