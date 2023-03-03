
 let data = document.getElementById("i-box");
let img=document.getElementById("nature-image")
let submit = document.getElementById("submit");
function handleSubmit() {
   img.src = `https://source.unsplash.com/900x900?${data.value}`;
   submit.style.visibility ="hidden"
}

function handleRefresh(){
    localStorage.setItem("data",data.value)
    localStorage.setItem("isRefresh","true")
    window.location.reload();
   
}


if(localStorage.getItem("isRefresh") === "true" &&  localStorage.getItem("data").length >0) {
    img.src = `https://source.unsplash.com/900x900?${localStorage.getItem("data")}`;
    data.value =  localStorage.getItem("data")
    localStorage.setItem("isRefresh","false")
    submit.style.visibility ="hidden"
}