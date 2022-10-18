
    //account
    var x = document.getElementById("Account_DropDown");
    x.style.display = "none";
    function showDiv() {
        if (x.style.display == "none") {
            x.style.transition = "2.2s";
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


    //menu
    var y = document.getElementById("menuBox");
    y.style.display = "none";
    function showMenu() {
        if (y.style.display == "none") {
            y.style.transition = "2.2s";
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    }