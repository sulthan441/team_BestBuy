import navbar from "../navbar_page/navbar_export/navbar_export.js"
document.querySelector("#navbarLink").innerHTML=navbar();
let hamb = document.getElementById("menuDiv")
hamb.addEventListener("click",showMenuBox);

var c = 0;
function showMenuBox(){
    // alert()
   

    let menuBox = document.getElementById("menuBox");

    if(c % 2 == 0){
        menuBox.style.display = "block";
        let close = document.getElementById("change")

        close.textContent = "close";
        close.style.transition = "1s linear"
    }
    
    if(c % 2 == 1){
        menuBox.style.display = "none";
        

        let close = document.getElementById("change")

        close.textContent = "menu";
        close.style.transition = "1s linear"
    
    }
    c++;
    
}

// ///////showMenuBox()

let outerBox1 = document.getElementById("outerBox1");
outerBox1.addEventListener("click",showNext);
var o = 0;
function showNext(){
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
ap.addEventListener("click",()=>{
    addLaptopData()
    
})

let tv5 = document.getElementById("tv");
tv5.addEventListener("click",()=>{
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

//linking of pages
document.querySelector("#checkout-btn").addEventListener('click',()=>{
    window.location.href = "../PaymentPage/payment.html";
});

document.querySelector("#PP-btn").addEventListener('click',()=>{
    window.location.href = "../PaymentPage/payment.html";
});

let cart=JSON.parse(localStorage.getItem("cartProduct")) || [];


cart.forEach(el=> {
    el["quantity"]=1
    
})

const getTotal = () => {
    let sum = 0;
    for(let i = 0; i< cart.length; i++) {
        sum += cart[i].quantity * cart[i].price;
    }
    return sum;

}


localStorage.setItem("cart", JSON.stringify(cart));
let data = JSON.parse(localStorage.getItem("cart")) || [];
display(data);
function display(data) {
    data.forEach(el => {
        let parent_div = document.createElement('div');
        parent_div.setAttribute("id", "item-container");

        
        // product image
        let div1 = document.createElement('div');
        div1.setAttribute("id", "pimage");
        let img = document.createElement('img');
        img.src = el.image;
        div1.append(img);

        // product title
        let div2 = document.createElement('div');
        div2.setAttribute("id", "pname")
        let name = document.createElement('p');
        name.innerHTML = el.name;
        div2.append(name);

        // pickup details
        let div3 = document.createElement('div');
        div3.setAttribute("id", "ppickup")
        div3.innerHTML = `<div style="display: grid; grid-template-columns: 10% 90%; margin: 0px 0px 0px 15%;">
        <input type="radio" name="select" value="1st">
        <div style="font-size: 0.8vw; margin-top: 1%; font-weight: 600;">
            <span>Pickup at <span id="ai">Aiea</span>
            </span>
            </div>
        </div>
        <div style="font-size: 0.7vw; margin: 1% 0px 0px 24%;"><span>Ready for pickup <b> Today </b></span></div>
        <div style="font-size: 0.7vw; margin: 1% 0px 0px 24%;">Eligible for curbside pickup</div>
        <div style="display: grid; grid-template-columns: 10% 90%; margin: 8% 0px 0px 15%;">
            <input type="radio" name="select" value="2nd">
            <div style="font-size: 0.8vw; margin-top: 1%; font-weight: 600;"><span>Shipping to <span
                        id="ai">985121</span> </span></div>
        </div>
        <div style="font-size: 0.7vw; margin: 1% 0px 0px 24%;">Unavailable in this area
        </div>`

        let div4 = document.createElement('div');
        let select = document.createElement('select');
        select.setAttribute("id","item-quantity")
        let options = Array(4).fill(0).map((el, index) => {
            let option = document.createElement('option')
            option.value =index + 1;
            option.innerHTML = index + 1;
            return option
        })
        select.append(...options)
        div4.append(select)

        // product price
        let div5 = document.createElement('div');
        div5.setAttribute("id", "pprice")
        let price = document.createElement('h3')
        price.setAttribute("id", "act-price")
        price.innerHTML = "$"+el.price;
        
        div5.append(price);

        parent_div.append(div1, div2, div3, div4, div5);
        document.querySelector("#product-card").append(parent_div);
        

        select.addEventListener('change',e => {
            let pp=(el.price * +e.target.value)
            price.innerText="$"+pp.toString()

            el.quantity = e.target.value;

            localStorage.setItem('cart', JSON.stringify(cart) )
            
            totalprice(data);
        })

    })
}
totalprice(data);
function totalprice(data){
    console.log(data);
    let total=0;
    let saving=0;
    let was=0;
    data.forEach(el=>{
        total+=parseInt(el.price)*el.quantity;
        was+=parseInt(el.was)*el.quantity;

    })
    document.querySelector("#totalOP").innerHTML="$"+was;
    document.querySelector("#totalSaving").innerHTML="$"+(was-total);

    document.querySelector("#cart-total").innerHTML="$"+total;
}






