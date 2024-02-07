const port_btn = document.querySelector(".port-btn");
const p_btn = document.querySelectorAll(".p-btn");
const p_img = document.querySelectorAll(".img-2");
port_btn.addEventListener("click", (e) =>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked)
});
//swiper section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


const number = document.querySelector("number");
const speed = 100;
number.forEach(element => {
  update = () =>{
    const targetNumber = (countNum.dataset.number);
  }
});