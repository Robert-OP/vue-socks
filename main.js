Vue.component('product', {
  props: {
    premium: Boolean,
    required: true
  },
  template: `
  <div class="product">
  <div class="product-image">
    <img v-bind:src="image" />
  </div>

  <div class="product-info">
    <h1>{{ title = brand + ' ' + product }}</h1>
    <p v-show="!inStock">Out of Stock</p>
    <p>Shipping {{ shipping() }}</p>
    <p v-show="onSale">On Sale !</p>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>

    <div
      v-for="variant in variants"
      :key="variant.variantId"
      class="color-box"
      :style="{backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(variant.variantImage)"
    ></div>

    <button
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton: !inStock}"
    >
      Add to Cart
    </button>
    <div class="cart" v-on:click="removeFromCart">
      <p>Cart({{ cart }})</p>
    </div>
  </div>
</div>
    `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      inStock: false,
      onSale: true,
      image: './assets/vmSocks-green-onWhite.jpg',
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg'
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg'
        }
      ],
      size: ['37', '39', '40', '41', '42', '43'],
      cart: 0
    };
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    removeFromCart: function() {
      this.cart > 0 ? (this.cart -= 1) : null;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return '2.99';
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
});
