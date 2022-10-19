import navbar from "../../navbar_page/navbar_export/navbar_export.js"
document.querySelector("#navbarLink").innerHTML = navbar();
let hamb = document.getElementById("menuDiv")
hamb.addEventListener("click", showMenuBox);

var c = 0;
function showMenuBox() {
    // alert()


    let menuBox = document.getElementById("menuBox");

    if (c % 2 == 0) {
        menuBox.style.display = "block";
        let close = document.getElementById("change")

        close.textContent = "close";
        close.style.transition = "1s linear"
    }

    if (c % 2 == 1) {
        menuBox.style.display = "none";


        let close = document.getElementById("change")

        close.textContent = "menu";
        close.style.transition = "1s linear"

    }
    c++;

}

// ///////showMenuBox()

let outerBox1 = document.getElementById("outerBox1");
outerBox1.addEventListener("click", showNext);
var o = 0;
function showNext() {
    let ch = document.getElementById("ch")

    let ext = document.getElementById("extend");
    if (o % 2 == 0) {
        ext.style.display = "block";
        outerBox1.style.backgroundColor = "#0046c4"
        ch.style.color = "white";

    }

    if (o % 2 == 1) {
        ext.style.display = "none";
        outerBox1.style.backgroundColor = "white"
        ch.style.color = "#0046c4";
    }
    o++;

}

let ap = document.getElementById("ap");
ap.addEventListener("click", () => {
    addLaptopData()

})

let tv5 = document.getElementById("tv");
tv5.addEventListener("click", () => {
    addTvData()
})


let acc1 = document.getElementById("acc")
acc1.addEventListener("click", showAccBox);

var e = 0;
function showAccBox() {

    let ac = document.getElementById("accountPopUp");

    if (e % 2 == 0) {
        ac.style.display = "block";
    }

    if (e % 2 == 1) {
        ac.style.display = "none";
    }
    e++;

}



