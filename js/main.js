//Создание шаблона товаров

const productsData = [
    {
        srcImage: "./images/product-photo1.png",
        altImage: "Product 1",
        name: "Футболка USA",
        oldPrice: "229",
        price: "129",
    },
    {
        srcImage: "./images/product-photo2.png",
        altImage: "Product 2",
        name: "Купальник Glow",
        price: "129",
    },
    {
        srcImage: "./images/product-photo3.png",
        altImage: "Product 3",
        name: "Свитшот Sweet Shot",
        price: "129",
    },
];

const products = document.querySelector('.products');


productsData.forEach(productData => {
    const productCard = document.createElement("div");
    productCard.classList.add("products__card");

    const productImageBox = document.createElement("div");
    productImageBox.classList.add("products__image-box");

    const productImage = document.createElement("img");
    productImage.src = productData.srcImage;
    productImage.alt = productData.altImage;
    productImage.classList.add("products__image");

    const productName = document.createElement("h4");
    productName.classList.add("products__name");
    productName.textContent = productData.name;

    const productPriceBox = document.createElement("div");
    productPriceBox.classList.add("products__price-box");

    if (productData.oldPrice) {
        const productPriceOld = document.createElement("p");
        productPriceOld.textContent = productData.oldPrice;
        productPriceOld.classList.add("products__price_old");
        productPriceBox.appendChild(productPriceOld);
    }

    const productPrice = document.createElement("p");
    productPrice.textContent = productData.price;
    productPrice.classList.add("products__price");

    products.appendChild(productCard);
    productCard.appendChild(productImageBox);
    productImageBox.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPriceBox);
    productPriceBox.appendChild(productPrice);
});
