// Lenovo Products Data
const products = [
    {
        id: 1,
        name: "ThinkPad X1 Carbon Gen 10",
        category: "thinkpad",
        price: 1499.99,
        originalPrice: 1699.99,
        rating: 4.8,
        reviews: 124,
        image: "https://via.placeholder.com/300x200?text=ThinkPad+X1+Carbon",
        specs: {
            processor: "Intel Core i7-1260P",
            ram: "16GB LPDDR5",
            storage: "512GB PCIe SSD",
            display: "14\" WUXGA (1920x1200) IPS, 400 nits",
            graphics: "Intel Iris Xe",
            weight: "2.48 lbs (1.12 kg)",
            os: "Windows 11 Pro"
        },
        description: "The ThinkPad X1 Carbon Gen 10 is the ultimate business laptop with military-grade durability, powerful performance, and exceptional battery life in a lightweight package.",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Yoga 9i Gen 7",
        category: "yoga",
        price: 1299.99,
        originalPrice: 1499.99,
        rating: 4.7,
        reviews: 98,
        image: "https://via.placeholder.com/300x200?text=Yoga+9i+Gen+7",
        specs: {
            processor: "Intel Core i7-1260P",
            ram: "16GB LPDDR5",
            storage: "1TB PCIe SSD",
            display: "14\" 4K OLED, 400 nits, HDR 500",
            graphics: "Intel Iris Xe",
            weight: "3.09 lbs (1.4 kg)",
            os: "Windows 11 Home"
        },
        description: "The Yoga 9i is a premium 2-in-1 convertible laptop with a stunning OLED display, rotating soundbar hinge, and all-day battery life.",
        badge: "New"
    },
    {
        id: 3,
        name: "Legion 7i Gen 7",
        category: "legion",
        price: 2199.99,
        originalPrice: 2499.99,
        rating: 4.9,
        reviews: 156,
        image: "https://via.placeholder.com/300x200?text=Legion+7i+Gen+7",
        specs: {
            processor: "Intel Core i9-12900HX",
            ram: "32GB DDR5",
            storage: "1TB PCIe SSD + 1TB PCIe SSD",
            display: "16\" WQXGA (2560x1600) IPS, 165Hz, 500 nits",
            graphics: "NVIDIA RTX 3080 Ti 16GB",
            weight: "5.5 lbs (2.5 kg)",
            os: "Windows 11 Home"
        },
        description: "The Legion 7i is a powerhouse gaming laptop with desktop-class performance, advanced cooling, and a high-refresh-rate display for competitive gaming.",
        badge: "Hot Deal"
    },
    {
        id: 4,
        name: "IdeaPad Slim 7 Carbon",
        category: "ideapad",
        price: 999.99,
        originalPrice: 1199.99,
        rating: 4.5,
        reviews: 87,
        image: "https://via.placeholder.com/300x200?text=IdeaPad+Slim+7+Carbon",
        specs: {
            processor: "AMD Ryzen 7 5800U",
            ram: "16GB LPDDR4X",
            storage: "512GB PCIe SSD",
            display: "14\" 2.8K (2880x1800) OLED, 400 nits",
            graphics: "AMD Radeon Graphics",
            weight: "2.37 lbs (1.1 kg)",
            os: "Windows 11 Home"
        },
        description: "The IdeaPad Slim 7 Carbon combines premium design with AMD performance in an ultra-lightweight chassis featuring a stunning OLED display.",
        badge: null
    },
    {
        id: 5,
        name: "ThinkPad X1 Yoga Gen 7",
        category: "thinkpad",
        price: 1599.99,
        originalPrice: 1799.99,
        rating: 4.6,
        reviews: 76,
        image: "https://via.placeholder.com/300x200?text=ThinkPad+X1+Yoga+Gen+7",
        specs: {
            processor: "Intel Core i7-1260P",
            ram: "16GB LPDDR5",
            storage: "1TB PCIe SSD",
            display: "14\" WUXGA (1920x1200) IPS Touch, 400 nits",
            graphics: "Intel Iris Xe",
            weight: "2.99 lbs (1.36 kg)",
            os: "Windows 11 Pro"
        },
        description: "The ThinkPad X1 Yoga is a premium convertible business laptop with a 360-degree hinge, garaged pen, and military-grade durability.",
        badge: null
    },
    {
        id: 6,
        name: "Legion 5 Pro Gen 7",
        category: "legion",
        price: 1499.99,
        originalPrice: 1699.99,
        rating: 4.7,
        reviews: 112,
        image: "https://via.placeholder.com/300x200?text=Legion+5+Pro+Gen+7",
        specs: {
            processor: "AMD Ryzen 7 6800H",
            ram: "16GB DDR5",
            storage: "1TB PCIe SSD",
            display: "16\" WQXGA (2560x1600) IPS, 165Hz, 500 nits",
            graphics: "NVIDIA RTX 3070 Ti 8GB",
            weight: "5.4 lbs (2.45 kg)",
            os: "Windows 11 Home"
        },
        description: "The Legion 5 Pro offers exceptional gaming performance with AMD processors and NVIDIA graphics in a 16:10 QHD display for immersive gameplay.",
        badge: "Popular"
    },
    {
        id: 7,
        name: "Yoga Slim 7i Pro X",
        category: "yoga",
        price: 1399.99,
        originalPrice: 1599.99,
        rating: 4.4,
        reviews: 65,
        image: "https://via.placeholder.com/300x200?text=Yoga+Slim+7i+Pro+X",
        specs: {
            processor: "Intel Core i7-12700H",
            ram: "16GB LPDDR5",
            storage: "1TB PCIe SSD",
            display: "14.5\" 3K (3072x1920) IPS, 120Hz, 400 nits",
            graphics: "NVIDIA RTX 3050 4GB",
            weight: "3.31 lbs (1.5 kg)",
            os: "Windows 11 Home"
        },
        description: "The Yoga Slim 7i Pro X is a content creator's dream with a high-resolution display, powerful specs, and NVIDIA graphics in a slim form factor.",
        badge: null
    },
    {
        id: 8,
        name: "IdeaPad Gaming 3",
        category: "ideapad",
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.3,
        reviews: 143,
        image: "https://via.placeholder.com/300x200?text=IdeaPad+Gaming+3",
        specs: {
            processor: "AMD Ryzen 5 6600H",
            ram: "8GB DDR5",
            storage: "512GB PCIe SSD",
            display: "15.6\" FHD (1920x1080) IPS, 120Hz, 250 nits",
            graphics: "NVIDIA RTX 3050 4GB",
            weight: "5.07 lbs (2.3 kg)",
            os: "Windows 11 Home"
        },
        description: "The IdeaPad Gaming 3 delivers great gaming performance at an affordable price with AMD processors and NVIDIA graphics.",
        badge: "Budget Pick"
    }
];

