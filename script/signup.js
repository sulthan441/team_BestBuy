import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

document.querySelector("#login-signup-navbar").innerHTML=navbar();
document.querySelector("#login-footer").innerHTML=footer();


const user=JSON.parse(localStorage.getItem('user'))||[];





document.querySelector(".signup-btn").addEventListener('click',()=>{
    event.preventDefault();
    console.log("clicked")
    let obj={
        firstName:document.querySelector(".firstName").value,
        lastName:document.querySelector(".lastName").value,
        email:document.querySelector(".email").value,
        password:document.querySelector(".password").value,
        repeatpassword:document.querySelector(".repeatPassword").value,
        mobileNumber:document.querySelector(".mobileNumber").value
    }
    console.log(obj)
    
    if(obj.firstName.length<3)
    {
        alert("First Name Invalid")
    }
    else if(obj.lastName<2)
    {
        alert("Last Name Invalid")
    }
    else if(obj.email==null)
    {
        alert("Email Invalid")
    }
    else if(obj.password.length<6){
        alert("Password must be of length 6 or more")
    }
    else if(obj.password!=obj.repeatpassword ){
        alert("Password Mis-match re-enter Your Password")
    }
    else{
        user.push(obj);
        localStorage.setItem('user',JSON.stringify(user));
        alert("Account Created Succesfully")
        console.log(user)
        window.location.href="../login.html"
    }
})