var sliderArr1 = [

    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "SONY - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331591_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class A9G MASTER Series OLED 4K UHD Smart Android TV",
        rating: "4.7",
        price: "$2,299"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401199_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class A8H Series OLED 4K UHD Smart Android TV",
        rating: "5.0",
        price: "$1,899"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455215_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.8",
        price: "$2,999"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401206_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 65 Class X950H Series LED 4K UHD Smart Android TV",
        rating: "4.9",
        price: "$1,424"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476246cv21d.jpg;maxHeight=272;maxWidth=400",
        name: "Samsung - 70 Class TU6985 4K Crystal UHD Smart Tizen TV",
        rating: "4.5",
        price: "$599"
    },

    

]
let sliderArr2 = [

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450480_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331597_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 65 Class A9G MASTER Series OLED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$2,999"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459302_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455217_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV",
        rating: "4.5",
        price: "$1,699"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401718_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Samsung - 65 Class 8 Series LED 4K UHD Smart Tizen TV",
        rating: "4.9",
        price: "$749"
    },

  

]

function display() {

    let productBox = document.getElementById('aProducts');

        sliderArr1.forEach((el) =>{

            // console.log(el.name);

            let nm = el.name;
            let img = el.img;
            let rating = el.rating;
            let price = el.price;

            let Div = document.createElement("div");
            Div.style.margin = "10% 0 0 2% "
            // Div.style.transition = "1s linear"

                let imgDiv = document.createElement("div");
                imgDiv.style.height = "55%"
                    let img1 = document.createElement('img');
                    img1.src = img;
                    img1.style.width = "90%";

                imgDiv.append(img1);
                
                let nmDiv = document.createElement("div");
                nmDiv.textContent = nm;
                nmDiv.style.width = "85%"
                nmDiv.style.fontSize = ".78vw"
                nmDiv.style.color = "#0457c8"
                nmDiv.style.lineHeight = "17px"
                nmDiv.style.height = "55px"

                let ratDiv = document.createElement("div");
                ratDiv.textContent = "Ratings: " + rating;
                ratDiv.style.fontSize = ".8vw"
                ratDiv.style.height = "20px"
            ratDiv.style.color = "#ffce00"

                let priceDiv = document.createElement("div");
                priceDiv.textContent = price;
                priceDiv.style.fontSize = "1vw";
                priceDiv.style.fontWeight = "600"

            Div.append(imgDiv,nmDiv,ratDiv,priceDiv);

            productBox.append(Div)
        })

}

display()

let rightArrow = document.getElementById("rightA");
rightArrow.addEventListener("click", forward);

function forward() {

    let productBox = document.getElementById('aProducts');
    productBox.textContent = null;

    sliderArr2.forEach((el) => {

        // console.log(el.name);

        let nm = el.name;
        let img = el.img;
        let rating = el.rating;
        let price = el.price;

        let Div = document.createElement("div");
        Div.style.margin = "10% 0 0 2% "

        let imgDiv = document.createElement("div");
        imgDiv.style.height = "55%"
        let img1 = document.createElement('img');
        img1.src = img;
        img1.style.width = "90%";

        imgDiv.append(img1);

        let nmDiv = document.createElement("div");
        nmDiv.textContent = nm;
        nmDiv.style.width = "85%"
        nmDiv.style.fontSize = ".78vw"
        nmDiv.style.color = "#0457c8"
        nmDiv.style.lineHeight = "17px"
        nmDiv.style.height = "55px"

        let ratDiv = document.createElement("div");
        ratDiv.textContent = "Ratings: " + rating;
        ratDiv.style.fontSize = ".8vw"
        ratDiv.style.height = "20px"
        ratDiv.style.color = "#ffce00"

        let priceDiv = document.createElement("div");
        priceDiv.textContent = price;
        priceDiv.style.fontSize = "1vw";
        priceDiv.style.fontWeight = "600"

        Div.append(imgDiv, nmDiv, ratDiv, priceDiv);

        productBox.append(Div)
    })

}


let leftArrow = document.getElementById("leftA");
leftArrow.addEventListener("click", backward);

