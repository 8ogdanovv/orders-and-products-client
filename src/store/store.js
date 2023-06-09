import { createStore } from 'vuex';
import {
  getProducts,
  getOrders,
  createProduct,
  updateProduct,
  deleteProduct
} from '../api/apiService';

const store = createStore({
  state() {
    return {
      orders: [], // Initialize orders as an empty array
      detailedOrderIds: [], // Array to store detailed order IDs
      selectedLinkId: '', // Single property to store the selected link ID
      showDeleteWindow: false,
      products: [], // Initialize products as an empty array
      showOrderForm: false,
    };
  },
  mutations: {
    addDetailedOrderId(state, id) {
      state.detailedOrderIds.push(id);
    },
    removeDetailedOrderId(state, id) {
      const index = state.detailedOrderIds.indexOf(id);
      if (index > -1) {
        state.detailedOrderIds.splice(index, 1);
      }
    },
    clearDetailedOrderIds(state) {
      state.detailedOrderIds = [];
    },
    setSelectedLinkId(state, id) {
      state.selectedLinkId = id;
    },
    setShowDeleteWindow(state, value) {
      state.showDeleteWindow = value;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setOrders(state, orders) {
      state.orders = orders;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, { productId, updatedProduct }) {
      const index = state.products.findIndex((p) => p.id === productId);
      if (index > -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    deleteProduct(state, productId) {
      const index = state.products.findIndex((p) => p.id === productId);
      if (index > -1) {
        state.products.splice(index, 1);
      }
    },
    setShowAddProduct(state, value) {
      state.showAddProduct = value;
    },
    setShowOrderForm(state, value) {
      state.showOrderForm = value;
    },
    toggleShowDeleteWindow(state) {
      state.showDeleteWindow = !state.showDeleteWindow;
    },
  },
  actions: {
    updateDetailedView({ commit, state }, { id, value }) {
      if (value) {
        commit('addDetailedOrderId', id); // Add the order ID to the detailedOrderIds array in Vuex
      } else {
        commit('removeDetailedOrderId', id); // Remove the order ID from the detailedOrderIds array in Vuex
      }
    },
    toggleShowDeleteWindow({ commit }) {
      commit('toggleShowDeleteWindow');
    },
    async fetchOrders({ commit, state }) {
      if (state.orders.length === 0) {
        try {
          const orders = await getOrders();
          commit('setOrders', orders);
        } catch (error) {
          console.error('Error fetching orders:', error);
          throw error;
        }
      }
    },
    async fetchProducts({ commit, state }) {
      if (state.products.length === 0) {
        try {
          const products = await getProducts();
          commit('setProducts', products);
          return products;
        } catch (error) {
          console.error('Error fetching products:', error);
          throw error;
        }
      } else {
        return state.products;
      }
    },
    async createProduct({ commit }, productData) {
      try {
        const createdProduct = await createProduct(productData);
        commit('addProduct', createdProduct); // Add the created product to the state
        return createdProduct;
      } catch (error) {
        console.error('Error creating product:', error);
        throw error;
      }
    },

    async updateProduct({ commit }, { productId, updatedData }) {
      try {
        const updatedProduct = await updateProduct(productId, updatedData);
        commit('updateProduct', { productId, updatedProduct }); // Update the product in the state
        return updatedProduct;
      } catch (error) {
        console.error('Error updating product:', error);
        throw error;
      }
    },

    async deleteProduct({ commit }, productId) {
      try {
        await deleteProduct(productId);
        commit('deleteProduct', productId); // Delete the product from the state
      } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
      }
    },
  },
  getters: {
    isOrderDetailed: (state) => (id) => {
      return state.detailedOrderIds.includes(id);
    },
    getSelectedLinkId: (state) => () => {
      return state.selectedLinkId;
    },
    isThereDetailed: (state) => () => {
      return state.detailedOrderIds.length !== 0;
    },
    getShowDeleteWindow: (state) => {
      return state.showDeleteWindow;
    },
    getProductDetails: (state) => (id) => {
      const product = state.products.find((p) => p.id === id);

      if (!product) {
        throw new Error(`Product with ID ${id} not found.`);
      }

      return product;
    },
    getProducts(state) {
      return state.products;
    },
    getShowAddProduct(state) {
      return state.showAddProduct;
    },
    getShowOrderForm(state) {
      return state.showOrderForm;
    },
  },
});

export default store;
