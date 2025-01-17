// Vue.js application
const app = Vue.createApp({
    data() {
        return {
            products: [] // Array to hold product data
        };
    },
    mounted() {
        // Fetch the product data when the Vue app is initialized
        fetch('products.json')
            .then(response => {
                // Log fetch response for debugging
                console.log('Fetch response:', response);
                if (!response.ok) {
                    throw new Error('Failed to fetch products.json');
                }
                return response.json();
            })
            .then(data => {
                // Assign fetched data to Vue's products array
                this.products = data;
                console.log('Products loaded:', this.products);
            })
            .catch(error => console.error('Error loading products:', error));
    }
});

// Mount the Vue app to the element with ID 'app'
app.mount('#app');