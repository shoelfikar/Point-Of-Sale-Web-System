<template>
  <div class="content-menu">
    <div class="list-menu">
      <div class="item" v-for="item in allProduct" :key="item.id">
        <div class="menu-img">
          <img
            :src="item.imageUrl"
            alt=""
          />
        </div>
        <div class="menu-price">
          <p>Rp.{{item.price}}</p>
        </div>
        <div class="menu-name">
          <p>{{item.name}}</p>
        </div>
        <div class="category-menu">
          <p>{{item.merchant.outlet.category.name}}</p>
        </div>
        <div class="review">
          <i class="far fa-eye"> {{item.review}}</i>
          <i class="fas fa-star" v-for="star in item.rating" :key="star.id"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "MenuItem",
  data (){
    return {
      product: this.allProduct
    }
  },
  components: {
  },
  computed: {
    ...mapState('product', ['allProduct']),
  },
  methods: {
    ...mapActions('product', ['getAllMenu'])
  },
  mounted () {
    this.getAllMenu(localStorage.token)
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/Home/_home.scss";
</style>
