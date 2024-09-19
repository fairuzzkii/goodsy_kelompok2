document.addEventListener("DOMContentLoaded", function() {
    console.log("Halaman loaded");
    getProduct();   
})

function getProduct(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json )
    .then(data=>{
        var container = document.querySelector('#product_container');
        data.array.forEach(element => {
        });
    })
}