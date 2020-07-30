<template>
  <div class="content-menu">
    <div class="list-menu">
      <div class="item">
        <div class="menu-img">
          <img src="https://drive.google.com/uc?export=view&id=1ulOvJmayp3O5fO9bVPG1P93bKZn1Yyxt" alt="">
        </div>
        <div class="menu-price">
          <p>Rp.100.000</p>
        </div>
        <div class="menu-name">
          <img src="https://drive.google.com/uc?export=view&id=1FZg3slUpomIHEBwoOAbIjJ35ju0O2ug8" alt="" width="28">
          <p>Big Double Burger</p>
        </div>
        <div class="review">
          <i class="far fa-eye">Review</i>
          <i class="fas fa-star mr-1">Rating</i>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
  import Pagination from '../Home/Pagination';
  export default {
    name: 'MenuItem',
    components: {
      Pagination
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/Home/_home.scss';

</style>