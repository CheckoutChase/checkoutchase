// Fetch and display products
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.getElementById('product-grid');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <h2>${product.name}</h2>
                <p>Price: ${product.price}</p>
                <a href="${product.link}" target="_blank">Buy Now</a>
            `;
            productGrid.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error loading products:', error));