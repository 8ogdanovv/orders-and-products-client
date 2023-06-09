<template>
  <div class="order" @click="toggleView">
    <h5 class="order-title">{{ order.title }}</h5>

    <p class="order-description">{{ order.description }}</p>

    <div class="info-short">
      <div class="quantity">
        <img src="../assets/List-Icon.svg.png" alt="list icon" class="list-icon">
        <p class="quantity-number">{{ getQuantity }}</p>
      </div>

      <div class="order-date">{{ formattedDate }}</div>
      <div class="orders-sum">
        <div
          :class="['orders-sum-USD', { bold: order.products[0].price[0].isDefault === 1 }]"
        >
          ${{ priceUSD }}
        </div>

        <div
          :class="['orders-sum-UAH', { bold: order.products[0].price[1].isDefault === 1 }]"
        >
          {{ priceUAH }}₴
        </div>
      </div>
    </div>
    <button class="delete-order" @click="emitShowDeletePrompt" >
      <img src="../assets/trash-icon.png" alt="delete order" class="delete-order-icon">
    </button>
  </div>
</template>

<script>
import { formatDate } from '../utils/helpers';
import Products from '../pages/Products.vue';
import { mapMutations } from 'vuex';

export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  components: {
    Products,
  },
  data() {
    return {
      orderId: null,
      detailedView: false,
    };
  },
  computed: {
    formattedDate() {
      return formatDate(new Date(this.order.date));
    },
    getQuantity() {
      return this.order.products.reduce((all, {quantity}) => all + quantity, 0);
    },
    priceUSD() {
      return this.order.products.reduce((all, p) => all + (p.quantity * p.price[0].value), 0);
    },
    priceUAH() {
      return this.order.products.reduce((all, p) => all + (p.quantity * p.price[1].value), 0);
    },
  },
  methods: {
    ...mapMutations(['setShowDeleteWindow']),
    toggleView() {
      this.detailedView = !this.detailedView;
    },
    emitShowDeletePrompt() {
      this.$emit('show-delete-prompt', this.order);
      this.setShowDeleteWindow(true);
    },
  },
  watch: {
    order: {
      immediate: true, // Run the watcher immediately when the component is created
      handler(newValue) {
        this.orderId = newValue.id; // Update the orderId data property when the order prop changes
      },
    },
  },
  updated() {}
};
</script>

<style>
.delete-order {
  width: 2rem;
  height: 2rem;
  display: flex;
  border: none;
  align-items: center;
  background-color: transparent;
  justify-content: center;
}

.delete-order:hover {
  background-color: #0008;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0.5rem gray;
  transition: all 500ms;
}

.delete-order-icon {
  width: 2rem;
  height: 2rem;
}

.delete-order-icon:hover {
  box-shadow: 0 0 1rem gray;
  transition: all 500ms;
}

.bold {
  font-weight: 600;
  opacity: 0.8;
}
.order {
  display: flex;
  align-items: center;
  max-height: 12dvh;
  cursor: pointer;
  gap: 1rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.5s;
  padding: 0.5dvh;
}

.order:hover {
  box-shadow: 0 0 2.5rem #00000088;
  transform: scale(1.05);
}

.order-title {
  width: 50%;
  display: flex;
  align-items: center;
  text-decoration: underline;
  text-decoration-color: gray;
  margin: 0.5rem;
}

.orders-sum {
  display: flex;
  flex-direction: column;
  height: 10dvh;
  width: 6dvw;
  justify-content: center;
  align-items: center;
  gap: 1dvh;
}

.info-short {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.list-icon {
  width: 3dvh;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-number {
  height: 3dvh;
  font-size: 2dvh;
  line-height: 3dvh;
  position: relative;
  top: 0.5dvh;
}

.order-date {
  width: max-content;
  font-size: 1.5dvh;
  position: relative;
  bottom: 0.25dvh;
}

</style>