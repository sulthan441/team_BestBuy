cart = [
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452992_sd.jpg;maxHeight=300;maxWidth=450",
        model: "70UP8070PUA",
        name: "LG - 70” Class UP8070 Series LED 4K UHD Smart webOS TV",
        price: "749",
        rating: "5",
        save: "250",
        was: "999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=300;maxWidth=450",
        model: " UN50TU7000FXZA",
        name: "SAMSUNG - 50 Class 7 Series LED 4K UHD Smart Tizen TV",
        price: "379",
        rating: "2.7",
        save: "100",
        was: "479",
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452965_sd.jpg;maxHeight=300;maxWidth=450",
        model:"KD43X80J",
        name:"SONY - 43 Class X80J Series LED 4K UHD Smart Google TV",
        price:"449",
        rating:"3.8",
        save:"150",
        was:"599",
    }
]
localStorage.setItem("cart",JSON.stringify(cart));
console.log(localStorage.cart);

