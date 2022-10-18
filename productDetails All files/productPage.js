console.log("I am in productpage.js file");
// var cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];

// // document.querySelector(".cartBtn").addEventListener("click", addToCart);
// document.querySelector("#cartButton").addEventListener("click", addToCart);

let mainProduct = JSON.parse(localStorage.getItem("mainProduct")) || {};

if (mainProduct) {
  showToUIMainProduct(mainProduct);
}
function showToUIMainProduct(mainProduct) {
  if (mainProduct.hasOwnProperty("title"))
    document.querySelector("#productDetail > div:first-child h1").innerHTML =
      mainProduct.title;
  if (mainProduct.hasOwnProperty("image"))
    document.querySelector("#productDetail > div:first-child img").src =
      mainProduct.image;
  if (mainProduct.hasOwnProperty("price")) {
    document.querySelector("#productDetail > div:nth-child(2) h1").innerHTML =
      mainProduct.price;
  } else {
    document.querySelector(
      "#productDetail > div:nth-child(2) h1"
    ).innerHTML = `$ ${Math.floor(Math.random() * 4000 + 306)}`;
  }
  if (mainProduct.hasOwnProperty("rating")) {
    document.querySelector("#productDetail span > a").innerHTML = `${
      mainProduct.rating
    },  ${Math.floor(Math.random() * 1500 + 202)} Expert Reviews`;
  } else {
    document.querySelector("#productDetail span > a").innerHTML = `${Math.floor(
      Math.random() * 5 + 1
    )},     ${Math.floor(Math.random() * 1500 + 202)} Expert Reviews`;
  }
  if (mainProduct.hasOwnProperty("model")) {
    document.querySelector(
      "#productDetail > div:first-child p:first-child"
    ).innerHTML = mainProduct.model;
  }
}
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function cartProducts() {
  // console.log("I am cartBtn");
  cartArr.push(mainProduct);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}
getData("https://api.jsonbin.io/v3/b/6349b6a765b57a31e69678fe");

async function getData(url) {
  // console.log(url);
  const res = await fetch(url);
  // console.log(res);
  const data = await res.json();
  console.log(data);
  showInAlsoBought(
    data.record.Home_Featured,
    "#alsoBughtProducts > #viewedProducts > .viewproducts"
  );
  showInAlsoBought(
    data.record.Home_Tv,
    "#alsoBughtProducts > #viewedProducts > .viewproducts"
  );
  showToMoreConsider(
    data.record.Home_Tv,
    "details:first-child > #viewedProduct > .viewproductsS"
  );
  showToMostViewed(
    data.record.DoD_Data,
    "#mostViewed > #viewedProducts > .viewproducts"
  );
  showTosimilarProduct(
    // data.record[`Home-Top-Picks`],
    data.record[`DoD_Slider`],
    "#similarProducts > #similarProduct"
  );
}

function showInAlsoBought(data, location) {
  // console.log(data);
  data.map(function (el, index) {
    // console.log(el);
    var div = document.createElement("div");
    div.setAttribute("class", "viewItem");
    var img = document.createElement("img");
    img.src = data[index].image;
    img.alt = data.id;
    var p = document.createElement("p");
    p.innerHTML = data[index].title;
    var h5 = document.createElement("h5");
    h5.innerHTML = data[index].price;
    var button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    div.append(img, p, h5, button);
    document.querySelector(`${location}`).append(div);
  });
}
function showToMoreConsider(data, location) {
  // console.log(data);
  data.map((el, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "viewItemS");
    let img = document.createElement("img");
    img.src = el.image;
    img.alt = el.logo;
    let p = document.createElement("p");
    p.innerHTML = el.title;
    let h5 = document.createElement("h5");
    h5.innerHTML = el.price;
    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    div.append(img, p, h5, button);
    document.querySelector(`${location}`).append(div);
  });
}

function showTosimilarProduct(data, location) {
  data.map((el) => {
    let a = document.createElement("a");
    a.href = "#";
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    img.alt = el.id;
    let p = document.createElement("p");
    p.innerHTML = el.details;
    let p1 = document.createElement("p");
    let rating = document.createElement("p");
    rating.innerHTML = el.span;
    if (el.span === "") rating.innerHTML = "Hi, there";
    rating.style.background = "yellow";
    div.append(img, p, p1, rating);
    a.append(div);
    document.querySelector(`${location}`).append(a);
  });
}

function showToMostViewed(data, location) {
  data.map((el, index) => {
    if (el.price == "$449.99") return;
    let div = document.createElement("div");
    div.setAttribute("class", "viewItem");
    let img = document.createElement("img");
    img.src = el.image;
    let p = document.createElement("p");
    p.innerHTML = el.title;
    let h5 = document.createElement("h5");
    h5.innerHTML = el.price;
    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    div.append(img, p, h5, button);
    document.querySelector(location).append(div);
  });
}

