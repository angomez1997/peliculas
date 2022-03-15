

var imagen1 = 1;
displayimg(imagen1);

function nextimg(n){
    displayimg(imagen1 += 1);
}



function currentSlide(n){
    displayimg(imagen1 = n);
} 
function displayimg(n){
    var i;
    var image = document.getElementsByClassName("images");
    var dots = document.getElementsByClassName("dot");
    
    if(n > image.length){imagen1 = 1}
    if(n < 1){imagen1 = image.length}
    for(i=0; i < image.length; i++){
        image[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    image[imagen1 - 1].style.display = "block";
    dots[imagen1 - 1].className += "active";
       
       
    

}

