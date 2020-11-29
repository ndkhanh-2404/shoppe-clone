const title = [
  "Áo phông nam ngắn tay 360 BOUTIQUE in hình và chữ cá tính - APHTK043",
  "Quần jeans nam 360 BOUTIQUE dáng dài rách gối - QJDTK012 & TK008#",
  "Áo phông nam 360 BOUTIQUE trơn màu ngắn tay - APHTK058",
  "Áo polo nam 360 BOUTIQUE ngắn tay có cổ - APLTK020",
  "Điện thoại Xiaomi Redmi Note 9S 4GB/64GB - Hàng chính hãng - Bảo hành điện tử 18 tháng",
  "Điện thoại OPPO A37 Fullbox Mới - 2GB/16GB - Bảo hành 12 tháng",
  "Điện thoại Nokia 1280 Nguyên zin Mới tinh chính hãng",
  "điện thoại nokia 110i nghe gọi to rõ kèm pin sạc chính hãng",
  "Kẹp tóc kiểu dáng hìlàm từ acrylic",
  "Dây Chuyền Hợp Kim Mặt Hình Trái Tim Xinh Xắn",
  "Hình Xăm Dán Tạm Thời Chống Nước",
  "Dây Chuyền Nữ Mặt Bươm Bướm Thời Trang Hàn",
];

const price = [444, 333, 222, 111, 444, 333, 222, 111, 444, 333, 222, 111];

let total = 0;

const h4Main = document.querySelector("#h4-slider");
const h2Main = document.querySelector("#h2-slider span");
const imgMain = document.querySelector(".img-slider img");
const imgItem = document.querySelectorAll(".img-item img");
const imgSlider = document.querySelector(".img-slider");
const closeBtn = document.querySelector(".slider-close i");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
let imgItemNum = imgItem.length;
let indexItem = 0;

const totalItem = document.querySelector("#total span");

imgItem.forEach(function (img, index) {
  imgItem[index].addEventListener("click", function () {
    imgSlider.style.display = "block";
    h4Main.innerHTML = title[index];
    h2Main.innerHTML = `$${price[index]}`;
    imgMain.src = imgItem[index].src;
    indexItem = index;
    closeBtn.addEventListener("click", function () {
      imgSlider.style.display = "none";
    });
    nextBtn.addEventListener("click", function () {
      index++;
      if (index >= imgItemNum) {
        index = 0;
      }
      h2Main.innerHTML = `$${price[index]}`;
      h4Main.innerHTML = title[index];
      imgMain.src = imgItem[index].src;
      indexItem = index;
    });
    prevBtn.addEventListener("click", function () {
      index--;
      if (index <= 0) {
        index = imgItemNum - 1;
      }
      h2Main.innerHTML = `$${price[index]}`;
      h4Main.innerHTML = title[index];
      imgMain.src = imgItem[index].src;
      indexItem = index;
    });
  });
});

function addToCart() {
  total += price[indexItem];
  console.log(total);
}
function addTotal() {
  totalItem.innerHTML = `$${total}`;
}

function pay() {
  alert("Thanh toán thành công!!!");
  total = 0;
}