// var ProductArr = [
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO Ideapad 3 15.6 FHD Touch Screen Laptop - Intel Core i5 11th Gen - 12GB Memory - 256GB SSD - Arctic Grey",
//     model: "70UP8070PUA",
//     rating: "4.9",
//     price: "749",
//     save: "250",
//     was: "999",
//   },

//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449513_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "ASUS - 11.6 Chromebook - Intel Celeron - 4GB Memory - 32GB eMMC Flash Memory - Gray - Grey",
//     model: "NS-55F501NA22",
//     rating: "4.5",
//     price: "399",
//     save: "250",
//     was: "649",
//   },

//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401727_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO - Chromebook Duet - 10.1 - Tablet - 128GB - With Keyboard - Ice Blue + Iron Gray",
//     model: " UN50TU7000FXZA",
//     rating: "4.7",
//     price: "379",
//     save: "100",
//     was: "479",
//   },

//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Abyss Blue with Fabric Cover",
//     model: "KD43X80J",
//     rating: "4.8",
//     price: "449",
//     save: "150",
//     was: "599",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "HP - ENVY 2-in-1 13 Touch- Screen Laptop - Intel Evo Platform Core i5 - 8GB Memory - 256GB SSD - Pale Gold",
//     model: "UN65TU7000FXZA",
//     rating: "4.8",
//     price: "499",
//     save: "150",
//     was: "649",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "HP - Chromebase 21.5 Touch- Screen All - In - One - Intel Pentium Gold - 4GB Memory - 64GB eMMC - Snowflake White",
//     model: " NS-32DF310NA19",
//     rating: "4.7",
//     price: "149",
//     save: "50",
//     was: "199",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "Apple - 21.5 iMac® with Retina 4K display - Intel Core i3(3.6GHz) - 8GB Memory - 256GB SSD - Silver",
//     model: "OLED65C1PUB",
//     rating: "4.9",
//     price: "1799",
//     save: "300",
//     was: "2099",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451077_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LG 29” UltraWide Full HD HDR Monitor with FreeSync",
//     model: "UN50AU8000FXZA",
//     rating: "4.9",
//     price: "479",
//     save: "90",
//     was: "569",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "HP - 14 2-In - 1 Touchscreen Chromebook - Intel Core i3 - 8GB Memory - 128GB SSD - Mineral Silver",
//     model: "UN40N5200AFXZA",
//     rating: "4.9",
//     price: "549",
//     save: "80",
//     was: "629",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426710_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO - Yoga 7i 2-in-1 14 Touch Screen Laptop - Intel Evo Platform Core i5 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
//     model: "70NANO75UPA",
//     rating: "4.8",
//     price: "899",
//     save: "300",
//     was: "1199",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455180_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 7 - 16GB Memory - 512GB SSD - Abyss Blue with Fabric Cover",
//     model: "120L9G-CINE120A",
//     rating: "4.9",
//     price: "4999",
//     save: "1000",
//     was: "5999",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447818_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "ACER  Chromebook Spin 514  Convertible - 14” Full HD Touch  Ryzen 3 3250C 4GB DDR4 Memory  64GB eMMC Flash Memory",
//     model: "XR65A80J",
//     rating: "4.9",
//     price: "1999",
//     save: "300",
//     was: "2299",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454254_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO - Flex 5 13 2-in -1 Chromebook - Pentium 7505 - 4GB Memory - 32GB eMMC - Abyss Blue",
//     model: "32S327",
//     rating: "4.9",
//     price: "199",
//     save: "20",
//     was: "219",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462556_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "GEO - GeoBook 120 Minecraft Edition 12.5-inch HD Laptop - Intel Celeron Quad Core Processor - 4GB Memory - 64GB eMMC - Minecraft Green",
//     model: "KD75X85J",
//     rating: "4.9",
//     price: "1199",
//     save: "400",
//     was: "1599",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "GEO - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Blue",
//     model: "QN32Q60AAFXZA",
//     rating: "4.9",
//     price: "399",
//     save: "100",
//     was: "499",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462557_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "GEO - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Purple",
//     model: "QN82Q60TAFXZA",
//     rating: "4.9",
//     price: "1499",
//     save: "500",
//     was: "1999",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426713_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LENOVO - Yoga 7i 2-in-1 15.6 HDR Touch Screen Laptop - Intel Evo Platform Core i7 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
//     model: "XR75X90J",
//     rating: "4.9",
//     price: "1599",
//     save: "500",
//     was: "2099",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "Dell - Inspiron 7000 2-in-1 17 QHD+ Touch - Screen Laptop - Intel Core i7 - NVIDIA - 16GB Memory - 512GB SSD + 32GB Optane - Silver",
//     model: "QN65Q70AAFXZA",
//     rating: "4.9",
//     price: "1099",
//     save: "200",
//     was: "1299",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "MICROSOFT - Surface Laptop 4 - 13.5” Touch-Screen  AMD Ryzen™ 5 Surface® Edition  8GB Memory - 128GB SSD (Latest Model) - Platinum",
//     model: "QN55Q80AAFXZA",
//     rating: "4.9",
//     price: "999",
//     save: "200",
//     was: "1199",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "ASUS - ZenBook Flip 15 Q528EH 15.6 Touch- Screen Laptop - Intel Core i7 - 16GB Memory - GTX1650 Max - Q - 512GB SSD - Grey",
//     model: "QN65QN85AAFXZA",
//     rating: "4.9",
//     price: "1599",
//     save: "300",
//     was: "1899",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452992_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LG - 70” Class UP8070 Series LED 4K UHD Smart webOS TV",
//     model: "70UP8070PUA",
//     rating: "5",
//     price: "749",
//     save: "250",
//     was: "999",
//   },

