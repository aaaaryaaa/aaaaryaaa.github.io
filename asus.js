//grab button
const btn =  document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//event listener for button
btn.addEventListener('click', ()=>{
    menu.classList.toggle("hidden")
});

//image carousel
var i = 0;
var images = [];
var time = 20000;

//image list
images[0] = 'asus1.jpg';
images[1] = 'asus4.jpg';
images[2] = 'asus5.jpg';

//get buttons
const btn1 = document.querySelector('.btn-car-1');
const btn2 = document.querySelector('.btn-car-2');
const btn3 = document.querySelector('.btn-car-3');

//function to display img
function displayimg(src){
    var img = document.createElement("img");
    img.id = "imageid";
    img.src = src;
    img.style.marginleft = "auto";
    img.style.marginRight = "auto";
    function myFunction(x) {
        if (x.matches) {
            img.width = 1000;
            img.height = 600;
        } else {
            img.width = 380;
            img.height = 600;
        }
      }
      
      var x = window.matchMedia("(min-width: 700px)")
      myFunction(x) 
      x.addListener(myFunction)
    document.querySelector(".img-car").appendChild(img);
}

//auto slider
function autoslide(){
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    displayimg(images[i]);
    setTimeout("autoslide()", time);
    setTimeout(() => {
        const imageid = document.getElementById("imageid");
        imageid.remove();
    }, time);
}

//window.onload = autoslide
autoslide();

//function => based on button pressed
btn1.addEventListener("click", () => {
    displayimg(images[0])
    const imageid = document.getElementById("imageid")
    imageid.remove();
});
btn2.addEventListener("click", () => {
    displayimg(images[1])
    const imageid = document.getElementById("imageid")
    imageid.remove();
});
btn3.addEventListener("click", () => {
    displayimg(images[2])
    const imageid = document.getElementById("imageid")
    imageid.remove();
});

//features box buttons
const btnbox1 = document.querySelectorAll('.btn-box-1')

//features box images
var imagesbox1 = [];
imagesbox1[0] = 'asusgraphicscard.jpg'
imagesbox1[1] = 'asusmotherboard.jpg'
imagesbox1[2] = 'asuskeyboard.jpg'
imagesbox1[3] = 'asusmice.jpg'
imagesbox1[4] = 'asuslaptop.jpg'
imagesbox1[5] = 'asusheadest.jpg'
imagesbox1[6] = 'asuscasefans.jpg'
imagesbox1[7] = 'asusmonitors.jpg'
imagesbox1[8] = 'asusrouters.jpg'
imagesbox1[9] = 'asuscases.jpg'

//to display images
function displayboximg(src){
    var boximg = document.createElement("img")
    boximg.id = "boximg";
    boximg.src = src;
    //boximg.width = 1600;
    //boximg.height = 900;
    boximg.style.marginLeft = "auto";
    boximg.style.marginRight = "auto";
    function myFunction(x) {
        if (x.matches) {
            boximg.width = 1600;
            boximg.height = 900;
        } else {
            boximg.width = 600;
            boximg.height = 600;
        }
      }
      
      var x = window.matchMedia("(min-width: 700px)")
      myFunction(x) 
      x.addListener(myFunction)
    document.querySelector(".box-3").appendChild(boximg);
}
displayboximg(imagesbox1[0]);

//buton pressing function
for (let i = 0; i < btnbox1.length; i++) {
    btnbox1[i].addEventListener("click", () => {
        displayboximg(imagesbox1[i]);
        const boximageid = document.getElementById("boximg")
        boximageid.remove();
    })
}

//login/signup popup
function openForm1() {
   document.querySelector(".form-popup1").style.display = "block";
 }
 
 function closeForm1() {
   document.querySelector(".form-popup1").style.display = "none";
 }

function openForm2(){
   document.querySelector(".form-popup2").style.display = "block";
 }
 
 function closeForm2() {
   document.querySelector(".form-popup2").style.display = "none";
}

//login signup popup mini
function openForm1mini() {
   document.querySelector(".form-popup1mini").style.display = "block";
 }
 
 function closeForm1mini() {
   document.querySelector(".form-popup1mini").style.display = "none";
}

function openForm2mini(){
    document.querySelector(".form-popup2mini").style.display = "block";
  }
  
  function closeForm2mini() {
    document.querySelector(".form-popup2mini").style.display = "none";
 }