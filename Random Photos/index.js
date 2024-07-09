const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

// const imageNum = 10;

btnEl.addEventListener("click", ()=> {
    imageNum = 10;
    addNewImages();
});

function addNewImages(){
    for (let index = 0; index < imageNum; index++){
        const newImgEl = document.createElement("img")
        newImgEl.src=`./images/?random=${Math.floor(
            Math.random() * 2000
        )}`;
        imageContainerEl.appendChild(newImgEl);
    }   
}
// https://picsum.photos/300?