function backward() {

    let productBox = document.getElementById('aProducts');

    productBox.textContent = null;
    sliderArr1.forEach((el) => {

        // console.log(el.name);

        let nm = el.name;
        let img = el.img;
        let rating = el.rating;
        let price = el.price;

        let Div = document.createElement("div");
        Div.style.margin = "10% 0 0 2% "

        let imgDiv = document.createElement("div");
        imgDiv.style.height = "55%"
        
        let img1 = document.createElement('img');
        img1.src = img;
        // img1.style.margin = " 0 0 0 10%"
        img1.style.width = "90%";

        imgDiv.append(img1);

        let nmDiv = document.createElement("div");
        nmDiv.textContent = nm;
        nmDiv.style.width = "85%"
        nmDiv.style.fontSize = ".78vw"
        nmDiv.style.color = "#0457c8"
        nmDiv.style.lineHeight = "17px"
        nmDiv.style.height = "55px"

        let ratDiv = document.createElement("div");
        ratDiv.textContent = "Ratings: " + rating;
        ratDiv.style.fontSize = ".8vw"
        ratDiv.style.height = "20px"
        ratDiv.style.color = "#ffce00"

        let priceDiv = document.createElement("div");
        priceDiv.textContent = price;
        priceDiv.style.fontSize = "1vw";
        priceDiv.style.fontWeight = "600"

        Div.append(imgDiv, nmDiv, ratDiv, priceDiv);

        productBox.append(Div)
    })

}
backward()














// searchRes=>

let totalDBArr = [];

TvDataBase.forEach((el) => {
    totalDBArr.push(el);
})

gameDataBase.forEach((el) => {
    var sid = 0;

    totalDBArr.forEach((p) => {

        if (el.name == p.name) {
            sid++;
        }
    })

    if (sid == 0) {
        totalDBArr.push(el);

    }

})



laptopDataBase.forEach((el) => {

    var patil = 0;

    totalDBArr.forEach((p) => {

        if (el.name == p.name) {
            patil++;
        }
    })

    if (patil == 0) {
        totalDBArr.push(el);
    }


})
// console.log(totalDBArr)

if (localStorage.getItem("totalData") == null) {
    localStorage.setItem("totalData", JSON.stringify([]));
}

// let totArr = JSON.parse(localStorage.getItem("totalData"));

localStorage.setItem("totalData", JSON.stringify(totalDBArr));


// console.log(totalDBArr)
let searchResD = document.getElementById("searchRes")

// totalDBArr.forEach((el)=>{
//     console.log(el.name);
// })

setInterval(searchInp, 1000)
function searchInp() {
    let inpt = document.getElementById("inp").value.toUpperCase();

    searchResD.innerHTML = null;


    totalDBArr.forEach((el) => {

        // console.log(el.name);

        let spName = el.name.split(" ");

        // console.log(spName);

        for (var i = 0; i < spName.length; i++) {

            if (spName[i] == inpt) {

                appSearchProd(el);


            }
        }

    })

    if (inpt != " ") {
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "block";
    }
    if (inpt == "") {
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "none";
    }
    // console.log(inpt)

}

function appSearchProd(el) {
    // console.log(el);

    // searchResD.innerHTML = null;

    let Div = document.createElement("div");
    Div.style.height = "80px";
    Div.style.margin = "2% 3% 0 3%"
    Div.style.display = "grid";
    Div.style.gridTemplateColumns = "30% 50% 20%"


    let imgDiv = document.createElement("div");
    imgDiv.style.width = "100%"
    imgDiv.style.height = "100%"

    let img = document.createElement("img");
    img.style.width = "80%"
    img.style.height = "90%"
    img.src = el.image

    imgDiv.append(img);

    let nameDiv = document.createElement("div");
    nameDiv.textContent = el.name;
    nameDiv.style.fontSize = ".85vw"
    nameDiv.style.paddingLeft = "1%"
    nameDiv.style.paddingTop = "2%"
    nameDiv.addEventListener("click", () => {
        goTpd(el);
    })


    let priceD = document.createElement("div");
    priceD.textContent = "$" + el.price;
    priceD.style.padding = "5% 0 0 55%"
    priceD.style.fontWeight = "600"
    priceD.style.fontSize = ".85vw"



    Div.append(imgDiv, nameDiv, priceD);

    searchResD.append(Div);

}

function goTpd(el) {

    if (localStorage.getItem("prodDesc") == null) {
        localStorage.setItem("prodDesc", JSON.stringify([]))
    }

    localStorage.setItem("prodDesc", JSON.stringify([]));

    let pDArr = JSON.parse(localStorage.getItem("prodDesc"));


    pDArr.push(el);

    localStorage.setItem("prodDesc", JSON.stringify(pDArr));
 
    window.location.href = "productDescPage.html"

}
