let images = [{
    src: "images/rostov_on_don.png"
},
{
    src: "images/sochi.png"
},
{
    src: "images/rostov-patriotic.png"
}];


function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".image-slider");
    let sliderArrows = document.querySelector(".completed__switch");
    let sliderDots = document.querySelector(".completed__switch-dot");
    let sliderAddress = document.querySelector(".completed__list");

    initImages();
    initArrows();
    initDots();
    initAddress();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image: url(${images[index].src});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initAddress() {
        sliderAddress.querySelectorAll(".completed__item").forEach((item, index) => {
            item.addEventListener("click", function() {
                moveSlider(index);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".active").classList.remove("active");
                this.classList.add("active");
            });
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderAddress.querySelector(".active")?.classList.remove("active");

        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderAddress.querySelectorAll(".completed__item")[num].classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);

