// vue의 전역 컴포넌트는 vue객체 이전에 만들어야함.
// vue 컴포넌트에는 2가지 매개변수가 들어감. 1. 텍스트 2. 객체
Vue.component('my-component', {
    template: `<div>안녕, 전역 컴포넌트로부터<div>`
});