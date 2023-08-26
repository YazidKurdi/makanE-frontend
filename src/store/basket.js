// store.js
import { defineStore } from 'pinia';

export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: [],
    }),
    getters: {
        sumTotal() {
            return this.items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
        },
        itemCount() {
            return this.items.reduce((count, item) => count + item.quantity, 0);
        },
    },
    actions: {
        updateCartItem({ name, quantity, price, image }) {
            const existingItem = this.items.find(i => i.name === name);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({ name, quantity, price, image });
            }

            localStorage.setItem('cart', JSON.stringify(this.items));
        },
        incrementQuantity(name) {
            const existingItem = this.items.find(i => i.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(this.items));
            }
        },
        decrementQuantity(name) {
            const existingItem = this.items.find(i => i.name === name);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                localStorage.setItem('cart', JSON.stringify(this.items));
            }
        },
        removeItem(name) {
            this.items = this.items.filter(i => i.name !== name);
            localStorage.setItem('cart', JSON.stringify(this.items));
        },
        initializeStore() {
            this.items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        },
        clearCartAndStorage() {
            this.items = [];
            localStorage.removeItem('cart');
        }
    },
});
