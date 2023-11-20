let code = document.querySelector(".code");
let img = document.getElementById("img");
let inp = document.getElementById("inp");

function generate(){

    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + inp.value;
    code.classList.add("active");

}