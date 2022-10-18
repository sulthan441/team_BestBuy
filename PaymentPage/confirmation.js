var ar = JSON.parse(localStorage.getItem("arr")) || [];
console.log(ar);
ar.map((elem) => {
  const flexDiv = document.createElement("div");
  const imgTag = document.createElement("img");
  imgTag.src = elem.img_url;

  flexDiv.append(imgTag);
  document.getElementById("placeOrder").append(flexDiv);
});
