<template>
  <div class="products">
    <AddProduct :products="products" />
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { updateProduct, deleteProduct } from '../api/apiService.js';
import Product from '../components/Product.vue';
import AddProduct from '../components/AddProduct.vue';

export default {
  components: {
    Product,
    AddProduct,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.getProducts);

    const fetchProducts = async () => {
      if (products.value.length === 0) {
        try {
          await store.dispatch('fetchProducts');
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };

    const updateProductPrice = async (productId, newPrice) => {
      try {
        const updatedProduct = await updateProduct(productId, { price: newPrice });
        // Handle the updated product data as needed
        console.log('Updated product:', updatedProduct);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    };

    const deleteProductById = async (productId) => {
      try {
        const deletedProduct = await deleteProduct(productId);
        // Handle the deleted product data as needed
        console.log('Deleted product:', deletedProduct);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      updateProductPrice,
      deleteProductById,
    };
  },
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>