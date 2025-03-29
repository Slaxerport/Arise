// history.scrollRestoration = 'manual';

let url = location.href;
if(url.includes('#')) location.href = url.replace(url.substring(url.indexOf('#')), '');

let rightColumnInfo = document.getElementById("right-column-info");
let objectImage = rightColumnInfo.children[0].children[0];
let objectName = rightColumnInfo.children[1];
let objectAddress = rightColumnInfo.children[2];
let objectDescription = rightColumnInfo.children[3];


let objectsImages = ["1O9A5005-kopiya.jpg", "orig.jpg"];
let objectsAddresses = ["ул. Артиллеристов, 15"];
let objectsNames = ["Гимназия №74", "Ipsum"];
let objectsDescriptions = ["Среднее учебное заведение в Октябрьском районе Минска (Республика Беларусь).", "Quia, fugit vero. Dignissimos excepturi error illo iure, distinctio nobis, odio fuga omnis sapiente sint, repudiandae iusto exercitationem nam impedit."];

ymaps.ready(() => {
    let ObjectManager = new ymaps.ObjectManager();
    let map = new ymaps.Map("map", {
        center: [53.859073, 27.537973],
        zoom: 15,
    });
    let mapObjects = [
        new ymaps.Placemark([53.884117, 27.558688],{
        },{preset: 'islands#redStretchyIcon'}), 
    ]
    for(let i = 0; i<mapObjects.length;i++){
        mapObjects[i].events.add('click', function(){
          objectImage.setAttribute("src", "images\\".concat(objectsImages[i]));
          objectName.innerText = objectsNames[i];
          objectAddress.innerText = objectsAddresses[i];
          objectDescription.innerText = objectsDescriptions[i];
          rightColumnInfo.style.visibility = "visible";
          rightColumnInfo.style.transform = "translateX(0)";
        });
    }
    function initObjects(){
        for(let i = 0; i<mapObjects.length; i++){
            map.geoObjects.add(mapObjects[i]);
        }   
    }
    initObjects();
});


document.getElementById("close-button").addEventListener('click', function(){
    rightColumnInfo.setAttribute('style', 'transform: translateX(50vw) !important');

});

$(document).ready(function(){
    $('#portfolios').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        
      });
    $('#places').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
      });
});

document.getElementById("link").addEventListener("click", function(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScovH4g8Yxxi3QcU0fqoTv_GEGZRaqVOCIHJ6smQGVkDg_BZQ/viewform?usp=header", "_blank");
})











