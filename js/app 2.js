
const navSlide = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav-links');
  
menu.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');
});
//animate links
}
navSlide();

AOS.init({
  duration: 1200,
});
document.onmousemove = function (e) {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
};

function myFunction(x) {
  x.classList.toggle("change");
}
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});


  var elem = document.querySelector(".main-carousel");
			var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
				contain: true,
			});

			// element argument can be a selector string
			//   for an individual element
			var flkty = new Flickity(".main-carousel", {
    // options
  });
