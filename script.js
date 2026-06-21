const images = [
"images/image1.jpeg",
"images/image2.jpeg",
"images/image3.jpeg",
"images/image4.jpeg",
"images/image5.jpeg"
];

let currentIndex = 0;

function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){
    currentIndex += step;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}