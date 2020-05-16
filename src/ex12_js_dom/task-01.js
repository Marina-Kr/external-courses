function slider(images) {
 let i = 0
 const firstImage = document.querySelector('.images .active');
 firstImage.src = images[0];
 firstImage.alt = "cat's picture № 1";
 
 document.getElementById('prev').onclick = function() {
  let currentImage = document.querySelector('.images .active');
  let prevImage = document.querySelector('.images  .inactive');
  if(i <= 0) {
    i = images.length;
   }
   prevImage.src = images[i-1]
   prevImage.alt = `cat's picture № ${i}`;
   prevImage.className = "active";
   currentImage.className = "inactive"
   i--;
 }
 
 document.getElementById('next').onclick = function() {
  let currentImage = document.querySelector('.images .active');
  let nextImage = document.querySelector('.images  .inactive');
   if(i >= images.length-1) {
     i = -1;
   }
  nextImage.src = images[i+1]
  nextImage.alt = `cat's picture № ${i+2}`;
  nextImage.className = "active";
  currentImage.className = "inactive";
  i++;
 }
 
  window.addEventListener('keydown', function(e) {
   if ((e.key)==="ArrowRight") {
      document.getElementById('next').onclick()};
   if ((e.key)==="ArrowLeft") {
      document.getElementById('prev').onclick()};
  });
  }
 
const images = ["asset/1.jpg", "asset/2.jpg", "asset/3.jpg", "asset/4.jpg", "asset/5.jpg"];
slider(images);