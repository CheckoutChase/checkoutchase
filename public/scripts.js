const app = Vue.createApp({
    data() {
        return {
            products: [] // Array to store product data
        };
    },
    methods: {
        fetchProducts() {
            // Fetch the latest product data
            fetch('products.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch products.json');
                    }
                    return response.json();
                })
                .then(data => {
                    this.products = data; // Update Vue state
                    console.log('Products updated:', this.products);
                })
                .catch(error => console.error('Error fetching products:', error));
        }
    },
    mounted() {
        // Initial fetch
        this.fetchProducts();
        // Periodically fetch updates
        setInterval(this.fetchProducts, 10000); // Fetch every 10 seconds
    }
});

// Mount the Vue app
app.mount('#app');