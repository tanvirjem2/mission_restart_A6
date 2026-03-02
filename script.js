// --------------------------------------------------------------------
// --- Part - 2

const loadAllProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

// --------------------------------------------------------------------


// --------------------------------------------------------------------
// --- Part - 1

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

const loadCategoryProducts = category => {
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryProducts(data))
}

const displayCategoryProducts = (products) => {
    console.log(products)
}

// --------------------------------------------------------------------



// --- Load Categories ---
loadCategories();