var ProductArr = [

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Ideapad 3 15.6 FHD Touch Screen Laptop - Intel Core i5 11th Gen - 12GB Memory - 256GB SSD - Arctic Grey",
        model: "70UP8070PUA",
        rating: "4.9",
        price: "749",
        save: "250",
        was: "999"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449513_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ASUS - 11.6 Chromebook - Intel Celeron - 4GB Memory - 32GB eMMC Flash Memory - Gray - Grey",
        model: "NS-55F501NA22",
        rating: "4.5",
        price: "399",
        save: "250",
        was: "649"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401727_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Chromebook Duet - 10.1 - Tablet - 128GB - With Keyboard - Ice Blue + Iron Gray",
        model: " UN50TU7000FXZA",
        rating: "4.7",
        price: "379",
        save: "100",
        was: "479"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Abyss Blue with Fabric Cover",
        model: "KD43X80J",
        rating: "4.8",
        price: "449",
        save: "150",
        was: "599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - ENVY 2-in-1 13 Touch- Screen Laptop - Intel Evo Platform Core i5 - 8GB Memory - 256GB SSD - Pale Gold",
        model: "UN65TU7000FXZA",
        rating: "4.8",
        price: "499",
        save: "150",
        was: "649"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - Chromebase 21.5 Touch- Screen All - In - One - Intel Pentium Gold - 4GB Memory - 64GB eMMC - Snowflake White",
        model: " NS-32DF310NA19",
        rating: "4.7",
        price: "149",
        save: "50",
        was: "199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Apple - 21.5 iMac® with Retina 4K display - Intel Core i3(3.6GHz) - 8GB Memory - 256GB SSD - Silver",
        model: "OLED65C1PUB",
        rating: "4.9",
        price: "1799",
        save: "300",
        was: "2099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451077_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG 29” UltraWide Full HD HDR Monitor with FreeSync",
        model: "UN50AU8000FXZA",
        rating: "4.9",
        price: "479",
        save: "90",
        was: "569"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - 14 2-In - 1 Touchscreen Chromebook - Intel Core i3 - 8GB Memory - 128GB SSD - Mineral Silver",
        model: "UN40N5200AFXZA",
        rating: "4.9",
        price: "549",
        save: "80",
        was: "629"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426710_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Yoga 7i 2-in-1 14 Touch Screen Laptop - Intel Evo Platform Core i5 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
        model: "70NANO75UPA",
        rating: "4.8",
        price: "899",
        save: "300",
        was: "1199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455180_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 7 - 16GB Memory - 512GB SSD - Abyss Blue with Fabric Cover",
        model: "120L9G-CINE120A",
        rating: "4.9",
        price: "4999",
        save: "1000",
        was: "5999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447818_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ACER  Chromebook Spin 514  Convertible - 14” Full HD Touch  Ryzen 3 3250C 4GB DDR4 Memory  64GB eMMC Flash Memory",
        model: "XR65A80J",
        rating: "4.9",
        price: "1999",
        save: "300",
        was: "2299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454254_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Flex 5 13 2-in -1 Chromebook - Pentium 7505 - 4GB Memory - 32GB eMMC - Abyss Blue",
        model: "32S327",
        rating: "4.9",
        price: "199",
        save: "20",
        was: "219"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462556_sd.jpg;maxHeight=300;maxWidth=450",
        name: "GEO - GeoBook 120 Minecraft Edition 12.5-inch HD Laptop - Intel Celeron Quad Core Processor - 4GB Memory - 64GB eMMC - Minecraft Green",
        model: "KD75X85J",
        rating: "4.9",
        price: "1199",
        save: "400",
        was: "1599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
        name: "GEO - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Blue",
        model: "QN32Q60AAFXZA",
        rating: "4.9",
        price: "399",
        save: "100",
        was: "499"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462557_sd.jpg;maxHeight=300;maxWidth=450",
        name: "GEO - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Purple",
        model: "QN82Q60TAFXZA",
        rating: "4.9",
        price: "1499",
        save: "500",
        was: "1999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426713_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Yoga 7i 2-in-1 15.6 HDR Touch Screen Laptop - Intel Evo Platform Core i7 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
        model: "XR75X90J",
        rating: "4.9",
        price: "1599",
        save: "500",
        was: "2099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Dell - Inspiron 7000 2-in-1 17 QHD+ Touch - Screen Laptop - Intel Core i7 - NVIDIA - 16GB Memory - 512GB SSD + 32GB Optane - Silver",
        model: "QN65Q70AAFXZA",
        rating: "4.9",
        price: "1099",
        save: "200",
        was: "1299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "MICROSOFT - Surface Laptop 4 - 13.5” Touch-Screen  AMD Ryzen™ 5 Surface® Edition  8GB Memory - 128GB SSD (Latest Model) - Platinum",
        model: "QN55Q80AAFXZA",
        rating: "4.9",
        price: "999",
        save: "200",
        was: "1199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ASUS - ZenBook Flip 15 Q528EH 15.6 Touch- Screen Laptop - Intel Core i7 - 16GB Memory - GTX1650 Max - Q - 512GB SSD - Grey",
        model: "QN65QN85AAFXZA",
        rating: "4.9",
        price: "1599",
        save: "300",
        was: "1899"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452992_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG - 70” Class UP8070 Series LED 4K UHD Smart webOS TV",
        model: "70UP8070PUA",
        rating: "5",
        price: "749",
        save: "250",
        was: "999"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450248_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Insignia™ - 55 Class F50 Series QLED 4K UHD Smart Fire TV",
        model: "NS-55F501NA22",
        rating: "3.5",
        price: "399",
        save: "250",
        was: "649"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 50 Class 7 Series LED 4K UHD Smart Tizen TV",
        model: " UN50TU7000FXZA",
        rating: "2.7",
        price: "379",
        save: "100",
        was: "479"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452965_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 43 Class X80J Series LED 4K UHD Smart Google TV",
        model: "KD43X80J",
        rating: "3.8",
        price: "449",
        save: "150",
        was: "599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 65 Class 7 Series LED 4K UHD Smart Tizen TV",
        model: "UN65TU7000FXZA",
        rating: "4.8",
        price: "499",
        save: "150",
        was: "649"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6247/6247254_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Insignia™ - 32 Class F20 Series LED HD Smart Fire TV",
        model: " NS-32DF310NA19",
        rating: "4.7",
        price: "149",
        save: "50",
        was: "199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453312_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG - 65 Class C1 Series OLED 4K UHD Smart webOS TV",
        model: "OLED65C1PUB",
        rating: "3.9",
        price: "1799",
        save: "300",
        was: "2099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452997_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 50 Class 8000 Series LED 4K UHD Smart Tizen TV",
        model: "UN50AU8000FXZA",
        rating: "1.9",
        price: "479",
        save: "90",
        was: "569"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360291_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 40 Class 5 Series LED Full HD Smart Tizen TV",
        model: "UN40N5200AFXZA",
        rating: "2.9",
        price: "549",
        save: "80",
        was: "629"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476896_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG - 70 Class NanoCell 75 Series LED 4K UHD Smart webOS TV",
        model: "70NANO75UPA",
        rating: "3.5",
        price: "899",
        save: "300",
        was: "1199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484318_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Hisense - 120 L9 Series TriChroma Laser TV with ALR Screen - Black",
        model: "120L9G-CINE120A",
        rating: "1.5",
        price: "4999",
        save: "1000",
        was: "5999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455218_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 65 Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV",
        model: "XR65A80J",
        rating: "3.4",
        price: "1999",
        save: "300",
        was: "2299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280538_sd.jpg;maxHeight=300;maxWidth=450",
        name: "TCL - 32 Class 3-Series LED Full HD Smart Roku TV",
        model: "32S327",
        rating: "1.4",
        price: "199",
        save: "20",
        was: "219"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453207_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 75 Class X85J Series LED 4K UHD Smart Google TV",
        model: "KD75X85J",
        rating: "5",
        price: "1199",
        save: "400",
        was: "1599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465202_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 32 Class Q60A Series QLED 4K UHD Smart Tizen TV",
        model: "QN32Q60AAFXZA",
        rating: "2.9",
        price: "399",
        save: "100",
        was: "499"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451519_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 82 Class Q60T Series LED 4K UHD Smart Tizen TV",
        model: "QN82Q60TAFXZA",
        rating: "4.9",
        price: "1499",
        save: "500",
        was: "1999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455216_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 75 Class BRAVIA XR X90J Series LED 4K UHD Smart Google TV",
        model: "XR75X90J",
        rating: "2.9",
        price: "1599",
        save: "500",
        was: "2099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451476_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 65 Class Q70A Series QLED 4K UHD Smart Tizen TV",
        model: "QN65Q70AAFXZA",
        rating: "3.9",
        price: "1099",
        save: "200",
        was: "1299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451481_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 55 Class Q80A Series QLED 4K UHD Smart Tizen TV",
        model: "QN55Q80AAFXZA",
        rating: "2.1",
        price: "999",
        save: "200",
        was: "1199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452319_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 65 Class QN85A Series Neo QLED 4K UHD Smart Tizen TV",
        model: "QN65QN85AAFXZA",
        rating: "5",
        price: "1599",
        save: "300",
        was: "1899"
    }
]






let productsInCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
document.getElementById("sorting").addEventListener("change", handlePriceSort);
function handlePriceSort() {
    let selected = document.querySelector("#sorting").value;

    console.log(selected);

    if (selected == "Sort By") {
        displayData(ProductArr);

    }
    if (selected === "Price High to Low") {
        ProductArr.sort(function (a, b) {
            return b.price - a.price;
        });
        displayData(ProductArr);
        // console.log(ProductArr);

    }


    else if (selected === "Price Low to High") {
        ProductArr.sort(function (a, b) {
            return a.price - b.price;
        });
        displayData(ProductArr);
        // console.log(ProductArr);
    }
    else if (selected === "customer rating") {
        ProductArr.sort(function (a, b) {
            return b.rating - a.rating;
        });
        displayData(ProductArr);
    }
    else{
        let sufflearr=shuffle(ProductArr);
        displayData(sufflearr);
    }
}

let rate = document.getElementById("topRating");
rate.addEventListener("click", rating_sort)
function rating_sort() {
    // let rate=  document.getElementById("topRating");
    if (rate.checked) {
        ProductArr.sort(function (a, b) {
            return b.rating - a.rating;
        });
        displayData(ProductArr);
    }
    else{
        let sufflearr=shuffle(ProductArr);
        displayData(sufflearr);
    }
}

