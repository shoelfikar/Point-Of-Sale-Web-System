<template>
  <div class="category hide">
    <div class="category-menu">
      <div class="category-item" v-for="cat in allCategory" :key="cat.id">
        <div class="img-category">
          <img :src="cat.imageUrl" alt="" width="35">
        </div>
        <p>{{cat.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'Category',
    computed: {
      ...mapState('category', ['allCategory'])
    },
    methods: {
      ...mapActions('category', ['getAllCategory'])
    },
     mounted () {
    this.getAllCategory(localStorage.token)
  }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/Home/_home.scss";
  
</style>