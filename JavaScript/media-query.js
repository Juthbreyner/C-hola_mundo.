let burguer = document.querySelector(".burguer");
let menu1 = document.getElementById("menu1");

burguer.addEventListener("click", function(){
    if (menu1.classList.contains("menu-media-hidden")) {
        menu1.classList.add("menu-media-visible");
        menu1.classList.remove("menu-media-hidden");
    } else if(menu1.classList.contains("menu-media-visible")) {
        menu1.classList.add("menu-media-hidden");
        menu1.classList.remove("menu-media-visible");
    }
});