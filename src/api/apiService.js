import axios from 'axios';

const BASE_URL = 'https://rose-dugong-tie.cyclic.app';

const API_ENDPOINTS = {
  ORDERS: `${BASE_URL}/orders`,
  ORDER_DETAILS: (orderId) => `${BASE_URL}/orders/${orderId}`,
  UPDATE_ORDER: (orderId) => `${BASE_URL}/orders/${orderId}`,
  DELETE_ORDER: (orderId) => `${BASE_URL}/orders/${orderId}`,
  PRODUCTS: `${BASE_URL}/products`,
  PRODUCT_DETAILS: (productId) => `${BASE_URL}/products/${productId}`,
  UPDATE_PRODUCT: (productId) => `${BASE_URL}/products/${productId}`,
  DELETE_PRODUCT: (productIndex) => `${BASE_URL}/products/${productIndex}`,
};

export { API_ENDPOINTS };

// Create a new order
const createOrder = async (orderData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.ORDERS, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

const getOrders = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.ORDERS);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

const getOrderDetails = async (orderId) => {
  try {
    const response = await axios.get(API_ENDPOINTS.ORDER_DETAILS(orderId));
    return response.data;
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw error;
  }
};

const updateOrder = async (orderId, updatedData) => {
  try {
    const response = await axios.patch(
      API_ENDPOINTS.UPDATE_ORDER(orderId),
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(API_ENDPOINTS.DELETE_ORDER(orderId));
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};

// Define similar API service functions for other endpoints (e.g., products)

export {
  createOrder,
  getOrders,
  getOrderDetails,
  updateOrder,
  deleteOrder,
  // Add other API service functions here
};

// Create a new product
const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.PRODUCTS, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.PRODUCTS);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(API_ENDPOINTS.PRODUCT_DETAILS(productId));
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.patch(
      API_ENDPOINTS.UPDATE_PRODUCT(productId),
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

const deleteProduct = async (productIndex) => {
  try {
    const response = await axios.delete(
      API_ENDPOINTS.DELETE_PRODUCT(productIndex)
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export {
  createProduct,
  getProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  // Add other API service functions here
};
