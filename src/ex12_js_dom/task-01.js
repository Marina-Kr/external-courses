function slider(images) {
 let i = 0
  document.querySelector('.images .active').src = images[0].src;
 
 document.getElementById('prev').onclick = function() {
  let currentImage = document.querySelector('.images .active');
  let prevImage = document.querySelector('.images  .inactive');
  if(i <= 0) {
    i = images.length;
   }
   prevImage.src = images[i-1].src;
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
  nextImage.src = images[i+1].src
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
 
 function getImages(n){
  for (var image, array = [], i = 1; i <= n; i++ ){
    image = new Image;
	if (i<10) {
	  image.src = "asset/cat0" + i + ".jpg";}
	  else image.src = "asset/cat" + i + ".jpg";
   array.push(image);
  };
  return array;
};

slider(getImages(5));