// Display Products
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                <h4 class="mb-3">No products found</h4>
                <p class="text-muted">Try adjusting your search or filter to find what you're looking for.</p>
                <button class="btn btn-primary" id="reset-filters">Reset Filters</button>
            </div>
        `;

        document.getElementById('reset-filters').addEventListener('click', () => {
            displayProducts(products);
            document.querySelectorAll('.dropdown-item[data-filter="all"]').forEach(item => {
                item.click();
            });
        });
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-price', product.price);
        productCard.setAttribute('data-rating', product.rating);
        productCard.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-body">
                <span class="product-category">${formatCategory(product.category)}</span>
                <h5 class="product-title">${product.name}</h5>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <small class="text-muted ms-2">(${product.reviews})</small>
                </div>
                <button class="btn btn-sm btn-primary w-100 add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="btn btn-sm btn-outline-secondary w-100 mt-2 view-details" data-id="${product.id}">View Details</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        });
    });

    // Add event listeners to "View Details" buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });

    // Add click event to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.querySelector('.view-details').getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
}

// Format category for display
function formatCategory(category) {
    const categories = {
        'thinkpad': 'ThinkPad Series',
        'yoga': 'Yoga Series',
        'legion': 'Legion Series',
        'ideapad': 'IdeaPad Series'
    };
    return categories[category] || category;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');
    
    modalTitle.textContent = product.name;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" alt="${product.name}" class="img-fluid product-modal-img">
                <div class="d-flex gap-2 mb-4">
                    <button class="btn btn-primary flex-grow-1 add-to-cart" data-id="${product.id}" id="modal-add-to-cart">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-outline-secondary">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <span class="badge bg-primary">${formatCategory(product.category)}</span>
                        ${product.badge ? `<span class="badge bg-success ms-2">${product.badge}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <small class="text-muted">(${product.reviews} reviews)</small>
                    </div>
                </div>
                
                <h3 class="mb-3">$${product.price.toFixed(2)}</h3>
                ${product.originalPrice ? `<p class="text-muted"><del>$${product.originalPrice.toFixed(2)}</del> <span class="text-success">(${Math.round((1 - product.price / product.originalPrice) * 100)}% off)</span></p>` : ''}
                
                <p class="mb-4">${product.description}</p>
                
                <h5 class="mb-3">Specifications</h5>
                <ul class="specs-list">
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <li>
                            <span class="spec-label">${key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}:</span>
                            <span>${value}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    // Initialize modal
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();

    // Add event listener to modal's "Add to Cart" button
    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
        addToCart(product);
        productModal.hide();
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Sort products
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        case 'featured':
        default:
            // Default sorting (by rating)
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    displayProducts(sortedProducts);
}

// Search products
function searchProducts(query) {
    if (!query.trim()) {
        displayProducts(products);
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const searchedProducts = products.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) || 
        product.description.toLowerCase().includes(lowerQuery) ||
        formatCategory(product.category).toLowerCase().includes(lowerQuery)
    );
    
    displayProducts(searchedProducts);
}

// Initialize product display when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    
    // Category filter event listeners
    document.querySelectorAll('[data-filter]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = item.getAttribute('data-filter');
            filterProducts(category);
            
            // Update dropdown text
            if (item.classList.contains('dropdown-item')) {
                document.getElementById('navbarDropdown').textContent = item.textContent;
            }
        });
    });
    
    // Sort dropdown event listeners
    document.querySelectorAll('[data-sort]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sortBy = item.getAttribute('data-sort');
            sortProducts(sortBy);
            document.getElementById('sortDropdown').textContent = `Sort By: ${item.textContent}`;
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', () => {
        searchProducts(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });
});