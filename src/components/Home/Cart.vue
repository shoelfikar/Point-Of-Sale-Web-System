<template>
  <div class="cart">
    <div class="notif">
      <div class="date-info">
        <p>{{date}}</p>
        <p v-if="cartItems.length !== 0">{{invoice}}</p>
      </div>
      <div class="notif-items">
        <svg class="svg" width="40px" height="40px">
          <use xlink:href="../../assets/img/icon/shopping-cart.svg#shopping-cart"></use>
        </svg>
        <span>{{cartItems.length}}</span>
      </div>
    </div>
    <div class="cart-items">
      <div class="cart-item" v-for="cart in cartItems" :key="cart.id">
        <div class="img-item">
          <img
            :src="cart.data.imageUrl"
            alt=""
            width="90"
          />
        </div>
        <div class="info-item">
          <div class="title-item">
            <p>{{cart.data.name}}</p>
          </div>
          <div class="qty-item">
            <button class="decrement" @click="decrement(cart)">-</button>
            <input type="text" :value="cart.count" disabled />
            <button class="increment" @click="increment(cart)">+</button>
          </div>
        </div>
        <div class="price-item">
          <p>Rp {{cart.data.price * cart.count}}</p>
        </div>
      </div>
      <div class="empty-cart" v-if="cartItems.length === 0">
        <img src="../../assets/img/icon/undraw_empty_xct9.svg" alt="" width="300">
        <h2>Cart is empty</h2>
      </div>
    </div>
    <div class="payment">
      <div class="payment-info">
        <div class="payment-total">
          <p>Total</p>
          <p>Rp.{{total}}</p>
        </div>
        <div class="payment-total">
          <p>PPN</p>
          <p>Rp.{{ppn}}</p>
        </div>
        <div class="payment-total">
          <p>Subtotal</p>
          <p>Rp.{{subTotal}}</p>
        </div>
      </div>
      <div class="payment-aksi">
        <button class="btn-cancel" @click="cancel">Cancel</button>
        <button class="btn-payment">Pay Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Cart",
  computed: {
    ...mapState('product', ['cartItems']),
    ...mapState('product', ['total']),
    ...mapState('product', ['ppn']),
    ...mapState('product', ['subTotal']),
    ...mapState('product', ['invoice']),
    ...mapState('product', ['date'])
  },
  methods: {
    increment(data) {
      this.$store.commit('product/INCREMENT', data);
    },
    decrement(data) {
      this.$store.commit('product/DECREMENT', data)
    },
    totalCart() {
      this.$store.commit('product/TOTAL_CART')
    },
    totalPpn() {
      this.$store.commit('product/PPN')
    },
    totalPayment() {
      this.$store.commit('product/SUB_TOTAL')
    },
    getInvoice() {
      this.$store.commit('product/GET_INVOICE')
    },
    getDate() {
      this.$store.commit('product/GET_DATE')
    },
    cancel() {
      this.$store.commit('product/CANCEL_ORDER')
    }
  },
  mounted () {
    this.getInvoice()
    this.getDate()
  },
  updated () {
    this.totalCart()
    this.totalPpn()
    this.totalPayment()
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/Home/_home.scss";
</style>
