<template>
  <div class="add-product">
    <button @click="toggleForm" class="add-product-plus">+</button>

    <h3 v-if="showAddProduct" class="add-product-title">Add Product</h3>
    <h3 v-else class="add-product-title">Products  / {{ this.products.length }}</h3>
    <div v-if="showAddProduct">

      <form @submit.prevent="submitForm">
        <label for="serialNumber">Serial Number:</label>
        <input type="text" id="serialNumber" v-model="serialNumber" required>

        <label for="photo">Photo URL:</label>
        <input type="text" id="photo" v-model="photo" required>

        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required>

        <label for="type">Type:</label>
        <input type="text" id="type" v-model="type" required>

        <label for="specification">Specification:</label>
        <input type="text" id="specification" v-model="specification" required>

        <label for="priceValueUSD">Price (USD):</label>
        <input type="number" id="priceValueUSD" v-model="priceValueUSD" required>

        <label for="priceValueUAH">Price (UAH):</label>
        <input type="number" id="priceValueUAH" v-model="priceValueUAH" required>

        <button type="submit" class="submit-add">Add Product</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createProduct } from '../api/apiService';
import { mapMutations } from 'vuex';

export default {
  props: {
    products: Array,
  },
  data() {
    return {
      serialNumber: '',
      photo: '',
      title: '',
      type: '',
      specification: '',
      priceValueUSD: '',
      priceValueUAH: '',
    };
  },
  methods: {
    ...mapMutations(['setShowAddProduct']), // Import the `setShowAddProduct` mutation from the global storage

    toggleForm() {
      this.setShowAddProduct(!this.showAddProduct); // Update the `showAddProduct` value in the global storage
    },

    async submitForm() {
      const productData = {
        serialNumber: this.serialNumber,
        photo: this.photo,
        title: this.title,
        type: this.type,
        specification: this.specification,
        price: [
          {
            value: this.priceValueUSD,
            symbol: 'USD',
            isDefault: 0,
          },
          {
            value: this.priceValueUAH,
            symbol: 'UAH',
            isDefault: 1,
          },
        ],
      };

      try {
        const newProduct = await createProduct(productData);
        console.log('Created product:', newProduct);
        // Reset form fields
        this.serialNumber = '';
        this.photo = '';
        this.title = '';
        this.type = '';
        this.specification = '';
        this.priceValueUSD = '';
        this.priceValueUAH = '';
        this.setShowAddProduct(false); // Hide the form after successful submission
      } catch (error) {
        console.error('Error creating product:', error);
      }
    },
  },
  computed: {
    showAddProduct() {
      return this.$store.getters.getShowAddProduct; // Get the `showAddProduct` value from the global storage
    },
  },
};
</script>

<style>
.add-product {
  margin-bottom: 20px;
  width: 100%;
}

.add-product-title {
  display: inline-block;
  margin-left: 1rem;
}
.add-product-plus {
  background-color: var(--color-primary);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  width: 40px;
  height: 40px;
}
.add-product form {
  margin-top: 10px;
}
.add-product label {
  display: block;
  margin-top: 10px;
}
.add-product input {
  width: 100%;
  padding: 5px;
}

.submit-add {
  border-radius: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  color: white;
  background-color: var(--color-primary);
  border-color: var(--color-secondary);
}
</style>