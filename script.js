let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

next.addEventListener("click", function() {
    let item = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(item[0]);
})

previous.addEventListener("click", function(){
    let item = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(item[item.length-1]);
})