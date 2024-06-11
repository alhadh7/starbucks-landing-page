let currentSlide= 0;

function prevSlide(){
if(currentSlide>0){
currentSlide--;
updateSlider();
}
}

function nextSlide(){
const slides=document.querySelectorAll(".slide");
if(currentSlide < slides.length-3){
    currentSlide++
    updateSlider();
}
}

function updateSlider(){
const slides=document.querySelectorAll(".slide")
for(i=0;i<slides.length;i++)
{
if(i>currentSlide && i<currentSlide+3)
{
slides.style.display= "block"
}
else{
slides.style.display ="none"
}
}
}