<template>
  <div>
    <my-header></my-header>
    <h1>id {{$route.params.id}} 입니다.</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image">
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{product.title}}</h1>
        <p v-html="product.description"></p>
        <p class="price">{{product.price}}</p>
        <!-- 클릭하면 edit 실행 -->
        <button @click="edit">상품 수정</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header.vue'
export default {
  components: { MyHeader },
  data() {
    return {
      product: ''
    }
  },
  methods: {
    edit() {
      // name:Edit로 이동 >> 추가 시켜라
      // 게시판 댓글에 사용
      this.$router.push({name: 'Edit'})
    }
  },
  created: function() {
    axios.get('/static/products.json')
    .then((response) => {
      this.product = response.data.products.filter(data => data.id == this.$route.params.id)[0];
      this.product.image = '/' + this.product.image;
    });
  }
}
</script>
