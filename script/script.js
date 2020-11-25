const imgMain = document.querySelector(".img-slider img");
const imgItem = document.querySelectorAll(".img-item img");
const imgSlider = document.querySelector(".img-slider");
const closeBtn = document.querySelector(".slider-close i");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
let imgItemNum = imgItem.length;

imgItem.forEach(function (img, index) {
  imgItem[index].addEventListener("click", function () {
    imgSlider.style.display = "block";
    imgMain.src = imgItem[index].src;
    closeBtn.addEventListener("click", function () {
      imgSlider.style.display = "none";
    });
    nextBtn.addEventListener("click", function () {
      index++;
      if (index >= imgItemNum) {
        index = 0;
      }
      imgMain.src = imgItem[index].src;
    });
    prevBtn.addEventListener("click", function () {
      index--;
      if (index <= 0) {
        index = imgItemNum - 1;
      }
      imgMain.src = imgItem[index].src;
    });
  });
});
