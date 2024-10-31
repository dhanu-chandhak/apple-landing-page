const wrapper = document.querySelector(".wrapper")
const carousel = document.querySelector(".carousel")
const images = document.querySelectorAll(".carousel>img")
const buttons = document.querySelectorAll(".btnDiv>button")

const hamburgerBtn = document.getElementById('hamburger')
const resposiveNav = document.getElementById('resposiveNav')
const closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener('click', () => { resposiveNav.style.display = 'none' })
hamburgerBtn.addEventListener('click', () => { resposiveNav.style.display = 'block' })

let imageIndex = 1,
    intervalId;
let lastbtnIndex = -1

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 3000);
};
autoSlide();

const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex * images[0].width}px)`;
    buttons[imageIndex - 1].style.backgroundColor = 'black'
    if (lastbtnIndex >= 0) {
        buttons[lastbtnIndex].style.backgroundColor = 'lightgray'
    }
    lastbtnIndex = imageIndex - 1
};

const updateClick = (e) => {
    imageIndex = e.target.dataset.index;
    slideImage(imageIndex);
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);