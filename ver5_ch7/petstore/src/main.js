// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 이건 파일
import router from './router' // router 파일이 없으니 이건 폴더 >> 폴더 안에 index.js 가 있음
// 컴파일 할때 이걸 쓴다는 의미 
// html에서는 파일이 없으면 그냥 무시하고 실행되지만 
// js에서는 없으면 컴파일 에러가 뜸
require('./assets/app.css') 

Vue.config.productionTip = false

/* eslint-disable no-new 
   최상위 vue 객체
*/
new Vue({
  el: '#app',
  // router = router 의 단축 표현법
  router,
  components: { App },
  // 탬플릿이 vue객체 안에 있는 것은 vue도 일종의 컴포넌트다.
  // 아래 App을 
  // 위에 컴포넌트에 넣는다.
  template: '<App/>'
})
