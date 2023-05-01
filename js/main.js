window.addEventListener("load", ()=>{
    let loader = document.getElementById("loader");
    
    if(document.readyState == "complete"){
        // loader.offsetHeight = n
        loader.style.display = "none";
    }
});


let contact = document.getElementById("contact-section");
let about = document.getElementById("about-section");


function openContactSection(){
    contact.style.display = "block";
}

function closeContactSection(){
    contact.style.display = "none";
}

function openAboutSection(){
    about.style.display = "flex";
}

function closeAboutSection(){
    about.style.display = "none";
}