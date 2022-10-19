async function Display() {
    let response = await fetch("https://api.jsonbin.io/v3/b/6349b6a765b57a31e69678fe");
    let data = await response.json();
    //console.log(data.record.DoD_Data);
    appendData(data.record.Home_Featured);
    appendData2(data.record.Home_Tv);


}
Display();

function appendData(data) {
    document.getElementById("itemSection").innerHTML = null;
    data.forEach(element => {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.image;
        let title = document.createElement("h3");
        title.innerHTML = element.title;
        let price = document.createElement("h4");
        price.innerHTML = "Price :" + element.price;


        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.setAttribute("id", "btn")
        btn.addEventListener("click", function () {
            addToCart(element);
        })

        div.append(image, title, price, btn);
        document.getElementById("itemSection").append(div);

    });
    var CartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
    function addToCart(element) {
        CartItems.push(element);
        localStorage.setItem("CartItems", JSON.stringify(CartItems));
        alert("Selected Item is added to Cart")

    }


}

// bottom section


function appendData2(data) {
    document.getElementById("bottomItemSection").innerHTML = null;
    data.forEach(element => {
        let div2 = document.createElement("div");
        div2.setAttribute("id", "bottomDiv")
        let image2 = document.createElement("img");
        image2.src = element.image;
        image2.setAttribute("id", "slideImg")
        let logo = document.createElement("img");
        logo.src = element.logo
        logo.setAttribute("id", "logo")
        let title2 = document.createElement("h3");
        title2.innerHTML = element.title;
        let price2 = document.createElement("h4");
        price2.innerHTML = "Price :" + element.price;


        let btn2 = document.createElement("button");
        btn2.innerText = "Add to Cart";
        btn2.setAttribute("id", "btn")
        btn2.addEventListener("click", function () {
            addToCart2(element);
        })


        div2.append(image2, logo, title2, price2, btn2);
        document.getElementById("bottomItemSection").append(div2);

    });

    var CartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
    function addToCart2(element) {
        CartItems.push(element);
        localStorage.setItem("CartItems", JSON.stringify(CartItems));
        alert("Selected Item is added to Cart")

    }

}