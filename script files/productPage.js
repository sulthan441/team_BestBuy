console.log("I am in productpage.js file");
// var cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];

// // document.querySelector(".cartBtn").addEventListener("click", addToCart);
// document.querySelector("#cartButton").addEventListener("click", addToCart);

// function addToCart() {
//   console.log("I am cartBtn");
// }
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
