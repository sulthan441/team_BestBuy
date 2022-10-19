const arr = JSON.parse(localStorage.getItem("cart")) || [];
// const arr = [
//   {
//     img_url:
//       "https://img.global.news.samsung.com/za/wp-content/uploads/2018/11/qledtv-q9fn_front-1.jpg",
//     title: "  Apple - 10.2 inch i pad (latest Model)with Wi-Fi 64GB - space",
//     price: 1999,
//   },
//   {
//     img_url:
//       "https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
//     title: "  Apple - 10.2 inch i pad (latest Model)with Wi-Fi 64GB - space",
//     price: 1999,
//   },
//   {
//     img_url:
//       "https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
//     title: "  Apple - 10.2 inch i pad (latest Model)with Wi-Fi 64GB - space",
//     price: 1999,
//   },
//   {
//     img_url:
//       "https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
//     title:
//       "  Apple - 10.2 inch i pad (latest Model)with Wi-Fi 64GB - space  Apple - 10.2 inch i pad (latest Model)with Wi-Fi 64GB - space",
//     price: 1999,
//   },
// ];
// localStorage.setItem("arr", JSON.stringify(arr));
// var ar = JSON.parse(localStorage.getItem("arr")) || [];
// console.log(ar);
displayData(arr);

function displayData(a) {
  document.getElementById("grid-div").innerHTML = "";

  a.map(function (elem, index) {
    const flexDiv = document.createElement("div");
    flexDiv.setAttribute("class", "flexDiv");

    const desc = document.createElement("div");
    desc.setAttribute("class", "desc-r");

    const imgTag = document.createElement("img");
    imgTag.src = elem.image;

    const title = document.createElement("div");
    title.setAttribute("id", "title");
    title.innerHTML = elem.name;

    desc.append(imgTag, title);

    const priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "priceDiv-r");

    const pri_d = document.createElement("div");
    pri_d.innerText = "$ " + elem.price;

    const qty = document.createElement("div");
    qty.innerText = `Qty: ${elem.quantity * elem.price}`;

    const rem = document.createElement("div");

    rem.innerText = "Remove";

    rem.addEventListener("click", function () {
      deleteDate(index);
    });
    priceDiv.append(pri_d, qty, rem);
    flexDiv.append(desc, priceDiv);
    document.getElementById("grid-div").append(flexDiv);
  });
  calTotalPrice();
}
function deleteDate(index) {
  arr.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(arr));
  displayData(arr);
}

// Total price add
function calTotalPrice() {
  var total = ar.reduce(function (acc, ele) {
    return acc + ele.price;
  }, 0);
  console.log(total);
  appendPrice(total);
  document.getElementById("cop").addEventListener("keypress", () => {
    if (event.key === "Enter") {
      couponApply(total);
    }
  });
  document.getElementById("apply").addEventListener("click", function () {
    couponApply(total);
  });
}

// coupon apply here
const couponApply = (total) => {
  const discountPrice = total - (total * 20) / 100;
  var couponValue = document.getElementById("cop").value;
  document.getElementById("cop").value = "";
  if (couponValue === "masai20") {
    document.getElementById("cong").style.display = "block";

    setTimeout(() => {
      document.getElementById("cong").style.display = "none";
      document.getElementById("coponDiv").style.display = "none";
    }, 5000);
    // document.getElementById("cong").style.display = "block";
    var saveMoney = (total * 20) / 100;
    document.getElementById("saveMoney").append(`₹ ${saveMoney} 🥳`);
    // alert(`Congratulation You are Save ${saveMoney}`);
    appendPrice(discountPrice);
  }
  console.log(discountPrice);
};

function appendPrice(price) {
  document.getElementById("sub-total").innerHTML = "";
  document.querySelector("#p-Div").innerHTML = "";
  document.getElementById("sub-total").append("₹ " + price);
  var para = document.createElement("h2");
  para.innerText = "₹ " + price;
  document.querySelector("#p-Div").append(para);
}
// payment Form
document.getElementById("cardNum").addEventListener("input", limit);
function limit() {
  let maxLength = 16;
  if (cardNum.value.length > maxLength) {
    cardNum.value = cardNum.value.substr(0, maxLength);
    console.log(cardNum);
  }
}

document.getElementById("cardNum").addEventListener("input", limit);
function limit() {
  let maxLength = 16;
  if (cardNum.value.length > maxLength) {
    cardNum.value = cardNum.value.substr(0, maxLength);
    console.log(cardNum);
  }
}
// cvv maxlength
document.getElementById("cvv").addEventListener("input", () => {
  let maxLength = 3;
  if (cvv.value.length > maxLength) {
    cvv.value = cvv.value.substr(0, maxLength);
    console.log(cvv);
  }
});

document.getElementById("date").addEventListener("input", () => {
  let maxLength = 4;
  if (date.value.length > maxLength) {
    date.value = date.value.substr(0, maxLength);
  }
});

document.querySelector("form").addEventListener("submit", paymentProcess);
function paymentProcess() {
  const checkBox = document.getElementById("check");
  event.preventDefault();
  var cardNum = document.getElementById("cardNum").value;
  var firstName = document.getElementById("firstName").value;
  var add = document.getElementById("add").value;
  var city = document.getElementById("cty").value;
  var zip = document.getElementById("zip").value;
  var cvv = document.getElementById("cvv").value;
  var date = document.getElementById("date").value;
  if (
    cardNum === "" ||
    firstName === "" ||
    add === "" ||
    city === "" ||
    zip === "" ||
    cvv === "" ||
    date === ""
  ) {
    alert("Please Fill All the Details");
  } else if (cardNum.length < 16) {
    alert("Card Number is Too Small");
  } else if (!checkBox.checked) {
    alert("Please Accept terms and Condition");
  } else {
    prompt("Enter the Otp");
    document.getElementById("mainDiv").style.display = "none";
    document.querySelector(".process").style.display = "block";
    setTimeout(() => {
      document.querySelector(".confirm").style.display = "block";
      document.querySelector(".process").style.display = "none";
      document.querySelector("body").style.backgroundColor = "rgb(76, 76, 171)";
    }, 2000);
    // // window.location.href = "confirmationPage.html";
  }
}
