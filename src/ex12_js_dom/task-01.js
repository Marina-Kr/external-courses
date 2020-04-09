window.onload = function() {
 let images = document.querySelectorAll('.images img');
 let i = 0
 
 document.getElementById('prev').onclick = function() {
  images[i].className = 'inactive';
  i--;
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].className = 'active';  
 }
 
 document.getElementById('next').onclick = function() {
  images[i].className = 'inactive';
  i++;
  if(i >= images.length) {
   i = 0;
  }
  images[i].className = 'active';
 }
}

moduleExport=window.onload