let lowrate = document.getElementById("lowRating");
lowrate.addEventListener("click", rating_lowsort)
function rating_lowsort() {

    if (lowrate.checked) {
        ProductArr.sort(function (a, b) {
            return a.rating - b.rating;
        });
        displayData(ProductArr);
    }
    else{
        let sufflearr=shuffle(ProductArr);
        displayData(sufflearr);
    }
}
// shuffle an array of products randomly
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// linking of pages
let goTOHome = document.getElementById("bestBLogo")
goTOHome.style.cursor = "pointer"
goTOHome.addEventListener("click", () => {
    window.location.href = "../../home_page/homePageHTML/homePage.html"
})

// go to cart=>

let cartPage = document.getElementById("cart");
cartPage.style.cursor = "pointer"
cartPage.addEventListener("click", () => {
    window.location.href = "../../cart/cart.html"

})

let signIn = document.getElementById("signIn")
let signUp = document.getElementById("cA");

signIn.addEventListener("click", openSignIn)
signUp.addEventListener("click", openSignUp)

function openSignIn() {
    window.location.href = "../../login_signup/login_signup_html/login.html"
}

function openSignUp() {
    window.location.href = "../../login_signup/login_signup_html/signup.html";
}


let cartArray = JSON.parse(localStorage.getItem("cartProduct"))||[];
console.log(cartArray);
let flag=false;


function displayData(data) {
    // console.log(ProductArr);
    document.getElementById("products_space").innerHTML = null;
    // console.log(data);
    data.forEach(function (el, index) {
        let product = document.createElement("div");
        product.setAttribute("id", "products")
        let imageDiv = document.createElement("div");
        imageDiv.setAttribute("id", "imgDiv")

        let image = document.createElement("img");
        image.setAttribute("id", "productImg")
        image.src = el.image;

        let DescriptionDiv = document.createElement("div");
        DescriptionDiv.setAttribute("id", "DescriptionDiv")
        let title = document.createElement("p");
        title.setAttribute("id", "title")
        title.innerHTML = el.name;

        let rating = document.createElement("h3");
        
        let star="";
        for(var i=0; i<Math.round(el.rating); i++){
            star = star + "⭐";
        }
        rating.innerHTML = el.rating+star;


        let model = document.createElement("P");
        model.setAttribute("id", "model");
        model.innerText = " Model: 82UD0002US SKU: 6502221";
        let get = document.createElement("h5");
        get.setAttribute("id", "get");
        get.innerText = "Get it today"

        let pickup = document.createElement("p");
        pickup.setAttribute("id", "pickup");
        pickup.innerHTML = '<i class="fa-solid fa-truck-pickup"></i>  ' + "  Pickup: Available today at Aiea See all pickup locations";

        let delivery = document.createElement("p");
        delivery.setAttribute("id", "delivery");
        delivery.innerHTML = '<i class="fa-solid fa-truck-fast"></i> ' + "  Delivery: Available in your area Estimates for 96939";




        let cartDiv = document.createElement("div");
        cartDiv.setAttribute("id", "cartDiv");
        let price = document.createElement("h2");
        price.innerHTML = "$" + el.price;


        let deal = document.createElement("p");
        deal.innerText = "Free 6-month security software A $29.99 value"
        deal.style.fontSize = "small";
        deal.style.fontWeight = "bold";

        deal.style.color = "#0046be";


        let button = document.createElement("button")
        button.setAttribute("id", "button");

        button.addEventListener("click", function () {
            
        cartProductverify(el.name)
        console.log(flag);
            if(flag==1)
            {
                alert("this item is already added in the cart");
                location. reload()
            }
            else{
                alert("Item has added to cart");
                addToCart(index);
                location. reload()
            }
            
        });
        button.innerHTML = '<i class="fa-solid fa-cart-shopping "></i>' + " Add to cart";

        let openBox = document.createElement("p");
        openBox.setAttribute("id", "openBox");
        openBox.innerText = "Open-Box: from $437.99"


        imageDiv.append(image);
        imageDiv.style.cursor = "pointer";
        DescriptionDiv.append(title, rating, model, get, pickup, delivery);
        cartDiv.append(price, deal, button, openBox);

        product.append(imageDiv, DescriptionDiv, cartDiv);

        
        document.querySelector("#products_space").append(product);

        imageDiv.addEventListener("click",()=>{
            localStorage.setItem("mainProduct", JSON.stringify(el));
            window.location.href="../../productDetails All files/productPage.html"
        });

        title.addEventListener("click",()=>{
            localStorage.setItem("mainProduct", JSON.stringify(el));
            window.location.href="../../productDetails All files/productPage.html"
        });

    });

}
displayData(ProductArr);



