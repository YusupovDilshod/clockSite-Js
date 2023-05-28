const data = [
    {
        id: 1,
        name: "Invicta Mens's Pro Drivee",
        img: "https://m.media-amazon.com/images/I/51DmuTiLMSS._AC._SR240,240.jpg",
        price: 107,
        cat: "Dress"

    },
    {
        id: 11,
        name: "Invicta Mens's Pro Driver 2",
        img: "https://m.media-amazon.com/images/I/51DmuTiLMSS._AC._SR240,240.jpg",
        price: 200,
        cat: "Cars"
    },
    {
        id: 2,
        name: "Timex Men's Expediton Scount",
        img: "https://m.media-amazon.com/images/I/71u7wSIU-3L._AC._SR360,460.jpg",
        price: 40,
        cat: "Sport"
    },
    {
        id: 3,
        name: "Breitling Supperocean Heritgae",
        img: "https://m.media-amazon.com/images/I/51llRWNRZvL._AC._SR360,460.jpg",
        price: 400,
        cat: "Luxury"
    },
    {
        id: 4,
        name: "Casio luxury watch",
        img: "https://m.media-amazon.com/images/I/71pii4nJGML._AC._SR360,460.jpg",
        price: 18,
        cat: "Office"
    },
    {
        id: 5,
        name: "Garmin Venu smartwatch",
        img: "https://m.media-amazon.com/images/I/510T962DtNL._AC._SR360,460.jpg",
        price: 74,
        cat: "Casual"
    },
]



const productContaner = document.querySelector(".products");
const serachInput = document.querySelector(".search");
const cats = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


const categryProduct = (date) => {
    productContaner.innerHTML = date.map((product) =>
        `
        <div class="product">
        <img src="${product.img}" alt="" />
        <span class="name">${product.name}<span/> <br> 
        <span class="priceText"> $ ${product.price}<span/>
        </div>

        `
    )
}

categryProduct(data);

serachInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
        categryProduct(data.filter((item) => item.cat.toLowerCase().indexOf(value) !== -1 ||
            item.name.toLowerCase().indexOf(value) !== -1))
    } else {
        categryProduct(data)
    }
})


const setCatgory = () => {
    const allCats = data.map((map) => map.cat);
    allCats.unshift("All")

    cats.innerHTML = allCats.map((item) => `<span class="cat">${item}</span>`).join("");

    cats.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        if (selectedCat === "All") {
            categryProduct(data)
        } else {
            categryProduct(data.filter((item) => item.cat === selectedCat))
        }

    })
}


const setPrice = () => {
    const priceList = data.map((item) => item.price)
    const maxPrice = Math.max(...priceList)
    const minPrice = Math.min(...priceList)

    priceRange.max = maxPrice;
    priceRange.min = minPrice;
    priceRange.value = maxPrice;
    priceRange.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        const target = e.target.value;
        priceValue.innerHTML = "$" + target;
        categryProduct(data.filter((item) => item.price <= target))
    })
}


setPrice()
setCatgory()
