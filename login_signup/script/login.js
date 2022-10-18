import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

document.querySelector("#login-signup-navbar").innerHTML=navbar();
document.querySelector("#login-footer").innerHTML=footer();

let data=JSON.parse(localStorage.getItem('user')) || [];
// console.log(data);
let flag=0;
document.querySelector(".login-btn").addEventListener('click',()=>{
    console.log(data);
    let c=check(data);
    if(flag===1){
        alert("Login Successfully");
        location.href="./index.html"
    }
    else{
        alert("Invalid Email or Create an account");
    }
})

const check=(data)=>{
    let email=document.querySelector(".email").value;
    let password=document.querySelector(".password").value;
    data.forEach(el => {
        if(email===el.email && password===el.password){
            console.log("checked")
            flag=1;
            return true
        }
    });
}

