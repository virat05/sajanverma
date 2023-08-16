//  creating a responshive navbar 
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector('.header');
mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle('active');
})

const heroSection = document.querySelector('.section-biodata');

// portfolio section start 

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
})

// portfolio section end  











/* <!-- Our testimonial section start   -->   */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },





});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width: 650px)");
myJsmedia(widthSize);
widthSize.addEventListener("change", myJsmedia);


/* <!-- Our testimonial section end    -->   */
// scrolltotop 


const footerElem = document.querySelector('.footer-section')
const scroolElement = document.createElement('div');
scroolElement.classList.add('scrollTop-style');
scroolElement.innerHTML = `<ion-icon name="arrow-round-up" class="scroll-top"></ion-icon>`;

footerElem.after(scroolElement);
const scrollTop = () => {

  heroSection.scrollIntoView({ behavior: "smooth" })
}
scroolElement.addEventListener('click', scrollTop)


//  scroll to top end 



// animate numbers 



const workSection =  document.querySelector('.section-work-data');
 const workObserver = new IntersectionObserver ((entries, observer) => {
  const [entry] = entries ;
  console.log(entry); 

 if (!entry.isIntersecting) return;
 const counterNum = document.querySelectorAll(".counters-numbers");
const speed = 200;
counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const intialNum = parseInt(curElem.innerText);
    // console.log(intialNum); 
    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber); 
    if (intialNum < targetNumber) {
      curElem.innerHTML = `${intialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);

    }
  }
  updateNumber();
})
observer.unobserve(workSection);
 }, {
  root:null, 
  threshold:0, 

})
workObserver.observe(workSection);

// animated number end 




// craeteing navbar section and 

// sticky navbar start 


const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  console.log(ent);
  !ent.isIntersecting
    ?
    document.body.classList.add('sctiky')
    : document.body.classList.remove('sctiky');
}, {
  root: null,
  threshold: 0
});
observer.observe(heroSection);

// sctiky navbar end 






























