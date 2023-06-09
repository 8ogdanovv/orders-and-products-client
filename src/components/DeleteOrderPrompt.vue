<template>
  <div class="delete-order-prompt">
    <div class="prompt">
      <h4 class="prompt-title">Are you sure you want to delete this order?</h4>
      <div class="order-details">
        <div class="preview">
          <img :src="productDetails?.picture" alt="preview image" class="preview-image">
        </div>
        <p><strong>Order ID:</strong> {{ order.id }}</p>
        <!-- Add other order details here -->
      </div>
      <div class="buttons">
        <button class="btn-cancel button" @click="cancelDelete">
          Отмена
        </button>
        <button class="delete-order-prompt-close shadow" @click="cancelDelete">
          X
        </button>
        <button class="btn-confirm button" @click="confirmDelete">
          <img src="../assets/trash-icon.png" alt="remove item" class="remove-icon">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const store = useStore();

    const productDetails = () => {
      const productId = props.order.products.length > 0 ? props.order.products[0].id : null;
      if (productId) {
        try {
          return store.getters.getProductDetails(productId);
        } catch (error) {
          console.error('Error fetching product details:', error);
          return null; // or return an empty object
        }
      }
      return null; // or return an empty object
    };

    const updateShowDeleteWindow = () => {
      store.dispatch('toggleShowDeleteWindow');
    };

    const confirmDelete = () => {
      // Emit an event to notify the parent component that deletion is confirmed
      emit('delete-confirmed', props.order.id);
      updateShowDeleteWindow();
    };

    const cancelDelete = () => {
      // Emit an event to notify the parent component that deletion is canceled
      emit('delete-canceled');
      updateShowDeleteWindow();
    };

    return {
      productDetails,
      confirmDelete,
      cancelDelete,
    };
  },
};
</script>

<style scoped>
.prompt-title {
  width: 75%;
  align-self: center;
}
.remove-icon {
  width: 1.5dvh;
}

.button {
  border-radius: 1rem;
}
.buttons {
  background-color: var(--color-primary);
  padding: 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.delete-order-prompt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.delete-order-prompt-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  transform: translate(1rem, -1rem);
  border-radius: 50%;
  border: none;
  font-size: 0.75rem;
}

.prompt {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
  z-index: 1;
}

.buttons {
  margin-top: 20px;
}

.btn-confirm,
.btn-cancel {
  padding: 10px 20px;
  margin: 0 10px;
}

.btn-confirm {
  background-color: red;
  color: #fff;
}

.btn-cancel {
  background-color: #ccc;
}
</style>
