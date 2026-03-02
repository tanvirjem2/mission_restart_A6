// --------------------------------------------------------------------
// --- Part - 2

const loadAllProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryProducts(data))
}

// --------------------------------------------------------------------


// --------------------------------------------------------------------
// --- Part - 1

// --- 1st part ---

const loadCategories = () => {
    const url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (categories) => {

    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';

    categories.forEach(category => {

        const btnDiv = document.createElement('div');

        const button = document.createElement('button');
        button.className = "btn rounded-3xl";
        button.innerText = category;

        // Professional event listener
        button.addEventListener('click', () => {
            loadCategoryProducts(category);
        });

        btnDiv.appendChild(button);
        categoryContainer.appendChild(btnDiv);
    });
}

// --- 2nd part ---

const loadCategoryProducts = category => {
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryProducts(data))
}

const displayCategoryProducts = (products) => {

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {

        const productCard = document.createElement('div');
        productCard.innerHTML = `
                    <div class="group 
                bg-white 
                rounded-2xl
                h-full 
                shadow-md 
                hover:shadow-2xl 
                transition 
                duration-300 
                overflow-hidden 
                max-w-sm mx-auto">

                <!-- Product Image -->
                <div class="overflow-hidden">
                    <img class="w-full h-64 sm:h-72 md:h-80 object-contain p-6 group-hover:scale-105 transition duration-300"
                        src="${product.image}" alt="Product Image">
                </div>

                <!-- Card Body -->
                <div class="p-6 space-y-4">

                    <!-- Category + Rating -->
                    <div class="flex items-center justify-between">

                        <!-- Category Badge -->
                        <p class="text-xs sm:text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full px-3 py-1">
                            ${product.category}
                        </p>

                        <!-- Rating -->
                        <div class="flex items-center gap-1 text-sm">
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <span class="font-medium">${product.rating.rate}</span>
                            <span class="text-gray-500">(${product.rating.count})</span>
                        </div>

                    </div>

                    <!-- Product Title -->
                    <h2 class="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
                        ${product.title}
                    </h2>

                    <!-- Price -->
                    <p class="text-xl sm:text-2xl font-bold text-gray-900">
                        $${product.price}
                    </p>

                    <!-- Buttons -->
                    <div class="flex gap-3 pt-2">

                        <button onclick="" class="flex-1 btn btn-outline hover:bg-gray-100">
                            <i class="fa-regular fa-eye"></i>
                            Details
                        </button>

                        <button class="flex-1 btn btn-primary">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add
                        </button>

                    </div>

                </div>

            </div>
        `

        productContainer.append(productCard);
    })
}

// --------------------------------------------------------------------



// --- Load Categories ---
loadCategories();