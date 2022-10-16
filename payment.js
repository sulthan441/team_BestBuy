document.getElementById("cardNum").addEventListener("input", limit);
function limit() {
  let maxLength = 16;
  if (cardNum.value.length > maxLength) {
    cardNum.value = cardNum.value.substr(0, maxLength);
    console.log(cardNum);
  }
}
document.querySelector("form").addEventListener("submit", paymentProcess);
function paymentProcess() {
  event.preventDefault();
  var cardNum = document.getElementById("cardNum").value;
  var firstName = document.getElementById("firstName").value;
  var add = document.getElementById("add").value;
  var city = document.getElementById("cty").value;
  var zip = document.getElementById("zip").value;
  //   console.log(cardNum, firstName, add, city, zip);
}
const arr = [
  {
    img_url:
      "https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
    title: "Md Furkan",
    price: 1999,
  },
  {
    img_url:
      "https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
    title: "Md Furkan",
    price: 1999,
  },
  {
    img_url:
      "https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
    title: "Md Furkan",
    price: 1999,
  },
  {
    img_url:
      "https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
    title: "Md Furkan",
    price: 1999,
  },
];
// localStorage.setItem("arr", JSON.stringify(arr));
arr.map(function (elem) {
  var div = document.createElement("div");
  div.setAttribute("class", "desc-r");

  var imgTag = document.createElement("img");
  imgTag.src = elem.img_url;

  var div1 = document.createElement("div");
  div1.setAttribute("id", "title");
  //   var title = document.createElement("span");
  //   title.innerText = elem.title;

  div1.innerText = elem.title;

  div.append(imgTag, div1);

  //   var flex = document.createElement("div");
  //   flex.setAttribute("class", "flexDiv");
  document.querySelector("#grid-div").append(div);
});