//Add to cart data

// let productsInCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
function addToCart(i) {
    var product = ProductArr.filter(function (elem, index) {
        return index == i;
    });
    productsInCart.push(product[0]);
    localStorage.setItem("cartProduct", JSON.stringify(productsInCart));
    // console.log(productsInCart);
}

function cartProductverify(name){
    productsInCart.forEach(e=>{
        if(name==e.name)
        {
            console.log(e.name)
            flag=true;
        }
        
    })
}

// debouncing
document.querySelector("#inp").addEventListener("keyup", () => {
    // let listDiv = document.getElementById("item-list");
    let serchVal= document.getElementById("inp").value;
    if(serchVal=="") {
        document.getElementById("list-item").style.display = "none";
    }
    else{
        console.log(serchVal);
        document.getElementById("list-item").style.display = "block";
    }
});
async function debounceFun() {
    let res = await fetch("https://api.jsonbin.io/v3/b/634e72a40e6a79321e2c659a");
    let xyz = await res.json();
    console.log(xyz.record.ProductArr);
    abc(xyz.record.ProductArr);
}


document.getElementById("inp").addEventListener("keyup",()=>{
    let inp=document.getElementById("inp").value;
    console.log(inp)
    debounceFun();
      
    
})


function abc(x){
let inp=document.getElementById("inp").value;
if(inp === ""){
    document.querySelector("#list-item").innerHTML = null;
    console.log("null")
}else{

    let filter=x.filter(function(el){
         return el.name.toLowerCase().includes(inp)
    }) 
    console.log(filter)
    appendData(filter);
 }
}


function appendData(data) {
    console.log(data);
    document.querySelector("#list-item").innerHTML = null;
    data.forEach(el => {
        let list = document.createElement("li")
        let img = document.createElement("img");
        img.src = el.image;
        let title = document.createElement("p");
        title.innerHTML = el.name;
    //     let price=document.createElement("h4");
    //     price.innerHTML=el.price;
            list.append(title,img);
    //     div.append(img, title,price);
        document.querySelector("#list-item").append(list);
        list.addEventListener("click",()=>{
            localStorage.setItem("mainProduct", JSON.stringify(el));
            console.log("mainProduct");
            window.location.href="../../productDetails All files/productPage.html"
        });
    });
}


