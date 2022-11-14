import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'

Vue.use(Router) // 토글을 사용해서 동작 구현..?


// 옵션 > 객체가 들어감
export default new Router({
  // 경로에 직접 접근
  // url 히스토리
  // 기존엔 뒤로가기 누르면 다른 사이트로 갔는데
  // 같은 vue 안에서 이동 가능
  mode: 'history',
  routes: [
    // 이 순서가 굉장히 중요함.
    // 라우팅은 순서대로 읽혀짐
    {
      // 경로 의미
      // '/' >> helloworld를 출력
      path: '/',
      name: 'imain',
      component: Main,
      props: true, // 속성을 사용할지에 대해
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true,
    },
    {
      // 매개변수를 가진 동적 라우팅
      path: '/product/:id',
      name: 'Id',
      component: Product,
      props: true,
      children: [
          {
            // 서브 컴포넌트
              path: 'edit', // 상대경로여서 '/' 가 없음
              name: 'Edit',
              component: EditProduct,
              props: true
          }
      ]
    },
    {
      // 우리가 만든 페이지가 아닌 다른 경로로 오는 경우
      // 이때는 컴포넌트를 사용하지 않음 >> main으로 보낸다는 의미 (404가 안뜸)
      path: '*',
      redirect: '/'
    }
  ]
})
