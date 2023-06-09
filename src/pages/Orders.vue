<template>
  <div class="orders">
    <div class="orders-head">
      <AddOrder />
    </div>

    <div v-for="order in orders" :key="order.id">
      <Order :order="order" :key="order.id" @show-delete-prompt="showDeletePrompt" />
    </div>

    <DeleteOrderPrompt
      v-if="showDeleteWindow"
      :order="selectedOrder"
      @delete-confirmed="handleDeleteOrder"
      @delete-canceled="cancelDelete"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import Order from '../components/Order.vue';
import DeleteOrderPrompt from '../components/DeleteOrderPrompt.vue';
import AddOrder from '../components/AddOrder.vue';

// Create a simple event bus using the Vue 3 Composition API
const eventBus = {
  callbacks: {},
  on(event, callback) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(callback);
  },
  off(event, callback) {
    if (this.callbacks[event]) {
      this.callbacks[event] = this.callbacks[event].filter((cb) => cb !== callback);
    }
  },
  emit(event, payload) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach((callback) => callback(payload));
    }
  },
};

export default {
  components: {
    Order,
    DeleteOrderPrompt,
    AddOrder,
  },
  setup() {
    const showDeleteWindow = ref(false);
    const selectedOrder = ref(null);

    const store = useStore();
    const orders = computed(() => store.state.orders);

    const fetchOrders = async () => {
      try {
        await store.dispatch('fetchOrders');
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const updateOrderStatus = async (orderId, status) => {
      try {
        const updatedOrder = await updateOrder(orderId, { status });
        console.log('Updated order:', updatedOrder);
        eventBus.emit('orders-updated');
      } catch (error) {
        console.error('Error updating order:', error);
      }
    };

    const deleteOrderById = async (orderId) => {
      try {
        const deletedOrder = await deleteOrder(orderId);
        console.log('Deleted order:', deletedOrder);
        eventBus.emit('orders-updated');
      } catch (error) {
        console.error('Error deleting order:', error);
      }
    };

    const showDeletePrompt = (order) => {
      selectedOrder.value = order;
      showDeleteWindow.value = true;
    };

    const handleDeleteOrder = (orderId) => {
      console.log('Deleting order with ID:', orderId);
      deleteOrderById(orderId);
      showDeleteWindow.value = false;
    };

    const cancelDelete = () => {
      showDeleteWindow.value = false;
    };

    onMounted(() => {
      fetchOrders();
      eventBus.on('orders-updated', ordersUpdatedListener);
    });

    onBeforeUnmount(() => {
      eventBus.off('orders-updated', ordersUpdatedListener);
    });

    const ordersUpdatedListener = () => {
      fetchOrders();
    };

    return {
      orders,
      showDeleteWindow,
      selectedOrder,
      fetchOrders,
      updateOrderStatus,
      deleteOrderById,
      showDeletePrompt,
      handleDeleteOrder,
      cancelDelete,
    };
  },
};
</script>


<style>
.orders-head {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.orders {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.orders-add {
  box-sizing: border-box;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-primary);
  border: 0.2rem solid var(--color-secondary);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orders-add-plus {
  display: inline-block;
  height: 1.8rem;
  color: white;
  font-size: 1.6rem;
  line-height: 1.6rem;
  transition: all 0.5s;
}

.orders-add:hover {
  box-shadow: inset 0 0 0.75rem 1rem var(--color-secondary);
  transform: scale(1.5);
  transition: all 0.5s;
}

.orders-add:hover .orders-add-plus {
  text-shadow: 0 0 0.5rem white;
  transform: scale(1.5);
  transition: all 0.5s;
}

@media (max-width: 320px) {
  .orders-add {
    width: 1.5rem;
    height: 1.5rem;
  }

  .orders-add-plus {
    font-size: 1.2rem;
    height: 1.4rem;
    line-height: 1.4rem;
  }
}

@media (max-width: 480px) {
  .orders-head {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .orders-add {
    width: 1.75rem;
    height: 1.75rem;
  }

  .orders-add-plus {
    font-size: 1.4rem;
    height: 1.6rem;
    line-height: 1.6rem;
  }
}
</style>
