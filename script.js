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
        btnDiv.innerHTML = `
        <button class="btn rounded-3xl">${category}</button>     
        `
        categoryContainer.append(btnDiv);
    })
}

// --------------------------------------------------------------------



// --- Load Categories ---
loadCategories();