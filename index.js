let img=document.getElementById("nature-image")
function ok() {
    let valo = document.getElementById("i-box").value;
   img.src = `https://source.unsplash.com/900x900?${valo}`;
}

let submit = document.getElementsByClassName("submit");
submit.addEventListener('click', ok);