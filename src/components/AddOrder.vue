<template>
  <div class="add-order">
    <button class="add-order-plus" @click="toggleForm">+</button>

    <h3 v-if="showOrderForm" class="add-order-title">Add Order</h3>
    <h3 v-else class="add-order-title">Orders / {{ orderCount }}</h3>

    <div v-if="showOrderForm">
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required placeholder="Order title">

        <label for="date">Date:</label>
        <input type="text" id="date" v-model="date" required :placeholder="new Date().toLocaleDateString()">

        <label for="group">Group:</label>
        <input type="text" id="group" v-model="group" required placeholder="group name">

        <label for="products">Products:</label>
        <div v-for="(product, index) in products" :key="product.id" class="item">
          <div class="name">
            <input
              type="checkbox"
              class="checkbox"
              :id="'product-' + index"
              v-model="selectedProducts"
              :value="product.id"
            >
            <label class="label-name" :for="'product-' + index">{{ product.title }}</label>
          </div>

          <div class="wrapper">
            <div class="flex">
                <div class="label">Quantity:</div>
                <input aria-label="Quantity:" type="number" v-model="product.quantity" required class="quantity-input">
            </div>

            <div class="flex">
                <div class="label">Is New:</div>
                <input aria-label="Is New:" type="checkbox" class="isNew checkbox" v-model="product.isNew" checked>
            </div>
          </div>

          <div v-show="false">
          <label for="price">Price:</label>
          <div v-for="(price, pIndex) in product.price" :key="'price-' + pIndex">
            <input
              type="number"
              v-model="price.value"
              min="0"
              step="1"
              required
            >
            <input type="text" v-model="price.symbol" required>
            <input type="checkbox" v-model="price.isDefault" :checked="pIndex === 1">
          </div></div>
        </div>

        <button type="submit" class="add-order-submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createOrder } from '../api/apiService';
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      title: '',
      date: '',
      group: '',
      selectedProducts: [],
    };
  },
  methods: {
    ...mapMutations(['setShowOrderForm']),

    toggleForm() {
      this.setShowOrderForm(!this.showOrderForm);
    },

    async submitForm() {
      const orderData = {
        title: this.title,
        date: this.date,
        group: this.group,
        owner: null,
        products: this.selectedProducts.map(productId => {
          const product = this.products.find(p => p.id === productId);
          return {
            ...product,
            quantity: product.quantity,
            isNew: product.isNew,
          };
        }),
      };

      try {
        const newOrder = await createOrder(orderData);
        console.log('Created order:', newOrder);
        this.title = '';
        this.date = '';
        this.group = '';
        this.selectedProducts = [];
        this.setShowOrderForm(false);
      } catch (error) {
        console.error('Error creating order:', error);
      }
    },
    productTitle(title) {
      return title.length <= 60 ? title : title.slice(0, 60) + '...';
    },
  },
  computed: {
    ...mapState(['products', 'orders']),

    showOrderForm() {
      return this.$store.getters.getShowOrderForm;
    },
    orderCount() {
      return this.orders.length;
    },
  },
};
</script>

<style scoped>

.item {
  padding: 1rem;
  border: 0.2rem dashed var(--color-primary);
  border-radius: 0.2rem;
  margin-bottom: 1rem;
}
.label-name {
  max-width: 80%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  margin: 0.5rem;
}
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 50%;
  justify-content: center;
}

.name {
  display: flex;
  width: 100%;
  height: 4dvh;
  align-items: center;
}

.name .checkbox {
  height: 100%;
}

.inline-input {
  display: inline-flex;
  flex-direction: row;
  max-width: 10dvw;
}

.checkbox {
  display: inline-block;
  width: min-content;
  max-width: 3dvw;
}

.add-order {
  width: 100%;
}

.add-order-title {
  display: inline-block;
  margin-left: 1rem;
}

.rounded-button {
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  border: 10% solid var(--color-secondary);
}

#products {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.option {
  width: 100%;
  max-width: 100%;
  display: flex;
  overflow-x: hidden;
}

.add-order {
  margin-bottom: 20px;
}

.add-order-plus {
  background-color: var(--color-primary);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  width: 40px;
  height: 40px;
}

.add-order-submit {
  width: 100%;
  border-radius: 0.5rem;
  background-color: var(--color-primary);
  border-color: var(--color-secondary);
  color: white;
}

.add-order form {
  margin-top: 10px;
}
.add-order label {
  display: block;
  margin-top: 10px;
}
.add-order input {
  width: 100%;
  padding: 5px;
}

.quantity-input {
  display: inline-flex;
  margin-left: 0.5rem;
}

@media (max-width: 720px) {

  .name {
    font-size: 75%;
  }
  .add-order {
    padding: 0 1rem;
  }

  .add-order-title {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .item {
    padding: 0.75rem;
    margin-bottom: 0.75rem;
    height: 35dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .label-name {
    max-width: 75%;
  }

  .name .checkbox {
    max-width: 3rem;
  }

  .flex {
    width: 60%;
    flex-direction: column;
  }

  .add-order-submit {
    font-size: 1rem;
  }
}
</style>