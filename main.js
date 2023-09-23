const button = document.getElementById("leftButton");
const buttonTwo = document.getElementById("rightButton");
    
    button.onclick = () => {
    document.getElementById("mainGallery").scrollLeft += 250;
    
 };
    buttonTwo.onclick = () => {
    document.getElementById("mainGallery").scrollLeft -= 250;
    
 };