//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450248_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "Insignia™ - 55 Class F50 Series QLED 4K UHD Smart Fire TV",
//     model: "NS-55F501NA22",
//     rating: "3.5",
//     price: "399",
//     save: "250",
//     was: "649",
//   },

//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 50 Class 7 Series LED 4K UHD Smart Tizen TV",
//     model: " UN50TU7000FXZA",
//     rating: "2.7",
//     price: "379",
//     save: "100",
//     was: "479",
//   },

//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452965_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SONY - 43 Class X80J Series LED 4K UHD Smart Google TV",
//     model: "KD43X80J",
//     rating: "3.8",
//     price: "449",
//     save: "150",
//     was: "599",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 65 Class 7 Series LED 4K UHD Smart Tizen TV",
//     model: "UN65TU7000FXZA",
//     rating: "4.8",
//     price: "499",
//     save: "150",
//     was: "649",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6247/6247254_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "Insignia™ - 32 Class F20 Series LED HD Smart Fire TV",
//     model: " NS-32DF310NA19",
//     rating: "4.7",
//     price: "149",
//     save: "50",
//     was: "199",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453312_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LG - 65 Class C1 Series OLED 4K UHD Smart webOS TV",
//     model: "OLED65C1PUB",
//     rating: "3.9",
//     price: "1799",
//     save: "300",
//     was: "2099",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452997_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 50 Class 8000 Series LED 4K UHD Smart Tizen TV",
//     model: "UN50AU8000FXZA",
//     rating: "1.9",
//     price: "479",
//     save: "90",
//     was: "569",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360291_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 40 Class 5 Series LED Full HD Smart Tizen TV",
//     model: "UN40N5200AFXZA",
//     rating: "2.9",
//     price: "549",
//     save: "80",
//     was: "629",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476896_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "LG - 70 Class NanoCell 75 Series LED 4K UHD Smart webOS TV",
//     model: "70NANO75UPA",
//     rating: "3.5",
//     price: "899",
//     save: "300",
//     was: "1199",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484318_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "Hisense - 120 L9 Series TriChroma Laser TV with ALR Screen - Black",
//     model: "120L9G-CINE120A",
//     rating: "1.5",
//     price: "4999",
//     save: "1000",
//     was: "5999",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455218_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SONY - 65 Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV",
//     model: "XR65A80J",
//     rating: "3.4",
//     price: "1999",
//     save: "300",
//     was: "2299",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280538_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "TCL - 32 Class 3-Series LED Full HD Smart Roku TV",
//     model: "32S327",
//     rating: "1.4",
//     price: "199",
//     save: "20",
//     was: "219",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453207_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SONY - 75 Class X85J Series LED 4K UHD Smart Google TV",
//     model: "KD75X85J",
//     rating: "5",
//     price: "1199",
//     save: "400",
//     was: "1599",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465202_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 32 Class Q60A Series QLED 4K UHD Smart Tizen TV",
//     model: "QN32Q60AAFXZA",
//     rating: "2.9",
//     price: "399",
//     save: "100",
//     was: "499",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451519_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 82 Class Q60T Series LED 4K UHD Smart Tizen TV",
//     model: "QN82Q60TAFXZA",
//     rating: "4.9",
//     price: "1499",
//     save: "500",
//     was: "1999",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455216_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SONY - 75 Class BRAVIA XR X90J Series LED 4K UHD Smart Google TV",
//     model: "XR75X90J",
//     rating: "2.9",
//     price: "1599",
//     save: "500",
//     was: "2099",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451476_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 65 Class Q70A Series QLED 4K UHD Smart Tizen TV",
//     model: "QN65Q70AAFXZA",
//     rating: "3.9",
//     price: "1099",
//     save: "200",
//     was: "1299",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451481_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 55 Class Q80A Series QLED 4K UHD Smart Tizen TV",
//     model: "QN55Q80AAFXZA",
//     rating: "2.1",
//     price: "999",
//     save: "200",
//     was: "1199",
//   },
//   {
//     image:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452319_sd.jpg;maxHeight=300;maxWidth=450",
//     name: "SAMSUNG - 65 Class QN85A Series Neo QLED 4K UHD Smart Tizen TV",
//     model: "QN65QN85AAFXZA",
//     rating: "5",
//     price: "1599",
//     save: "300",
//     was: "1899",
//   },
// ];
