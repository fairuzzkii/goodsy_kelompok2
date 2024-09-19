document.addEventListener("DOMContentLoaded", function () {
    console.log("halaman sudah di load");
    getProduct();
})

function getProduct(){
    fetch('https://dummyjson.com/products/category/mens-shirts')
    .then(response => response.json())
    .then(data => {var container = document.querySelector('#product_container');
        data.products.forEach(product => {
            product.description = shortText(product.description,70);
            product.title = shortText(product.title,20);
            container.insertAdjacentHTML('beforeend',
                `<div class="card">
                    <div class="card_image">
                        <img src="${product.thumbnail}"
                        alt="product_image">
                    </div>
                    <section>
                        <header>
                            <p class="fwbold">${product.title}</p>
                        </header>
                        <p>${product.description}</p>
                        <button class="bg_red p-2 text_black fwbold border-radius box-shadow" onclick="window.location.href='detail.html'">DETAILS</button>
                    </section>
                </div>`
            );
        });
    })
}

// fetch('https://dummyjson.com/products/category-list')
// .then(res => res.json())
// .then(console.log);
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("halaman sudah di load");
//     getProduct();
// });

// function getProduct() {
//     fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(data => {
//         if (!Array.isArray(data.products)) {
//         console.error('Error: API response data.products is not an array');
//           // Tampilkan pesan kesalahan ke pengguna (opsional)
//         alert('Terjadi kesalahan saat mengambil data produk. Silakan coba lagi nanti.');
//         return;
//         }

//         const container = document.querySelector('#product_container');
//         data.products.forEach(product => {
//           // ... sisanya sama seperti kode sebelumnya ...
//         product.description = shortText(product.description,70);
//         product.title = shortText(product.title,20);
//                 container.insertAdjacentHTML('beforeend',
//                         `<div class="card">
//                         <div class="card_image">
//                                 <img src="${product.image}"
//                                 alt="product_image">
//                             </div>
//                             <section>
//                                 <header>
//                                     <p class="fwbold">${product.title}</p>
//                                 </header>
//                                 <p>${product.description}</p>
//                                 <button class="bg_red p-2 text_black fwbold border-radius box-shadow">DETAILS</button>
//                             </section>
//                         </div>`
//                     )        
//             });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         // Tampilkan pesan kesalahan ke pengguna (opsional)
//         alert('Terjadi kesalahan saat mengambil data produk. Silakan coba lagi nanti.');
//     });
// }

function shortText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + ' ...';
    } else {
        return text;
    }
}
