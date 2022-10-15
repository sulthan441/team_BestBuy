
async function Display() {
    let response = await fetch("https://api.jsonbin.io/v3/b/6349b6a765b57a31e69678fe");
    let data = await response.json();
    //console.log(data.record.DoD_Data);
    appendData(data.record.DoD_Data);
    appendData2(data.record.DoD_Slider);


}
Display();

function appendData(data) {
    document.getElementById("box2").innerHTML = null;
    data.forEach(element => {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.image;
        let title = document.createElement("h3");
        title.innerHTML = element.title;
        let price = document.createElement("h4");
        price.innerHTML = "Price :" + element.price;
        let was = document.createElement("h5");
        was.innerHTML = "Old Price :" + element.was;
        let rating = document.createElement("h5");
        rating.innerHTML = "Rating :" + element.rating;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.setAttribute("id", "btn")
        btn.addEventListener("click", function () {
            addToCart(element);
        })

        div.append(image, title, price, was, rating, btn);
        document.getElementById("box2").append(div);

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
    document.getElementById("b4_2").innerHTML = null;
    data.forEach(element => {
        let div2 = document.createElement("div");
        let image2 = document.createElement("img");
        image2.src = element.image;
        image2.setAttribute("id", "slideImg")
        let span = document.createElement("h3");
        span.innerHTML = element.span;
        let details = document.createElement("h4");
        details.innerHTML = element.details;

        let btn2 = document.createElement("button");
        btn2.innerText = "VIEW";
        btn2.setAttribute("id", "btn")
        btn2.addEventListener("click", function () {
            alert("page is unavailable")
        })

        div2.append(image2, span, details, btn2);
        document.getElementById("b4_2").append(div2);

    });

}
