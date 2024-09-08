let galleryImagesArray= document.querySelectorAll(".imageGallery img");
let lightBoxImg=document.querySelector(".lightboxImage");
let lightBox= document.querySelector(".lightbox");
let closeBtn= document.querySelector(".close");
let prevBtn= document.querySelector(".prev");
let nextBtn= document.querySelector(".next");

let currentIndex = 0;

galleryImagesArray.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex=index;
        displayImage(img.src);
    });
});

closeBtn.addEventListener("click",()=>{
    lightBox.style.display="none";
});

prevBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex>0) ? currentIndex-1 : galleryImagesArray.length-1;
    displayImage(galleryImagesArray[currentIndex].src);
})

nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex<(galleryImagesArray.length-1) ? currentIndex+1:0);
    displayImage(galleryImagesArray[currentIndex].src);

});

function displayImage(src){
    lightBoxImg.src=src;
    lightBox.style.display="flex";
}