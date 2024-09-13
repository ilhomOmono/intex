const addProductBtn = document.getElementById('addProductBtn');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable');

// Mahsulot qo'shish tugmasi bosilganda modal oynani ko'rsatish
addProductBtn.addEventListener('click', () => {
    productModal.classList.remove('hidden');
});

// Modal oynani yopish
closeModal.addEventListener('click', () => {
    productModal.classList.add('hidden');
});

// Mahsulotlar ro'yxati
let products = [];

// Mahsulot qo'shish formasi topshirilganda yangi mahsulot qo'shish
productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = {
        name: document.getElementById('productName').value,
        price: document.getElementById('productPrice').value,
        quantity: document.getElementById('productQuantity').value,
        frame: document.getElementById('productFrame').value,
        size: document.getElementById('productSize').value,
        depth: document.getElementById('productDepth').value,
        image: 'https://via.placeholder.com/50' // Placeholder image
    };

    products.push(newProduct);
    renderProducts();
    productModal.classList.add('hidden');
    productForm.reset();
});

// Mahsulotlarni jadvalga chiqarish
function renderProducts() {
    productTable.innerHTML = '';
    products.forEach((product, index) => {
        productTable.innerHTML += `
            <tr>
                <td class="border py-2 px-4"><img src="${product.image}" alt="product" class="w-12 h-12"></td>
                <td class="border py-2 px-4">${product.price}</td>
                <td class="border py-2 px-4">${product.quantity}</td>
                <td class="border py-2 px-4">${product.frame}</td>
                <td class="border py-2 px-4">${product.size}</td>
                <td class="border py-2 px-4">${product.depth}</td>
                <td class="border py-2 px-4 flex items-center">
                    <button onclick="deleteProduct(${index})" class="text-red-500 hover:text-red-600">🗑️</button>
                    <button class="text-teal-500 hover:text-teal-600 ml-2">✏️</button>
                </td>
            </tr>
        `;
    });
}

// Mahsulotni o'chirish
function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

// Dastlabki mahsulotlarni ko'rsatish
renderProducts();
