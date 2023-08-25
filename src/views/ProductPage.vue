<template>
  <!-- Image -->
  <div class="relative flex h-[240px]">
    <img class="object-cover"
      src="https://cdn.makane.com/cdn-cgi/image/background=%23ffffff,width=850,height=1133,quality=80,fit=scale-down,format=auto/20210613-store-ta4n/products/14001369/54727232.jpg" />
  </div>
  <!-- Menu Item -->
  <div class="my-2 px-2">
    <div class="p-8">
      <div class="flex flex-wrap items-start justify-between">
        <div class="flex flex-col space-y-3">
          <h1 class="text-2xl text-lightWhite-50">{{ item.name }}</h1>
          <p class="text-lg text-lightWhite-100">{{ item.description }}</p>
        </div>
        <div class="flex flex-col justify-start text-lightWhite-50 mt-2">
          <p>{{ item.price }} JD</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Quantity -->
  <div class="border-t-2 border-t-blackGrey-50 flex items-center justify-between p-10">
    <span class="text-lg text-lightWhite-50">Quantity</span>
    <div class="flex items-center space-x-2">
      <decrement @click="decrementQuantity"></decrement>
      <span class="min-w-[35px] flex items-center justify-center text-lg text-lightWhite-100"> {{ quantity }} </span>
      <increment @click="incrementQuantity"></increment>
    </div>
  </div>
  <!-- Add to Basket -->
  <div class="flex items-center justify-center fixed w-full max-w-[640pt] bottom-0 border-t-2 border-t-blackGrey-50 p-5">
    <button @click="updateCartItem(item.name, quantity, item.price, item.image)"
      class="mx-auto flex text-slate-200 items-center justify-center bg-lightRed rounded-xl p-4 space-x-6 hover:bg-red-900 active:relative active:top-0.5">
      <span>Add to Basket</span>
      <span class="flex items-center text-slate-200"> {{ totalPrice }} JD</span>
    </button>
  </div>
  <backButton></backButton>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useBasketStore } from '../store/basket';
import axios from 'axios';
import router from '../router';
import backButton from '../components/BackButton.vue';
import increment from '../components/Increment.vue';
import decrement from '../components/Decrement.vue';

const route = useRoute();
const item = ref({});

const basketStore = useBasketStore();

// Get item data using route params
onMounted(async () => {
  const productName = route.params.productName;

  try {
    const response = await axios.get(`/api/menu-items/${productName}/`);
    item.value = response.data;
  } catch (error) {
    console.error('Error fetching item data:', error);
  }
});

// counter quantity
const quantity = ref(1)

const incrementQuantity = () => {
  quantity.value++
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// total price used in "add to basket" button
const totalPrice = computed(() => {
  if (item.value.price !== undefined) {
    return (item.value.price * quantity.value).toFixed(2);
  }
  return 0
});
// update basket with cart item
const updateCartItem = (name, quantity, price, image) => {
  basketStore.updateCartItem({ name, quantity, price, image });
  router.push('/');
};
</script>
