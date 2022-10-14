async function Display() {
    let response = await fetch("https://api.jsonbin.io/v3/b/6349b6a765b57a31e69678fe");
    let data = await response.json();
    console.log(data.record.DoD_Data);
    appendData(data.record.Home_Featured);



}
Display();

// function appendData(data) {
//     document.getElementById("itemSection").innerHTML = null;
//     data.forEach(element => {
//         let div = document.createElement("div");
//         let image = document.createElement("img");
//         image.src = element.image;
//         let title = document.createElement("h3");
//         title.innerHTML = element.title;
//         let price = document.createElement("h4");
//         price.innerHTML = "Price :" + element.price;


//         let btn = document.createElement("button");
//         btn.innerText = "Add to Cart";
//         btn.setAttribute("id", "btn")
//         btn.addEventListener("click", function () {
//             addToCart(element);
//         })

//         div.append(image, title, price, btn);
//         document.getElementById("itemSection").append(div);

//     });
//     var CartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
//     function addToCart(element) {
//         CartItems.push(element);
//         localStorage.setItem("CartItems", JSON.stringify(CartItems));
//         alert("Selected Item is added to Cart")

//     }


// }
