// heart of app - plugs into an element of the DOM
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    inventory: 12,
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
    }
  }
});
