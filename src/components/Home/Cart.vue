<template>
  <div class="cart">
    <div class="notif">
      <div class="date-info">
        <p>Monday, 30 - Juli - 2020</p>
        <p>INV1234567</p>
      </div>
      <div class="notif-items">
        <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/notif.svg#notifikasi"></use>
        </svg>
        <span>1</span>
      </div>
    </div>
    <div class="cart-items">
      <div class="cart-item">
        <div class="img-item">
          <img src="https://drive.google.com/uc?export=view&id=1ulOvJmayp3O5fO9bVPG1P93bKZn1Yyxt" alt="" width="90">
        </div>
        <div class="info-item">
          <div class="title-item">
            <p>Nasi Kuning Ayam dibakar</p>
          </div>
          <div class="qty-item">
            <button class="decrement">-</button>
            <input type="text" value="1" disabled>
            <button class="increment">+</button>
          </div>
        </div>
        <div class="price-item">
          <p>Rp 2.500.000</p>
        </div>
      </div>
    </div>
    <div class="payment">
      <div class="payment-info">
        <div class="payment-total">
          <p>Total</p>
          <p>Rp 2.500.000</p>
        </div>
        <div class="payment-total">
          <p>PPN</p>
          <p>Rp. 25.000</p>
        </div>
        <div class="payment-total">
          <p>Subtotal</p>
          <p>Rp 2.225.000</p>
        </div>
      </div>
      <div class="payment-aksi">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-payment">Pay Now</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cart'
  }
</script>

<style lang="scss">
  @import '../../assets/scss/Home/_home.scss';

</style>